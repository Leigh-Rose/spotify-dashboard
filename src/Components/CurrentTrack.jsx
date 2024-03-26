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
  Stack,
  Button,
} from "@chakra-ui/react";
import { useData } from "../Components/GatewayProvider";

export default function Track() {
  const { track, fetchTrack } = useData();

  const handleButtonClick = async () => {
    await fetchTrack();
  };

  if (track.message === "No track is currently playing.") {
    return (
      <div>
        <h2>No track playing</h2>
        <Button onClick={handleButtonClick}>Fetch Track</Button>
      </div>
    );
  }

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={track.item.album.images[0].url}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{track.item.album.name}</Heading>
          <Text>{track.item.artists.name}</Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
      </CardFooter>
    </Card>
  );
}
