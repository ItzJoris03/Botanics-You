import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '@/assets/json/routes.json';

import logo from '@/assets/svg/logo/BotanicsYouFull.svg';
import { RouteConfig } from '@/types/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const MobileMenuBackground = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_, ref) => (
    <div ref={ref} className='transition-all duration-500 w-0 bg-white h-screen'></div>
));

const Line = React.forwardRef<HTMLSpanElement, { className?: string }>(({ className = '' }, ref) => (
    <span ref={ref} className={`transition-all duration-500 block border-t-2 border-solid border-black w-6 ${className}`}></span>
));

// Filter routes to display those with without `hiddenFromMenu: false`
const filterRoutes = (routes: RouteConfig[]) => routes.filter(route => route.linkName && (route?.hiddenFromMenu === undefined || route?.hiddenFromMenu === false));

const MobileSubroutesMenu: React.FC<{ route: RouteConfig, onClick: () => void }> = ({ route, onClick }) => {
    const mobileMenuBgRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const navlinkButtonRef = useRef<HTMLButtonElement>(null);

    const subRouteOnClick = () => {
        onClick();
        toggleSubrouteMenu();
    }

    const toggleSubrouteMenu = () => {
        if (mobileMenuRef.current && navlinkButtonRef.current && mobileMenuBgRef.current) {
            const container = mobileMenuRef.current;
            const btn = navlinkButtonRef.current;
            const bg = mobileMenuBgRef.current;

            const children = bg.children;

            for (const child of children) {
                child.classList.toggle('w-0');
                child.classList.toggle('w-1/3');
            }

            if (container.classList.contains("flex")) { // === mobile menu is visible
                for (const link of container.children) {
                    link.classList.toggle("scale-0");
                }

                setTimeout(() => {
                    bg.classList.toggle('z-[-1]');
                    bg.classList.toggle('z-[1]');
                    btn.classList.toggle('z-[-1]');
                    container.classList.toggle('hidden');
                    container.classList.toggle('flex');
                }, 250);
            } else {
                btn.classList.toggle('z-[-1]');
                container.classList.toggle('hidden');
                container.classList.toggle('flex');

                bg.classList.toggle('z-[-1]');
                bg.classList.toggle('z-[1]');

                setTimeout(() => {
                    for (const link of container.children) {
                        link.classList.toggle("scale-0");
                    }
                }, 100);
            }
        }
    }

    return route.subroutes ? <div className='scale-0 transition duration-300 origin-left'>
        <button onClick={toggleSubrouteMenu} ref={navlinkButtonRef} className={`relative text-black text-3xl transition duration-300 px-3 py-2 ${window.location.href === route.path ? "font-bold" : "hover:text-main rounded-md"}`}>
            {route.linkName}
            <FontAwesomeIcon icon={faChevronDown} className='w-6 ml-2 h-fit mb-0.5 group-hover:rotate-180 transition-transform' />
        </button>
        <div ref={mobileMenuBgRef} className='absolute top-0 left-0 flex w-full z-[-1]'>
            <MobileMenuBackground />
            <MobileMenuBackground />
            <MobileMenuBackground />
        </div>
        <div ref={mobileMenuRef} className="hidden flex-col space-y-8 px-4 py-8 absolute top-0 left-0 w-full h-screen justify-center z-20">
            <div className='absolute scale-0 transition duration-300 top-28 flex justify-between items-center border-b border-main w-4/5 left-1/2 -translate-x-1/2'>
                <NavLink
                    to={route.path}
                    className={({ isActive }) => isActive ? "text-black font-bold text-3xl px-3 py-2 transition duration-300 origin-left" : "text-black origin-left hover:text-main px-3 py-2 rounded-md text-3xl transition duration-300"}
                    onClick={subRouteOnClick}
                >
                    {route.linkName}
                </NavLink>
                <button className='w-fit h-6 cursor-pointer' onClick={toggleSubrouteMenu}>
                    <span className='block border-t-2 border-solid border-black w-6 mt-0.5 rotate-45'></span>
                    <span className='block border-t-2 border-solid border-black w-6 -mt-0.5 -rotate-45'></span>
                </button>
            </div>
            {filterRoutes(route.subroutes).map((subroute, index) => <NavLink
                key={`1${JSON.stringify(subroute)}-${index}`}
                to={`${route.path}/${subroute.path}`}
                className={({ isActive }) => isActive ? "text-black font-bold scale-0 text-3xl px-3 py-2 transition duration-300 origin-left" : "text-black scale-0 origin-left hover:text-main px-3 py-2 rounded-md text-3xl transition duration-300"}
                onClick={subRouteOnClick}
            >
                {subroute.linkName}
            </NavLink>)}
        </div>
    </div> : <NavLink
        to={route.path}
        className={({ isActive }) => isActive ? "text-black font-bold scale-0 text-3xl px-3 py-2 transition duration-300 origin-left" : "text-black scale-0 origin-left hover:text-main px-3 py-2 rounded-md text-3xl transition duration-300"}
        onClick={onClick}
    >
        {route.linkName}
    </NavLink>;
}

