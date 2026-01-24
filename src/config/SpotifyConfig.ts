export default class SpotifyConfig {
  public static SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'
  public static CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  public static REDIRECT_URI =
    import.meta.env.VITE_SPOTIFY_REDIRECT_URI || 'http://127.0.0.1:5173/callback'
  public static SCOPES = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
  ]
}
