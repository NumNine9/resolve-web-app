import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import "./globals.css"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import Dashboard from "./page"
import { supabase, useAuth } from "@/utils/supabase/client";
import { useRouter } from "next/router";
import { Button } from "@heroui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Educational platform dashboard for students",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();
  // const { user, isLoading } = useAuth();
  const handleSignOut = async () => {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Error signing out:', error.message);
        } else {
          console.log('User signed out successfully');
          alert('User signed out successfully');
          router.push('/')
          // Optionally, you can redirect the user to the login page or home page
        }
      } catch (error) {
        console.error('Unexpected error signing out:', error);
      }
    };
  return (
      <div className="bg-[#3a3f61]">
        <SidebarProvider>
          <DashboardSidebar />
          <SidebarInset>
            <header className="flex h-16 items-center border-b border-[#3a3f61] bg-[#5c6499] px-4 w-full z-10">
              <SidebarTrigger className="mr-4" />
              <div className="ml-auto flex items-center gap-4 bg-[#5c6499]">
              <Button
          // isExternal
          onPress={()=>handleSignOut()}
          // href="/signup"
          className="text-sm font-normal text-default-600 bg-default-100 ml-3"
          // href={siteConfig.links.sponsor}
          // startContent={<HeartFilledIcon className="text-danger" />}
          // variant="flat"
        >
          Sign Out
        </Button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3a3f61]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bell"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </button>
                <div className="h-8 w-8 rounded-full bg-[#4169e1] flex items-center justify-center">
                  <span className="text-sm font-medium">GW</span>
                </div>
              </div>
            </header>
            <div className="flex-1 overflow-y-auto">
              {/* {children} */}
              <Dashboard/>
            </div>
            
          </SidebarInset>
        </SidebarProvider>
      </div>
        
      
  )
}

