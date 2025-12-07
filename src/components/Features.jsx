import InteractiveBentoGallery from "./ui/Gallery"

function Features() {
 const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "MacBook Series",
    desc: "Powerful performance with sleek design.",
    url: "https://i.pinimg.com/736x/75/ab/54/75ab54a024ac64cf61d9f26a1b328549.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Gaming Laptops",
    desc: "High FPS, RGB, and ultimate speed.",
    url: "https://i.pinimg.com/736x/0c/9e/d4/0c9ed4627fca6ee7c0f47d724dbfb9ca.jpg",
  },
  {
    id: 3,
    type: "image",
    title: "iPad Collection",
    desc: "Portable, powerful, and perfect for creativity.",
    url: "https://i.pinimg.com/736x/db/61/1a/db611a3ef2f6eef3f4ebd52a94d7aec6.jpg",
    span: "row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "PC Peripherals",
    desc: "Keyboards, mice, and essential accessories.",
    url: "https://i.pinimg.com/736x/86/1d/3d/861d3d6ae3526a97dc7568f11a43afd9.jpg",
  },
  {
    id: 5,
    type: "image",
    title: "Gaming PC",
    desc: "Custom-built rigs with extreme performance.",
    url: "https://i.pinimg.com/1200x/e3/de/d6/e3ded6b09a25c557fe2277a63bbc123f.jpg",
  },
 {
    id: 6,
    type: "image",
    title: "Speakers & Audio",
    desc: "Crystal-clear sound for music and entertainment.",
    url: "https://i.pinimg.com/736x/b0/05/de/b005defe4050da42b70f3a6295c205b7.jpg",
  },
   
  {
    id: 7,
    type: "image",
    title: "Printers & Scanners",
    desc: "Reliable printing for home and office.",
    url: "https://i.pinimg.com/736x/e4/bb/ff/e4bbff2d838ca7b4e63f17a9d03475c7.jpg",
  },
   {
    id: 8,
    type: "image",
    title: "controllers & VR",
    desc: "Immersive gaming experiences await.",
    url: "https://i.pinimg.com/736x/e7/a9/9f/e7a99fb8b261c311c74bd28b53eece7b.jpg",
  },
];


  return (
    <InteractiveBentoGallery
      mediaItems={mediaItems}
      title="Explore Our Product Categories"
      description="Discover our wide range of premium electronics and accessories"
    />
  );
}

export default Features;
