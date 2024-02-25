import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import backgroundImage from "../assets/Hero.jpeg";
import { Input } from "@chakra-ui/react";


export default function WithBackgroundImage() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <Flex
      w={"full"}
      h={"65vh"}
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        h={"full"}
        justify={"center"}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"3xl"} align={"flex-start"} spacing={8}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            {/* Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor */}
          </Text>
          <Stack direction={"row"}>
            <Input
              placeholder="From"
              size="lg"
              variant="filled"
              _hover={{ bg: "white" }} // Change background color on hover
              _focus={{ bg: "white" }}
            />
            <Input
              placeholder="To"
              size="lg"
              variant="filled"
              _hover={{ bg: "white" }} // Change background color on hover
              _focus={{ bg: "white" }}
            />
            <Input type="date" 
            min={today} 
            // _focus={{ bg: "white" }}
            />

            {/* <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              
              w={"28rem"}
            >
              SEARCH BUSES
            </Button> */}
            {/* <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Show me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}