import './App.css'

// here we import these two items in order for us to be able to use routing. needs to be installed using "npm install react-router-dom"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import main layout
import RootLayout from './layouts/RootLayout'

// pages import
import ErrorPage from './pages/ErrorPage'
import Homepage from './pages/Homepage'
import CourseList from './pages/CourseList'
import Course from './pages/Course'

// this is the routing system
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,          // this is the layout page we're using
    errorElement: <ErrorPage />,      // this is the page we load in case the path doesn't exist
    children: [                       // the element "children" takes an array of objects containing paths and the element is the page to load
      { path: '/', element: <Homepage /> },             // the path '/ lads the Homepage page
      { path: '/courselist', element: <CourseList />},  // the path '/courselist' loads the CourseList page
      { path: '/course/:course', element: <Course /> }, // the '/course/:course' loads the Course page, '/:course' being the rest of the path we pass it in the Link in the CourseList page
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
