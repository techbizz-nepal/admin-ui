"use client"

import React, {Suspense} from "react";
import SidebarDesktop
  from "@/src/modules/dashboard/presentation/components/sidebar-desktop";
import Navbar from "@/src/modules/dashboard/presentation/components/navbar";
import {useHydrateAtoms} from "jotai/utils";
import {User} from "next-auth";
import {IScreen} from "@/src/modules/global/domain/types/global-type";
import {
  sessionUserAtom,
  userScreensAtom
} from "@/src/modules/global/domain/states/global-atoms";

interface IProtectedContainerProps {
  loggedInUserScreens: IScreen[]
  sessionUser: User,
  children: React.ReactNode
}

function ProtectedContainer({
                              children,
                              sessionUser,
                              loggedInUserScreens
                            }: IProtectedContainerProps): JSX.Element {

  useHydrateAtoms([[userScreensAtom, loggedInUserScreens], [sessionUserAtom, sessionUser]])
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <aside
        className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <SidebarDesktop/>
      </aside>

      <main>
        <div className="flex flex-1 flex-col md:pl-64">
          <Navbar/>
          {children}
        </div>
      </main>
    </Suspense>
  )
}

export default ProtectedContainer
