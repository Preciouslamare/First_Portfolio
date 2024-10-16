import React from "react";
import Image from "next/image";
import Link from "next/link"; // For navigation links if needed

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center" id="hero">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 w-full">
                {/* Left Side (Text Content) */}
                <div className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500">Hello, I'm Precious</span>
                    </h1>

                    <h2 className="text-white mb-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500">Frontend Developer</span>
                    </h2>

                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-[16px]">
                        I am a passionate frontend developer currently interning and honing my 
                        skills in building interactive, user-friendly web applications. 
                        I have experience working with modern web technologies such as Next.js, React, JavaScript,
                        and Tailwind CSS, creating responsive and visually appealing interfaces. I am actively seeking 
                        opportunities to grow in a dynamic environment where I can contribute my skills to impactful projects.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        {/* Hire Me Button */}
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500 text-white hover:bg-slate-900 mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Hire Me
                            </span>
                        </button>

                        {/* Download CV Button */}
                        <a 
                            href="/Precious_CV.pdf" 
                            download="Precious_CV.pdf" 
                            className="block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500 text-white hover:bg-slate-900 mt-4">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Side (Image) */}
                <div className="col-span-1 sm:col-span-5 place-self-center lg:place-self-center mt-8 sm:mt-0">
                    <div className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative mx-auto hover:shadow-[0_0_30px_10px_rgba(29,78,216,0.7),_0_0_60px_20px_rgba(233,30,99,0.5)] transition-shadow duration-300 ease-in-out">
                        <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden">
                            <Image
                                src="/images/5.png"
                                alt="hero image"
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
