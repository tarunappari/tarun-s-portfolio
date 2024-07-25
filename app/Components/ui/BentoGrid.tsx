"use client";
import { Suspense, useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import PcWorkStation from '../models/PcWorkStation';
import Butterfly from '../models/Butterfly';
import MailRocket from '../../../public/data/mail-rocket.json';
import confetti from '../../../public/data/confetti.json';
import animationData from "../../../public/data/mail.json";
import MagicButton from "./MagicButton";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => (
    <div
        className={cn(
            "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
            className
        )}
    >
        {children}
    </div>
);

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["Nodejs", "ReactJs", "JavaScript"];
    const rightLists = ["NextJS", "Express", "TypeScript"];

    const [copied, setCopied] = useState(false);

    const mailAnimation = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: confetti,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const mailRocket = {
        loop: true,
        autoplay: true,
        animationData: MailRocket,
    };

    const handleCopy = () => {
        const text = "tarunappari23@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (copied) {
                setCopied(false);
            }
        }, 8000);

        return () => clearTimeout(timeoutId);
    }, [copied]);

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
                className
            )}
            style={{
                background: "linear-gradient(117deg, #030311 0%, rgba(1,4,15,1) 74%)",
            }}
        >
            <div className={`h-full ${id === 6 ? "flex" : ""}`}>
                <div className="w-full h-full absolute">
                    {img && id !== 1 && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-80" : ""}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && <BackgroundGradientAnimation />}
                <div
                    className={cn(
                        titleClassName,
                        `relative flex flex-col px-5 p-5 lg:p-10 transition duration-200 md:h-full min-h-40 ${id === 6 ? "email-gradient" : ""}`
                    )}
                >
                    <div className="font-sans font-extralight text-sm text-[#6d6d6d] z-10">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 ${id === 6 ? 'email-title' : 'text-[#b1b1b1]'}`}
                    >
                        {title}
                    </div>
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>
                            <MagicButton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />
                        </div>
                    )}
                    {id === 2 && <GridGlobe />}
                    {id === 1 && (
                        <div className="flex object-cover object-center pc-workstation items-center justify-center absolute md:top-40 w-full h-full">
                            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
                                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent dark:to-black to-#d5d5d5 z-40" />
                                <div className="absolute w-full h-72 md:h-full z-10">
                                    <Canvas>
                                        <ambientLight intensity={-2} />
                                        <OrbitControls enableZoom={false} />
                                        <Suspense fallback={null}>
                                            <PcWorkStation />
                                        </Suspense>
                                        <Environment preset="studio" />
                                    </Canvas>
                                </div>
                            </div>
                        </div>
                    )}
                    {id === 5 && (
                        <div className="flex object-cover object-center butterfly items-center justify-center absolute md:top-40 w-full h-full">
                            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
                                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent dark:to-black to-#d5d5d5 z-40" />
                                <div className="absolute w-full h-72 md:h-full z-10">
                                    <Canvas>
                                        <ambientLight intensity={-1} />
                                        <OrbitControls enableZoom={false} />
                                        <Suspense fallback={null}>
                                            <Butterfly />
                                        </Suspense>
                                        <Environment preset="studio" />
                                    </Canvas>
                                </div>
                            </div>
                        </div>
                    )}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {id === 6 && (
                    <div className="email-icon">
                        <div className="mail-container">
                            <div className="mail-rocket">
                                <Lottie options={mailRocket} height={115} width={250} />
                            </div>
                            <Lottie options={mailAnimation} height={200} width={400} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
