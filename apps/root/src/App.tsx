import { lazy, Suspense } from "react"

const AdminRemotePage = lazy(() => import("admin/AdminPage"))

function App() {
  return (
    <div className="App">
      <h1>ROOT</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <AdminRemotePage />
      </Suspense>
    </div>
  )
}

export default App
