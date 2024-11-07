import { Menu } from "@/app/data/interfaces/menu.interface";
import { List, Typography } from "@mui/material";
import MenuSingle from "./MenuSingle";
import MenuGroup from "./MenuGroup";

type Props = {
  menu: Menu[];
};

const SidebarMenu = (props: Props) => {
  return (
    <>
      {props.menu?.map((item, idx) => {
        return (
          <List
            key={`${idx}_${item}`}
            subheader={
              item.category && (
                <Typography
                  sx={{
                    fontSize: 11,
                    cursor: "pointer",
                    typography: "overline",
                    display: "inline-flex",
                    color: "text.disabled",
                    mb: `4px`,
                    p: (theme) => theme.spacing(2, 1, 1, 1.5),
                    transition: (theme) =>
                      theme.transitions.create(["color"], {
                        duration: theme.transitions.duration.shortest,
                      }),
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  {item.category}
                </Typography>
              )
            }
            sx={{
              py: 0.25,
              pt: item.category ? 1 : 0,
            }}
          >
            {item.children ? (
              <>
                <MenuGroup item={item} level={1} />
              </>
            ) : (
              <>
                <MenuSingle item={item} level={1} />
              </>
            )}
          </List>
        );
      })}
    </>
  );
};

export default SidebarMenu;
