export const site = {
  name: "Blaze Proof Solution",
  // tagline: "Alert Today, Alive Tomorrow...",
  email: "blazeproofsolution12@gmail.com",
  phones: ["8839953161", "7999573895"],
  address: "150/4, Chikitsak Nagar, Mahalaxmi Nagar Road, Vijay Nagar Road, Indore",
  certification: "ISO 9001:2015 Certified Company",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "fire-noc",
    title: "Fire NOC Services",
    description:
      "End-to-end assistance in obtaining Fire No Objection Certificates, from documentation to liaising with fire department authorities.",
    image: "/images/products/fire-noc-service.png",
  },
  {
    slug: "fire-alarm-system",
    title: "Fire Alarm System",
    description:
      "Design, installation, and wiring of fire detection and alarm systems, including smoke detectors, sounders, and control panels.",
    image: "/images/products/fire-alarm-system-installation.png",
  },
  {
    slug: "fire-safety-audit",
    title: "Fire Safety Audit",
    description:
      "Comprehensive on-site audits covering fire hazard identification, detection systems, suppression systems, and passive fire protection.",
    image: "/images/products/1100x756-fir-safety-audit.png",
  },
  {
    slug: "fire-hydrant-system",
    title: "Fire Hydrant & Fighting System",
    description:
      "Supply and installation of fire hydrant systems, hose cabinets, and water-based fire fighting equipment for commercial and industrial sites.",
    image: "/images/products/fire-extinguisher-water-pump-system-wall-powerful-emergency-equipment-apartment-hotel.jpg",
  },
  {
    slug: "cctv-surveillance",
    title: "CCTV Surveillance",
    description:
      "Planning and installation of CCTV camera systems with remote monitoring for homes, offices, and industrial facilities.",
    image: "/images/products/cctv-installation.jpg",
  },
  {
    slug: "access-control",
    title: "Access Control System",
    description:
      "Card and biometric access control installation to secure entry points and manage access across your premises.",
    image: "/images/products/access-control-1.jpg",
  },
];

export type Product = {
  slug: string;
  name: string;
  image: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "fire-hydrant-system",
    title: "Fire Hydrant System & Accessories",
    description:
      "ISI marked fire hydrant accessories rigorously tested to meet the highest safety standards, ensuring reliable water supply during emergencies.",
    coverImage: "/images/site/p2_fire-fighting-equipment.png",
    products: [
      { slug: "hose-reel-drum", name: "Hose Reel Drum", image: "/images/products/p4_hose-reel-drum.png" },
      { slug: "fire-hydrant-valve", name: "Fire Hydrant Valve SS/GM", image: "/images/products/p4_fire-hydrant-valve.png" },
      { slug: "water-jet-monitor", name: "Water Jet Monitor", image: "/images/products/p4_water-jet-monitor.png" },
      { slug: "foam-monitor", name: "Foam Monitor", image: "/images/products/p4_foam-monitor.png" },
      { slug: "fire-release-valve", name: "Fire Release Valve", image: "/images/products/p4_fire-release-valve.png" },
      { slug: "end-suction-pump", name: "End Suction Pump", image: "/images/products/p4_end-suction-pump.png" },
      { slug: "monoblock-pumps", name: "Monoblock Pumps", image: "/images/products/p4_monoblock-pumps.png" },
      { slug: "hose-box-double-door", name: "Hose Box Double Door", image: "/images/products/p4_hose-box-double-door.png" },
      { slug: "rrl-hose", name: "RRL SS/GM Type 1 Hose", image: "/images/products/p4_rrl-hose.png" },
      { slug: "sprinkler-upright", name: "Sprinkler Upright Type", image: "/images/products/p4_sprinkler-upright.png" },
      { slug: "sprinkler-pendent", name: "Sprinkler Pendent Type", image: "/images/products/p4_sprinkler-pendent.png" },
      { slug: "branch-pipe-nozzle", name: "Branch Pipe Nozzle SS/GM", image: "/images/products/p4_branch-pipe-nozzle.png" },
    ],
  },
  {
    slug: "fire-alarm-system",
    title: "Fire Alarm System & Accessories",
    description:
      "Early detection is crucial in fire safety. Our state-of-the-art fire alarm systems are designed to alert you promptly in case of fire emergencies.",
    coverImage: "/images/site/p2_fire-alarm-system.png",
    products: [
      { slug: "heat-detector", name: "Heat Detector", image: "/images/products/p5_heat-detector.png" },
      { slug: "smoke-detector", name: "Smoke Detector", image: "/images/products/p5_smoke-detector.png" },
      { slug: "zone-panel", name: "2 Zone / 4 Zone Panel", image: "/images/products/p5_zone-panel.png" },
      { slug: "fire-alarm-control-panel", name: "Fire Alarm Control Panel", image: "/images/products/p5_fire-alarm-control-panel.png" },
      { slug: "sounder-strobe", name: "Sounder cum Strobe", image: "/images/products/p5_sounder-strobe.png" },
      { slug: "manual-call-point", name: "Manual Call Point", image: "/images/products/p5_manual-call-point.png" },
    ],
  },
];

export const productOverview = [
  {
    title: "Fire Extinguishers",
    description:
      "We provide a variety of fire extinguishers suitable for different types of fires, ensuring you have the right tool to handle any fire situation.",
    image: "/images/site/p2_fire-extinguishers.png",
  },
  {
    title: "Fire Fighting Equipments",
    description:
      "We offer a wide range of fire fighting equipment, including fire hydrants, hoses, nozzles, and more, all designed to combat fires effectively and efficiently.",
    image: "/images/site/p2_fire-fighting-equipment.png",
  },
  {
    title: "Fire Alarm System",
    description:
      "Early detection is crucial in fire safety. Our state-of-the-art fire alarm systems are designed to alert you promptly in case of fire emergencies.",
    image: "/images/site/p2_fire-alarm-system.png",
  },
];

export const whyChooseUs = [
  {
    title: "Quality Assurance",
    description:
      "We supply only the highest quality products that meet or exceed industry standards, including ISI marking for fire hydrant accessories.",
  },
  {
    title: "Expertise",
    description:
      "With our years of experience, we have gained deep knowledge of fire safety and security products, enabling us to offer expert advice and solutions.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize our customers' needs and satisfaction, offering personalized solutions and excellent customer support.",
  },
  {
    title: "Reliability",
    description:
      "Our products are known for their reliability and durability, ensuring that they perform effectively when you need them most.",
  },
  {
    title: "Competitive Pricing",
    description:
      "We offer competitive pricing without compromising on product quality, making safety affordable for all.",
  },
];

export const missionPillars = [
  "Enhancing Safety",
  "Empowering Communities",
  "Environmental Stewardship",
  "Innovation and Adaptability",
  "Global Reach",
  "Customer-Centric Approach",
];

export const installationPhotos = [
  { src: "/images/site/p3_pump-room.png", alt: "Fire hydrant pump room installation" },
  { src: "/images/site/p3_hose-cabinet.png", alt: "Fire hose cabinet and extinguisher installation" },
  { src: "/images/site/p3_pipe-installation.png", alt: "Overhead fire hydrant pipe installation" },
];

export const clients = [
  "PW",
  "Indian Oil",
  "Government of India",
  "Gosh Deep",
  "JMD Project",
  "Bharat Petroleum",
  "Aditya Birla Grasim",
  "CHRC",
  "Shivashish Resort & Marriage Garden",
  "Murphy's",
];
