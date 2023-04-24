import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


import { styles } from "../styles";
import { share } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className='bg-tertiary p-5 rounded-2xl md:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex shadow-xl justify-center items-center cursor-pointer'
            >
              <img
                src={share}
                alt='link to project'
                className='w-1/2 h-1/2 object-contain shadow'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px] space-grotesk'>{name}</h3>
          <p className='mt-2 text-secondary text-[16px] poppins'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
    const { i18n, t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("work_subtitle")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("work_title")}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] poppins'
        >
          {t("work_text")} <a style={{color: 'white'}} href='https://github.com/Stedamb'>Github</a>.
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((projects, index) => (
          <ProjectCard key={`project-${index}`} index={index} description={t(projects.description)}  name={projects.name} tags={projects.tags} image={projects.image} source_code_link={projects.source_code_link}  />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
