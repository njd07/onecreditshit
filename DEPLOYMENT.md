# Deployment Guide

This guide will help you deploy the AI Health Clinic Bhopal application to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-health-clinic-bhopal)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Fork the repository
4. Add environment variables:
   - `ELEVENLABS_API_KEY`: Your ElevenLabs API key
   - `ELEVENLABS_AGENT_ID`: Your ElevenLabs Agent ID
5. Click "Deploy"

### Option 2: Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/ai-health-clinic-bhopal)

1. Click the "Deploy to Netlify" button above
2. Connect your GitHub account
3. Configure build settings:
   - Build command: `echo "No build required"`
   - Publish directory: `.`
4. Add environment variables in Netlify dashboard
5. Deploy

### Option 3: GitHub Pages

1. Fork this repository
2. Go to repository Settings > Pages
3. Select source: "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Click Save
6. Your site will be available at: `https://yourusername.github.io/ai-health-clinic-bhopal`

**Note**: For GitHub Pages, you'll need to update the API keys directly in the `config.js` file since GitHub Pages doesn't support server-side environment variables.

## 🔧 Manual Deployment

### Prerequisites
- Git installed
- ElevenLabs API key and Agent ID
- Web hosting service account

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-health-clinic-bhopal.git
   cd ai-health-clinic-bhopal
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

3. **Test locally**
   ```bash
   npx serve .
   # Open http://localhost:3000
   ```

4. **Deploy to your hosting provider**
   - Upload all files to your web server
   - Ensure `index.html` is the main file
   - Configure environment variables on your hosting platform

## 🌍 Platform-Specific Instructions

### Vercel
- Supports environment variables
- Automatic HTTPS
- Global CDN
- Perfect for static sites

**Environment Variables Setup:**
1. Go to Vercel Dashboard > Your Project > Settings > Environment Variables
2. Add:
   - `ELEVENLABS_API_KEY`
   - `ELEVENLABS_AGENT_ID`

### Netlify
- Drag and drop deployment
- Form handling
- Edge functions support

**Environment Variables Setup:**
1. Go to Netlify Dashboard > Your Site > Site Settings > Environment Variables
2. Add your variables

### GitHub Pages
- Free hosting for public repositories
- Custom domain support
- Automatic deployment from Git

**Limitations:**
- No server-side environment variables
- Static files only

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### AWS S3 + CloudFront
1. Create S3 bucket
2. Enable static website hosting
3. Upload files
4. Configure CloudFront distribution

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` file to Git
- Use platform-specific environment variable systems
- For client-side apps, consider using build-time variables

### API Keys
- Restrict API key permissions
- Use different keys for development/production
- Monitor API usage

### HTTPS
- Always use HTTPS in production
- Most platforms provide automatic HTTPS
- Configure security headers

## 🐛 Troubleshooting

### Common Issues

1. **Widget not loading**
   - Check API key and Agent ID
   - Verify network connectivity
   - Check browser console for errors

2. **Environment variables not working**
   - Ensure variables are set correctly
   - Restart deployment after adding variables
   - Check variable names match exactly

3. **CORS errors**
   - ElevenLabs should handle CORS automatically
   - Ensure you're using HTTPS in production

4. **Mobile responsiveness issues**
   - Test on various devices
   - Check Tailwind CSS classes
   - Verify viewport meta tag

### Getting Help

1. Check the [main README](README.md)
2. Look at [GitHub Issues](https://github.com/yourusername/ai-health-clinic-bhopal/issues)
3. Create a new issue with:
   - Platform you're deploying to
   - Error messages
   - Steps to reproduce

## 📊 Performance Optimization

### For Production
- Enable gzip compression
- Use CDN for static assets
- Optimize images
- Minify CSS/JS (if needed)
- Enable caching headers

### Monitoring
- Set up error tracking
- Monitor API usage
- Track user interactions
- Monitor performance metrics

---

**Happy Deploying! 🚀**