import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-multi-carousel/lib/styles.css";

import { useEffect, useRef, useState } from "react";

import Carousel from "react-multi-carousel";
import ClientLogin from "../components/Client/ClientLogin";
import { Link } from "react-router-dom";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { gsap } from "gsap";

export default function Home() {
  const box1Ref = useRef(null);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    gsap.to(box1Ref.current, { x: 50, duration: 2 });
  }, []);

  const images = [
    { src: "Images/Food.jpg", alt: "Image 1" },
    { src: "Images/Food.jpg", alt: "Image 2" },
    { src: "Images/Food.jpg", alt: "Image 3" },
  ];
  const foodimages = [
    { src: "Images/burger.png", alt: "Image 1" },
    { src: "Images/Food.jpg", alt: "Image 2" },
    { src: "Images/logo.svg", alt: "Image 3" },
    { src: "Images/burger.png", alt: "Image 4" },
    { src: "Images/burger.png", alt: "Image 5" },
    { src: "Images/burger.png", alt: "Image 6" },
    { src: "Images/burger.png", alt: "Image 7" },
    { src: "Images/burger.png", alt: "Image 8" },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {showForm && <ClientLogin setShowForm={setShowForm} />}
      <div className="grid grid-cols-2 pt-8 ">
        <div className="">
          <span className="text-[#c74040] text-md font-semibold">
            Best in town
          </span>
          <div className="text-[#2A435D] uppercase text-4xl pt-4 font-bold italic">
            ENJOY OUR Chicken
            <br />
            <span className="text-[#c74040]">Burger</span> fast food
          </div>
          <div className="pt-8">
            <button
              ref={box1Ref}
              onClick={() => {
                setShowForm(!showForm);
              }}
              className="px-8 py-4 bg-[#CC3333] text-white font-bold rounded uppercase hover:bg-[#ef4444] text-xl"
            >
              Order now
            </button>
          </div>
        </div>
        <div className="">
          <img className="rounded" src="https://picsum.photos/800/300" alt="" />
        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-center pt-16 ">
          <p className="text-2xl text-[#2A435D] font-semibold">Food Items</p>
          <p className="text-[#c74040] text-4xl font-bold">Popular Dishes</p>
        </div>

        <ResponsiveCarousel
          className="flex justify-between pt-8 rounded"
          infiniteLoop={"true"}
          interval={2500}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          showArrows={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }} // Set width and height
              />
            </div>
          ))}
        </ResponsiveCarousel>
      </div>

      <div className="flex flex-row gap-16 pt-16">
        <img src="https://picsum.photos/400/400" alt="" className="w-1/2" />
        <div className="flex flex-col justify-between">
          <p className="text-2xl text-[#2A435D] font-semibold mb-8">
            Reserve the best table for your dine-in.
          </p>
          <div className="border bg-[#E3D4AD] text-[#AD3F32] rounded-xl rotate-6 border-bg-[#f8fafc] p-8  text-center">
            <p className="text-xl font-bold">JOYFUL</p>
            <p className="text-red-950">Enjoy Happy Moments With Family</p>
          </div>
          <div className="border bg-[#E3D4AD] text-[#AD3F32] rounded-xl rotate-12 border-bg-[#f8fafc] p-8  text-center">
            <p className="text-xl font-bold">Convenient</p>
            <p className="text-red-950">Enjoy Happy Moments With Family</p>
          </div>
          <div className="border bg-[#E3D4AD] text-[#AD3F32] rounded-xl rotate-6 border-bg-[#f8fafc] p-8  text-center">
            <p className="text-xl font-bold">Delicious</p>
            <p className="text-red-950">Enjoy Happy Moments With Family</p>
          </div>
          <button className="animated-button-secondary">
            <Link to="/reservation">Reserve a table </Link>
          </button>
        </div>
        <img src="https://picsum.photos/400/400" alt="" className="w-1/2" />
      </div>

      <div className="py-16 text-center text-[#c74040] text-4xl font-bold">
        Our Specials
      </div>
      {/* Responsive multiitems carousel */}
      <div>
        <Carousel
          responsive={responsive}
          showDots={false}
          arrows={true}
          infinite={true}
          sliderClass="gap-16"
        >
          {foodimages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden aspect-square w-44 h-44"
            >
              <img
                className="object-contain w-full h-full"
                src={image.src}
                alt="FoodItem"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* ends here */}
      <div className="text-center text-2xl text-[#2A435D] font-semibold pt-16 ">
        Testimonial
      </div>
      <div className="py-2 text-center text-[#c74040] text-4xl font-bold">
        Review From Our Guests
      </div>

      <div className="flex items-center justify-between gap-8 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-32 h-32 overflow-hidden rounded-full">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://picsum.photos/200/100"
              alt="profile"
            />
          </div>
          <p className="text-lg text-[#2A435D] font-semibold ">Name Surname</p>
          <p className="text-[#2A435D]">Your Review</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-32 h-32 overflow-hidden rounded-full">
            <img
              className="object-cover w-full h-full text-xl rounded-full"
              src="https://picsum.photos/200/100"
              alt="profile"
            />
          </div>
          <p className="text-lg text-[#2A435D] font-semibold ">Name Surname</p>
          <p className="text-[#2A435D]">Your Review</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-32 h-32 overflow-hidden rounded-full">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://picsum.photos/200/100"
              alt="profile"
            />
          </div>
          <p className="text-lg text-[#2A435D] font-semibold ">Name Surname</p>
          <p className="text-[#2A435D]">Your Review</p>
        </div>
      </div>
    </>
  );
}
