import React from "react";
import {
  Box,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Textarea,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

const CreateProject = () => {
  return (
    <Stack w={"full"} h={"100vh"} bgGradient="linear(to-b, white,green.100)">
      <Stack
        bg={"gray.50"}
        rounded={"md"}
        p={{ base: 4, sm: 6, md: 8 }}
        mt="50px"
        alignSelf="center"
        spacing={{ base: 8 }}
        maxW={{ lg: "lg" }}
      >
        <Stack spacing={4}>
          <Heading
            color={"gray.800"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          >
            Start your project
            <Text as={"span"} bg="green.400" bgClip="text">
              !
            </Text>
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
            Tell us more about your amazing project! We will help you get it
            funded!
          </Text>
        </Stack>
        <Box as={"form"} mt={10}>
          <Stack spacing={4}>
            <Input
              placeholder="Title"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Textarea
              placeholder="Describe your project in a few words..."
              size="sm"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <Stack
              direction={"row"}
              spacing={4}
              align="center"
              justify="space-between"
            >
              <Text color={"gray.600"}>Your Goal (USD):</Text>
              <NumberInput precision={2} bg={"gray.100"} color={"gray.500"}>
                <NumberInputField border={0} />
              </NumberInput>
            </Stack>
            <Button fontFamily={"heading"} bg={"gray.200"} color={"gray.800"}>
              Upload Image
            </Button>
          </Stack>
          <Button
            fontFamily={"heading"}
            mt={8}
            w={"full"}
            bgGradient="linear(to-r, green.400,green.600)"
            color={"white"}
            _hover={{
              bgGradient: "linear(to-r, green.600,green.800)",
              boxShadow: "xl",
            }}
          >
            Submit
          </Button>
        </Box>
        form
      </Stack>
    </Stack>
  );
};

export default CreateProject;
