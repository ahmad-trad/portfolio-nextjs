"use client"
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// import * as THREE from 'three'

// r150
// THREE.ColorManagement.enabled = true

// r139-r149
// THREE.ColorManagement.legacyMode = false


import {CanvasLoader} from "../shar_com/Loader";

export const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  // const refElement = useRef();
  // {...props} ref={refElement}

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.55} />
      <directionalLight position={[0, 0, 0.09]} />
      <mesh  castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
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

export const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon.src} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};


