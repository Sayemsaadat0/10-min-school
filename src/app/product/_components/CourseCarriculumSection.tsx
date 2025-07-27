"use client"

import { useState } from "react"
import Button from "@/components/ui/button"




import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, ChevronDown, ChevronUp, Lock, Play } from "lucide-react"









// video Dialog
interface VideoDialogProps {
    isOpen: boolean
    onClose: () => void
    videoId: string
    title: string
}

export function VideoDialog({ isOpen, onClose, videoId, title }: VideoDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl w-full p-0">
                <DialogHeader className="p-4 pb-0">
                    <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full">
                    {isOpen && (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title={title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-b-lg"
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}




// Course Section
interface VideoItem {
    id: string
    title: string
    isCompleted: boolean
    isFree: boolean
    videoId?: string
}

interface CourseSectionProps {
    title: string
    items: VideoItem[]
    isDefaultOpen?: boolean
}


export function CourseSection({ title, items, isDefaultOpen = false }: CourseSectionProps) {
    const [isOpen, setIsOpen] = useState(isDefaultOpen)
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

    const handleVideoClick = (item: VideoItem) => {
        if (item.isFree && item.videoId) {
            setSelectedVideo(item)
        }
    }

    return (
        <>
            <div className="border border-gray-200 rounded-lg mb-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                    <span className="font-medium text-gray-800">{title}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>

                {isOpen && (
                    <div className="border-t border-gray-200">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className={`flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 ${item.isFree ? "hover:bg-gray-50 cursor-pointer" : "opacity-60"
                                    }`}
                                onClick={() => handleVideoClick(item)}
                            >
                                <div className="flex items-center gap-3">
                                    {item.isCompleted ? (
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    ) : item.isFree ? (
                                        <Play className="w-5 h-5 text-gray-400" />
                                    ) : (
                                        <Lock className="w-5 h-5 text-gray-400" />
                                    )}
                                    <span className={`text-sm ${item.isFree ? "text-gray-800" : "text-gray-500"}`}>{item.title}</span>
                                </div>

                                {item.isFree && (
                                    <Button variant="ghost" label="ফ্রি দেখুন" className="text-green-600 hover:text-green-700 text-xs" />

                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedVideo && (
                <VideoDialog
                    isOpen={!!selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                    videoId={selectedVideo.videoId || ""}
                    title={selectedVideo.title}
                />
            )}
        </>
    )
}


// Main Component
const courseSections = [
    {
        title: "Introduction",
        isDefaultOpen: true,
        items: [
            {
                id: "1",
                title: "Video: IELTS Introduction",
                isCompleted: true,
                isFree: true,
                videoId: "dQw4w9WgXcQ", // Sample YouTube video ID
            },
            {
                id: "2",
                title: "Video: IELTS Overview",
                isCompleted: true,
                isFree: true,
                videoId: "dQw4w9WgXcQ",
            },
            {
                id: "3",
                title: "Video: How to Prepare for IELTS?",
                isCompleted: true,
                isFree: true,
                videoId: "dQw4w9WgXcQ",
            },
            {
                id: "4",
                title: "Video: Making a Daily Routine",
                isCompleted: true,
                isFree: true,
                videoId: "dQw4w9WgXcQ",
            },
            {
                id: "5",
                title: "Video: Different Sentence Structures to Improve Writing",
                isCompleted: false,
                isFree: false,
            },
            {
                id: "6",
                title: "IELTS General Facts",
                isCompleted: false,
                isFree: false,
            },
            {
                id: "7",
                title: "IELTS Vocabulary",
                isCompleted: false,
                isFree: false,
            },
        ],
    },
    {
        title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
        items: [
            {
                id: "8",
                title: "Course Introduction",
                isCompleted: false,
                isFree: false,
            },
            {
                id: "9",
                title: "Support Group Access",
                isCompleted: false,
                isFree: false,
            },
        ],
    },
    {
        title: "Academic Reading",
        items: [
            {
                id: "10",
                title: "Reading Strategies",
                isCompleted: false,
                isFree: false,
            },
            {
                id: "11",
                title: "Question Types",
                isCompleted: false,
                isFree: false,
            },
        ],
    },
    {
        title: "Academic Reading Mock Test",
        items: [
            {
                id: "12",
                title: "Mock Test 1",
                isCompleted: false,
                isFree: false,
            },
            {
                id: "13",
                title: "Mock Test 2",
                isCompleted: false,
                isFree: false,
            },
        ],
    },
    {
        title: "Listening",
        items: [
            {
                id: "14",
                title: "Listening Techniques",
                isCompleted: false,
                isFree: false,
            },
            {
                id: "15",
                title: "Practice Tests",
                isCompleted: false,
                isFree: false,
            },
        ],
    },
]

const CourseCarriculumSection = () => {
    const [showAll, setShowAll] = useState(false)
    const sectionsToShow = showAll ? courseSections : courseSections.slice(0, 3)

    return (
        <div className="">
            <h1 className="text-xl font-semibold text-gray-800 mb-6">কোর্সটি প্রিভিউ</h1>

            <div className="space-y-2">
                {sectionsToShow.map((section, index) => (
                    <CourseSection
                        key={index}
                        title={section.title}
                        items={section.items}
                        isDefaultOpen={section.isDefaultOpen}
                    />
                ))}
            </div>

            {!showAll && (
                <div className="text-center mt-6">
                    <Button variant="ghost" label="সব দেখুন" onClick={() => setShowAll(true)} className="text-blue-600 hover:text-blue-700" />

                </div>
            )}
        </div>
    )
}


export default CourseCarriculumSection