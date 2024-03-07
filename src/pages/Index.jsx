import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" wrap="wrap" minH="100vh" px={8} py={20} bg={useColorModeValue("gray.50", "gray.800")}>
        <Box flex="1" maxW={{ md: "50%" }}>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1512481367927-7547be7732dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwwfHx8fDE3MDk4MTQ0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Energy Drink Can" mb={10} boxShadow="2xl" />
        </Box>
        <Stack flex="1" direction="column" spacing={6} maxW={{ md: "50%" }} alignItems="flex-start" px={{ base: 4, md: 8 }}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>Unleash Your Potential</Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue("gray.600", "gray.200")}>
            Experience the ultimate energy boost with our specially formulated energy drink. Packed with vitamins, electrolytes, and the perfect amount of caffeine, it's designed to power you through your day.
          </Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" size="lg" boxShadow="md" _hover={{ boxShadow: "lg" }}>
            Add to Cart
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
