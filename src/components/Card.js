import { Card as ChakraCard, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CustomCard = ({ title, description, link, imageSrc }) => {
  return (
    
    <ChakraCard maxW="lg">
      <Image src={imageSrc} alt={title} objectFit="cover" borderRadius="md" />

      <CardBody>
        <Heading size="md" color="black" lineHeight="2">
          {title}
        </Heading>

        <Text color="black" marginTop={2}> 
          {description}
        </Text>

        <HStack spacing={3} marginTop={2}>
          <Text color="black" as='b'>
            {link}
          </Text>
            
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>

      </CardBody>

    </ChakraCard>
  );
};

export default CustomCard;
