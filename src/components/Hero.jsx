import {motion} from 'framer-motion';

import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <ComputersCanvas/>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Enter the
                        <span className='orange-text-gradient ml-8'>Matrix</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Developing 3D visuals just for fun
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero