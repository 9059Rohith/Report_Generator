const Groq = require('groq-sdk');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

exports.generateReport = async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    try {
        // Format the conversation history for the API
        const messages = [
            {
                role: 'system',
                content: 'You are a helpful assistant.'
            },
            // Map your chat history to the format Groq expects
            ...history.map(msg => ({
                role: msg.role === 'model' ? 'assistant' : 'user',
                content: msg.parts
            })),
            {
                role: 'user',
                content: message
            }
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: "llama-3.3-70b-versatile", // <-- UPDATED TO SUPPORTED MODEL
            temperature: 0.7, // Optional: controls randomness
            max_tokens: 4096, // Optional: maximum response length
        });

        const botResponse = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't get a response.";
        res.status(200).json({ success: true, response: botResponse });

    } catch (error) {
        console.error('Error calling Groq API:', error);
        res.status(500).json({ success: false, message: 'Failed to generate response from AI model' });
    }
};