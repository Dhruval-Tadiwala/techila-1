import React from 'react'

const Section5 = () => {
    const teamsArray = [
        {
            logo: 'https://www.zerotier.com/static/e92607a0214589a500caf5cae2f11090/b16a9/Zero_Tier_Logo_Inverted_White_73e6fee0b9.webp',
            title: 'Basic',
            sub: 'For Everyone / ZeroTier Hosted Controller',
            textArray: [
                '✔ 1 Admin', '✔ 25 Nodes', '✔ Unlimited Networks', '❌ Business SSO: n/a', '✔ Community Support', 'FREE',
            ],
            btnText: 'Free Sign Up',
            btnType: 'btn btn-outline-light',
        },
        {
            logo: 'https://www.zerotier.com/static/794e03fb936295d0ab7d53d51d73550b/b16a9/Zero_Tier_Logo_Orange_a60eff7c4a.webp',
            title: 'Professional',
            sub: 'Licensed Only For Individuals and Testing',
            textArray: [
                '✔  Admins | $10 USD/mo each', '✔ 25 Node Packs | $5 USD/mo', '✔ Unlimited Networks', '✔ Business SSO | $5 USD/mo per seat', '✔ Community Support', 'Starting at $5 USD/month',
            ],
            btnText: 'Sign Up',
            btnType: 'btn btn-outline-success',
        },
        {
            logo: 'https://www.zerotier.com/static/dccd19c2abf4ded3547eda65dab7d02e/b16a9/Zero_Tier_Logo_Blue_1c2a591633.webp',
            title: 'Business',
            sub: 'Licensed for Commercial Deployments',
            textArray: [
                'Use Cases Include:', '∙ IoT/IIoT', '∙ SD-WAN', '∙ VPN', '∙ Remote Monitoring and Management', 'Contact Sales for Pricing',
            ],
            btnText: 'Contact Sales',
            btnType: 'btn btn-outline-primary',
        },
    ]
  return (
    <>
         <div className='row'>
            <div className='col-md-12 text-center my-2'>
                <h1 className='fw-bold'>Pricing</h1>
                <h4 className=''>ZeroTier makes networking easy for everyone - anywhere.</h4>
            </div>

            <div className='col-md-12 my-5'>
                <div className='row'>
                {
                    teamsArray?.map((team, index) => {
                        return(<div className='col-md-4' key={index}>
                            <div className='card text-center' style={{background: '#262626', color: 'white'}}>
                            <div className='card-body'>

                            <img src={team?.logo} title='logo' alt='logo' height={'100px'} width={'100px'} />

                            <h1 className='fw-bold my-3'>{team?.title}</h1>
                            <h4 className='mb-5'>{team?.sub}</h4>
                            {
                                team?.textArray?.map((text, indexVal) => {
                                    return(
                                        <h3 key={indexVal} className='mb-5'>{text}</h3>
                                    )
                                })
                            }
                            <button type='button' className={`${team?.btnType} me-5 rounded-pill`} ><span className='h5'>{team?.btnText}</span></button>
                            </div>
                            </div>
                        </div>)
                    })
                }
                </div>
            </div>
         </div>
    </>
  )
}

export default Section5