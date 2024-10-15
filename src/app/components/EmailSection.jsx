"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/email";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (resData.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }
    };

    return (
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 my-12 md:my-12 py-24 gap-8">
            {/* Left Side - Headers and Paragraph */}
            <div className="mt-0">
                {/* Main Contact Me Header */}
                <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>

                {/* Subheader and Paragraph */}
                <h5 className="text-xl font-bold text-white mt-10 my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I am currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best
                    to get back to you!
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-6">
                    <Link
                        href="https://github.com/Preciouslamare"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500 transition duration-300 ease-in-out hover:scale-110"
                    >
                        <FaGithub className="text-white h-6 w-6" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/precious__0828"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500 transition duration-300 ease-in-out hover:scale-110"
                    >
                        <FaInstagram className="text-white h-6 w-6" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/Precious Lamare"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500 transition duration-300 ease-in-out hover:scale-110"
                    >
                        <FaLinkedin className="text-white h-6 w-6" />
                    </Link>
                </div>

                {/* Phone Number Section */}
                <div className="mt-4">
                    <p className="text-[#ADB7BE]">Call me on this no: <strong>+91 7338554752</strong></p>
                    <p className="text-[#ADB7BE]">WhatsApp me on this no: <strong>+91 9620217116</strong></p>
                    <p className="text-[#ADB7BE] mt-5"><strong>Permanent Address:</strong>
                    <ul>
                        <li>Khliehriat West</li>
                        <li>East Jaintia Hills (Dist)</li>
                        <li>Meghalaya, 793200</li>
                    </ul>
                    </p>
                </div>
            </div>

            {/* Right Side - Email Form */}
            <div className="mt-20">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="abc@gmail.com"
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Subject"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Type something"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-gray-500 to-pink-500 text-white hover:bg-slate-900 mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Send Message
                        </span>
                    </button>

                    {emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
