import React from "react";

const BallCanvas = ({ icon }) => {
  return (
    <div className='flex items-center justify-center w-32 h-32'>
      {/* Aumentamos el contenedor de w-24 a w-28 */}
      <div className='relative w-28 h-28 rounded-full bg-[#fff8eb] shadow-card flex items-center justify-center group transition-transform duration-300 hover:scale-110'>
        
        {/* Efecto de profundidad simétrica */}
        <div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/60 to-black/30 pointer-events-none' />
        
        {/* ICONO MÁS GRANDE: Subimos de w-14 a w-20 */}
        <img
          src={icon}
          alt='tech-icon'
          className='w-20 h-20 object-contain z-10 drop-shadow-2xl transition-transform group-hover:scale-105'
        />

        {/* Brillo de la "esfera" reajustado */}
        <div className='absolute top-3 left-6 w-8 h-4 bg-white/50 rounded-full blur-[3px]' />
      </div>
    </div>
  );
};

export default BallCanvas;