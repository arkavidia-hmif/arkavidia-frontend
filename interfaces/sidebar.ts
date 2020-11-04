export interface SidebarEntry {
  text: string;
  image?: string;
  widget?: string;
  param?: string;
}

export interface SidebarGroup {
  name: string;
  item: SidebarEntry[];
}
