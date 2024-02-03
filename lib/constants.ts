import React from "react";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
  HiPhone,
} from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdWork, MdOutlineWhatsapp } from "react-icons/md";
import { RiInstagramLine, RiLinkedinLine } from "react-icons/ri";
import { FaLocationDot, FaRegStar } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";
import { LuBookOpen, LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(HiHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(HiUser),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(HiRectangleGroup),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(HiViewColumns),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(MdWork),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(HiEnvelope),
  },
] as const;

export const socialMedia = [
  {
    name: "telegram",
    icon: React.createElement(LiaTelegramPlane),
    href: "https://t.me/ali_rezaayi",
  },
  {
    name: "linkedin",
    icon: React.createElement(RiLinkedinLine),
    href: "https://linkedin.com/in/ali-rezaei-129414237",
  },
  {
    name: "discord",
    icon: React.createElement(RxDiscordLogo),
    href: "https://discordapp.com/users/yourID/alirezayi",
  },
  {
    name: "instagram",
    icon: React.createElement(RiInstagramLine),
    href: "https://instagram.com/ali._rezaayi",
  },
  {
    name: "whatsapp",
    icon: React.createElement(MdOutlineWhatsapp),
    href: "https://api.whatsapp.com/send?phone=989916937150",
  },
] as const;

export const personalData = [
  {
    icon: React.createElement(HiPhone),
    info: "+98 991 693 7150",
  },
  {
    icon: React.createElement(IoMdMail),
    info: "im1.bitcode@gmail.com",
  },
  {
    icon: React.createElement(FaLocationDot),
    info: "Iran, Kerman",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    image: "/image/html.png",
  },
  {
    name: "CSS",
    image: "/image/css.png",
  },
  {
    name: "JavaScript",
    image: "/image/javascript.png",
  },
  {
    name: "TypeScript",
    image: "/image/typescript.png",
  },
  {
    name: "React",
    image: "/image/react.png",
  },
  {
    name: "Next.js",
    image: "/image/nextjs.png",
  },
  {
    name: "TailwindCSS",
    image: "/image/tailwind-css.png",
  },
  {
    name: "SCSS",
    image: "/image/sass.png",
  },
  {
    name: "MaterialUI",
    image: "/image/material-ui.png",
  },
  {
    name: "Swiper",
    image: "/image/swiper.svg",
  },
  {
    name: "Git",
    image: "/image/git.png",
  },
  {
    name: "Redux(Toolkit)",
    image: "/image/redux.png",
  },
  {
    name: "Framer",
    image: "/image/framer-motion.svg",
  },
  {
    name: "Zustand",
    image: "/image/bear.png",
  },
  {
    name: "Chart.js",
    image: "/image/chartjs.svg",
  },
  {
    name: "Shadcn/ui",
    image: "/image/shadcnui.png",
  },
] as const;

export const projectsData = [
  {
    title: "Music Player",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Supabase", "Zustand"],
    imageUrl: "/image/music-player.png",
    deployment: "https://music-player-alirezayi.vercel.app",
    source: "https://github.com/alierezayi/Music-Player",
  },
  {
    title: "Weblog",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "swr",
    ],
    imageUrl: "/image/weblog.png",
    deployment: "https://weblog-alirezayi.vercel.app",
    source: "https://github.com/alierezayi/Weblog",
  },
  {
    title: "Admin Dashboard",
    tags: ["React", "TypeScript", "Next.js", "Material UI", "Next Auth"],
    imageUrl: "/image/admin-dashboard.png",
    deployment: "https://admin-dashboard-alirezayi.vercel.app",
    source: "https://github.com/alierezayi/Admin-Dashboard",
  },
  {
    title: "Shopping Cart",
    tags: ["React", "Next.js", "Tailwind", "Redux", "Next Auth", "Headless UI"],
    imageUrl: "/image/fullstack-shopping-cart.png",
    deployment: "https://fullstack-shopping-cart-alirezayi.vercel.app",
    source: "https://github.com/alierezayi/fullstack-shopping-cart",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Mathematics",
    location: "Kerman, IR",
    description:
      "After 3 years of study, I received a diploma in mathematics at Dr. Ali Shariati's High school.",
    icon: React.createElement(LuBookOpen),
    date: "2018 - 2021",
  },
  {
    title: "Bachelor of Computer Engineering",
    location: "Kerman, IR",
    description:
      "I am currently a computer engineering student at the non-profit Besat University of Kerman.  I am self-taught in the field of software engineering and learning programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "",
    location: "",
    description: "",
    icon: React.createElement(FaRegStar),
    date: "",
  },
] as const;
