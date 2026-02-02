# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript frontend application for creating Spotify playlists based on artist searches. It integrates with a backend API (expected at `http://localhost:8080`) to handle Spotify OAuth and API interactions.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (starts at http://127.0.0.1:5173)
npm run dev

# Type checking (incremental)
npm run type-check

# Build for production (includes type checking)
npm run build

# Build without type checking
npm run build-only

# Preview production build
npm run preview

# Run tests in watch mode
npm run test:unit

# Lint and auto-fix
npm run lint

# Format code
npm run format
```

## Architecture

### Session Management

The application uses a cookie-based session system:
- On mount, `App.vue` calls `authStore.startUserSession()` to establish or validate a session
- Session IDs are stored in cookies and sent to the backend via `Session-Id` headers
- The `auth` store handles session creation, validation, and Spotify OAuth flow

### Spotify OAuth Flow

1. User clicks sign-in button → `authStore.sendUserToSpotifyLogin()`
2. Backend returns Spotify authorization URL with session ID
3. User authenticates with Spotify → redirected to `/callback`
4. `SpotifyCallback.vue` extracts code and state → calls `authStore.submitCode()`
5. Backend exchanges code for tokens and associates with session
6. User is redirected to `/maker` route

### State Management (Pinia Stores)

**auth store** (`src/stores/auth.ts`)
- Session lifecycle management
- Spotify OAuth initiation and callback handling
- No reactive state; purely functional

**artist store** (`src/stores/artist.ts`)
- Artist search functionality via backend API
- Maintains `selectedArtists` and `searchResults` arrays
- Loading/success/error states for search operations

### Routing

Three main routes defined in `src/router/index.ts`:
- `/` (catch-all) → `HomeView` - Sign-in page
- `/callback` → `SpotifyCallback` - OAuth redirect handler
- `/maker` → `PlaylistMakerView` - Main artist search interface

Route names are defined as constants in `src/router/routes.ts`

### Backend API Expectations

All API calls expect a backend running on `http://localhost:8080` with these endpoints:

- `POST /api/spotify/session` - Create new session
- `POST /api/spotify/check-session` - Validate existing session
- `GET /api/spotify/login` - Get Spotify OAuth URL
- `POST /api/spotify/code` - Submit OAuth code
- `GET /api/artist/search?q={name}` - Search for artists

All authenticated requests include `Session-Id` header with the cookie value.

### Environment Variables

Required in `.env` file:
- `VITE_SPOTIFY_CLIENT_ID` - Spotify application client ID
- `VITE_SPOTIFY_REDIRECT_URI` - OAuth callback URL (default: `http://127.0.0.1:5173/callback`)

### TypeScript Configuration

The project uses `@` alias for `src/` directory imports (configured in `vite.config.ts`).

### Styling

Uses scoped component styles with a monospace font family (`'Courier New', Courier, monospace`) as the design aesthetic.
