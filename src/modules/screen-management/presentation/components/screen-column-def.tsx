import { Screen } from "@/screen-management/domain/types"
import { ColumnDef } from "@tanstack/react-table"

export const screenColumnDef: ColumnDef<Screen>[] = [
  {
    accessorKey: "name",
    header: "Screen",
  },
  {
    id: "route",
    accessorKey: "slug",
    header: "Route",
  },
]
