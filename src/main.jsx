import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router';
import { PDFViewer } from './components/PDFViewer.tsx';

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  }, 
  // {
  //   path:"/resume",
  //   element:<PDFViewer/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
