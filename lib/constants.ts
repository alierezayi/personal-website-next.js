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
import { FaLocationDot } from "react-icons/fa6";
import { RxDiscordLogo } from "react-icons/rx";

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
