import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Single Layer Todo Web",
    issuer: "Udemy",
    date: "Jan2,2025",

    image: "/udemy_certificate.png",
  },
  {
    title: "Introduction to Artificial Ingelligent",
    issuer: "Linkedin",
    date: "March23,2023",

    image: "/lcr.png",
  },
  {
    title: "Web development Fundamentals",
    issuer: "Udemy",
    date: "Oct29,2024",

    image: "/udemy_certificate1.png",
  },
  {
    title: "Effective Listening",
    issuer: "Linkedin",
    date: "Feb25,2024",

    image: "/lcr1.png",
  },
  {
    title: "JavaScript CRUD ",
    issuer: "Udemy",
    date: "Jan29,2025",

    image: "/udemy_certificate2.png",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
