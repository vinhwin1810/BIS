"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  code: string
  item: string
  class: string
  price: number
  status: boolean
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "code",
    header: "Inv Code",
  },
  {
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "class",
    header: "Inv Class",
  },
  {
    accessorKey: "price",
    header: "List Price",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
 
      return formatted
    },
  },
  {
    accessorKey: "status",
    header: "Active Inactive",
  },
]
