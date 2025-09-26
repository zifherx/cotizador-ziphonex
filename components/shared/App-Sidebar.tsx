"use client";

import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";

import { CustomSidebarHeader } from "./Custom-Sidebar-Header";
import { CustomSidebarFooter } from "./Custom-Sidebar-Footer";

import {
  itemsSidebarDashboard,
  itemsSidebarDashboard_Ventas,
} from "@/common/data";

export function AppSidebar() {
  const { state, open } = useSidebar();

  console.log("STATE: ", state);
  console.log("OPEN: ", open);

  return (
    <Sidebar>
      <CustomSidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsSidebarDashboard.map(({ id, icon: Icon, title, url }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton asChild>
                    <Link href={url}>
                      <Icon />
                      <span>{title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Ventas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsSidebarDashboard_Ventas.map(
                ({ id, icon: Icon, title, url }) => (
                  <SidebarMenuItem key={id}>
                    <SidebarMenuButton asChild>
                      <Link href={url}>
                        <Icon />
                        <span>{title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <CustomSidebarFooter />
    </Sidebar>
  );
}
