# Requirements Document

## Introduction

This project involves improving an existing AI Health Clinic web application that uses ElevenLabs for voice conversations. The system needs to be enhanced with a better user interface, removal of Gemini API dependencies, and improved conversation analysis functionality while maintaining the core features of patient conversation tracking and appointment management.

## Requirements

### Requirement 1

**User Story:** As a patient, I want to interact with an AI health assistant through a beautiful and intuitive landing page, so that I can easily discuss my health concerns and book appointments.

#### Acceptance Criteria

1. WHEN a user visits the landing page THEN the system SHALL display "AI Health Clinic Bhopal" as the main title
2. WHEN the landing page loads THEN the system SHALL integrate the ElevenLabs conversational AI widget with agent ID "agent_2201k431qr7zen8vang03mb25kdb"
3. WHEN the ElevenLabs widget loads THEN the system SHALL remove all ElevenLabs branding elements
4. WHEN a user interacts with the AI THEN the system SHALL provide a modern, responsive interface using Tailwind CSS
5. WHEN the conversation interface is displayed THEN the system SHALL show conversation text in a beautiful, readable format

### Requirement 2

**User Story:** As a healthcare administrator, I want the system to analyze patient conversations without relying on external AI APIs, so that I can maintain patient data privacy and reduce API dependencies.

#### Acceptance Criteria

1. WHEN a conversation is completed THEN the system SHALL extract patient information using local analysis instead of Gemini API
2. WHEN analyzing conversations THEN the system SHALL identify suspected medical conditions mentioned by patients
3. WHEN analyzing conversations THEN the system SHALL determine if an appointment was booked ("Booked" or "Pending")
4. WHEN analyzing conversations THEN the system SHALL extract appointment date and time information
5. WHEN the analysis is complete THEN the system SHALL format results as JSON with keys: "disease", "appointmentStatus", and "appointmentTime"

### Requirement 3

**User Story:** As a healthcare administrator, I want to view all patient conversation summaries in a dashboard, so that I can track patient interactions and appointments efficiently.

#### Acceptance Criteria

1. WHEN accessing the dashboard THEN the system SHALL display a table with columns for "Suspected Condition", "Appointment Status", and "Appointment Time"
2. WHEN new conversation data is analyzed THEN the system SHALL automatically update the dashboard in real-time
3. WHEN displaying appointment status THEN the system SHALL use color-coded badges (green for "Booked", yellow for "Pending")
4. WHEN no data exists THEN the system SHALL display appropriate placeholder messages
5. WHEN the dashboard loads THEN the system SHALL provide navigation back to the landing page

### Requirement 4

**User Story:** As a system administrator, I want the application to use the provided ElevenLabs API key securely, so that the voice conversation functionality works properly.

#### Acceptance Criteria

1. WHEN the system initializes THEN the system SHALL use the ElevenLabs API key "sk_7f57d02d8b0ff1c8c0aa89b4de6947411266ae60448b5ea0"
2. WHEN making API calls to ElevenLabs THEN the system SHALL handle authentication properly
3. WHEN the widget loads THEN the system SHALL ensure the agent ID "agent_2201k431qr7zen8vang03mb25kdb" is correctly configured
4. WHEN API errors occur THEN the system SHALL provide meaningful error messages to users

### Requirement 5

**User Story:** As a patient, I want the conversation transcript to be displayed beautifully on the landing page, so that I can review what was discussed before analysis.

#### Acceptance Criteria

1. WHEN a conversation is fetched THEN the system SHALL display the transcript in a scrollable container
2. WHEN displaying transcript THEN the system SHALL differentiate between patient and AI messages with distinct styling
3. WHEN the transcript is shown THEN the system SHALL use proper typography and spacing for readability
4. WHEN the transcript container is empty THEN the system SHALL remain hidden until content is available
5. WHEN new transcript content is added THEN the system SHALL automatically scroll to show the latest messages