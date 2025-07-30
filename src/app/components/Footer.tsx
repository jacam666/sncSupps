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
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

    const footerLinks = [
        { name: 'Home', href: '/' },
        { name: 'Proteins', href: '/proteins' },
        { name: 'Pre-Workouts', href: '/preWorkouts' },
        { name: 'Fat Loss', href: '/fatLoss' },
        { name: 'Plans', href: '/plans' },
        { name: 'The Studio', href: '/studioGallery' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-orange-200/20">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* Logo & Brand Section */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link href="/" className="inline-block group">
                            <Image
                                src="/sncImages/logo-copy.png"
                                alt="SNC Logo"
                                width={180}
                                height={90}
                                className="invert transition-all duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Premium supplements designed to help you achieve your fitness goals with expert guidance and professional support.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: FacebookIcon, href: "#", name: "facebook" },
                                { icon: InstagramIcon, href: "#", name: "instagram" },
                                { icon: XIcon, href: "#", name: "twitter" }
                            ].map(({ icon: Icon, href, name }) => (
                                <a
                                    key={name}
                                    href={href}
                                    className="relative p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white transition-all duration-300 group"
                                    onMouseEnter={() => setHoveredSocial(name)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                >
                                    <Icon className="w-5 h-5" />
                                    <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">
                            Quick <span className="text-orange-500">Links</span>
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm group flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">
                            Contact <span className="text-orange-500">Info</span>
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 group">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                                    <MapPinIcon className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-gray-300 text-sm leading-relaxed">
                                    <p>Moorings, Watling Street</p>
                                    <p>Hockliffe, Leighton Buzzard</p>
                                    <p>LU7 9NB</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 group">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                                    <EnvelopeIcon className="w-4 h-4 text-white" />
                                </div>
                                <a 
                                    href="mailto:hello@uksnc.co.uk"
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                                >
                                    hello@uksnc.co.uk
                                </a>
                            </div>
                            
                            <div className="flex items-center space-x-3 group">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                                    <PhoneIcon className="w-4 h-4 text-white" />
                                </div>
                                <a 
                                    href="tel:01525211127"
                                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm"
                                >
                                    01525 211127
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white">
                            Opening <span className="text-orange-500">Hours</span>
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 group">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                                    <ClockIcon className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-gray-300 text-sm">
                                    <p className="font-medium text-white">Monday - Friday</p>
                                    <p>6:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 ml-11">
                                <div className="text-gray-300 text-sm">
                                    <p className="font-medium text-white">Saturday - Sunday</p>
                                    <p>7:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} SNC Supplements. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

