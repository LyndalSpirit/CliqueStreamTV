"use client";

import { useState, useEffect } from 'react';
import { Button } from "../components/ui/button";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../components/ui/sidebar";
import { Toaster } from "../components/ui/toaster";
import { Icons } from '../components/icons';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Card, CardContent } from "../components/ui/card";
import Image from 'next/image';


const videoPlaceholders = [
  "https://picsum.photos/854/480",
  "https://picsum.photos/854/481",
  "https://picsum.photos/854/482",
  "https://picsum.photos/854/483",
  "https://picsum.photos/854/484",
  "https://picsum.photos/854/485",
];

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'purple-haze' | 'sunset'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'purple-haze' | 'sunset') => {
    setTheme(newTheme);
  };

  return (
    <>
      <SidebarProvider>
        <div className="flex h-screen bg-background">
          <Sidebar collapsible="icon">
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Link href="/" className="flex-1">Home</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Link href="#" className="flex-1">Trending</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Link href="#" className="flex-1">Subscriptions</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Link href="/ai-content-creator" className="flex-1">AI Content Creator</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="default">
                  Login/Signup
                </Button>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Icons.settings />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleThemeChange('light')}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleThemeChange('dark')}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleThemeChange('purple-haze')}>
                    Purple Haze
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleThemeChange('sunset')}>
                    Sunset
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <h1 className="text-2xl font-bold mt-4">Welcome to CliqueStream</h1>
              <p className="text-muted-foreground">Check out the latest content</p>
              <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {videoPlaceholders.map((src, index) => (
                  <Card key={index}>
                    <CardContent className="p-0">
                      
                        <Image
                          src={src}
                          alt={`Mockup Video ${index + 1}`}
                          width={854}
                          height={480}
                          className="w-full aspect-video object-cover rounded-md"
                        />
                      
                      
                    </CardContent>
                  </Card>
                ))}
              </div>
          </main>

          <Toaster />
        </div>
      </SidebarProvider>
    </>
  );
}





