export async function getRefreshToken() {
  // refresh token that has been previously stored
  const refreshToken = localStorage.getItem("refresh_token") || "";
  const url = "https://accounts.spotify.com/api/token";
  const clientId = "cbc775e0c34c4ae79e5bf7896ea19d75"; // Replace with your client id

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  };
  const body = await fetch(url, payload);
  const response = await body.json();

  localStorage.setItem("access_token", response.accessToken);
  localStorage.setItem("refresh_token", response.refreshToken);
}
