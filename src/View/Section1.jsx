import React from 'react'

const Section1 = () => {
  return (
    <>
        <div className='row'>
            <div className='col-md-6'>
                <h1 style={{fontSize: '70px'}}>
                    Securely connect any device, anywhere.
                </h1>
                <h3 className='mt-5' style={{fontSize: '38px'}}>
                ZeroTier lets you build modern, secure multi-point virtualized networks of almost any type. From robust peer-to-peer networking to multi-cloud mesh infrastructure, we enable global connectivity with the simplicity of a local network.
                </h3>
            </div>
        </div>
        <div className='mt-5 d-flex align-items-center'>
            <button type='button' className='btn btn-outline-warning me-5 rounded-pill' ><span className='h5'>Sign Up</span></button>
            <span className='h5 me-5'>Learn more </span>
        </div>
        <div className='text-center my-5'>
            <h4>🔔 NEW! ZeroTier Webhooks - Current Release: Download ZeroTier 1.12.2</h4>
        </div>
    </>
  )
}

export default Section1