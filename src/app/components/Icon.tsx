import { forwardRef } from "react";
import { Icon as Iconify, IconifyIcon } from "@iconify/react";
import { Box, BoxProps } from "@mui/material";
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  icon: IconifyIcon | string;
}

const Icon = forwardRef<SVGElement, Props>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Iconify}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
    />
  )
);

export default Icon;
