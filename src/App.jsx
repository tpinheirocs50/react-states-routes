import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import main layout
import RootLayout from './layouts/RootLayout'

// pages import
import ErrorPage from './pages/ErrorPage'
import Homepage from './pages/Homepage'
import CourseList from './pages/CourseList'
import Course from './pages/Course'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/courselist', element: <CourseList />},
      { path: '/course/:course', element: <Course /> },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />
}

export default App
