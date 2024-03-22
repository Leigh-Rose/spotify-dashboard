import React, { useState, useEffect, } from "react";
import { Image, Card, CardBody, Heading } from "@chakra-ui/react";
import { useData } from "./GatewayProvider";

const clientId = "cbc775e0c34c4ae79e5bf7896ea19d75"; // Replace with your client id

export default function User() {
const profile = useData();
  return (
    <>
      <Card>
        <CardBody>
          
            
              {profile.images[0] ? (
                <Image
                  borderRadius="full"
                  boxSize="50px"
                  src={profile.images[0].url}
                  alt="Profile"
                />
              ) : (
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="src/assets/vinyl-record.png"
                  alt="Record Icon"
                />
              )}
                
              <Heading size={"md"}>{profile.display_name}</Heading>
            
        
        </CardBody>
      </Card>
    </>
  );
}
