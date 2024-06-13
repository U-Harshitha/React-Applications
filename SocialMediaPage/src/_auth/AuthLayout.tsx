import {Outlet, Navigate} from 'react-router-dom';
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
    {isAuthenticated}?(
    <div>AuthLayout</div>
    </>
  )
}

export default AuthLayout
