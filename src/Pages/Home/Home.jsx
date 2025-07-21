import React from 'react'
import HeroSection from '../../Components/HeroSection'
import WelcomeSection from '../../Components/WelcomSection'
import Categories from '../../Components/Categories'
import FeaturedProducts from '../../Components/FeaturedProduct'
import Choose from '../../Components/Choose'
import BenefitsSection from '../../Components/BenefitsSection'
import Testimonials from '../../Components/Testimonials'

function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <WelcomeSection />
      <Categories />
      <FeaturedProducts />
      <Choose />
      <Testimonials />
    
    </div>
  )
}

export default Home
