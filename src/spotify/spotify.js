//doc for spotify
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// click login button-> redirect ot sopitfy login page-> redirect home page
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "59e10a2a6e754073a4af0c47956bb7ad";

// when click login button, redirect to spotify agree page, middle parts is scope
const scopes = [
 "user-read-currently-playing",
 "user-read-recently-played",
 "user-read-playback-state",
 "user-top-read",
 "user-modify-playback-state"
];

//URL= http://localhost:3000/#access_token=BQAnSuZ1GlKiiCxhN-Vu5DJoifevpFDaRvHhBhtUO-hOzGXnj4egkTPJ2Mnwhi5ChY7H46PVYSSC97bj5vfpsCrFHHcxgQB2Gh_xPozRLCOClnZ9ozERK_xwKxD5awGh5LinepVRoEtugtqdnG4XQLC_PsQDgn5A551Jz3aA2X-YrOx2&token_type=Bearer&expires_in=3600

//window.location.hash = #access_token=BQAnSuZ1GlKiiCxhN-Vu5DJoifevpFDaRvHhBhtUO-hOzGXnj4egkTPJ2Mnwhi5ChY7H46PVYSSC97bj5vfpsCrFHHcxgQB2Gh_xPozRLCOClnZ9ozERK_xwKxD5awGh5LinepVRoEtugtqdnG4XQLC_PsQDgn5A551Jz3aA2X-YrOx2&token_type=Bearer&expires_in=3600

//window.location.hash.subString(1).split('&') = ["access_token=BQAnSuZ1GlKiiCxhN-Vu5DJoifevpFDaRvHhB…h5LinepVRoEtugtqdnG4XQLC_PsQDgn5A551Jz3aA2X-YrOx2", "token_type=Bearer", "expires_in=3600"]

//parts = ["access_token", "BQAnSuZ1GlKiiCxhN-Vu5DJoifevpFDaRvHhB…h5LinepVRoEtugtqdnG4XQLC_PsQDgn5A551Jz3aA2X-YrOx2"]

//initial = {access_token: "BQAnSuZ1GlKiiCxhN-Vu5DJoifevpFDaRvHhB…h5LinepVRoEtugtqdnG4XQLC_PsQDgn5A551Jz3aA2X-YrOx2"}


export const getTokenFromUrl = () => {
 return window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
   let parts = item.split('=');
   initial[parts[0]] = decodeURIComponent(parts[1])
   return initial
  }, {})
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

