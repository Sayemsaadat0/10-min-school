'use client'

import { useEffect, useState } from "react"
import CourseBanner from "./CourseBanner"
import CourseCarriculumSection from "./CourseCarriculumSection"
import CourseCTACarousel from "./CourseCTACarousel"
import CourseOverviewSection from "./CourseOverviewSection"
import CtaCard from "./CtaCard"
import InstructorCard from "./InstructorCard"

const ProductDetailsContainer = () => {
  const [isTotalScrolled, setisTotalScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setisTotalScrolled(true);
      } else {
        setisTotalScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative">
      <CourseBanner />
      <section className="oc-commonContainer">
        <div className="pl-0 lg:pl-0 xl:pl-36 flex   gap-5">
          <div className="w-full md:w-4/7 lg:5/7 space-y-10 py-5 -black">
            <div className="block md:hidden ">
              <CtaCard />
            </div>
            <InstructorCard />
            <CourseOverviewSection />
            <CourseCarriculumSection />
          </div>

          <div className="hidden md:block ">
            <div className="md:-mt-60 lg:-mt-72 min-w-[330px] border max-w-[330px] md: md:p-1 -gray-300  overflow-hidden md:bg-white">
              <div className={`px-5 md:px-0 ${isTotalScrolled ? 'hidden' : 'block'}`}>
                <CourseCTACarousel />
              </div>
              <div className={
                isTotalScrolled
                  ? "fixed top-20 border min-w-[330px] max-w-[330px]"
                  : ""
              }>
                <CtaCard />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}
export default ProductDetailsContainer

