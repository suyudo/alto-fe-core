import { useEffect } from "react";
import { useRouter } from "next/router";
import { useResponsive } from "@/app/hooks/useResponsive";
import {
  Box,
  Drawer,
  Stack,
} from "@mui/material";
import Scrollbar from "@/app/components/Scrollbar";
import SidebarMenu from "@/app/components/peripherals/sidebar/Menu/SidebarMenu";
import { Menu } from "@/app/data/interfaces/menu.interface";

const NAV_DESKTOP_WIDTH = 280;

type Props = {
  show: boolean;
  handleClose: () => void;
  menu: Menu[]
};

const Sidebar = (props: Props) => {
  const router = useRouter();
  const isDesktop = useResponsive("up", "lg");

  useEffect(() => {
    if (props.show) {
      props.handleClose();
    }
  }, [router.pathname]);

  const Content = (
    <Scrollbar
      sx={{
        height: 1,
        pt: 2.5,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Stack
        component="nav"
        sx={{
          mx: 2.5,
        }}
      >
        <SidebarMenu menu={props.menu} />
      </Stack>
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_DESKTOP_WIDTH },
      }}
    >
      {isDesktop ? (
        <Stack
          sx={{
            height: 1,
            width: NAV_DESKTOP_WIDTH,
            position: "fixed",
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
            borderTop: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {Content}
        </Stack>
      ) : (
        <Drawer
          open={props.show}
          onClose={props.handleClose}
          PaperProps={{
            sx: { width: NAV_DESKTOP_WIDTH },
          }}
        >
          {Content}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
