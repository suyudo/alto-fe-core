export interface Menu {
  id: string;
  title: string;
  path: string;
  category?: string;
  icon?: string;
  badge?: React.ReactNode;
  key?: string | string[];
  children?: MenuChildren[]
}

export interface MenuChildren {
  id: string;
  title: string;
  path: string;
  badge?: React.ReactNode;
  key?: string | string[];
  children?: MenuChildren[];
}