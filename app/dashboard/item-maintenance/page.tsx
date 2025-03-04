import { Payment, columns } from "@/app/dashboard/item-maintenance/columns"
import { DataTable } from "@/app/components/Data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
        code: "341350A-P",
        item: "EXTECH OYSTER SERIES PH/COND/TDS METER",
        class: "WATER 7",
        price: 681.60,
        status: true,
    },
    {
        code: "341350A-P",
        item: "EXTECH OYSTER SERIES PH/COND/TDS METER",
        class: "WATER 7",
        price: 681.60,
        status: true,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto p-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
