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
                    <h1 className={`${styles.heroHeadText}`}>
                        Stefano <span className="orange-text-gradient">D'Ambrosio</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2`}>
                        {t("subtitle")}<span className='orange-text-gradient font-bold'>{t("subtitle_highlighted")}</span>
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero