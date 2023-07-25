import React, {ReactNode} from "react"

interface IShowMoreButton {
  itemCount: number
}

export function ShowMoreButton({
  itemCount,
}: IShowMoreButton): ReactNode | null {
  if (itemCount < 5) return null
  return (
    <div className="flex w-full justify-center items-center">
      <button type="button" className="primaryButtonStyle rounded-md text-2xl">
        Show More
      </button>
    </div>
  )
}
