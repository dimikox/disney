import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    breakpoints: {
        xs: "320px",
        sm: "600px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
    },
    textStyles: {
        h1: {
            fontSize: "38px",
            fontWeight: "400"
        },
        xl: {
            fontSize: "29px",
            fontWeight: "700",
            lineHeight: "30px"
        },
        lg: {
            fontSize: "24px",
            fontWeight: "700"
        },
        md: {
            fontSize: "18px",
            fontWeight: "400"
        },
        sm: {
            fontSize: "14px",
            fontWeight: "400"
        },
        xs: {
            fontSize: "12px",
            fontWeight: "400"
        },
    },
    colors: {
        grey: "#F2F3F4",
        darkGrey: "#3E4C66",
        lightGrey: "#EEEEEE"
    }
})

export default theme
