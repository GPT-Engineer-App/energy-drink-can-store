import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Header from "../components/Header.jsx";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <Header />
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" wrap="wrap" minH="100vh" px={8} py={20} bg={useColorModeValue("gray.50", "gray.800")}>
        <Box flex="1" maxW={{ md: "50%" }}>
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1512481367927-7547be7732dd?ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwwfHx8fDE3MDk4MTQ0MTJ8MA&ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="Energy Drink Can" mb={10} boxShadow="2xl" />
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1542444459-5f6b2a6d6e60?ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwwfHx8fDE3MDk4MTQ0MTJ8MA&ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="Energy Drink Can" mb={10} boxShadow="2xl" display={{ base: "none", md: "block" }} />
          <Image borderRadius="lg" src="https://images.unsplash.com/photo-1603201665146-40f1f7b5af0e?ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwwfHx8fDE3MDk4MTQ0MTJ8MA&ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="Energy Drink Can" mb={10} boxShadow="2xl" display={{ base: "none", md: "block" }} />
        </Box>
        <Stack flex="1" direction="column" spacing={6} maxW={{ md: "50%" }} alignItems="flex-start" px={{ base: 4, md: 8 }}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>Unleash Your Potential</Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={useColorModeValue("gray.600", "gray.200")}>
            Experience the ultimate energy boost with our specially formulated energy drink. Packed with vitamins, electrolytes, and the perfect amount of caffeine, it's designed to power you through your day.
          </Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" size="lg" boxShadow="md" _hover={{ boxShadow: "lg" }}>
            Add to Cart
          </Button>
          {}
          <Box flex="1" maxW={{ md: "50%" }} display={{ base: "none", md: "block" }}>
            <Image borderRadius="lg" src="https://images.unsplash.com/photo-1542444459-5f6b2a6d6e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwwfHx8fDE3MDk4MTQ0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Energy Drink Can" mb={10} boxShadow="2xl" />
          </Box>
          <Box flex="1" maxW={{ md: "50%" }} display={{ base: "none", md: "block" }}>
            <Image borderRadius="lg" src="https://images.unsplash.com/photo-1603201665146-40f1f7b5af0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBkcmluayUyMGNhbnxlbnwwfHx8fDE3MDk4MTQ0MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Energy Drink Can" mb={10} boxShadow="2xl" />
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
