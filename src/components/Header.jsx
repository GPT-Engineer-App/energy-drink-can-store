import { Box, Flex, Heading, Link, useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            EnergyX
          </Heading>
        </Box>
        <Flex alignItems={"center"}>
          <Link px={2} py={1} rounded={"md"} href={"/"}>
            Home
          </Link>
          {}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
