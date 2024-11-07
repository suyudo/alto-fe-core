import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import {
  DesktopDatePicker,
  DesktopDateTimePicker,
  DesktopTimePicker,
} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import Typography from "@mui/material/Typography";

interface Props {
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  reset: UseFormReset<any>;
  errors: FieldErrors<any>;
  control: Control<any>;

  label: string;
  name: string;
  type: "dateonly" | "datetime" | "timeonly";
  format: string;
  disabled?: boolean;
  minDate?: string;
  maxDate?: string;
}

export default function DatePicker(props: Props) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      disabled={props.disabled}
      render={({ field }) =>
        props.type === "dateonly" ? (
          <>
            <DesktopDatePicker
              label={props.label}
              minDate={dayjs(props.minDate)}
              maxDate={dayjs(props.maxDate)}
              format={props.format}
              onChange={(date: Dayjs | null) =>
                props.setValue(props.name, dayjs(date).format(props.format))
              }
              sx={{
                width: "100%",
              }}
            />
            {props.errors[props.name] && (
              <Typography variant="caption" color="error.main" m={1}>
                {(props.errors[props.name] as FieldError)?.message}
              </Typography>
            )}
          </>
        ) : props.type === "datetime" ? (
          <>
            <DesktopDateTimePicker
              label={props.label}
              minDate={dayjs(props.minDate)}
              maxDate={dayjs(props.maxDate)}
              format={props.format}
              onChange={(date: Dayjs | null) =>
                props.setValue(props.name, dayjs(date).format(props.format))
              }
              sx={{
                width: "100%",
              }}
            />
            {props.errors[props.name] && (
              <Typography variant="caption" color="error.main" m={1}>
                {(props.errors[props.name] as FieldError)?.message}
              </Typography>
            )}
          </>
        ) : (
          <>
            <DesktopTimePicker
              label={props.label}
              format={props.format}
              onChange={(date: Dayjs | null) =>
                props.setValue(props.name, dayjs(date).format(props.format))
              }
              sx={{
                width: "100%",
              }}
            />
            {props.errors[props.name] && (
              <Typography>
                {(props.errors[props.name] as FieldError)?.message}
              </Typography>
            )}
          </>
        )
      }
    />
  );
}
