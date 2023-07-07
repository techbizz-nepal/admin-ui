import * as React from "react"

export interface InterfacePeople {
  name: string
  title: string
  department: string
  email: string
  role: string
  image: string
}

export interface InterfacePage {
  name: string
  href: string
  current: boolean
}

export interface InterfaceProject {
  name: string
  initials: string
  href: string
  members: number
  bgColor: string
}

export interface InterfaceUserNavigation {
  name: string
  href: string
}
export interface InterfaceNavigation {
  name: string
  href: string
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    } & React.RefAttributes<SVGSVGElement>
  >
  current: boolean
}