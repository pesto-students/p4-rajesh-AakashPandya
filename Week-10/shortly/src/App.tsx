import 'react-toastify/dist/ReactToastify.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ContactUs from 'pages/ContactUs'
import Home from 'pages/Home'
import Navbar from 'components/Navbar'
import { ROUTES } from 'enums/Routes'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.CONTACT_US,
    element: <ContactUs />,
  },
])

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  )
}

export default App
