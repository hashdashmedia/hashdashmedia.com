import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "We Provide What Others Don’t !",
  desc: "Our services are crafted to go beyond the ordinary — blending quality, transparency, and customer-first solutions to give you unmatched value.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Extremely fast customer service",
      desc: "We ensure that all your queries and issues are addressed promptly with real human support.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "100% transparency on cost and expenses",
      desc: "No hidden charges, no last-minute surprises — every cost is clearly communicated upfront.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Best price for the quality of service we provide",
      desc: "Our pricing is optimized to give you premium services without inflating your budget.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Handle basic SEO for your website at no extra cost",
      desc: "We take care of fundamental SEO practices so your website is search-engine friendly from day one.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Future-Ready Benefits for Your Business",
  desc: "We build solutions designed to scale with your business. From cutting-edge technologies to flexible customization, our offerings ensure long-term value.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Your website will look flawless across all devices, from desktops to smartphones, ensuring a seamless user experience.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "Built on modern frameworks for performance, scalability, and developer-friendly workflows.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Give your users the flexibility to switch between light and dark modes for a personalized browsing experience.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
