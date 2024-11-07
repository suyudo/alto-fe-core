import { enqueueSnackbar } from "notistack";

export const copy = (name: string, value: string) => {
  navigator.clipboard.writeText(value);

  return enqueueSnackbar(
    name ? `${name} copied!` : "Copied!",
    {
      variant: "success",
    }
  );
};