import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Proteins', href: '/proteins', current: false },
    { name: 'Pre-Workouts', href: '/preWorkouts', current: false },
    { name: 'Fat Loss', href: '/fatLoss', current: false },
    { name: 'Other Products', href: '#', current: false },
    { name: 'Plans', href: '/plans', current: false },
    { name: 'The Studio', href: '/studioGallery', current: false },
]

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100' 
                : 'bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md'
        }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className={`group relative inline-flex items-center justify-center rounded-xl p-2 transition-all duration-300 ${
                            scrolled 
                                ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-600' 
                                : 'text-white hover:bg-white/10 hover:text-orange-300'
                        } focus:ring-2 focus:ring-orange-500 focus:outline-hidden focus:ring-offset-2`}>
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link href="/" className="flex items-center space-x-2 group">
                                <img
                                    alt="SNC Logo"
                                    src="/sncImages/logo-copy.png"
                                    className={`h-16 transition-all duration-300 group-hover:scale-105 ${
                                        scrolled ? '' : 'invert'
                                    }`}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden sm:ml-8 sm:block">
                            <div className="flex space-x-2">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                'relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group',
                                                isActive
                                                    ? scrolled
                                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                                                        : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                                                    : scrolled
                                                        ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                                        : 'text-white hover:bg-white/10 hover:text-orange-300'
                                            )}
                                        >
                                            <span className="relative z-10">{item.name}</span>
                                            {isActive && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-100"></div>
                                            )}
                                            {!isActive && (
                                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Cart Icon */}
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <Link 
                            href="/basket"
                            className={`relative p-3 rounded-xl transition-all duration-300 group ${
                                scrolled 
                                    ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-600' 
                                    : 'text-white hover:bg-white/10 hover:text-orange-300'
                            }`}
                        >
                            <ShoppingCartIcon className="h-6 w-6" />
                            {/* Cart badge - you can add cart count logic here */}
                            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                0
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            <DisclosurePanel className="sm:hidden">
                <div className={`px-4 pt-4 pb-6 space-y-2 ${
                    scrolled 
                        ? 'bg-white border-t border-orange-100' 
                        : 'bg-gradient-to-b from-gray-900 to-black'
                }`}>
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                href={item.href}
                                className={classNames(
                                    'block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300',
                                    isActive
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                                        : scrolled
                                            ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                            : 'text-white hover:bg-white/10 hover:text-orange-300'
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        );
                    })}
                    
                    {/* Mobile Cart Link */}
                    <DisclosureButton
                        as={Link}
                        href="/basket"
                        className={classNames(
                            'flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300',
                            pathname === '/basket'
                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                                : scrolled
                                    ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                                    : 'text-white hover:bg-white/10 hover:text-orange-300'
                        )}
                    >
                        <ShoppingCartIcon className="h-5 w-5" />
                        <span>Basket</span>
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
