import React from "react";
import {Text} from "@chakra-ui/react";
import {
    Pagination,
    usePagination,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
    PaginationContainer,
    PaginationPageGroup,
    PaginationSeparator
} from "@ajna/pagination";

const BasePagination = ({ data, getNextPage, getPreviousPage, getCurrentPage, setSelectedOption }) => {
    const outerLimit = 1;
    const innerLimit = 1;

    const {
        pages,
        pagesCount,
        currentPage,
        setCurrentPage,
        isDisabled,
    } = usePagination({
        total: data?.info?.totalPages,
        limits: {
            outer: outerLimit,
            inner: innerLimit,
        },
        initialState: {
            pageSize: 5,
            isDisabled: false,
            currentPage: 1,
        },
    });

    const handlePageChange = (nextPage) => {
        setCurrentPage(nextPage);
        getCurrentPage(nextPage);
        setSelectedOption('default');
    };

    return (
        <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            isDisabled={isDisabled}
            onPageChange={handlePageChange}
        >
            <PaginationContainer
                align="center"
                justify="space-between"
                padding={{base: '15px 0', md: '15px'}}
                w="full"
            >
                <PaginationPrevious
                    border="1px solid black"
                    _hover={{
                        bg: "black",
                        color: "white"
                    }}
                    bg="grey"
                    padding={{base: '6px', md: 'inherit'}}
                    isDisabled={isDisabled}
                    onClick={getPreviousPage}
                >
                    <Text>Prev</Text>
                </PaginationPrevious>
                <PaginationPageGroup
                    isInline
                    align="center"
                    separator={
                        <PaginationSeparator
                            isDisabled
                            bg="blue.300"
                            fontSize="sm"
                            w={7}
                            jumpSize={11}
                        />
                    }
                >
                    {pages.map((page) => (
                        <PaginationPage
                            w={7}
                            bg="grey"
                            color="black"
                            border="1px solid black"
                            key={`pagination_page_${page}`}
                            page={page}
                            fontSize="sm"
                            _hover={{
                                bg: "black",
                                color: "white"
                            }}
                            _current={{
                                bg: "black",
                                color: "white",
                                fontSize: "sm",
                                w: 7,
                            }}
                        />
                    ))}
                </PaginationPageGroup>
                <PaginationNext
                    border="1px solid black"
                    _hover={{
                        bg: "black",
                        color: "white"
                    }}
                    bg="grey"
                    padding={{base: '6px', md: 'inherit'}}
                    onClick={getNextPage}
                >
                    <Text>Next</Text>
                </PaginationNext>
            </PaginationContainer>
        </Pagination>
    )
}

export default BasePagination;
