//doc for spotify
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// click login button-> redirect ot sopitfy login page-> redirect home page
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "59e10a2a6e754073a4af0c47956bb7ad";

const scopes = [
 "user-read-currently-playing",
 "user-read-recently-played",
 "user-read-playback-state",
 "user-top-read",
 "user-modify-playback-state"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

