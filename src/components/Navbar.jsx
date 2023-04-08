import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {motion, useAnimation} from "framer-motion";
import {slideIn} from "../utils/motion";

import {styles} from "../styles";
import {navLinks} from "../constants";
import {logo, menu, close} from "../assets";

const Navbar = () => {
    const [active,
        setActive] = useState("");
    const [toggle,
        setToggle] = useState(false);
    const [scrolled,
        setScrolled] = useState(false);

    const path01Variants = {
        open: {
            d: 'M3.06061 2.99999L21.0606 21'
        },
        closed: {
            d: 'M0 9.5L24 9.5'
        }
    }
    const path02Variants = {
        open: {
            d: 'M3.00006 21.0607L21 3.06064'
        },
        moving: {
            d: 'M0 14.5L24 14.5'
        },
        closed: {
            d: 'M0 14.5L15 14.5'
        }
    }
    const path01Controls = useAnimation();
    const path02Controls = useAnimation();

    const onClick = async () => {
        setToggle(!toggle);
        if (!toggle) {
          await path02Controls.start(path02Variants.moving);
          path01Controls.start(path01Variants.open);
          path02Controls.start(path02Variants.open);
        } else {
          path01Controls.start(path01Variants.closed);
          await path02Controls.start(path02Variants.moving);
          path02Controls.start(path02Variants.closed);
        }
      };

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to=''
                    className='flex items-center gap-2'
                    onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                }}>
                    <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        <span className='sm:block'>Portfolio</span>
                    </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title
                            ? "text-white"
                            : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <button onClick={onClick}>
                        <svg width='24' height='24' viewBox='0 0 24 24'>
                            <motion.path
                                {...path01Variants.closed}
                                animate={path01Controls}
                                transition={{
                                duration: 0.2
                            }}
                                stroke='#FFFFFF'/>
                            <motion.path
                                {...path02Variants.closed}
                                animate={path02Controls}
                                transition={{
                                duration: 0.2
                            }}
                                stroke='#FFFFFF'/>
                        </svg>
                    </button>
                    {/* <img
                        src={toggle
                        ? close
                        : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)}/> */}

                    <motion.div
                        variants={slideIn("left", "tween", 0.2, 1)}
                        className={`${ !toggle
                        ? "hidden"
                        : "flex"} p-6 transition backdrop-blur-xl border-solid border-2 border-orange-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`cursor-pointer text-[20px] ${active === nav.title
                                    ? "text-white"
                                    : "text-gray-200"}`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        if (!toggle) {
                                          path02Controls.start(path02Variants.moving);
                                          path01Controls.start(path01Variants.open);
                                          path02Controls.start(path02Variants.open);
                                        } else {
                                          path01Controls.start(path01Variants.closed);
                                          path02Controls.start(path02Variants.moving);
                                          path02Controls.start(path02Variants.closed);
                                        }
                                        setActive(nav.title);
                                    }}>
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar