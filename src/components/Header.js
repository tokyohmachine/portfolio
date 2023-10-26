import React, {useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {faGithub,faLinkedin,faMedium,faStackOverflow,} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";


const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  const scrollRef = useRef(0); // Ref to store scroll position
  const [scrollDirection, setScrollDirection] = useState("down"); // Default direction
  
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Calculate the scroll direction
    if(currentScroll > scrollRef.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    // Update the scroll reference
    scrollRef.current = currentScroll;
  };


  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    
    <Box
    
      position="sticky"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${scrollDirection === "down" ? "-200px" : "0"})`}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={6}>
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <a href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
