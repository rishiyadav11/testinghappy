import { useGSAP } from '@gsap/react'
import gsap from 'gsap/gsap-core'
import React from 'react'
import { rightImg, watchImg } from '../utils' 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Videocarosal from './Videocarosal';


gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
  useGSAP(()=>{
    gsap.to("#title",{
      opacity:1,
      y:0,
      scrollTrigger:{
        trigger:"#highlights",
        // markers:true,
        start:"top 77%",
        end:"top 75%",
        scrub:2,
      }
    })
    gsap.to(".link",{
      opacity:1,
      y:0,
      duration:1,
      stagger:0.25,
      scrollTrigger:{
        trigger:"#highlights",
        // markers:true,
        start:"top 75%",
        end:"top 73%",
        scrub:2,
      }
    })
  },[])
  return (
    <section id='highlights' className=' w-screen overflow-hidden h-full common-padding pt-0     bg-zinc'>
     
      <Videocarosal/>
    </section>
  )
}

export default Highlights