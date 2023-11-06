import React, {useRef, useState} from "react";
import {
    Button,
    Box,
    Flex,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    RadioGroup,
    Stack,
    Radio
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBar = ({ fetch }) => {
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef(null);
    const [radioValue, setRadioValue] = React.useState('1')

    const showResults = () => {
        const searchValue = inputRef.current?.value;
        fetch(searchValue, radioValue)
    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
        fetch(value, radioValue);
    };

    return (
        <Box w={{base: '100%', md: '45%'}}>
           <Flex>
               <Box textAlign="left" pb="1" pr="2">Search by:</Box>
               <RadioGroup onChange={setRadioValue} value={radioValue}>
                   <Stack direction='row'>
                       <Radio value='1'>Name</Radio>
                       <Radio value='2'>Tv Show</Radio>
                   </Stack>
               </RadioGroup>
           </Flex>
            <InputGroup borderRadius={5} size="sm" mb="5">
                <InputLeftElement
                    pointerEvents="none"
                    children={<Search2Icon color="gray.600" />}
                />
                <Input ref={inputRef} type="text" placeholder="Search..." border="1px solid #949494" value={searchValue} onChange={handleInputChange} />
                <InputRightAddon
                    p={0}
                    border="none"
                >
                    <Button onClick={showResults} size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
                        Search
                    </Button>
                </InputRightAddon>
            </InputGroup>
        </Box>
    )
}

export default SearchBar;
