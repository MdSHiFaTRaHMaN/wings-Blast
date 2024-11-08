import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import AuthProvider from './authprovider/AuthProvider'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </StrictMode>,
  </AuthProvider>

)

