# AI Health Clinic Bhopal

A modern, AI-powered health consultation platform built with ElevenLabs conversational AI technology.

## 🌟 Features

- **AI Health Consultation**: Interactive voice-based health consultations using ElevenLabs AI
- **Beautiful Interface**: Modern, responsive design with Tailwind CSS
- **Conversation Analysis**: Local AI-powered analysis of patient conversations
- **Dashboard**: Real-time dashboard to track patient interactions and appointments
- **Local Storage**: All data stored locally for privacy and security
- **Mobile Responsive**: Works perfectly on all devices

## 🚀 Live Demo

Visit the live application: [AI Health Clinic Bhopal](https://your-vercel-url.vercel.app)

## 🛠️ Technologies Used

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **AI Integration**: ElevenLabs Conversational AI
- **Deployment**: Vercel/GitHub Pages ready
- **Storage**: LocalStorage for client-side data persistence

## 📋 Prerequisites

- ElevenLabs API key and Agent ID
- Modern web browser with JavaScript enabled

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-health-clinic-bhopal.git
cd ai-health-clinic-bhopal
```

### 2. Configure Environment Variables
Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` and add your ElevenLabs credentials:
```env
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
ELEVENLABS_AGENT_ID=your_agent_id_here
```

### 3. Local Development
Simply open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## 🌐 Deployment

### Deploy to Vercel
1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Add environment variables in Vercel dashboard:
   - `ELEVENLABS_API_KEY`
   - `ELEVENLABS_AGENT_ID`
5. Deploy!

### Deploy to GitHub Pages
1. Fork this repository
2. Go to Settings > Pages
3. Select source: Deploy from a branch
4. Choose `main` branch
5. Your site will be available at `https://yourusername.github.io/ai-health-clinic-bhopal`

## 📁 Project Structure

```
ai-health-clinic-bhopal/
├── index.html              # Main landing page
├── dashboard.html          # Patient dashboard
├── config.js              # Configuration management
├── .env                   # Environment variables (not in git)
├── .env.example           # Environment variables template
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── .kiro/                 # Development specs (optional)
```

## 🎯 Usage

1. **Start Conversation**: Click the microphone button to begin talking with the AI
2. **Health Consultation**: Discuss your symptoms and health concerns
3. **Book Appointments**: Request appointment scheduling during the conversation
4. **Analyze Conversation**: Click "Analyze Conversation" to process and save the discussion
5. **View Dashboard**: Check the dashboard to see all conversation summaries and appointments

## 🔒 Privacy & Security

- All conversation data is stored locally in your browser
- No data is sent to external servers (except ElevenLabs for AI processing)
- API keys are handled securely through environment variables
- No personal data is collected or stored on our servers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ai-health-clinic-bhopal/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about the problem

## 🙏 Acknowledgments

- [ElevenLabs](https://elevenlabs.io/) for the amazing conversational AI technology
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful styling framework
- [Heroicons](https://heroicons.com/) for the icon set

---

**Made with ❤️ for better healthcare accessibility**