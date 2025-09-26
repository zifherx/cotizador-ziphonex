"use client";

import { Bell, ChevronsUpDown, CreditCard, LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function CustomSidebarFooter() {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>FR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">FHRQ</span>
                  <span className="text-xs">frojasq@ziphonex-com</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-[250px] mb-4">
              <DropdownMenuItem>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>FR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">FHRQ</span>
                  <span className="text-xs">frojasq@ziphonex-com</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User /> Cuenta
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard /> Facturación
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell /> Notificaciones
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut /> Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
