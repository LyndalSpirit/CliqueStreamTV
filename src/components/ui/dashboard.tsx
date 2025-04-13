"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="font-bold">CliqueStream</span>
            </div>
          </SidebarHeader>
          <SidebarInput placeholder="Search..." />
          <SidebarSeparator />
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.file className="mr-2 h-4 w-4" />
                  <span>Content</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.user className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>AI Tools</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.wand className="mr-2 h-4 w-4" />
                  <span>AI Scripting</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icons.imagePlus className="mr-2 h-4 w-4" />
                  <span>AI Image Generation</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/50/50" alt="Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>User Name</span>
            </div>
            <ThemeToggle />
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
