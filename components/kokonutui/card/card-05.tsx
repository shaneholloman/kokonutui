"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ActivityData {
    label: string;
    value: number;
    color: string;
    size: number;
    current: number;
    target: number;
    unit: string;
}

interface CircleProgressProps {
    data: ActivityData;
    index: number;
}

const activities: ActivityData[] = [
    {
        label: "MOVE",
        value: 85,
        color: "#FF2D55",
        size: 200,
        current: 479,
        target: 800,
        unit: "CAL",
    },
    {
        label: "EXERCISE",
        value: 60,
        color: "#A3F900",
        size: 160,
        current: 24,
        target: 30,
        unit: "MIN",
    },
    {
        label: "STAND",
        value: 30,
        color: "#04C7DD",
        size: 120,
        current: 6,
        target: 12,
        unit: "HR",
    },
];

const CircleProgress = ({ data, index }: CircleProgressProps) => {
    const strokeWidth = 16;
    const radius = (data.size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = ((100 - data.value) / 100) * circumference;

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <div className="relative">
                <svg
                    width={data.size}
                    height={data.size}
                    viewBox={`0 0 ${data.size} ${data.size}`}
                    className="transform -rotate-90"
                    aria-label={`${data.label} Activity Progress - ${data.value}%`}
                >
                    <title>{`${data.label} Activity Progress - ${data.value}%`}</title>
                    {/* Background circle */}
                    <circle
                        cx={data.size / 2}
                        cy={data.size / 2}
                        r={radius}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        className="text-zinc-100 dark:text-zinc-800"
                    />

                    {/* Progress circle */}
                    <motion.circle
                        cx={data.size / 2}
                        cy={data.size / 2}
                        r={radius}
                        fill="none"
                        stroke={data.color}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: progress }}
                        transition={{
                            duration: 1.5,
                            delay: index * 0.2,
                            ease: "easeInOut",
                        }}
                        strokeLinecap="round"
                        style={{
                            filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))",
                        }}
                    />
                </svg>
            </div>
        </motion.div>
    );
};

const DetailedActivityInfo = () => {
    return (
        <motion.div
            className="flex flex-col gap-6 ml-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            {activities.map((activity) => (
                <motion.div key={activity.label} className="flex flex-col">
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {activity.label}
                    </span>
                    <span
                        className="text-2xl font-semibold"
                        style={{ color: activity.color }}
                    >
                        {activity.current}/{activity.target}
                        <span className="text-base ml-1 text-zinc-600 dark:text-zinc-400">
                            {activity.unit}
                        </span>
                    </span>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default function Card05({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative w-full max-w-3xl mx-auto p-8 rounded-3xl",
                "text-zinc-900 dark:text-white",
                className
            )}
        >
            <div className="flex flex-col items-center gap-8">
                <motion.h2
                    className="text-2xl font-medium text-zinc-900 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Activity Rings
                </motion.h2>

                <div className="flex items-center">
                    <div className="relative w-[180px] h-[180px]">
                        {activities.map((activity, index) => (
                            <CircleProgress
                                key={activity.label}
                                data={activity}
                                index={index}
                            />
                        ))}
                    </div>
                    <DetailedActivityInfo />
                </div>
            </div>
        </div>
    );
}
