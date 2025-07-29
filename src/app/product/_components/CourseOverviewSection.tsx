import { Play, BookOpen, FileText, Mic } from "lucide-react";

const features = [
  {
    icon: Play,
    iconBg: "bg-green-500",
    title: "৫০+ ভিডিও লেকচার",
    description:
      "IELTS Academic ও General Training এর Overview, Format ও প্রতের ধরন নিয়ে in-depth আলোচনা",
  },
  {
    icon: BookOpen,
    iconBg: "bg-blue-500",
    title: "৩৮টি লেকচার সিট",
    description:
      "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
  },
  {
    icon: FileText,
    iconBg: "bg-orange-500",
    title: "রিডিং এন্ড লিসনিং মক টেস্ট",
    description:
      "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি মাপুন",
  },
  {
    icon: Mic,
    iconBg: "bg-red-500",
    title: "ডাউট সলভিং লাইভ ক্লাস",
    description:
      "সাপ্তাহিক জন কালে এক্সপার্ট টিচারের কাছে প্রশ্নের সলভিং এর সুযোগ",
  },
];

const CourseOverviewSection = () => {
  return (
    <div>
      {/* Header */}
      <h1 className="text-xl font-bold mb-6">কোর্সটি যেভাবে সাজানো হয়েছে</h1>

      {/* Course Features Grid */}
      <div className="bg-slate-900 rounded p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className={`${feature.iconBg} rounded-full p-3 flex-shrink-0`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewSection;
