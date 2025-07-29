'use client'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, PlayCircle, Star } from 'lucide-react';


const slides = [
    'https://placehold.co/600x350.png?text=1',
    'https://placehold.co/600x350.png?text=2',
    'https://placehold.co/600x350.png?text=3',
    'https://placehold.co/600x350.png?text=4',
    'https://placehold.co/600x350.png?text=5',
];
const CourseCTACarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);


    const handleSlideChange = (swiper: SwiperCore) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div>
            {/* Main Swiper */}
            <div >
                <div className={`relative `}>
                    <div>
                        <Swiper
                            onSwiper={setSwiper}
                            onSlideChange={handleSlideChange}
                            spaceBetween={10}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            modules={[Navigation]}
                            className="mySwiper2"
                            onInit={(swiper) => {
                                if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                                    const navigationParams = swiper.params.navigation as {
                                        prevEl?: HTMLElement | string | null;
                                        nextEl?: HTMLElement | string | null;
                                    };
                                    navigationParams.prevEl = prevRef.current;
                                    navigationParams.nextEl = nextRef.current;
                                }
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                        >
                            {slides.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative ">
                                        <Image
                                            src={src}
                                            alt={`Slide ${index + 1}`}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto  object-cover "
                                        />
                                        <button
                                            className="absolute inset-0 flex items-center justify-center bg-black/10 bg-opacity-40"
                                            aria-label="Play Preview"
                                        >
                                            <PlayCircle className="w-14 h-14 text-white" />
                                        </button>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                    {/* Custom Navigation Buttons */}
                    <div className="absolute  left-1/2 top-1/2 px-2 -translate-x-1/2 -translate-y-1/2 right-0  w-full flex justify-between gap-6 z-10">
                        <button
                            ref={prevRef}
                            className="p-2 rounded-full bg-white/80 hover:bg-white transition-all shadow-md"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-4 h-4 text-gray-800" />
                        </button>
                        <button
                            ref={nextRef}
                            className="p-2 rounded-full bg-white/80 hover:bg-white transition-all shadow-md"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-4 h-4 text-gray-800" />
                        </button>
                    </div>
                </div>
                {/* Thumbnail Swiper */}
                <div className='px-2'>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={10}
                        freeMode
                        watchSlidesProgress
                        modules={[FreeMode]}
                        className="mySwiper mt-2  "
                    >
                        {slides.map((src, index) => (
                            <SwiperSlide key={index} className="cursor-pointer mx-1">
                                <div
                                    className={`border-2 rounded overflow-hidden ${activeIndex === index ? 'border-green-500  ' : 'border-gray-200'
                                        }`}
                                    onClick={() => {
                                        swiper?.slideTo(index);
                                    }}
                                >
                                    <Image
                                        src={src}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={300}
                                        height={90}
                                        className="object-cover "
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="w-full   max-w-4xl  mt-5 ">
                <div className="block md:hidden space-y-4">
                    <h1 className="text-xl md:text-4xl  font-bold">
                        IELTS Course by Munzereen Shahid
                    </h1>

                    <div className="flex items-center  gap-2 text-yellow-400 text-lg font-semibold">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} className="w-5 h-5 fill-yellow-400" />
                        ))}
                        <span className="text-white text-xs md:text-base font-medium">
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

        </div>
    )
}
export default CourseCTACarousel