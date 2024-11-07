// material
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
} from "@mui/material";
import { useResponsive } from "@/app/hooks/useResponsive";
import Icon from "@/app/components/Icon";
import { bgBlur } from "@/theme/css";
import React from "react";

// ----------------------------------------------------------------------

const NAV_MOBILE_HEIGHT = 64;
const NAV_DESKTOP_HEIGHT = 80;
const NAV_DESKTOP_WIDTH = 280;

type Props = {
  open: () => void;
  widget: React.ReactNode;
  logo: React.ReactNode;
};

const Navbar = (props: Props) => {
  const theme = useTheme();
  const isDesktop = useResponsive("up", "lg");

  return (
    <AppBar
      sx={{
        height: NAV_MOBILE_HEIGHT,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          width: `calc(100%)`,
          height: NAV_DESKTOP_HEIGHT,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        <Box
          sx={{
            px: 2.5,
            width: NAV_DESKTOP_WIDTH,
          }}
        >
          {props.logo}
        </Box>

        <IconButton
          onClick={props.open}
          sx={{
            display: { lg: "none" },
          }}
        >
          <Icon icon="eva:menu-2-fill" />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          spacing={{ xs: 0.5, sm: 1 }}
        >
          {props.widget}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
