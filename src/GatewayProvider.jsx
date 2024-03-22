import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchProfile } from "./HelperFunctions/APICalls";


// Custom hook to access the profile context
export const useData = () => useContext(GatewayContext);

// Create a context for the profile
const GatewayContext = createContext(null);

// Define the component that will act as the context provider
export const GatewayProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        try {
          const userProfile = await fetchProfile(accessToken);
          setProfile(userProfile);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <GatewayContext.Provider value={profile}>
      {profile ? children : <h2>No Profile Found</h2>}
    </GatewayContext.Provider>
  );
};



