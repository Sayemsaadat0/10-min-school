'use client'
import { Star } from "lucide-react";
import CourseCTACarousel from "./CourseCTACarousel";

const CourseBanner = () => {


    return (
        <section className="bg-gradient-to-b md:max-h-[400px] from-[#080824] to-[#0e0e30]  text-white mt-10  py-12 md:mt-12 md:py-16 lg:mt-16 lg:py-20 ">
            <div className="block md:hidden px-5 ">
                 <CourseCTACarousel />
            </div>
            <div className="oc-commonContainer hidden  relative md:flex flex-col-reverse md:flex-row gap-5 md:gap-10 5">
                <div className="w-full  md:w-4/7 lg:6/7 max-w-4xl   ">
                    <div className="pl-0 lg:pl-0 xl:pl-40 space-y-4">
                        <h1 className="text-3xl lg:text-4xl  font-bold">
                            IELTS Course by Munzereen Shahid
                        </h1>

                        <div className="flex items-center  gap-2 text-yellow-400 text-lg font-semibold">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} className="w-3 h-3 lg:w-5 lg:h-5 fill-yellow-400" />
                            ))}
                            <span className="text-white text-xs lg:text-base font-medium">
                                (৮২.৬% শিক্ষার্থী কোর্স শেষ & রেটিং দিয়েছেন)
                            </span>
                        </div>
                        <p className="text-sm lg:text-[16px] text-gray-400 leading-relaxed  max-w-43xl ">
                            Academic IELTS এবং General Training IELTS - এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই!
                            দেশের সেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে
                            আজই জয়েন করুন আমাদের IELTS Course-এ।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CourseBanner