"use client";

import CardNav from './CardNav';

export function Navbar() {
  const items = [
    {
      label: "Products",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Core Features", ariaLabel: "Core Features", href: "#products" },
        { label: "API Platform", ariaLabel: "API Platform", href: "#api" }
      ]
    },
    {
      label: "Developers", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Documentation", ariaLabel: "Documentation", href: "/docs" },
        { label: "API Status", ariaLabel: "System Status", href: "#api" }
      ]
    },
    {
      label: "About",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Team", ariaLabel: "Our Team", href: "/team" },
        { label: "Careers", ariaLabel: "Careers", href: "#careers" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/LOGO.png"
      logoAlt="VyorAI Logo"
      items={items}
      baseColor="#fff"
      menuColor="rgba(10, 10, 10, 0.4)"
      buttonBgColor="#B0B4BC"
      buttonTextColor="#000"
      ease="power3.out"
      theme="dark"
    />
  );
}
