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

import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { SelectOption } from "@/app/data/interfaces/form.interface";
import Icon from "@/app/components/Icon";

interface Props {
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  reset: UseFormReset<any>;
  errors: FieldErrors<any>;
  control: Control<any>;

  label: string;
  name: string;
  options: SelectOption[];
  disabled?: boolean;
  loading?: boolean;
  multiselect?: boolean;
}

export default function Select(props: Props) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      disabled={props.disabled}
      render={({ field }) => !props.multiselect ? (
        <Autocomplete
          fullWidth
          loading={props.loading}
          options={props.options ?? []}
          value={props.watch()[props.name]}
          onChange={(_, value) =>
            value !== null
              ? props.setValue(props.name, value)
              : props.setValue(props.name, { label: "", value: "" })
          }
          renderInput={() => (
            <TextField
              fullWidth
              label={props.label}
              error={!!props.errors[props.name]}
              helperText={
                props.errors[props.name]
                  ? (props.errors[props.name] as FieldError)?.message
                  : ""
              }
              {...field}
            />
          )}
        />
      ) : (
        <Autocomplete
          multiple
          fullWidth
          disableCloseOnSelect
          loading={props.loading}
          options={props.options ?? []}
          value={props.watch()[props.name]}
          getOptionLabel={(option) => option.label}
          onChange={(_, value) =>
            value !== null
              ? props.setValue(props.name, value)
              : props.setValue(props.name, [])
          }
          renderOption={(inputProps, option, { selected }) => (
            <li {...inputProps}>
              <Checkbox
                icon={<Icon icon="material-symbols:check-box-outline-blank" />}
                checkedIcon={<Icon icon="material-symbols:check-box" />}
                checked={selected}
                style={{ marginRight: '.5rem'}}
              />
            </li>
          )}
          renderInput={() => (
            <TextField
              fullWidth
              label={props.label}
              error={!!props.errors[props.name]}
              helperText={
                props.errors[props.name]
                  ? (props.errors[props.name] as FieldError)?.message
                  : ""
              }
              {...field}
            />
          )}
        />
      )}
    />
  );
}
