import React from 'react'
import spinnerimg from "../assets/spinner.gif"
const Loader = () => {
  return (
    <>
    <div className="text-center">
        <img src={spinnerimg} alt="" />
    </div>
    </>
  )
}

export default Loader