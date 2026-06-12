import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData=[
        {
            title:'Advertising',
            description:"we turn bold ideas into powerful digital solutions that connect ,engage...",
            icon:assets.ads_icon
        },
        {
            title:'Content marketing',
            description:'We help you execute your plan and deliver results.',
            icon:assets.marketing_icon
        },
        {
            title:'Content writing',
            description:'we help you create a marketing strategy that drives results and many more to go',
            icon:assets.content_icon
        },
        {
            title:'Social media',
            description:'We help you build a strong media presence and engage with your aaudience ',
            icon:assets.social_icon
        }

    ]
  return (
    <div id="services" className='scroll-mt-24 relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
        <Title title='How can we help?' desc='From strategy to execution ,we craft digital solutions that move our business forward.'/>
        <div className='flex flex-col md:grid grid-cols-2 items-stretch'>
            {servicesData.map((service,index)=>(<ServiceCard key={index} service={service} index={index}/>
        ))}
        </div>
      
    </div>
  )
}

export default Services
