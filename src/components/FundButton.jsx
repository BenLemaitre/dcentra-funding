import React, { useState } from "react";
import { fundProject } from "../utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  NumberInput,
  NumberInputField,
  useToast,
} from "@chakra-ui/react";

const FundButton = ({ projectId }) => {
  const [sendValue, setSendValue] = useState(0);
  const toast = useToast();

  const onSubmitTransfer = async () => {
    const amountInWei = window.web3.utils.toWei(sendValue, "Ether");
    const hasFundedProject = await fundProject(projectId, amountInWei);
    console.log(hasFundedProject);
    if (hasFundedProject) {
      toast({
        title: "Thanks!",
        description: "You've successfully funded a project!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    toast({
      title: "Sorry!",
      description: "An error has occured!",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleChange = (e) => {
    setSendValue(e.target.value);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          color={"white"}
          bg={"green.400"}
          _hover={{
            bg: "green.300",
          }}
          size="xs"
        >
          Fund!
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>How many ETH do you want to send?</PopoverHeader>
        <PopoverBody>
          <NumberInput precision={2}>
            <NumberInputField onChange={handleChange} />
          </NumberInput>
        </PopoverBody>
        <PopoverFooter d="flex" border="0" justifyContent="end">
          <Button
            color={"white"}
            bg={"green.400"}
            _hover={{
              bg: "green.300",
            }}
            size="sm"
            onClick={onSubmitTransfer}
          >
            Send!
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default FundButton;
