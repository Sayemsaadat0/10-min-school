'use client'
import CourseCTACard from "./CourseCTACard"
import { useEffect, useState } from "react";
import CourseBanner from "./CourseBanner";
import InstructorCard from "./InstructorCard";
import CourseOverviewSection from "./CourseOverviewSection";
import CourseCarriculumSection from "./CourseCarriculumSection";

const ProductDetailsContainer = () => {
  const [isFixed, setisFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setisFixed(true);
      } else {
        setisFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="relative">
      {/* Banner */}
      <div >
        <CourseBanner />
      </div>
      <section className="oc-commonContainer">
        <div className="px-36 flex  justify-between gap-5">
          {/* Left Side */}
          <div className=" w-5/7 space-y-10 py-5 border-black">
            <InstructorCard />
            <CourseOverviewSection/>
            <CourseCarriculumSection />
          </div>
          {/* right side CTA Sectopm */}
          <div className=" w-2/7">
            <div className="relative">
              <div
                className={
                  isFixed
                    ? "fixed top-20"
                    : "absolute -top-72"
                }
              >
                <CourseCTACard isFixed={isFixed} />
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
export default ProductDetailsContainer