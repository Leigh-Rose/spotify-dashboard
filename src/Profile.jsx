import React, { useState, useEffect } from "react";
import { getAccessToken, fetchProfile, redirectToAuthCodeFlow } from "./script";

const clientId = "cbc775e0c34c4ae79e5bf7896ea19d75"; // Replace with your client id

export default function ProfileComponent({profile}) {

  return (
    <div>
      {profile && (
        <>
          <div>Display Name: {profile.display_name}</div>
          {profile.images[0] && (
            <img
              src={profile.images[0].url}
              alt="Profile"
              width={200}
              height={200}
            />
          )}
          <div>ID: {profile.id}</div>
          <div>Email: {profile.email}</div>
          <div>
            URI: <a href={profile.external_urls.spotify}>{profile.uri}</a>
          </div>
          <div>
            URL: <a href={profile.href}>{profile.href}</a>
          </div>
          <div>
            Profile Image URL: {profile.images[0]?.url ?? "(no profile image)"}
          </div>
        </>
      )}
    </div>
  );
}
