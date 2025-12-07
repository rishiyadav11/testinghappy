// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap/gsap-core';
// import React, { useEffect, useState } from 'react'
// import { heroVideo, smallHeroVideo } from '../utils';

// const Hero = () => {
//   const [videosrc, setvideosrc] = useState(window.innerWidth<760 ? smallHeroVideo : heroVideo)
//   const handleVideoSrcset =() => {
//     if(window.innerWidth<760){
//       setvideosrc(smallHeroVideo)
//     }else{
//       setvideosrc(heroVideo)
//     }
//   }

//   useEffect(()=>{
//     window.addEventListener('resize', handleVideoSrcset);
//     return()=>{ window.removeEventListener('resize', handleVideoSrcset)}
//   },[])
//   useGSAP(() => {
//     gsap.to("#hero",{
//       opacity:1,
//       delay:1.5,
//     })
//     gsap.to("#cta",{
//       opacity:1,
//       y:-100,
//       delay:1.8,
//       // ease:"expo.in",
//       duration:0.5,
//       stagger:0.1,
//     })
//   },[]);
//   return (
//     <section className='w-full nav-height bg-black relative'>
//       <div className="h-5/6 w-full flex-center flex-col ">
//         <p id='hero' className='hero-title'>Happy Laptops & Computers</p>
       
//       </div>
//       <div className="flex flex-col items-center ">
//         <a id='cta'  href="#highlights" className='btn opacity-0  translate-y-20'>Buy</a>
//         <p id='cta'  className='font-normal text-2xl opacity-0  translate-y-20'>From 134900.00*</p>
//       </div>
//     </section>
//   )
// }

// export default Hero





import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "./ui/Herogallery"


const IMAGES = [
  "https://p3-ofp.static.pub/fes/cms/2023/03/17/4yhpixth1hb3surortvy598j94erfo019620.png",
  "https://www.designstub.com/png-resources/wp-content/uploads/2022/12/Macbook-laptop.png",
  "https://pngimg.com/d/printer_PNG101578.png",
  "https://i.pinimg.com/736x/97/d2/ab/97d2ab5add13b29f1501449fa3960e70.jpg",
  "https://storage-asset.msi.com/event/2022/cnd/best-gaming-desktop-pc/images/kv-pd.png",
]
const HeroDemo1 = () => {
  return (
    <ContainerScroll className="h-[350vh]">
      {/* Image grid */}
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((imageUrl, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <img
              className="size-full object-cover object-center"
              src={imageUrl}
              alt=""
            />
          </BentoCell>
        ))}
      </BentoGrid>

      {/* HERO CONTENT */}
      <ContainerScale className="relative z-20 flex flex-col items-center">

  {/* Laptop Screen */}
  <div
    className="
      relative mx-auto max-w-3xl w-[90%]
      bg-black backdrop-blur-xl
      rounded-t-3xl border border-white/20
      shadow-[0_0_50px_rgba(255,255,255,0.2),0_20px_60px_rgba(0,0,0,0.6)]
      px-10 py-12
      overflow-hidden
    "
  >

    {/* Screen Inner Glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

    {/* Screen Bezel */}
    <div className="absolute top-0 left-0 w-full h-6 bg-black/40 rounded-t-3xl"></div>

    {/* Camera Dot */}
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black/70 ring-2 ring-white/20"></div>

    {/* Content */}
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
      Happy Laptops & Computers
    </h1>

    <p className="mt-4 text-lg md:text-xl text-gray-200">
      Sales • Services • Laptop Repair • Computer Repair • Accessories
    </p>

    <p className="mt-3 text-sm text-gray-100">
      Best prices, fast service and trusted support for all your devices.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <a
        href="#products"
        className="px-6 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition-all"
      >
        Explore Products
      </a>

      <a
        href="#contact"
        className="px-6 py-3 rounded-full border border-white/80 text-white font-semibold hover:bg-white/20 transition-all"
      >
        Contact Us
      </a>
    </div>

  </div>

  {/* Hinge */}
  <div
    className="
      w-[88%] max-w-3xl h-3 
      bg-gradient-to-b from-gray-700 to-gray-900 
      border-x border-white/10
      shadow-inner
      rounded-b-xl
    "
  ></div>

  {/* Laptop Base */}
  <div
    className="
      w-[95%] max-w-4xl h-7 
      bg-gradient-to-b from-gray-300 to-gray-500 
      rounded-b-2xl 
      border border-t-0 border-white/20 
      shadow-[0_4px_20px_rgba(0,0,0,0.6)]
    "
  ></div>

  {/* Reflection */}
  <div
    className="
      w-[80%] max-w-3xl h-6
      bg-gradient-to-t from-white/10 to-transparent
      rounded-xl blur-sm mt-2
    "
  ></div>

</ContainerScale>

    </ContainerScroll>
  );
};

export default function Hero() {
  return <HeroDemo1 />
}
