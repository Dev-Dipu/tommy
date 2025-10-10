import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa6";

const FooterScreen = () => {
    return (
        <div className="h-[50vh] flex flex-col">
            <div className="p-7 h-full border-t-[0.6] ">
                <div className="flex justify-between h-full">
                    <div>
                        <h4 className="text-2xl">
                            New Gen Services, Modern Solutions
                        </h4>
                        <button className="px-4 py-2 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer mt-4.5">
                            book a meeting
                        </button>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div>
                        <h5 className="text-xl">Quick Links</h5>
                        <div className="flex flex-col gap-0.5 mt-3">
                            {[
                                {
                                    text: "Services",
                                    link: "#",
                                },
                                {
                                    text: "About us",
                                    link: "#",
                                },
                                {
                                    text: "Impact",
                                    link: "#",
                                },
                            ].map((e, i) => (
                                <Link
                                    key={i}
                                    href={e.link}
                                    className="text-end underline"
                                >
                                    {e.text}
                                </Link>
                            ))}
                        </div>
                        </div>
                        <div className="flex flex-col justify-end items-end">
                            <h5 className="text-xl">Socials</h5>
                            <div className="flex gap-2.5 text-2xl mt-3">
                                <AiFillInstagram />
                                <AiFillFacebook />
                                <FaTwitter />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-7 py-5 flex justify-between items-center border-t-[0.6]">
                <Link className="text-lg leading-none" href={'#'}>hello@newgenservices.ai</Link>
                <Link className="text-lg leading-none" href={'#'}>©2025 New Gen Services</Link>
                <Link className="text-lg leading-none" href={'#'}>Terms & Conditions</Link>
            </div>
        </div>
    );
};

export default FooterScreen;
