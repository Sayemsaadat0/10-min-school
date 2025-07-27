import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function InstructorCard() {
    return (
        <div className="">
            <h2 className="text-xl font-bold mb-4">কোর্স ইন্সট্রাক্টর</h2>

            <div className="flex items-center gap-4 p-4 border rounded bg-white transition">
                <Image
                    width={300}
                    height={300}
                    src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg" // Replace with actual image path
                    alt="Munzereen Shahid"
                    className="w-16 h-16 rounded-full object-cover border"
                />

                <div className="flex-1">
                    <div className="flex items-center gap-1">
                        <p className="font-semibold text-lg">Munzereen Shahid</p>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <p className=" leading-snug mt-1">
                        MSc (English), University of Oxford (UK); <br />
                        BA, MA (English), University of Dhaka; <br />
                        IELTS: 8.5
                    </p>
                </div>
            </div>
        </div>
    );
}
