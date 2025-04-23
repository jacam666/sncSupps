// import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import XIcon from '@mui/icons-material/X';
// import Image from "next/image";

// export default function Footer() {
//     return (
//         <footer className="bg-black text-white py-8 px-4">
//             <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-start gap-8">
//                 {/* Logo */}
//                 <div className="flex justify-center sm:justify-start">
//                     <Image
//                         src="/sncImages/logo-copy.png"
//                         alt="SNC Logo"
//                         width={200}
//                         height={100}
//                         className="invert"
//                     />
//                 </div>

//                 {/* Address */}
//                 <div className="text-center sm:text-left">
//                     <h2 className="text-2xl text-[var(--snc-orange)] mb-2">Contact Us</h2>
//                     <p>
//                         Moorings,<br />
//                         Watling Street,<br />
//                         Hockliffe,<br />
//                         Leighton Buzzard,<br />
//                         LU7 9NB
//                     </p>
//                 </div>

//                 {/* Email & Phone */}
//                 <div className="space-y-4 text-center sm:text-left">
//                     <p className="flex items-center justify-center sm:justify-start">
//                         <EnvelopeIcon className="w-6 h-6 mr-2" />
//                         hello@uksnc.co.uk
//                     </p>
//                     <p className="flex items-center justify-center sm:justify-start">
//                         <PhoneIcon className="w-6 h-6 mr-2" />
//                         01525 211127
//                     </p>
//                 </div>

//                 {/* Social */}
//                 <div className="flex flex-col items-center sm:items-start">
//                     <p className="text-2xl text-[var(--snc-orange)] mb-2">Follow us</p>
//                     <div className="flex gap-4">
//                         <a href="#" aria-label="Facebook">
//                             <FacebookIcon className="w-8 h-8 hover:text-[var(--snc-orange)]" />
//                         </a>
//                         <a href="#" aria-label="Instagram">
//                             <InstagramIcon className="w-8 h-8 hover:text-[var(--snc-orange)]" />
//                         </a>
//                         <a href="#" aria-label="Twitter / X">
//                             <XIcon className="w-8 h-8 hover:text-[var(--snc-orange)]" />
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright */}
//             <div className="text-center mt-8 text-sm text-gray-400">
//                 &copy; {new Date().getFullYear()} SNC Supplements. All rights reserved.
//             </div>
//         </footer>
//     );
// }
"use client";

import { useState } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import clsx from "clsx"; // optional: for cleaner class toggling

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    return (
        <footer className="bg-black text-white py-6 px-4 mt-8 border-t-[var(--snc-orange)] border-t-2 pt-4 ">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <Image
                            src="/sncImages/logo-copy.png"
                            alt="SNC Logo"
                            width={200}
                            height={100}
                            className="mx-auto md:mx-0 py-4 h-auto invert"
                        />
                    </div>

                    {/* Contact Section */}
                    <div className="w-full md:w-auto">
                        <button
                            className="w-full text-left text-xl md:text-2xl font-semibold text-[var(--snc-orange)] md:cursor-default"
                            onClick={() => toggleSection("contact")}
                        >
                            Contact Us
                        </button>
                        <div
                            className={clsx(
                                "transition-all duration-300 overflow-hidden md:block mt-2 text-sm text-white",
                                {
                                    "max-h-[500px] opacity-100": openSection === "contact",
                                    "max-h-0 opacity-0": openSection !== "contact",
                                }
                            )}
                        >
                            <div className="mt-2 md:mt-0">
                                <p>Moorings,</p>
                                <p>Watling Street,</p>
                                <p>Hockliffe,</p>
                                <p>Leighton Buzzard,</p>
                                <p>LU7 9NB</p>
                                <p className="flex items-center mt-2">
                                    <EnvelopeIcon className="w-5 h-5 mr-2" /> hello@uksnc.co.uk
                                </p>
                                <p className="flex items-center">
                                    <PhoneIcon className="w-5 h-5 mr-2" /> 01525 211127
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="w-full md:w-auto">
                        <button
                            className="w-full text-left text-xl md:text-2xl font-semibold text-[var(--snc-orange)] md:cursor-default"
                            onClick={() => toggleSection("social")}
                        >
                            Follow Us
                        </button>
                        <div
                            className={clsx(
                                "transition-all duration-300 overflow-hidden flex-col md:flex-row mt-3 text-white",
                                {
                                    "flex opacity-100 max-h-[300px]": openSection === "social",
                                    "hidden opacity-0 max-h-0": openSection !== "social",
                                    "md:flex md:opacity-100 md:max-h-full": true,
                                }
                            )}
                        >
                            <div className="flex space-x-4 justify-center md:justify-start">
                                <a href="#" className="hover:text-[var(--snc-orange)]">
                                    <FacebookIcon className="w-7 h-7" />
                                </a>
                                <a href="#" className="hover:text-[var(--snc-orange)]">
                                    <InstagramIcon className="w-7 h-7" />
                                </a>
                                <a href="#" className="hover:text-[var(--snc-orange)]">
                                    <XIcon className="w-7 h-7" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm mt-8">
                    <p>&copy; {new Date().getFullYear()} SNC Supplements. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

