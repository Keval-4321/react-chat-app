import React from 'react'
import { Outlet } from 'react-router-dom';

function Default() {
  return (
    <>
        <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Default;
