import React from "react";
import User from "./User";
import { GatewayProvider } from "./GatewayProvider";
import Track from "./CurrentTrack";

export default function App() {
  return (
    <GatewayProvider>
      <User />
      <Track />
    </GatewayProvider>
  );
}
