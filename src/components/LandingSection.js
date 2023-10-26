import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Daniela!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection justifyContent="center" alignItems="center" isDarkBackground backgroundColor="#2A4365">
    <VStack spacing={6}>
    <Avatar size='2xl' name='Daniela Medina' src={require('../images/photo_2023-10-25_19-50-09.jpg')} />
      <Heading as="h3" size="lg">
        {greeting}
      </Heading>

      <Heading  as='h2' size='2xl'>
        {bio1}
      </Heading>

      <Heading  as='h2' size='2xl'>
        {bio2}
      </Heading>

    </VStack>

  </FullScreenSection>
);

export default LandingSection;
