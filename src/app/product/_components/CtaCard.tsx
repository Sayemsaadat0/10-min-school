import { Users, Clock, Video, FileText, BookOpen, HelpCircle, Repeat } from 'lucide-react';

const CtaCard = () => {
    return (
        <div className='md:px-5 bg-white  '>
            <div className=" py-3 flex gap-3">
                <div className="text-2xl font-semibold text-gray-800">
                    ৳1000 <span className="line-through text-gray-400 ml-2">৳1000</span>
                </div>
                <div className='flex items-center px-2 relative h-fit whitespace-nowrap'>
                    <div className='w-1 h-1 bg-white rounded-full z-30 mt-1'></div>
                    <div className='w-4 h-4 rotate-45 mt-1 -mx-2.5 z-10 bg-orange-400 py-1'></div>
                    <div className="bg-orange-400 w-fit px-2 py-1 z-20 rounded text-xs text-white font-medium mt-1">1000 ৳ ছাড়</div>
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
    )
}
export default CtaCard