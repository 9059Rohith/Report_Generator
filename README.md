# 🧠 AI-Powered Chatbot Report Generator

A full-stack chatbot conversation analysis platform built with React + Vite frontend and Node.js backend. Generate insightful reports from chatbot conversations using Groq API with LLaMA models, featuring secure authentication, real-time analytics, and flexible export options.

## ✨ Features

- 🤖 **AI-Powered Analysis** - Leverages Groq API with LLaMA models for intelligent conversation insights
- 📊 **Comprehensive Reports** - Generate detailed analytics from chatbot conversation
- 🔐 **Secure Authentication** - User authentication and authorization system
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 💬 **Interactive Chat Interface** - Real-time chatbot interaction and testing
- 📁 **Multiple Export Options** - Export reports in various formats (PDF, CSV, JSON)
- 💼 **Enterprise Ready** - Suitable for analytics, research, and business intelligence
- 🐘 **PostgreSQL Database** - Robust data storage with organized models and migrations

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 / Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context / Redux (if applicable)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize / Prisma
- **API**: RESTful architecture
- **Authentication**: JWT / Session-based

### AI & Analytics
- **AI Provider**: Groq API
- **Models**: LLaMA (via Groq)
- **Processing**: Natural Language Processing (NLP)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn package manager
- Groq API key ([Get one here](https://console.groq.com))

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chatbot-report-generator.git
cd chatbot-report-generator
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Backend `.env` Configuration:**
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=chatbot_reports
DB_USER=your_db_username
DB_PASSWORD=your_db_password

# Groq API Configuration
GROQ_API_KEY=your_groq_api_key_here

# JWT Secret (generate a random string)
JWT_SECRET=your_jwt_secret_key

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

**Initialize Database:**
```bash
# Create PostgreSQL database
createdb chatbot_reports

# Run migrations
npm run migrate

# (Optional) Seed database with sample data
npm run seed
```

**Start Backend Server:**
```bash
npm run dev
# Server runs on http://localhost:5000
```

### 3. Frontend Setup

```bash
# Open new terminal and navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Frontend `.env` Configuration:**
```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_GROQ_API_KEY=your_groq_api_key_here
```

**Start Frontend Development Server:**
```bash
npm run dev
# Application runs on http://localhost:5173
```

### 4. Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## 📖 Usage Guide

### 1. **User Authentication**
- Register a new account or login with existing credentials
- Secure JWT-based authentication

### 2. **Chat Interface**
- Test your chatbot in real-time
- View conversation history
- Export chat transcripts

### 3. **Generate Reports**
- Navigate to the Report Page
- Select conversation data to analyze
- Choose analysis type (sentiment, topics, performance)
- Click "Generate Report" to process with AI

### 4. **View Analytics**
- Access comprehensive dashboards
- View visualizations and metrics
- Track trends over time

### 5. **Export Data**
- Download reports in PDF format
- Export raw data as CSV
- API integration for automated exports

## 🏗️ Project Structure

```
chatbot-report-generator/
├── backend/
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── middleware/          # Express middleware
│   ├── models/              # Database models (Sequelize/Prisma)
│   ├── routes/              # API routes
│   ├── node_modules/        # Backend dependencies
│   ├── package.json         # Backend dependencies
│   └── server.js            # Main server file
│
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   │   ├── AboutPage.jsx
│   │   │   ├── AuthPage.jsx
│   │   │   ├── ChatPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── ReportPage.jsx
│   │   ├── services/        # API service functions
│   │   ├── App.jsx          # Main App component
│   │   └── index.css        # Global styles
│   ├── node_modules/        # Frontend dependencies
│   └── package.json         # Frontend dependencies
│
└── README.md                # This file
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Chat
- `GET /api/chat/history` - Get chat history
- `POST /api/chat/message` - Send chat message
- `DELETE /api/chat/:id` - Delete conversation

### Reports
- `GET /api/reports` - Get all reports
- `POST /api/reports/generate` - Generate new report
- `GET /api/reports/:id` - Get specific report
- `DELETE /api/reports/:id` - Delete report
- `GET /api/reports/:id/export` - Export report

## 📊 Report Types

The system can generate various types of analytical reports:

- **Sentiment Analysis** - Understand user emotions and satisfaction levels
- **Topic Extraction** - Identify common themes, issues, and discussion points
- **Performance Metrics** - Analyze response times, resolution rates, and effectiveness
- **User Engagement** - Track conversation patterns, duration, and drop-off points
- **Intent Classification** - Categorize user queries and request types
- **Conversation Flow** - Visualize dialogue paths and decision trees

## 🔧 Available Scripts

### Backend Scripts
```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
npm run migrate      # Run database migrations
npm run seed         # Seed database with sample data
npm test             # Run backend tests
```

### Frontend Scripts
```bash
npm run dev          # Start Vite development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm test             # Run frontend tests
```

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- SQL injection prevention through ORM
- CORS configuration
- Rate limiting on API endpoints
- Input validation and sanitization
- Environment variable protection

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

### Coding Standards
- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed
- Write tests for new features

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
```bash
# Check PostgreSQL is running
sudo service postgresql status

# Verify database credentials in .env file
```

**Port Already in Use**
```bash
# Change PORT in backend/.env to different port
# Update VITE_API_URL in frontend/.env accordingly
```

**Groq API Rate Limits**
- Free tier has usage limits
- Consider upgrading plan for production use
- Implement request queuing for high traffic

## 🗺️ Roadmap

- [x] User authentication system
- [x] Real-time chat interface
- [x] AI-powered report generation
- [x] Export functionality
- [ ] Real-time conversation monitoring dashboard
- [ ] Multi-language support for reports
- [ ] Advanced visualization with Chart.js/D3.js
- [ ] Integration with Slack, Discord, Telegram
- [ ] Custom report templates builder
- [ ] Scheduled automated reports via email
- [ ] WebSocket support for real-time updates
- [ ] Mobile app (React Native)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Support & Contact

For questions, suggestions, or issues:

- **GitHub Issues**: [Create an issue](https://github.com/yourusername/chatbot-report-generator/issues)
- **Email**: your.email@example.com
- **Documentation**: [View Docs](https://docs.yourproject.com)

## 🙏 Acknowledgments

- [Groq](https://groq.com) - For providing ultra-fast LLM inference
- [Hugging Face](https://huggingface.co) - For LLaMA model hosting
- [Vite](https://vitejs.dev) - For blazing fast build tooling
- [PostgreSQL](https://www.postgresql.org) - For robust database support
- The React and Node.js communities

## 📸 Screenshots

> Add screenshots of your application here once available

## 🌟 Show Your Support

If you find this project useful, please consider:
- ⭐ Starring the repository
- 🍴 Forking for your own use
- 📢 Sharing with others
- 💰 Sponsoring the project

---

**Built with ❤️ for better chatbot analytics and insights**

*Made possible by Groq API, React, and the open-source community*



