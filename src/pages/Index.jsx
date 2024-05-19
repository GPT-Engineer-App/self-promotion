import { Container, VStack, Box, Text, Heading, Image, IconButton, Link, HStack, keyframes } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Index = () => {
  const animation = `${fadeIn} 2s ease-in-out`;
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px" animation={animation}>
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTYwNDI1NzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Full Stack Developer | JavaScript Enthusiast | Open Source Contributor
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }} />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }} />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }} />
          </Link>
        </HStack>
        <Box p={4} borderWidth={1} borderRadius="md" width="100%">
          <Heading as="h2" size="md" mb={2}>
            About Me
          </Heading>
          <Text>Hi, I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in building web applications. I love working with JavaScript, React, Node.js, and other modern web technologies. I'm also an active open source contributor and enjoy collaborating with developers from around the world.</Text>
        </Box>
        <Box p={4} borderWidth={1} borderRadius="md" width="100%">
          <Heading as="h2" size="md" mb={2}>
            Projects
          </Heading>
          <Text>
            <strong>Project 1:</strong> A web application for managing tasks and projects. Built with React and Node.js.
          </Text>
          <Text>
            <strong>Project 2:</strong> An e-commerce platform with a custom CMS. Built with Next.js and MongoDB.
          </Text>
          <Text>
            <strong>Project 3:</strong> A real-time chat application. Built with Socket.io and Express.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
