import type { User } from "next-auth";

import Image from "next/image";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbList,
//   BreadcrumbPage,
// } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { LogoutButton } from "@/components/logout-button";

export async function AppSidebarNav({ user }: { user: User }) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        {/* <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                Project Management & Task Tracking
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
      </div>
      <div className="ml-auto px-6 flex flex-row gap-8 items-center justify-center">
        <div className="flex flex-row gap-4 justify-center items-center">
          <Image
            src={user.image || ""}
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>{user.name}</span>
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}