const Navbar: React.FC = () => {
    const mobileMenuBgRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const line1Ref = useRef<HTMLSpanElement>(null);
    const line2Ref = useRef<HTMLSpanElement>(null);
    const line3Ref = useRef<HTMLSpanElement>(null);

    const toggleMobileMenu = () => {
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

        if (mobileMenuBgRef.current) {
            const children = mobileMenuBgRef.current.children;

            for (const child of children) {
                child.classList.toggle('w-0');
                child.classList.toggle('w-1/3');
                child.classList.toggle('z-10');
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
                    {filterRoutes(routes).map((route, index) => {
                        const getSubRoutes = () => {
                            if (route.subroutes) {
                                const visibleSubRoutes = filterRoutes(route.subroutes);

                                return visibleSubRoutes.map((subroute, index) =>
                                    <NavLink
                                        key={`${JSON.stringify(subroute)}-${index}`}
                                        to={`${route.path}/${subroute.path}`}
                                        className={({ isActive }) => isActive ? "font-bold text-lg" : "hover:opacity-75 text-lg font-medium transition-all duration-300"}
                                    >
                                        {subroute.linkName}
                                    </NavLink>
                                );
                            }
                        }

                        return <div className='group relative' key={`${JSON.stringify(route)}-${index}`}>
                            <NavLink
                                to={route.path}
                                className={({ isActive }) => isActive ? "font-medium text-lg px-3 py-2 border-b-2 border-main relative flex justify-center items-center gap-2" : "border-b-2 border-transparent group-hover:border-main hover:opacity-75 px-3 relative flex justify-center items-center gap-2 py-2 text-lg font-medium transition-all duration-300"}
                            >
                                {route.linkName}
                                {route.subroutes && <FontAwesomeIcon icon={faChevronDown} className='w-4 h-fit mb-0.5 group-hover:rotate-180 transition-transform' />}
                            </NavLink>
                            {route.subroutes && <div className='absolute invisible group-hover:visible scale-0 transition-all duration-300 group-hover:scale-100 origin-top flex flex-col items-center gap-2 w-full top-full py-4 bg-white shadow-md rounded-sm'>
                                {getSubRoutes()}
                            </div>
                            }
                        </div>;
                    })}
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
                <div ref={mobileMenuBgRef} className='absolute top-0 left-0 flex w-full z-[-1]'>
                    <MobileMenuBackground />
                    <MobileMenuBackground />
                    <MobileMenuBackground />
                </div>
                <div ref={mobileMenuRef} className="hidden flex-col space-y-8 px-4 py-8 absolute top-0 left-0 w-full h-screen justify-center z-[-1]">
                    {filterRoutes(routes).map((route, index) => <MobileSubroutesMenu route={route} onClick={toggleMobileMenu} key={`${JSON.stringify(route)}-${index}`} />)}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
