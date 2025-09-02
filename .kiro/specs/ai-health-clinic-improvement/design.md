# Design Document

## Overview

The AI Health Clinic improvement project will enhance the existing web application by creating a modern, responsive interface that integrates ElevenLabs voice AI while removing dependencies on external APIs like Gemini. The system will consist of three main pages: a landing page with integrated chat functionality, a dashboard for viewing conversation summaries, and improved local conversation analysis.

## Architecture

### System Components
- **Landing Page**: Main interface with ElevenLabs widget integration and conversation display
- **Dashboard Page**: Real-time display of analyzed conversation data
- **Local Analysis Engine**: Client-side conversation parsing and analysis
- **Data Storage**: Local storage or simple JSON-based persistence for conversation summaries

### Technology Stack
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Voice AI**: ElevenLabs Conversational AI Widget
- **Styling**: Tailwind CSS with Inter font family
- **Data Persistence**: LocalStorage for conversation summaries
- **Real-time Updates**: Event-driven updates between pages using localStorage events

## Components and Interfaces

### Landing Page Component
```javascript
// Main landing page interface
class LandingPage {
  - initializeElevenLabsWidget()
  - removeBranding()
  - displayConversationTranscript()
  - analyzeConversation()
  - saveConversationSummary()
}
```

### Dashboard Component
```javascript
// Dashboard interface
class Dashboard {
  - loadConversationSummaries()
  - displayPatientData()
  - listenForUpdates()
  - formatAppointmentStatus()
}
```

### Conversation Analyzer
```javascript
// Local conversation analysis
class ConversationAnalyzer {
  - parseTranscript(transcript)
  - extractMedicalConditions(text)
  - detectAppointmentBooking(text)
  - extractAppointmentDetails(text)
  - formatAnalysisResult()
}
```

### ElevenLabs Integration
```javascript
// ElevenLabs widget management
class ElevenLabsManager {
  - initializeWidget(agentId, apiKey)
  - removeBrandingElements()
  - getConversationHistory()
  - handleWidgetEvents()
}
```

## Data Models

### Conversation Summary Model
```javascript
{
  id: string,              // Unique identifier
  timestamp: Date,         // When conversation occurred
  disease: string,         // Suspected medical condition
  appointmentStatus: string, // "Booked" | "Pending" | "N/A"
  appointmentTime: string, // Date/time or "N/A"
  transcript: string       // Full conversation text
}
```

### Analysis Result Model
```javascript
{
  disease: string,
  appointmentStatus: "Booked" | "Pending",
  appointmentTime: string
}
```

## User Interface Design

### Landing Page Layout
- **Header**: Clean navigation with clinic name and dashboard link
- **Hero Section**: Welcome message and instructions
- **Chat Interface**: Integrated ElevenLabs widget with custom styling
- **Transcript Display**: Scrollable container showing conversation history
- **Analysis Button**: Prominent CTA for conversation analysis
- **Status Feedback**: Real-time status updates during analysis

### Dashboard Layout
- **Header**: Navigation back to landing page
- **Data Table**: Responsive table showing patient summaries
- **Status Indicators**: Color-coded badges for appointment status
- **Empty State**: Helpful message when no data exists

### Styling Guidelines
- **Color Scheme**: Teal primary (#0d9488), gray neutrals
- **Typography**: Inter font family, clear hierarchy
- **Spacing**: Consistent padding and margins using Tailwind
- **Responsiveness**: Mobile-first design with breakpoints
- **Accessibility**: Proper contrast ratios and semantic HTML

## Error Handling

### ElevenLabs Integration Errors
- Widget loading failures: Display fallback message
- API authentication errors: Show user-friendly error
- Network connectivity issues: Retry mechanism with user feedback

### Conversation Analysis Errors
- Empty transcript: Prompt user to have a conversation first
- Analysis parsing failures: Use fallback analysis methods
- Storage errors: Display error message and retry option

### Data Persistence Errors
- LocalStorage quota exceeded: Implement data cleanup
- Storage access denied: Graceful degradation
- Data corruption: Reset and notify user

## Testing Strategy

### Unit Testing
- Conversation analysis functions
- Data model validation
- UI component rendering
- Error handling scenarios

### Integration Testing
- ElevenLabs widget integration
- Cross-page data sharing
- LocalStorage operations
- Real-time updates between pages

### User Acceptance Testing
- Complete user workflow from conversation to dashboard
- Mobile responsiveness across devices
- Accessibility compliance
- Performance under various network conditions

### Manual Testing Scenarios
1. **Happy Path**: User has conversation → analyzes → views dashboard
2. **Error Scenarios**: Network failures, empty conversations, storage issues
3. **Edge Cases**: Very long conversations, special characters, multiple rapid analyses
4. **Cross-browser**: Chrome, Firefox, Safari, Edge compatibility
5. **Mobile Testing**: Touch interactions, responsive layout, performance

## Implementation Approach

### Phase 1: Core Infrastructure
- Set up improved HTML structure
- Implement Tailwind CSS styling
- Create basic page navigation

### Phase 2: ElevenLabs Integration
- Integrate widget with provided API key
- Implement branding removal
- Add conversation transcript display

### Phase 3: Local Analysis Engine
- Build conversation parsing logic
- Implement medical condition detection
- Add appointment booking detection

### Phase 4: Data Management
- Implement LocalStorage persistence
- Add real-time updates between pages
- Create dashboard data display

### Phase 5: Polish and Testing
- Enhance UI/UX details
- Add error handling
- Implement responsive design improvements
- Conduct thorough testing