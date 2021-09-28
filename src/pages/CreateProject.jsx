import React, { useState, useCallback } from "react";
import {
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Textarea,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

const useFormField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

const CreateProject = ({ dcentra, account }) => {
  const titleField = useFormField();
  const descriptionField = useFormField();
  const goalField = useFormField();
  const [buffer, setBuffer] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(titleField.value, descriptionField.value, goalField.value);
    try {
      const result = await ipfs.add(buffer);
      console.log(result);

      dcentra.methods
        .createProject(
          titleField.value,
          descriptionField.value,
          goalField.value,
          result.path
        )
        .send({ from: account })
        .on("transactionHash", (hash) => {
          console.log("project was added");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const captureFile = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(reader.result);
    };
  };

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
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <Input
              placeholder="Title"
              bg={"gray.100"}
              border={0}
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
              required
              {...titleField}
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
              required
              {...descriptionField}
            />
            <Stack
              direction={"row"}
              spacing={4}
              align="center"
              justify="space-between"
            >
              <Text color={"gray.600"}>Your Goal (USD):</Text>
              <NumberInput precision={2} bg={"gray.100"} color={"gray.500"}>
                <NumberInputField border={0} required {...goalField} />
              </NumberInput>
            </Stack>
            <Input
              type="file"
              onChange={captureFile}
              fontFamily={"heading"}
              bg={"gray.200"}
              color={"gray.800"}
            />
          </Stack>
          <Button
            type="submit"
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
        </form>
        form
      </Stack>
    </Stack>
  );
};

export default CreateProject;
