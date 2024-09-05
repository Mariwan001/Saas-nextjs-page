'use client'


import Brands from '@/components/Brands'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Integrations from '@/components/Integrations'
import Testimonial from '@/components/Testimonial'
import Trail from '@/components/Trail'

import { ReactLenis} from 'lenis/dist/lenis-react'
const Home = () => {
  return (
    <>

    <ReactLenis root />
    <Hero />
    <Brands />
    <Features />
    <Integrations />
    <Testimonial />
    <Trail />
    <Footer />

    {/* <div className='h-[8000px]'></div> */}
    </>
  )
}

export default Home