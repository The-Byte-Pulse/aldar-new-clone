import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthRoutes from "./routes/AuthRoutes";


function App() {
  const router = createBrowserRouter([...AuthRoutes])

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App;
