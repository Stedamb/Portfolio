import {motion} from 'framer-motion';

import {styles} from '../styles';
import {ShapesCanvas} from './canvas';

import { useTranslation } from "react-i18next";

const Hero = () => {
    const { i18n, t } = useTranslation();
    return (
        <section className='relative w-full h-screen mx-auto'>
            <ShapesCanvas/>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white space-grotesk`}>
                        {t('title')}
                        <span className='orange-text-gradient space-grotesk font-bold'>Stefano</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Full-stack developer with a <span className='orange-text-gradient italic font-bold'>creative</span> mind
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero