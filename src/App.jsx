import React from "react";
import User from "./User";
import { GatewayProvider } from "./GatewayProvider";


export default function App() {
  return (
    <GatewayProvider>
      <User />
    </GatewayProvider>
  );
}
