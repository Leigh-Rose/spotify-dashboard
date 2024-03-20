import React from "react";
import Profile from "./Profile";
import { useState, useEffect } from "react";

import {
  generateAndSetAccessToken,
  fetchProfile,
  redirectToAuthCodeFlow,
  fetchTrack,
} from "./script";


(async function () {
  const clientId = "cbc775e0c34c4ae79e5bf7896ea19d75"; // Replace with your client id

  const setupTokens = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      try {
        await generateAndSetAccessToken(clientId, code);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      redirectToAuthCodeFlow(clientId);
    }
  };

  const fetchDataExecuted = localStorage.getItem("fetchDataExecuted");
  if (!fetchDataExecuted) {
    await setupTokens();
  }
})();

let accessToken

 accessToken = localStorage.getItem("accessToken", accessToken);

const profile = await fetchProfile(accessToken);

export default function App() {
  return (
    <div>
      <h1>My Spotify Profile</h1>
      <Profile profile={profile} />
      {/* <h2>{track.artists.name}</h2> */}
    </div>
  );
}
