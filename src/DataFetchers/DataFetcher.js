import {
  getAccessToken,
  fetchProfile,
  redirectToAuthCodeFlow,
  fetchTrack,
} from "./script";

const clientId = "cbc775e0c34c4ae79e5bf7896ea19d75"; // Replace with your client id
export async function fetchData() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (code) {
    const accessToken = await getAccessToken(clientId, code);
    const profileData = await fetchProfile(accessToken);
    const trackData = await fetchTrack(accessToken);
    return { profileData, trackData };
  } else {
    redirectToAuthCodeFlow(clientId);
  }
}
