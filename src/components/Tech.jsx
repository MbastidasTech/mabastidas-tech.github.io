import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // Importamos los estilos para las letras
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      {/* Añadimos el encabezado con animaciones y estilos de Maryelis */}
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center`}>
          Herramientas y software
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Conocimientos Tecnológicos.
        </h2>
      </motion.div>

      {/* Este es el contenedor de las esferas */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");