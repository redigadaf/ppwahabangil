"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Activity } from "@/lib/data/extracurriculars";

interface ActivityCardProps {
    activity: Activity;
    isLarge: boolean;
    onClick: () => void;
}

const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
};

export function ActivityCard({ activity, isLarge, onClick }: ActivityCardProps) {
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            onClick={onClick}
            className={`group relative overflow-hidden rounded-3xl bg-white cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 h-64 md:h-80 ${isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}`}
        >
            {/* Colorful border on hover */}
            <div className={`absolute -inset-1 bg-linear-to-br ${activity.color} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`} />

            <div className="relative h-full rounded-3xl overflow-hidden bg-white">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${activity.image})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/90 group-hover:via-primary/50 transition-all duration-500" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <Badge className={`bg-linear-to-r ${activity.color} text-white shadow-lg border-none px-4 py-1.5 text-xs font-bold w-fit`}>
                        {activity.category}
                    </Badge>

                    <div>
                        <h3 className="font-black text-white mb-2 transform translate-y-20 group-hover:translate-y-0 transition-all duration-500 ease-out drop-shadow-lg text-2xl lg:text-3xl">
                            {activity.title}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-28 group-hover:translate-y-0">
                            {activity.description}
                        </p>
                        <div className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-36 group-hover:translate-y-0">
                            <span className="relative">
                                Lihat Detail
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
