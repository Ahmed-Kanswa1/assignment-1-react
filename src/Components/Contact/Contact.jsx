import React from 'react'

export default function Contact() {
  return (
    <>
    
    <div className="container">
    <div className="porto d-flex align-items-center justify-content-center flex-column">
      <h1 className="mt-5 ">CONTACT SECTION</h1>
      <div className="star">
    <i _ngcontent-gtt-c6="" className="fa-solid fa-star my-color"></i>
    </div>
      </div>
      <form className=" d-flex justify-content-center">
      <div className="inputs d-flex w-50  justify-content-center align-items-center flex-column">
        <input type="text" placeholder="User name" className="form-control border-0 border-bottom my-4 " />
        <input type="text" placeholder="User Age" className="form-control border-0 border-bottom my-4 " />
        <input type="text" placeholder="User Email" className="form-control border-0 border-bottom my-4 " />
        <input type="text" placeholder="User Password" className="form-control border-0 border-bottom my-4 " />
        <button className="btn rounded-2 my-4  me-auto">Send Message</button>
      </div>
      </form>
      
    </div>
    
    
    </>
  )
}
