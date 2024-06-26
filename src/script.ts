const clientId = "cbc775e0c34c4ae79e5bf7896ea19d75";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

const fetchDataExecuted = localStorage.getItem("fetchDataExecuted");
if (!fetchDataExecuted) {
  await setupTokens();
}

 async function setupTokens() {
  if (code) {
    try {
      await generateAndSetAccessToken(clientId, code);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } else {
    redirectToAuthCodeFlow(clientId);
  }
}


 async function redirectToAuthCodeFlow(clientId: string) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:5173/callback");
  params.append(
    "scope",
    "user-read-private user-read-email user-read-currently-playing "
  );
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

 async function generateAndSetAccessToken(
  clientId: string,
  code: string
): Promise<void> {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:5173/callback");
  params.append("code_verifier", verifier!);
  console.log(params.toString());

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const { access_token, refresh_token } = await result.json();
  localStorage.setItem("accessToken", access_token);
  localStorage.setItem("refreshToken", refresh_token);
  localStorage.setItem("fetchDataExecuted", "true"); // Set flag indicating execution
}
export { };

