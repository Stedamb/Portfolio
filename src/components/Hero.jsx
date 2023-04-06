import {motion} from 'framer-motion';

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-8 h-8 rounded-full bg-green-700 mt-3'/>
                    <div className='w-1 sm:h-80 h-40 black-gradient'/>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm
                        <span className='text-green-600 ml-3'>Stefano</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop 3D visuals, user
                        <br className='sm:block hidden'/>
                        interfaces and web applications
                    </p>
                </div>
            </div>

            <ComputersCanvas />
        </section>
    )
}

export default Hero