import React from "react"
import {
  IScreen
} from "@/src/modules/global/domain/types/repository/global-repository";
import {usePathname} from "next/navigation";
import getHelpers from "@/src/modules/global/domain/utils/helpers";
import {IconSet} from "@/src/modules/global/domain/types/helpers";
import Link from "next/link";

interface INavigationAnchorProps {
  screen: IScreen
  handleGetIcon: (keyName: keyof IconSet, additionalClass?: string) => JSX.Element | null
  handleNavigation: (screen: IScreen) => void
}

export default function NavAnchor({
                                    screen,
                                    handleGetIcon,
                                    handleNavigation
                                  }: INavigationAnchorProps): JSX.Element {
  const pathname = usePathname()
  return (
    <Link
      onClick={(e):void => handleNavigation(screen)}
      key={screen.name}
      href={screen.slug}
      className={
        getHelpers().joinClasses(
          pathname.includes(screen.slug)
            ? "bg-teal-800 text-white"
            : "text-teal-100 hover:bg-teal-600",
          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
        )
      }
    >
      {handleGetIcon(screen.slug, "mr-4 h-6 w-6 flex-shrink-0 text-teal-300")}
      {screen.name}
    </Link>
  )
}
