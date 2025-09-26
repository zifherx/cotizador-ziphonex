import {
  Calendar,
  Home,
  Inbox,
  Landmark,
  Search,
  Settings,
} from "lucide-react";
import { ISidebarMenuItem } from "../interfaces";

export const itemsSidebarDashboard: ISidebarMenuItem[] = [
  { id: 1, title: "Home", url: "#", icon: Home },
  { id: 2, title: "Inbox", url: "#", icon: Inbox },
  { id: 3, title: "Calendar", url: "#", icon: Calendar },
  { id: 4, title: "Search", url: "#", icon: Search },
  { id: 5, title: "Settings", url: "#", icon: Settings },
];

export const itemsSidebarDashboard_Ventas: ISidebarMenuItem[] = [
  { id: 1, title: "Cotizaciones", url: "#", icon: Landmark },
];
