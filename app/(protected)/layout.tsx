import "@/styles/globals.css"
import React from "react"
import {Metadata} from "next"
import ProtectedContainer from "@/app/(protected)/protected-container";
import {ApiResponse} from "@/src/types";
import {getServerSession, User} from "next-auth";
import {authOptions} from "@/auth/domain/config/auth-options";
import {
  GlobalDatasource
} from "@/src/modules/global/data/datasources/global-datasource";
import {IUserScreens} from "@/src/modules/global/domain/types/global-type";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

export const metadata: Metadata = {
  title: "Frontend Boilerplate NextJS",
  description: "Frontend boilerplate application using NextJS",
}

interface IRootLayout {
  children: React.ReactNode
}

async function RootLayout({children}: IRootLayout): Promise<JSX.Element | null> {
  const session = await getServerSession(authOptions)
  if (!session) return null
  const repo: GlobalDatasource = new GlobalDatasource()
  const userScreens: IUserScreens | null = await repo.fetchUserScreens(session.user.access)
  if (!userScreens) return null
  return (
    <ProtectedContainer sessionUser={session.user}
                        loggedInUserScreens={userScreens}>
      {children}
    </ProtectedContainer>
  )
}

export default RootLayout