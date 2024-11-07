import dayjs from "dayjs";

import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ThemeConfig from "@/theme";


require("dayjs/locale/id");
dayjs.locale("id");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export default function CoreApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeConfig>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeConfig>
      </LocalizationProvider>
    </>
  )
}
