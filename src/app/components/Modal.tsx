import React from "react";

import { Breakpoint, useTheme } from "@mui/material/styles";

import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import { LoadingButton } from "@mui/lab";
import Icon from "@/app/components/Icon";
import Stack from "@mui/material/Stack";

interface Props {
  id: string;
  show: boolean,
  type: 'confirmation' | 'notification',
  children: React.ReactNode,
  onClose: () => void,
  onSubmit?: () => void,
  loading?: boolean,
  closeLabel?: string,
  submitLabel?: string,
  subtitle?: string,
  size?: Breakpoint;
  fullWidth?: boolean;
}

export default function Modal(props: Props) {
  const theme = useTheme();

  return (
    <>
      <Dialog
        id={`Modal-${props.id}-${props.type}`}
        open={props.show}
        onClose={props.onClose}
        maxWidth={props.size ?? "md"}
        fullWidth={props.fullWidth}
        disableEscapeKeyDown
      >
        <DialogTitle sx={{ padding: '1rem' }}>
          <Stack direction="row" gap={0.5}>
            <Icon width={16} icon={props.type === 'confirmation' ? 'ph:question-duotone' : 'ph:warning-diamond-duotone'} />
            {props.type === 'confirmation' ? 'CONFIRMATION' : 'NOTIFICATION'}
          </Stack>
          {props.subtitle && (
            <DialogContentText>
              <small>{props.subtitle}</small>
            </DialogContentText>
            )}
        </DialogTitle>

        <DialogContent
          sx={{
            padding: '1rem',
          }}
        >
          {props.children}
        </DialogContent>

        <DialogActions
          sx={{
            borderTop: `dashed 1px ${theme.palette.divider}`,
            padding: '1rem'
          }}
        >
          <Button
            type="button"
            variant="outlined"
            disabled={props.loading}
            onClick={props.onClose}
          >
            {props.closeLabel ?? 'Close'}
          </Button>
          {
            props.onSubmit && props.type === 'confirmation' && (
              <LoadingButton
                type="button"
                variant="contained"
                loading={props.loading}
                onClick={props.onSubmit}
              >
                {props.submitLabel ?? 'Submit'}
              </LoadingButton>
            )
          }
        </DialogActions>
      </Dialog>
    </>
  )
}