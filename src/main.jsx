import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import About from './Components/About/About'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Homepage/>
      },
      {
        path: '/about',
        element: <About/>
      },

    ]
  }
])
createRoot(document.getElementById('root')).render(

  <RouterProvider router={route}/>

)
