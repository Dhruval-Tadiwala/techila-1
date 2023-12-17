import React from 'react'

const Section3 = () => {

    const teamsArray = [
        {
            mainText: 'Metropolis deploys computer vision in parking lots & car wash facilities across the US, integrating ZeroTier to eliminate the complexity of managing multiple, disparate networks to deliver a seamless, groundbreaking and world-class customer experience.',
            subText: 'TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS'
        },
        {
            mainText: 'In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us.',
            subText: 'PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY'
        },
        {
            mainText: 'ZeroTier provides a robust and essential backbone for our communications stack.',
            subText: 'ANDREW LIPSCOMB, MECHATRONICS ENGINEER, SWARMFARM ROBOTICS'
        },
        {
            mainText: 'Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple.',
            subText: 'BRUNSTON POON, SOFTWARE ENGINEER, LOFT ORBITAL'
        },
    ]

  return (
    <div className='container'>
         <div className='row'>
            <div className='col-md-12 text-center my-5'>
                <h1 className='fw-bold'>Used by the world's most innovative teams</h1>
            </div>

            <div className='col-md-12 my-5'>
                {
                    teamsArray?.map((team, index) => {
                        return(<div className='card my-5 p-5 gradient-card' key={index}>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-1'><img src='https://www.zerotier.com/static/6ef0d11bd53a0e07913da12681ac3522/c45f5/User_Icon_01c147556c.webp' title='user' alt='user' height={'60px'} width={'60px'} /></div>
                                    <div className='col-11'>
                                        <h3 className='mb-4'>{`"${team?.mainText}"`}</h3>
                                        <h4>{`${team?.subText}`}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
         </div>
    </div>
  )
}

export default Section3