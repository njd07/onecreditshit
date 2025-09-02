// Configuration for AI Health Clinic
// This file handles environment variables and app configuration

class Config {
    constructor() {
        // Try to load from environment variables (for Vercel/production)
        this.elevenLabsApiKey = this.getEnvVar('ELEVENLABS_API_KEY') || 'sk_7f57d02d8b0ff1c8c0aa89b4de6947411266ae60448b5ea0';
        this.elevenLabsAgentId = this.getEnvVar('ELEVENLABS_AGENT_ID') || 'agent_2201k431qr7zen8vang03mb25kdb';
        this.appName = this.getEnvVar('APP_NAME') || 'AI Health Clinic Bhopal';
        this.appVersion = this.getEnvVar('APP_VERSION') || '1.0.0';
    }

    getEnvVar(name) {
        // For client-side, we'll use a different approach
        // In production, these should be set as build-time environment variables
        if (typeof process !== 'undefined' && process.env) {
            return process.env[name];
        }
        
        // For static hosting, we can use a global config object
        if (typeof window !== 'undefined' && window.APP_CONFIG) {
            return window.APP_CONFIG[name];
        }
        
        return null;
    }

    // Getters for easy access
    get apiKey() {
        return this.elevenLabsApiKey;
    }

    get agentId() {
        return this.elevenLabsAgentId;
    }

    get name() {
        return this.appName;
    }

    get version() {
        return this.appVersion;
    }
}

// Export for use in other files
const config = new Config();

// For browser environments
if (typeof window !== 'undefined') {
    window.AppConfig = config;
}

// For Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
}