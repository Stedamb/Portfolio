import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.001;
    });

    return (
        <mesh ref={mesh}>
            <hemisphereLight intensity={0.25} groundColor='black'/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
            <pointLight intensity={1}/>
            <torusGeometry />
            <meshStandardMaterial color='orange' wireframe />
            {/* <primitive
                object={computer.scene}
                scale={0.75}
                position={[0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}/> */}
                {/* <mesh>
                    <boxGeometry args={[2,2,2]}/>
                    <meshStandardMaterial color='white' wireframe />
                </mesh> */}
        </mesh>
    )
}

const ComputersCanvas = () => {
    return (
        <Canvas
            // frameloop='demand'
            shadows
            camera={{
            position: [
                10, 3, 5
            ],
            fov: 25
        }}
            gl={{
            preserveDrawingBuffer: true
        }}>
            <Suspense fallback={< CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}/>
                <Computers/>
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;