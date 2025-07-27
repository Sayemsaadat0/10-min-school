import { Star } from "lucide-react"

const CourseBanner = () => {
    return (
        <section className="bg-gradient-to-b  from-[#080824] to-[#0e0e30]  text-white mt-16 py-20 ">
            <div className="oc-commonContainer relative flex   ">
                <div className=" max-w-5xl  w-2/3">
                    <div className="pl-0 lg:pl-20 xl:pl-40 space-y-4">
                        <h1 className="text-3xl md:text-4xl  font-bold">
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
                {/* <div className="border flex  w-1/3">
                    <CourseCTACard isFixed={isFixed} />
                </div> */}
            </div>
        </section>
    )
}
export default CourseBanner