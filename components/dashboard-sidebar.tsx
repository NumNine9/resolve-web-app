"use client"
import { BookOpen, Calendar, GraduationCap, LayoutDashboard, MessageSquare, Settings, Trophy } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function DashboardSidebar() {
  const pathname = usePathname()

  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      isActive: pathname === "/",
    },
    {
      title: "Courses",
      href: "/dashboard",
      icon: BookOpen,
      isActive: pathname === "/courses",
    },
    {
      title: "Calendar",
      href: "/dashboard",
      icon: Calendar,
      isActive: pathname === "/calendar",
    },
    {
      title: "Assignments",
      href: "/dashboard",
      icon: GraduationCap,
      isActive: pathname === "/assignments",
    },
    {
      title: "Messages",
      href: "/dashboard",
      icon: MessageSquare,
      isActive: pathname === "/messages",
      badge: "3",
    },
    {
      title: "Achievements",
      href: "/dashboard",
      icon: Trophy,
      isActive: pathname === "/achievements",
    },
  ]

  const secondaryNavItems = [
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      isActive: pathname === "/settings",
    },
    {
      title: "Help Center",
      href: "/help",
      icon: MessageSquare,
      isActive: pathname === "/help",
    },
  ]

  return (
    <Sidebar className="border-r border-[#3a3f61] bg-[#2e3251] text-white">
      <SidebarHeader className="py-4">
        <div className="flex items-center gap-2 px-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4169e1]">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold">Resolve</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={item.isActive}>
                <Link href={item.href} className="flex items-center">
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-[#4169e1] px-1.5 text-xs font-medium">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="mt-6 px-4 py-2">
          <h3 className="mb-2 text-xs font-medium uppercase text-gray-400">My Classes</h3>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/classes/programming">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Programming</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/classes/electronics">
                  <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                  <span>Electronics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/classes/robotics">
                  <div className="mr-2 h-2 w-2 rounded-full bg-purple-500" />
                  <span>Robotics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>

        <div className="mt-auto px-4 py-2">
          <SidebarMenu>
            {secondaryNavItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={item.isActive}>
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarFooter className="border-t border-[#3a3f61]">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Image
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIhABAQEAAQQCAgMAAAAAAAAAAAERITFBYXFRkYHwUqHh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDs8BYlSCpgLAoCc/AqAhnwqAm+Kp2IBvyvAAcns0kA4TlUAD+gFDfFUE1dQBdE+/oAqbVAQ1UAOgAuwxFAAAOFT8AAAbpDuAohwC8CRQRFoCJ+VwsAnsDkBU1dBO62L6TuCC2H4AEm0BQOQF0AKkgoIFAEVLoB+Yk1YBFRQAAQ+1ASwLoCgAAoHAk59KCUtEALBMBfpOq4dAJMBQNBICpqgILoB3MFBF0ABFBDgpnAGpfAbAIIugRUyrADVQDZ/ogChk+UBQk7LmdwRcAEFT2BidGkoJ6pt8UPIIu34hAAUANNAKbc7Jb5igguX+IAdCaYAACpT2uYCC378MgWJnlcMBFDjyAspACgZADAAE5AWkXEAVACm000DSh168eAQLP3QAzt2TlQFxP3DQVFMBFE79gXPKKAAAdwAIoAgAFQATOVQBoAA7ACVQBAAf/Z"
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">Grace Williams</p>
              <p className="text-xs text-gray-400">Student</p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

