import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import GlobalStyles, { ViewPort } from "./GlobalStyles";
import type { ComponentStyleConfig } from '@chakra-ui/theme'

export type ThemeProps = {
  defaultContainer: {}
  colors: any
  fonts: any
  defaultRadius: string
}

export const theme: ThemeProps = {
  defaultContainer: {
    width: "100%",
    spacing: ".9em",
  },

  colors: {
    primary: "#191919",
    secondary: "#c52224",
    text: "#333",
    background: "#fff",
    error: "#ee2728",
    success: "#10d08e",
    warning: "#ffA214",
    info: "#28abeb",
  },

  fonts: {
    body: "Helvetica Neue, Helvetica, Arial, sans-serif",
    heading: "Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  defaultRadius: "12px",
};

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px) translateX(-10px)',
}

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: theme.colors.primary,
    }
  }
});

const variantFilled = () => ({
  field: {
    _focus: {
      borderColor: theme.colors.primary,
    }
  }
});

const variantFlushed = () => ({
  field: {
    _focus: {
      borderColor: theme.colors.primary,
    },
    borderBottom: 'solid 2px'
  }
});

// Chakra theme extension
const charkaExtendThemeConfig = {
  config: {
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: theme.colors.primary,
      100: theme.colors.primary,
      500: theme.colors.primary, // you need this
    },
    secondary: {
      50: theme.colors.secondary,
      100: theme.colors.secondary,
      500: theme.colors.secondary, // you need this
    }
  },
  components: {

    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      }
    },
    FormLabel: {
      baseStyle: {
        margin: 0
      }
    }
  },
};

export const chakraTheme = extendTheme(charkaExtendThemeConfig);

const Theme = ({ children }: any) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <ViewPort>{children}</ViewPort>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Theme;
