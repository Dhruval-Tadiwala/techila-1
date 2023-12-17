import React from 'react'

const Section4 = () => {

    const teamsArray = [
        {
            logo: 'https://www.zerotier.com/static/8a85fc56f42df4c757170636612573f4/1e526/game_icon_eba3d81511.webp',
            text1: 'Individuals',
            text2: 'Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere',
            text3: 'Conveniently share files and data, or even play LAN games with others',
            text4: 'Manage secure network access to users of choice',
        },
        {
            logo: 'https://www.zerotier.com/static/a24340474cb83819c6d6a0f2a5c8b481/1e526/Cloud_Icon_3a0e68dbd5.webp',
            text1: 'IT Teams',
            text2: 'Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution',
            text3: 'Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface',
            text4: 'Easily provision remote access for all of your users',
        },
        {
            logo: 'https://www.zerotier.com/static/9805ec01fae783e135a667da3294ca30/1e526/Dev_Ops_Icon_007d67a039.webp',
            text1: 'DevOps',
            text2: 'Quickly build backplane networks spanning multiple cloud providers',
            text3: 'Save on performance, storage, and bandwidth',
            text4: 'Administrate and debug from anywhere',
            text5: 'Secure corporate network overlay and failover layer',
        },
        {
            logo: 'https://www.zerotier.com/static/1dd3895e75e865b9ea36aa98fb36dba5/1e526/Global_Network_Icon_e85c3eca3d.webp',
            text1: 'Embedded',
            text2: 'Enjoy vastly superior network control and functionality',
            text3: 'Develop and manage products or services running on their own decentralized networks',
            text4: 'Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM',
        },
    ]

  return (
    <>
         <div className='row'>
            <div className='col-md-12 text-center my-2'>
                <h1 className='fw-bold'>Secure networks for teams of any size</h1>
            </div>

            <div className='col-md-12 my-5'>
                <div className='row'>
                {
                    teamsArray?.map((team, index) => {
                        return(<div className='col-md-3' key={index}>
                            <div className='card text-center' style={{background: '#1A1A1A', color: 'white', border: '0px'}}>
                            <div className='card-body'>

                            <img src={team?.logo} title='logo' alt='logo' height={'150px'} width={'150px'} />

                            <h1 className='fw-bold my-3'>{team?.text1}</h1>
                            <h3 className='mb-5'>{team?.text2}</h3>
                            <h3 className='mb-5'>{team?.text3}</h3>
                            <h3 className='mb-5'>{team?.text4}</h3>
                            {team?.text5 && <h3 className='mb-5'>{team?.text5}</h3>}
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

export default Section4