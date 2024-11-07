import { Collapse, IconButton, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";
import {
  MaterialDesignContent,
  SnackbarProvider,
  closeSnackbar,
} from "notistack";
import { useRef } from "react";
import Icon from "@/app/components/Icon";

type StyledIconProps = {
  color: "info" | "success" | "warning" | "error";
};

const StyledNotistack = styled(MaterialDesignContent)(({ theme }) => {
  return {
    "& #notistack-snackbar": {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: "1.14rem",
      padding: 0,
      flexGrow: 1,
    },
    "&.notistack-MuiContent": {
      color: theme.palette.text.primary,
      boxShadow: theme.customShadows.z8,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(0.5, 2, 0.5, 0.5),
      backgroundColor: theme.palette.background.paper,
    },
    "&.notistack-MuiContent-default": {
      padding: theme.spacing(1, 2, 1, 1),
      color: theme.palette.common.white,
      backgroundColor: theme.palette.grey[800],
    },
  };
});

const StyledIcon = styled("span")<StyledIconProps>(({ color, theme }) => ({
  width: 44,
  height: 44,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(1.5),
  color: theme.palette[color].main,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette[color].main, 0.16),
}));

type Props = {
  children: React.ReactNode;
};

export default function Snackbar(props: Props) {
  const Ref = useRef<any>(null);

  return (
    <SnackbarProvider
      ref={Ref}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}
      TransitionComponent={Collapse}
      variant="success" // Set default variant
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      iconVariant={{
        info: (
          <StyledIcon color="info">
            <Icon icon="eva:info-fill" width={24} />
          </StyledIcon>
        ),
        success: (
          <StyledIcon color="success">
            <Icon icon="eva:checkmark-circle-2-fill" width={24} />
          </StyledIcon>
        ),
        warning: (
          <StyledIcon color="warning">
            <Icon icon="eva:alert-triangle-fill" width={24} />
          </StyledIcon>
        ),
        error: (
          <StyledIcon color="error">
            <Icon icon="solar:danger-bold" width={24} />
          </StyledIcon>
        ),
      }}
      Components={{
        default: StyledNotistack,
        info: StyledNotistack,
        success: StyledNotistack,
        warning: StyledNotistack,
        error: StyledNotistack,
      }}
      // with close as default
      action={(snackbarId) => (
        <IconButton
          size="small"
          onClick={() => closeSnackbar(snackbarId)}
          sx={{ p: 0.5 }}
        >
          <Icon width={16} icon="mingcute:close-line" />
        </IconButton>
      )}
    >
      {props.children}
    </SnackbarProvider>
  );
}
