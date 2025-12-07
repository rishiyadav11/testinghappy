import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
export const navLists = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Accounting Services",
    children: [
      {
        label: "Tally",
        children: [
          { label: "Tally Prime", href: "/accounting/tally/prime" },
          { label: "Tally ERP", href: "/accounting/tally/erp" },
          { label: "Tally Customization", href: "/accounting/tally/custom" },
        ],
      },
      {
        label: "Marg",
        children: [
          { label: "Marg ERP", href: "/accounting/marg/erp" },
          { label: "Billing Software", href: "/accounting/marg/billing" },
        ],
      },
      {
        label: "Busy",
        children: [
          { label: "Busy Basic", href: "/accounting/busy/basic" },
          { label: "Busy Standard", href: "/accounting/busy/standard" },
          { label: "Busy Enterprise", href: "/accounting/busy/enterprise" },
        ],
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Support",
    href: "/support",
  },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Welcome to Happy Laptops.",
      "Top brands. Best prices.",
      "Your trusted tech shop in Narnaul.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: [
      "Premium Laptops & PCs.",
      "Lightweight. Powerful. Reliable.",
    ],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Gaming laptops with",
      "smooth performance and",
      "ultimate speed.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "Expert Repair Services.",
      "Fast, affordable & trusted.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];