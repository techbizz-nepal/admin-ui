"use client"

import { ReactNode, useContext } from "react"

import PermissionContext from "@/src/modules/rbac/domain/permission-context"
import { AllowedPermissions } from "@/src/modules/rbac/domain/types"

interface RestrictedProps {
  to: AllowedPermissions
  children: ReactNode
}

export default function Restricted({
  to,
  children,
}: RestrictedProps): ReactNode | null {
  const { isAllowedTo } = useContext(PermissionContext)

  if (isAllowedTo(to)) {
    return children
  }
}