import { Box } from "@chakra-ui/react";
const Container = ({ children, ...props }) => {
    return (
        <Box
            maxW={["100%", "100%", "1200px", "1433px"]}
            px={{base: '15px', lg:'120px'}}
            m={'auto'}
            pos={'relative'}
            {...props}
        >
            {children}
        </Box>
    )
}

export default Container;
