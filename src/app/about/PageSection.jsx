"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";  // Import Link for navigation
import TabButton from "../components/TabButton";

const PageSection = () => {
    const [activeTab, setActiveTab] = useState(null); // Initialize with `null` to have no tab selected initially

    const handleTabChange = (tab) => {
        // Toggle tab: if the clicked tab is already active, set `activeTab` to null (collapse it)
        setActiveTab((prevTab) => (prevTab === tab ? null : tab));
    };

    return (
        <section id="about" className="text-white">
            
            {/* Flex Container to handle image and content layout */}
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

                {/* Content Section - on small screens, this will be on top */}
                <div className="order-1 md:order-2 mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-[#ADB7BE] lg:text-lg mb-8">
                        Hey there! I’m Precious, a frontend developer with a strong 
                        passion for crafting intuitive and visually appealing web applications. 
                        My journey into web development began out of a curiosity to understand 
                        how the websites and apps I use every day are created, 
                        which quickly grew into a deep interest in coding and design.
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex flex-row space-x-4">
                        <TabButton active={activeTab === "skills"} onClick={() => handleTabChange("skills")}>
                            Skills
                        </TabButton>
                        <TabButton active={activeTab === "education"} onClick={() => handleTabChange("education")}>
                            Education
                        </TabButton>
                        <TabButton active={activeTab === "experience"} onClick={() => handleTabChange("experience")}>
                            Experience
                        </TabButton>
                    </div>

                    {/* Tab Content with smooth transition and toggle functionality */}
                    <div className={`mt-8 transition-opacity duration-500 ease-in-out ${activeTab === 'skills' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                        <ul className="list-disc list-inside">
                            <li className="text-[#ADB7BE]">HTML</li>
                            <li className="text-[#ADB7BE]">CSS</li>
                            <li className="text-[#ADB7BE]">Android Studio (XML)</li>
                            <li className="text-[#ADB7BE]">C</li>
                            <li className="text-[#ADB7BE]">Python</li>
                            <li className="text-[#ADB7BE]">React.js, Next.js</li>
                        </ul>
                    </div>
                    <div className={`mt-8 transition-opacity duration-500 ease-in-out ${activeTab === 'education' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                        <p className="text-[#ADB7BE]">
                            Bachelor of Engineering in CSE 
                            <p>Shree Devi Institute Of Technology, Mangalore</p> 
                            <p>Visvesvarayya Technological University (2020-2024)</p>
                        </p>
                    </div>
                    <div className={`mt-8 transition-opacity duration-500 ease-in-out ${activeTab === 'experience' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
                        <div className="text-[#ADB7BE]">
                            <p>UI/UX Design: Completed hands-on course in UI/UX Design and Blockchain (basic).</p>
                            <p>Technologies: HTML, CSS, Figma.</p>
                            <p>Data Science: Worked on a project predicting music genres using machine learning and AI.</p>
                            <p>Technologies: Python, Django, Jupyter Notebook.</p>
                        </div>
                    </div>
                </div>

                {/* Circular Image with Glow Effect */}
                <div className="order-2 md:order-1 flex justify-center mb-12">
                    <div className="rounded-full w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative mx-auto hover:shadow-[0_0_30px_10px_rgba(29,78,216,0.7),_0_0_60px_20px_rgba(233,30,99,0.5)] transition-shadow duration-300 ease-in-out">
                        <div className="rounded-full bg-[#181818] w-full h-full relative overflow-hidden">
                            <Image
                                src="/images/about3.png"
                                alt="About Image"
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

export default PageSection;
