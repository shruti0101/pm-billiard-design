import React from 'react'
  import MagicBento from '@/components/MagicBento'
const Premium = () => {
  return (
    <div>
      <section className='w-full bg-[#073147] py-4 '>



<MagicBento 
  textAutoHide={false}
  
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
  clickEffect
  spotlightRadius={800}
  particleCount={32}
  glowColor="74, 222, 128"
  disableAnimations={false}
/>
</section>
    </div>
  )
}

export default Premium