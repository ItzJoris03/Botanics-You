import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '@/assets/json/routes.json';

import logo from '@/assets/svg/logo/BotanicsYouFull.svg';

const MobileMenuBackground = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_, ref) => (
    <div ref={ref} className='transition-all duration-500 w-0 bg-white h-screen'></div>
));

const Line = React.forwardRef<HTMLSpanElement, { className?: string }>(({ className = '' }, ref) => (
    <span ref={ref} className={`transition-all duration-500 block border-t-2 border-solid border-black w-6 ${className}`}></span>
));

const Navbar: React.FC = () => {
    const mobileMenuBg1Ref = useRef<HTMLDivElement>(null);
    const mobileMenuBg2Ref = useRef<HTMLDivElement>(null);
    const mobileMenuBg3Ref = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const line3Ref = useRef<HTMLSpanElement>(null);

    // Filter routes to only display those with `visibleInMenu: true`
    const visibleRoutes = routes.routes.filter(route => route.visibleInMenu);

    const toggleMobileMenu = () => {
        const refArray = [
            mobileMenuBg1Ref,
            mobileMenuBg2Ref,
            mobileMenuBg3Ref
        ]

        if (line1Ref.current &&
            line2Ref.current &&
            line3Ref.current &&
            buttonRef.current
        ) {            
            line1Ref.current.classList.toggle("rotate-45");
            line2Ref.current.classList.toggle("opacity-0");
            line2Ref.current.classList.toggle("my-1");
            line2Ref.current.classList.toggle("-my-0.5");
            line3Ref.current.classList.toggle("-rotate-45");
        }

        for (const ref of refArray) {
            if (ref.current) {
                ref.current.classList.toggle('w-0');
                ref.current.classList.toggle('w-1/3');
            }
        }

        if (mobileMenuRef.current) {
            const container = mobileMenuRef.current;

            if (container.classList.contains("flex")) { // === mobile menu is visible
                for (const link of container.children) {
                    link.classList.toggle("scale-0");
                }
                setTimeout(() => {
                    container.classList.toggle('hidden');
                    container.classList.toggle('flex');
                }, 250);
            } else {
                container.classList.toggle('hidden');
                container.classList.toggle('flex');

                setTimeout(() => {
                    for (const link of container.children) {
                        link.classList.toggle("scale-0");
                    }
                }, 100);
            }
        }
    }

    return (
        <nav className="absolute top-0 left-0 max-h-screen w-full bg-white p-4 z-20">
            <div className="max-w-7xl mx-auto flex gap-8 justify-between items-center">
                <div className="text-white text-3xl font-bold">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="Botanics&You logo with slogan"
                            className="max-h-16"
                        />
                    </NavLink>
                </div>
                <div className="hidden md:flex space-x-4">
                    {visibleRoutes.map((route, index) => (
                        <NavLink
                            key={index}
                            to={route.path}
                            className={({ isActive }) => isActive ? "font-medium text-lg px-3 py-2 border-b-2 border-main" : "border-b-2 border-transparent hover:border-main hover:opacity-75 px-3 py-2 text-lg font-medium transition-all duration-300"}
                        >
                            {route.linkName}
                        </NavLink>
                    ))}
                </div>
                <div className="md:hidden">
                    <button ref={buttonRef} onClick={toggleMobileMenu} className="w-fit h-8 transform duration-500 cursor-pointer">
                        <Line ref={line1Ref} />
                        <Line ref={line2Ref} className="my-1" />
                        <Line ref={line3Ref} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
                <div className='absolute top-0 left-0 flex w-full z-[-1]'>
                    <MobileMenuBackground ref={mobileMenuBg1Ref} />
                    <MobileMenuBackground ref={mobileMenuBg2Ref} />
                    <MobileMenuBackground ref={mobileMenuBg3Ref} />
                </div>
                <div ref={mobileMenuRef} className="hidden flex-col space-y-8 px-4 py-8 absolute top-0 left-0 w-full h-screen justify-center z-[-1]">
                    {visibleRoutes.map((route, index) => (
                        <NavLink
                            key={index}
                            to={route.path}
                            className={({ isActive }) => isActive ? "text-black font-bold scale-0 text-3xl px-3 py-2 transition duration-300 origin-left" : "text-black hover:bg-white scale-0 origin-left hover:text-main px-3 py-2 rounded-md text-3xl transition duration-300"}
                            onClick={toggleMobileMenu} // Close menu on link click
                        >
                            {route.linkName}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
