'use client'
import { Star } from "lucide-react"
import CourseCTACard from "./CourseCTACard"
import { useEffect, useState } from "react";

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
    <div className="relative border">
      {/* Banner */}
      <section className="bg-gradient-to-b border from-[#080824] to-[#0e0e30] text-white mt-16 py-20 ">
        <div className="oc-commonContainer border   ">
          <div className="space-y-4 px-20  max-w-5xl">
            <h1 className="text-3xl md:text-5xl  font-bold">
              IELTS Course by Munzereen Shahid
            </h1>

            <div className="flex items-center  gap-2 text-yellow-400 text-lg font-semibold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="w-5 h-5 fill-yellow-400" />
              ))}
              <span className="text-white text-sm md:text-base font-medium">
                (৮২.৬% শিক্ষার্থী কোর্স শেষ & রেটিং দিয়েছেন)
              </span>
            </div>
            <p className="text-sm md:text-[18px] text-gray-400 leading-relaxed  max-w-43xl ">
              Academic IELTS এবং General Training IELTS - এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই!
              দেশের সেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে
              আজই জয়েন করুন আমাদের IELTS Course-এ।
            </p>
          </div>
        </div>
      </section>



      <section className="border oc-commonContainer">
        <div className="px-20 flex justify-between gap-5">
          <div className="border w-5/7">lorem5000</div>
          <div className="border w-2/7">
            <div className="relative">
              <div
                className={
                  isFixed
                    ? "fixed top-20"
                    : "absolute -top-72"
                }
              >
                <CourseCTACard isFixed={isFixed}/>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
export default ProductDetailsContainer