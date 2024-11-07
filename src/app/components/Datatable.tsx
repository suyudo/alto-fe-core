import { TableProps, TableStyles } from "react-data-table-component";
import { default as DT } from "react-data-table-component";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Box,
  Stack,
  SvgIcon,
} from "@mui/material";
import Icon from "@/app/components/Icon";

interface Props extends TableProps<any> {
  errorMessage?: string;
  disableRowsPerPage?: boolean;
}

export default function Datatable(props: Props) {
  const theme = useTheme();

  const datatableCustomStyle: TableStyles = {
    rows: {
      style: {
        minHeight: "3.5rem",
      },
    },
    headCells: {
      style: {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.action.disabledBackground,
        fontFamily: theme.typography.fontFamily,
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        fontSize: "1rem",
        fontWeight: 700,
      },
    },
    cells: {
      style: {
        fontSize: ".9rem",
        cursor: "default",
      },
    },
  };

  const Empty = (
    <Card
      sx={{
        width: "100%",
        color: theme.palette.warning.darker,
        backgroundColor: theme.palette.warning.lighter,
        p: "1rem",
      }}
    >
      <CardContent>
        <Box>
          <Stack alignItems="center" gap={1}>
            <SvgIcon fontSize="medium" inheritViewBox>
              <Icon width={32} icon="solar:magnifer-line-duotone" />
            </SvgIcon>
            <Typography variant="subtitle2" align="center">
              Data empty or not available.
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );

  const Spinner = (
    <Box sx={{ p: { xs: 3, sm: 4, xl: 5 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress size="2.5rem" />
      </Box>
    </Box>
  );

  return (
    <Box>
      <DT
        style={{
          ".rdt_TableHeadRow": {
            textTransform: "uppercase",
          },
        }}
        sortServer
        fixedHeader
        fixedHeaderScrollHeight="100vh"
        customStyles={datatableCustomStyle}
        columns={props.columns}
        data={props.data}
        noDataComponent={Empty}
        pagination={props.pagination ?? true}
        paginationServer={props.paginationServer ?? true}
        paginationPerPage={props.paginationPerPage}
        paginationRowsPerPageOptions={props.paginationRowsPerPageOptions}
        paginationComponentOptions={{ noRowsPerPage: props.disableRowsPerPage }}
        progressComponent={Spinner}
        conditionalRowStyles={props.conditionalRowStyles}
      />
    </Box>
  );
}
