import React from 'react'

const Section2 = () => {
  return (
    <>
        <div className='card my-3' style={{background: '#262626', color: 'white'}}>
            <div className='card-body'>
                <div className='row mt-5 d-flex align-items-center'>
                    <div className='col-md-6 px-5'>
                        <img src='https://www.zerotier.com/static/5e7354d2749f6a90d8ea8a64ec51423c/3fffc/Zero_Tier_smart_phone_in_hand_vector_illustration_dcd7d498ae.webp' title='VPN+SDWAN' alt='VPN+SDWAN' height={'100%'} width={'100%'} />
                    </div>
                    <div className='col-md-6'>
                        <h1 className='fw-bold mb-4'>It just works</h1>
                        <h3>ZeroTier combines the capabilities of <span className='fw-bold'>VPN</span> and <span className='fw-bold'>SD-WAN</span>, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.</h3>
                        
                        <button type='button' className='btn btn-outline-light me-5 mt-5 rounded-pill' ><span className='h5'>Learn More</span></button>
                        
                    </div>
                </div>
                <div className='row mt-5 d-flex align-items-center'>
                    
                    <div className='col-md-6 px-5'>
                        <h1 className='fw-bold mb-4'>Speed, flexibility, and security</h1>
                        <h3 className='mb-4'>Set up ZeroTier in minutes with remote, automated deployment.</h3>
                        <h3 className='mb-4'>Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities.</h3>
                        <h3 className='mb-4'>ZeroTier’s zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.</h3>
                        
                        <button type='button' className='btn btn-outline-light me-5 mt-5 rounded-pill' ><span className='h5'>Get Zero Tier</span></button>
                        
                    </div>

                    <div className='col-md-6 px-5'>
                        <img src='https://www.zerotier.com/static/78067775c199cfb1556608e9305183d0/6baf7/secure_technology_32950d4870.webp' title='Security' alt='Security' height={'100%'} width={'100%'} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section2