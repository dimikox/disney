import React, {useEffect, useState} from 'react'
import { Box, TableContainer, Select, Flex } from '@chakra-ui/react';
import useDisneyStore from "../../store/useDisney"
import Container from "../Container";
import BasePagination from "../BasePagination";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";
import TableCharacters from "../TableCharacters";
import BaseModal from "../BaseModal";
import SearchBar from "../SearchBar";
import PieChart from "../PieChart";

const CharactersListing = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {data, singleData, loading, fetch, getSingleCharacter, getNextPage, getPreviousPage, getCurrentPage} = useDisneyStore();
    const [sortedData, setSortedData] = useState([]);
    const [transformedData, setTransformedData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('default');

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        setSortedData(data?.data);
        chartData()
    }, [data]);

    const chartData = () => {
        const transformedArray =  data?.data
            ?.filter(item => item.tvShows.length > 0)
            .map(item => ({
                name: item.name,
                y: item.tvShows.length,
                tvShows: item.tvShows,
            }));
        setTransformedData(transformedArray)
    };

    const characterArray = data?.data ? Object.values(data.data) : [];

    const handleOptionChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === 'byName') {
            const sortedByName = [...characterArray].sort((a, b) => a.name.localeCompare(b.name));
            setSortedData(sortedByName);
        } else {
            setSortedData(characterArray);
        }
    };

    return (
        <Container>
            <Box>
                <Box height="75vh" overflow="auto">
                    <Flex direction={{base: 'column', md: 'row'}} justifyContent="space-between" alignItems={{base: 'start', md: 'end'}}>
                        <Box>
                            <Box mt="3" pb="1" textAlign="left">Sort by name</Box>
                            <Select mb="5" width="200px" onChange={handleOptionChange} value={selectedOption}>
                                <option value='default'>Default</option>
                                <option value='byName'>By name</option>
                            </Select>
                        </Box>
                        <SearchBar fetch={fetch} />
                    </Flex>
                    <TableContainer>
                        <TableCharacters data={sortedData} getSingleCharacter={getSingleCharacter} onOpen={onOpen} />
                    </TableContainer>
                </Box>

                <BasePagination data={data} getNextPage={getNextPage} getPreviousPage={getPreviousPage} getCurrentPage={getCurrentPage} setSelectedOption={setSelectedOption} />

                <BaseModal loading={loading} data={singleData.data} onClose={onClose} isOpen={isOpen} />

            </Box>
            <Box my="10">
                <PieChart data={transformedData} />
            </Box>
        </Container>
    )
}

export default CharactersListing;
