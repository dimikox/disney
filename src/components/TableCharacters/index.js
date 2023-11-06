import {Box, Table, Flex, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import Loader from "../Loader";

const TableCharacters = ({ data, getSingleCharacter, onOpen }) => {
    const showCharacter = (id) => {
        onOpen();
        getSingleCharacter(id);
    };

    return (
        <Box>
            <Table variant='simple'>
                <Thead>
                    <Tr backgroundColor="darkGrey">
                        <Th color="white">Name</Th>
                        <Th color="white">TV shows</Th>
                        <Th color="white">Video Games</Th>
                        <Th color="white">Allies</Th>
                        <Th color="white">Enemies</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Array.isArray(data) ? (
                        data?.map((character, index) => (
                            <Tr key={index} backgroundColor={index % 2 === 1 ? 'lightGrey' : ''} cursor="pointer" onClick={() => showCharacter(character._id)}>
                                <Td fontWeight="bold" borderRight="1px solid lightGrey" borderLeft="1px solid lightGrey">{character.name}</Td>
                                <Td borderRight="1px solid lightGrey">
                                    <Flex direction='column'>
                                        {character?.tvShows?.length > 0 ? (
                                            character.tvShows.map((show, x) => (
                                                <span key={x}>
                                                            {show}
                                                        </span>
                                            ))
                                        ) : (
                                            <span>-</span>
                                        )}
                                    </Flex>
                                </Td>
                                <Td borderRight="1px solid lightGrey">
                                    <Flex direction='column'>
                                        {character?.videoGames?.length > 0 ? (
                                            character.videoGames.map((game, x) => (
                                                <span key={x}>
                                                            {game}
                                                        </span>
                                            ))
                                        ) : (
                                            <span>-</span>
                                        )}
                                    </Flex>
                                </Td>
                                <Td borderRight="1px solid lightGrey">
                                    {character?.allies?.length > 0 ? (
                                        character.allies.map((ally, x) => (
                                            <span key={x}>
                                                        {ally}
                                                    </span>
                                        ))
                                    ) : (
                                        <span>-</span>
                                    )}
                                </Td>
                                <Td borderRight="1px solid lightGrey">
                                    {character?.enemies?.length > 0 ? (
                                        character.enemies.map((enemy, x) => (
                                            <span key={x}>
                                                        {enemy}
                                                    </span>
                                        ))
                                    ) : (
                                        <span>-</span>
                                    )}
                                </Td>
                            </Tr>
                        ))
                    ) : data && typeof data === 'object' ? (
                        <Tr cursor="pointer" onClick={() => showCharacter(data._id)}>
                            <Td fontWeight="bold" borderRight="1px solid lightGrey" borderLeft="1px solid lightGrey">{data.name}</Td>
                            <Td borderRight="1px solid lightGrey">
                                <Flex direction='column'>
                                    {data?.tvShows?.length > 0 ? (
                                        data.tvShows.map((show, x) => (
                                            <span key={x}>{show}</span>
                                        ))
                                    ) : (
                                        <span>-</span>
                                    )}
                                </Flex>
                            </Td>
                            <Td borderRight="1px solid lightGrey">
                                <Flex direction='column'>
                                    {data?.videoGames?.length > 0 ? (
                                        data.videoGames.map((game, x) => (
                                            <span key={x}>{game}</span>
                                        ))
                                    ) : (
                                        <span>-</span>
                                    )}
                                </Flex>
                            </Td>
                            <Td borderRight="1px solid lightGrey">
                                {data?.allies?.length > 0 ? (
                                    data.allies.map((ally, x) => (
                                        <span key={x}>{ally}</span>
                                    ))
                                ) : (
                                    <span>-</span>
                                )}
                            </Td>
                            <Td borderRight="1px solid lightGrey">
                                {data?.enemies?.length > 0 ? (
                                    data.enemies.map((enemy, x) => (
                                        <span key={x}>{enemy}</span>
                                    ))
                                ) : (
                                    <span>-</span>
                                )}
                            </Td>
                        </Tr>
                    ) :
                        <Tr>
                            <Td>
                                <Loader />
                            </Td>
                        </Tr>
                    }
                </Tbody>
            </Table>
        </Box>
    )
}

export default TableCharacters;
