import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";

const Videocarosal = () => {
  const videoRef = useRef([]);

  const [video, setVideo] = useState({
    startPlay: false,
    videoId: 0,
  });

  const { videoId, startPlay } = video;

  // GSAP Slider Animation
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
        }));
      },
    });
  }, [videoId]);

  // Autoplay & loop logic
  useEffect(() => {
    if (startPlay && videoRef.current[videoId]) {
      videoRef.current[videoId].play();
    }
  }, [videoId, startPlay]);

  const handleVideoEnd = (i) => {
    if (i !== hightlightsSlides.length - 1) {
      setVideo((pre) => ({ ...pre, videoId: i + 1 }));
    } else {
      // restart again from video 0
      setVideo((pre) => ({ ...pre, videoId: 0 }));
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  muted
                  preload="auto"
                  className={`${
                    list.id === 2 && ""
                  } pointer-events-none`}
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() => handleVideoEnd(i)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Videocarosal;
