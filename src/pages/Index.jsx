import { Container, Text, VStack, Heading, Box, Image, Link, Flex } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" my={8}>
          Financial Times
        </Heading>
        <Box>
          <Image src="/images/financial-times-header.jpg" alt="Financial Times Header" borderRadius="md" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest News
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Breaking News: Market Hits Record High</Heading>
              <Text mt={2}>The stock market reached an all-time high today, driven by strong earnings reports and economic optimism...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Tech Giants Release New Gadgets</Heading>
              <Text mt={2}>Leading technology companies have unveiled their latest products in a series of highly anticipated events...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Global Economic Outlook</Heading>
              <Text mt={2}>Economists are predicting a robust global economic recovery in the coming months, with growth driven by...</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Follow Us
          </Heading>
          <Flex justify="center" spacing={4}>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;