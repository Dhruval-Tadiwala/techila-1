import React from 'react'

const Header = () => {
  return (
    <>
        <div class="card mt-5" style={{background: '#1A1A1A', color: 'white', border: '0px'}}>
            <div class="card-body">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h4>ZEROTIER</h4>
                    <div>
                        <span className='h5 me-5'>Features</span>
                        <span className='h5 me-5'>Pricing</span>
                        <span className='h5 me-5'>Download</span>
                        <span className='h5 me-5'>Company</span>
                        <span className='h5 me-5'>Support</span>
                    </div>
                    <div>
                        <span className='h5 me-5'>Login</span>
                        <button type='button' className='btn btn-outline-warning me-5 rounded-pill' ><span className='h5'>Sign Up</span></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header