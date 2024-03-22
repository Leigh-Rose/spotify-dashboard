import { getRefreshToken } from "./getRefreshToken";

export async function fetchProfile(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (result.status === 401) {
    console.log("Access token expired. Refreshing token...");
    getRefreshToken();
  }

  if (!result.ok) {
    const errorData = await result.json();
    throw new Error(`Request failed: ${errorData.message}`);
  }

  return await result.json();
}

export async function fetchTrack(token: string): Promise<any> {
  const result = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (result.status === 204) {
    // If the response status is 204, return a message indicating no track is currently playing
    return { message: "No track is currently playing." };
  }

  return await result.json();
}

