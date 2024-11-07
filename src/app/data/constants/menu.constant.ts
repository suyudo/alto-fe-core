import { Menu } from "@/app/data/interfaces/menu.interface";

export const menu: Menu[] = [
  {
    id: "transaction",
    title: "Transaction",
    path: "/dashboard",
    icon: "ph:money-wavy-duotone",
    children: [
      {
        id: "transaction-cardless",
        title: "Cardless",
        path: "transaction/cardless"
      },
      {
        id: "transaction-wacommerce",
        title: "WA Commerce Transaction",
        path: "transaction/wacommerce"
      },
    ]
  },
];
