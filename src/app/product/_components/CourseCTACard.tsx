'use client';

import {  useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import {
    PlayCircle,
    Users,
    Clock,
    Video,
    FileText,
    BookOpen,
    HelpCircle,
    Repeat,
    ArrowLeft,
    ArrowRight,
} from 'lucide-react';

const slides = [
    'https://placehold.co/600x350.png?text=1',
    'https://placehold.co/600x350.png?text=2',
    'https://placehold.co/600x350.png?text=3',
    'https://placehold.co/600x350.png?text=4',
    'https://placehold.co/600x350.png?text=5',
];

const CourseCTACard = ({isFixed} : {isFixed : boolean}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);


    const handleSlideChange = (swiper: SwiperCore) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <div ref={containerRef} className="w-full max-w-sm mx-auto border p-1 border-gray-300  overflow-hidden  bg-white">
            {/* Main Swiper */}
           <div className={`${isFixed? 'hidden' : 'block'}`}>
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
                        <ArrowLeft className="w-4 h-4 text-gray-800" />
                    </button>
                    <button
                        ref={nextRef}
                        className="p-2 rounded-full bg-white/80 hover:bg-white transition-all shadow-md"
                        aria-label="Next slide"
                    >
                        <ArrowRight className="w-4 h-4 text-gray-800" />
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
                                    width={100}
                                    height={90}
                                    className="object-cover  "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
           </div>

            <div className='px-2'>
                <div className=" py-3 flex gap-3">
                    <div className="text-2xl font-semibold text-gray-800">
                        ৳3850 <span className="line-through text-gray-400 ml-2">৳5000</span>
                    </div>
                    <div className='flex items-center px-2 relative h-fit whitespace-nowrap'>
                        <div className='w-1 h-1 bg-white rounded-full z-30 mt-1'></div>
                        <div className='w-4 h-4 rotate-45 mt-1 -mx-2.5 z-10 bg-orange-400 py-1'></div>
                        <div className="bg-orange-400 w-fit px-2 py-1 z-20 rounded text-xs text-white font-medium mt-1">১১৫০ ৳ ছাড়</div>
                    </div>

                </div>
                <button className="mt-3 w-full bg-green-600 text-white font-semibold py-2 rounded hover:bg-green-700">
                    কোর্সটি কিনুন
                </button>

                <div className="px-5 py-4 space-y-3 text-sm text-gray-800">
                    <p className='text-[16px] font-bold'>এই কোর্সে যা থাকছে</p>
                    <div className="flex items-start gap-2"><Users className="w-4 h-4 mt-1 text-green-600" /><span>কোর্সটি করেছেন ৩০০০৭ জন</span></div>
                    <div className="flex items-start gap-2"><Clock className="w-4 h-4 mt-1 text-green-600" /><span>সময় লাগবে ৫০ ঘন্টা</span></div>
                    <div className="flex items-start gap-2"><Video className="w-4 h-4 mt-1 text-green-600" /><span>৪৫টি ভিডিও</span></div>
                    <div className="flex items-start gap-2"><FileText className="w-4 h-4 mt-1 text-green-600" /><span>১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট</span></div>
                    <div className="flex items-start gap-2"><BookOpen className="w-4 h-4 mt-1 text-green-600" /><span>৬৩টি লেকচার পিডিএফ</span></div>
                    <div className="flex items-start gap-2"><Video className="w-4 h-4 mt-1 text-green-600" /><span>২৫টি ভিডিও লেকচার</span></div>
                    <div className="flex items-start gap-2"><BookOpen className="w-4 h-4 mt-1 text-green-600" /><span>১টি ফ্রি হ্যান্ডবুক বই</span></div>
                    <div className="flex items-start gap-2"><HelpCircle className="w-4 h-4 mt-1 text-green-600" /><span>ফেসবুক সাপোর্ট গ্রুপ</span></div>
                    <div className="flex items-start gap-2"><Repeat className="w-4 h-4 mt-1 text-green-600" /><span>কোর্সের মেয়াদ আজীবন</span></div>
                </div>
            </div>
        </div>
    );
};

export default CourseCTACard;