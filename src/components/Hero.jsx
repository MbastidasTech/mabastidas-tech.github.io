import { motion } from "framer-motion";
import miImagen from "../assets/finanzas.png";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* CONTENEDOR DE TEXTO */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5 z-20`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, soy <span className='text-[#915EFF]'>Maryelis</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Optimizo procesos financieros y <br className='sm:block hidden' />
            garantizo entornos laborales seguros.
          </p>
        </div>
      </div>

      {/* CONTENEDOR DE IMAGEN */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <img 
          src={miImagen} 
          alt="Maryelis" 
          className="absolute 
            /* MÓVIL: Subida a top-[10px] para dar ese margen de ~1.5cm extra */
            top-[10px] left-1/2 -translate-x-1/2 w-[220px] 
            /* PC: Se mantiene perfecto a la derecha y completo */
            md:top-[80px] md:right-[5%] md:left-auto md:translate-x-0 md:w-[450px] lg:w-[500px]
            h-auto object-contain"
        />
      </div>

      {/* MOUSE ANIMADO */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;