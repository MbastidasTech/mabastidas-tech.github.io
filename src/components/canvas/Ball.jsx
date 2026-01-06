import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isInView, setIsInView] = useState(false);

  // Solo renderizamos si la bola está cerca de entrar en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Una vez cargada, la dejamos fija
        }
      },
      { threshold: 0.1 }
    );

    // Buscamos el elemento actual (el canvas)
    const el = document.getElementById(icon);
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [icon]);

  return (
    <div id={icon} className="w-28 h-28">
      {isInView ? (
        <Canvas
          frameloop='demand'
          dpr={[1, 1.5]} // Bajamos un poco más el tope para móviles antiguos
          gl={{ 
            preserveDrawingBuffer: true,
            powerPreference: "high-performance", // Forzamos uso de GPU eficiente
            alpha: true 
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      ) : (
        <div className="w-full h-full bg-transparent" /> 
      )}
    </div>
  );
};

export default BallCanvas;