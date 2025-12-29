import {
  Code,
  Smartphone,
  Palette,
  Cloud,
  TestTube,
  MessageCircle,
  Instagram,
  Linkedin,
} from "lucide-react";
import EstimorMockup from "@/assets/estimor-mockup.png";
import HealthMockup from "@/assets/healthcare-mockup.png";
import RestaurantMockup from "@/assets/restaurant-mockup.png";
export const MENU_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const SERVICES = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android.",
  },
  {
    icon: Code,
    title: "Web Apps",
    description:
      "Scalable and responsive web applications using modern frameworks and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience at the forefront.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Robust cloud infrastructure and deployment solutions for optimal performance.",
  },
  {
    icon: TestTube,
    title: "QA & Testing",
    description:
      "Comprehensive testing strategies to ensure quality and reliability.",
  },
];

export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "10+", label: "Happy Clients" },
  { number: "99%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    title: "Estimor",
    description:
      "EstiMor is a modern website for construction estimation services.",

    image: EstimorMockup,
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive patient management system with appointment scheduling and records.",
    image: HealthMockup,
  },
  {
    title: "Restaurant Website",

    description: "Modern restaurant site with online menu and reservations.",
    image: RestaurantMockup,
  },
];

export const SOCIAL_LINKS = [
  { 
    Icon: MessageCircle, 
    title: "WhatsApp", 
    desc: "Quick chat", 
    color: "green",
    link: "https://wa.me/916379186103"
  },
  { 
    Icon: Instagram, 
    title: "Instagram", 
    desc: "Follow us", 
    color: "pink",
    link: "https://www.instagram.com/jexa_infotech/"
  },
  { 
    Icon: Linkedin, 
    title: "LinkedIn", 
    desc: "Connect", 
    color: "blue",
    link: "https://www.linkedin.com/company/jexa-infotech/" // Add your LinkedIn URL
  }
];

export const BG_COLORS = {
  hero: 0x0a0e27,
  services: 0x0f172a,
  projects: 0x1a2332,
  contact: 0x0d1117,
};
