import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, DashboardLayout, Admin, Error, Login, Stats, AddJob, AllJobs, EditJob, Profile, Landing, Register, DeleteJob } from './pages/index'

// Define routes here for the app
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />, // We set for errorElement to the error page
    children: [
      {
        index: true, // We set the default route to the landing page
        element: <Landing /> 
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
      },
    ]
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/edit-job/:id',
    element: <EditJob />
  },
  {
    path: '/delete-job/:id',
    element: <DeleteJob />
  },
  {
    path: '*',
    element: <Error />
  }
])


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
