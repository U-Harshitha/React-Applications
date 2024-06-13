import React from 'react'
import './globals.css'
import { Routes, Route } from "react-router-dom";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
const App = () => {
  return (
    <main className='flex h-screen'>
        <h1>hiii</h1>
        <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
        </Route>
        </Routes>
    </main>
  )
}

export default App