import React, { useState, useEffect } from "react";
import {
  Image,
  Card,
  CardBody,
  Heading,
  Avatar,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";
import { useData } from "../Components/GatewayProvider";

const clientId = "cbc775e0c34c4ae79e5bf7896ea19d75"; // Replace with your client id

export default function User() {
  const { profile } = useData();
  return (
    <>
      <Card direction='column' height='100%'>
        <CardBody>
          <Flex flex="1" flexDirection="column" gap="1" flexWrap="wrap">
            <Box>
              {profile.images[0] ? (
                <Avatar
                  size="lg"
                  src={profile.images[0].url}
                  alt="Profile Picture"
                />
              ) : (
                <Avatar
                  size="lg"
                  src="src/assets/vinyl-record.png"
                  alt="Record Icon"
                />
              )}
            </Box>
            <Box>
              <Text size={"xs"}>{profile.display_name}</Text>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}
