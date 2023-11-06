import {
    Box, Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Image,
    Flex
} from "@chakra-ui/react";
import Loader from "../Loader";
import React from "react";
const BaseModal = ({ loading, data, isOpen, onClose }) => {
    return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                {
                    loading ? <Loader /> :
                        <ModalContent>
                            <ModalHeader>{data?.name}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Image src={data?.imageUrl} />

                                <Flex direction="column" borderBottom="1px solid grey" py="3" my="3">
                                    <Box fontWeight="bold">TV Shows:</Box>
                                    {data?.tvShows?.length > 0 ? (
                                        data.tvShows.map((show, x) => (
                                            <span key={x}>{show}</span>
                                        ))
                                    ) : (
                                        <span>-</span>
                                    )}
                                </Flex>

                                <Flex direction="column" borderBottom="1px solid grey" py="3" my="3">
                                    <Box fontWeight="bold">Video Games:</Box>
                                    {data?.videoGames?.length > 0 ? (
                                        data.videoGames.map((game, x) => (
                                            <span key={x}>{game}</span>
                                        ))
                                    ) : (
                                        <span>-</span>
                                    )}
                                </Flex>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                }
            </Modal>
    )
}

export default BaseModal;
