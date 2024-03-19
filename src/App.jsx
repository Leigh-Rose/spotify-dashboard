import React from "react";
import Profile from "./Profile";
import { useState, useEffect } from "react";






export default function App() {
 const [profile, setProfile] = useState(null);
 const [track, setTrack] = useState(null);

  useEffect(() => {
    fetchData()
      .then(({ profileData, trackData }) => {
        setProfile(profileData);
        setTrack(trackData);
      })
      .catch((error) => {
        console.error("Error setting state:", error);
        // Handle error as needed
      });
  }, []);
  return (
    <div>
      <h1>My Spotify Profile</h1>
      <Profile profile={profile} />
      <h2>{track}</h2>
    </div>
  );
}
