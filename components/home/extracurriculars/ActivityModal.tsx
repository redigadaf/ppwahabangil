"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Heart, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity } from "@/lib/data/extracurriculars";
import { useRegistration } from "@/components/context/RegistrationContext";

interface ActivityModalProps {
    activity: Activity | null;
    onClose: () => void;
}

export function ActivityModal({ activity, onClose }: ActivityModalProps) {
    const { openModal } = useRegistration();

    const handleJoin = () => {
        onClose();
        openModal();
    };
    return (
        <AnimatePresence>
            {activity && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />
                    <motion.div
                        layoutId={`activity-${activity.title}`}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-6 top-6 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors z-20 cursor-pointer"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Left: Image */}
                        <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${activity.image})` }}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:hidden" />
                            <div className="absolute bottom-6 left-6 md:hidden">
                                <Badge className={`bg-linear-to-r ${activity.color} text-white border-none px-4 py-1 font-bold`}>
                                    {activity.category}
                                </Badge>
                            </div>
                        </div>

                        {/* Modal Right: Info */}
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
                            <div className="hidden md:block mb-6">
                                <Badge className={`bg-linear-to-r ${activity.color} text-white border-none px-4 py-1.5 font-bold`}>
                                    {activity.category}
                                </Badge>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 leading-tight">
                                {activity.title}
                            </h2>

                            <p className="text-zinc-600 text-lg leading-relaxed mb-8 font-medium">
                                {activity.description}
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-10">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Jadwal Rutin</p>
                                        <p className="text-zinc-900 font-bold">{activity.schedule}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-white transition-colors">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Lokasi</p>
                                        <p className="text-zinc-900 font-bold">Kompleks Pesantren Wahabangil</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    onClick={handleJoin}
                                    size="lg"
                                    className="rounded-2xl bg-primary hover:bg-primary-dark text-white font-bold h-14 px-8 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 cursor-pointer"
                                >
                                    Gabung Sekarang
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
