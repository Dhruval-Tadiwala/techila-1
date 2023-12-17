import React from 'react'

const Section6 = () => {

    const footerList = [
        'GET STARTED', 'SUPPORT', 'COMPANY', 'Download', 'Documentation', 'Contact', 'GitHub', 'Knowledge Base', 'About Us', 'SDK', 'Community', 'Careers', 'Partners', 'Getting Started', 'Blog', 'Media Kit',
    ]

  return (
    <>
    <div className='card my-5' style={{background: '#4436CA', color: 'white', borderRadius: "30px"}}>
        <div className='card-body'>
            <div className='row mt-5 d-flex align-items-center'>
                
                <div className='col-md-6 ps-5'>
                    <h1 className='fw-bold mb-4'>ZeroTier Enterprise</h1>
                    <h3 className='mb-4'>For high-volume VPN, IoT, IIoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.</h3>
                    
                    <button type='button' className='btn btn-outline-warning me-5 mt-5 rounded-pill' ><span className='h5'>Contact Sales</span></button>
                    
                </div>

                <div className='col-md-6 d-flex justify-content-end pe-5'>
                    <img src='https://www.zerotier.com/static/7f3f0800479132383698966a2145ee76/1e526/Continuous_Integration_ee887d3f58.webp' title='Security' alt='Security' height={'65%'} width={'65%'} />
                </div>
            </div>
        </div>
    </div>

    <div className='card my-5' style={{background: '#4436CA', color: 'white', borderRadius: "30px"}}>
        <div className='card-body'>
            <div className='row mt-5 d-flex align-items-center'>
                <div className='col-md-6 px-5'>
                    <img src='https://www.zerotier.com/static/c079e7ff52368ba0a4fad799a1af1192/1e526/Sales_Graphs_Art_dc7e900aa6.webp' title='VPN+SDWAN' alt='VPN+SDWAN' height={'65%'} width={'65%'} />
                </div>
                <div className='col-md-6'>
                    <h1 className='fw-bold mb-4'>Service Providers</h1>
                    <h3>For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators.</h3>
                    
                    <button type='button' className='btn btn-outline-warning me-5 mt-5 rounded-pill' ><span className='h5'>Contact SP Sales</span></button>
                    
                </div>
            </div>
        </div>
    </div>

    <div className='card my-5' style={{background: '#262626', color: 'white', borderRadius: "30px"}}>
        <div className='card-body p-5'>
            <h1 className='fw-bold mb-4'>Open Source Community Edition</h1>
            <h3 className='mb-5'>Featuring unlimited nodes, networks, and admins. Self-hosted. Designed for non-Commercial Use cases.</h3>

             <div className='d-flex'>
                <button type='button' className='btn btn-outline-light me-5 rounded-pill' ><span className='h5'>ZeroTier Github</span></button>
                <h4>Read Documentation</h4>
            </div>
        </div>
    </div>
    
    <div className='card my-5' style={{background: 'black', color: 'white', borderRadius: "30px"}}>
        <div className='card-body p-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='fw-bold mb-4'>Newsletter Signup</h1>
                </div>
                <div className='col-md-9'>
                    <h3 className='mb-5'>Join over 350,000 community members worldwide and receive the latest news from Team ZeroTier.</h3>
                </div>
                <div className='col-md-3'>
                    <div className='row'>
                        <div className='col-6'>
                            <input type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className='col-6'>
                            <button type='button' className='btn btn-outline-success rounded-pill' ><span className='h5'>Subscribe</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='card my-5' style={{background: '#1A1A1A', color: 'white', border: '0px'}}>
        <div className='card-body p-5'>
            <div className='row mb-5'>
                <div className='col-md-6'>
                    <h3 className='mb-4'>ZEROTIER</h3>
                    <h4 className=''>Securely Connecting The World's Devices.</h4>
                </div>
                <div className='col-md-6'>
                    <div className='row d-flex justify-content-end'>
                        {
                            footerList?.map((footer, index) => {
                                return (
                                    <div key={index} className='col-md-4 mb-3'>
                                        <h4>{footer}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <di>
                    <h3 className='mb-4'>© 2023 ZeroTier, Inc. All rights reserved.</h3>
                </di>
                <div className='d-flex'>
                    <h3 className='mb-4 me-5'>Terms</h3>
                    <h3 className='mb-4'>Privacy Policy</h3>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Section6