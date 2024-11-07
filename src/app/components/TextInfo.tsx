import { copy } from "@/app/utils/helpers";

import {
  Skeleton,
  Typography,
  Stack,
  Link,
  IconButton,
  Tooltip,
  TypographyProps
} from "@mui/material";

import Icon from "@/app/components/Icon";

interface Props extends TypographyProps {
  label?: string;
  value?: string | any;
  helper?: string | null | any;
  className?: string;
  noLabel?: boolean;
  isLoading?: boolean;
  trim?: boolean;
  link?: boolean;
  copy?: boolean;
}

export default function TextInfo(props: Props) {
  return (
    <Tooltip title={props.value}>
      <Stack>
        <Typography variant="body2" align={props.align} color="text.secondary">
          {props.label}
        </Typography>
        {props.isLoading ? (
          <Skeleton width="100%" height="2rem" animation="wave" />
        ) : (
          <Stack direction="row" gap={0.5}>
            <Typography
              variant={props.variant ?? "subtitle1"}
              align={props.align}
              color="text.primary"
              sx={props.sx}
              noWrap={props.trim}
              paragraph={props.paragraph}
            >
              {props.link ? (
                <Link href={props.value} target="_blank">
                  Buka
                </Link>
              ) : (
                props.value
              )}
            </Typography>
            {props.copy && (
              <IconButton
                size="small"
                onClick={() => {
                  copy(props.label ?? "", props.value?.toString() ?? "");
                }}
              >
                <Icon width={16} icon="solar:copy-bold" />
              </IconButton>
            )}
          </Stack>
        )}
        {props.helper && (
          <Typography
            variant="caption"
            align={props.align}
            color="text.secondary"
          >
            {props.helper}
          </Typography>
        )}
      </Stack>
    </Tooltip>
  );
}
