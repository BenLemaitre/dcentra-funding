import React, { useState } from "react";
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
} from "@chakra-ui/react";

const FundButton = () => {
  const [sendValue, setSendValue] = useState(0);

  const onSubmitTransfer = async () => {
    console.log(sendValue);
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
