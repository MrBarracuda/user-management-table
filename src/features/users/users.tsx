import { useGetUsersQuery } from "@/features/users/usersApiSlice"
import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import { Suspense } from "react"

export const Users = () => {
  const { data, isError, isSuccess } = useGetUsersQuery(10)

  if (isError) {
    return <h1>There was an error!!!</h1>
  }

  if (isSuccess) {
    return (
      <Suspense fallback={<Loading />}>
        <DataTable columns={columns} data={data} />
      </Suspense>
    )
  }
}

function Loading() {
  return <div>Loading...</div>
}
