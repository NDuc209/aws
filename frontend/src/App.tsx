import { RouterProvider } from "react-router-dom"
import { Toaster } from 'sonner'

import { router } from "@/app/router"
import { queryClient } from "@/lib/query-client"
import { QueryClientProvider } from "@tanstack/react-query"

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  )
}

export default App
