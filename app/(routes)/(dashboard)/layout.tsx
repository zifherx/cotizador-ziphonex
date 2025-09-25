import { Metadata } from "next";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/App-Sidebar";

import { REACT_CHILDREN_TYPE } from "@/common/types";

export const metadata: Metadata = {
  title: {
    default: "CMS Dashboard",
    template: "",
  },
};

export default function DashboardLayout({ children }: REACT_CHILDREN_TYPE) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
