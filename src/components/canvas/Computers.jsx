import React, {Suspense, useEffect, useState, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
    // const computer = useGLTF('./desktop_pc/scene.gltf');
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.001;
    });

    return (
        <mesh ref={mesh} position={[0, -0.6, 0]}>
            <hemisphereLight intensity={0.25} groundColor='black'/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
            <pointLight intensity={1}/>
            <torusGeometry position={[1, 1, 1]}/>
            <meshStandardMaterial color='orange' wireframe/>
            <torusGeometry position={[2, 3, 1]}/>
            <meshStandardMaterial color='orange' wireframe/> {/* position={[100, 1, 1]} */}
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

const Shape = ({isMobile}) => {
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.003;
    });

    return (
        <mesh ref={mesh} position={[-0.9, -1.7, -4]} scale={0.4}>
            <hemisphereLight intensity={0.25} groundColor='black'/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
            <pointLight intensity={1}/>
            <capsuleGeometry args={[1, 1, 2]} position={[1, 1, 1]}/>
            <meshStandardMaterial color='#A3333D' wireframe/> {/* position={[100, 1, 1]} */}
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

const Shape2 = ({isMobile}) => {
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh} position={[0, 0.6, -4]} scale={0.1}>
            <hemisphereLight intensity={0.25} groundColor='black'/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
            <pointLight intensity={1}/>
            <coneGeometry args={[4, 8, 32]} position={[1, 1, 1]}/>
            <meshStandardMaterial color='#A06CD5' wireframe opacity/> {/* position={[100, 1, 1]} */}
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

const Shape3 = ({isMobile}) => {
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.001;
        mesh.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={mesh} position={[-7, 0.2, 1.5]}>
            <sphereGeometry position={[1, 1, 1]}/>
            <meshStandardMaterial color='#477998' wireframe/> {/* position={[100, 1, 1]} */}
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
const Shape4 = ({isMobile}) => {
    if (!isMobile) {

        const mesh = useRef();

        useFrame(() => {
            if (!mesh.current) {
                return;
            }

            mesh.current.rotation.x += 0.005;
            mesh.current.rotation.y += 0.001;
        });

        return (
            <mesh ref={mesh} position={[-8, -2.6, 0]} scale={0.6}>
                <icosahedronGeometry position={[1, 1, 1]}/>
                <meshStandardMaterial color='#758E29' wireframe/> {/* position={[100, 1, 1]} */}
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
}

const Shape5 = ({isMobile}) => {
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.005;
        mesh.current.rotation.y += 0.001;
    });

    return (
        <mesh ref={mesh} position={[-7, 0.2, 1.5]}>
            <tubeGeometry position={[1, 1, 1]}/>
            <meshStandardMaterial color='#477998' wireframe/> {/* position={[100, 1, 1]} */}
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
    const [isMobile,
        setIsMobile] = useState(false);
    const [isIdle,
        setIdle] = useState(false);

    // var isWaiting = false;
    useEffect(() => {
        const timer = setTimeout(() => {
            setIdle(true);
        }, 30000);
    }, []);

    // var isWaiting = false; useEffect(() => {     const timer = setTimeout(() => {
    //         // setCount('true');         isWaiting = true;
    // console.log('woww');     }, 1000);     return () => clearTimeout(timer); },
    // []);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 700px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas 
        // onMouseMove={(ev) => {
        //     setIdle(false);
        //     useEffect(() => {
        //         const timer = setTimeout(() => {
        //             setIdle(true);
        //         }, 10000);
        //     }, []);
        //     }}
             // frameloop='demand'
    shadows camera={{
            position: [
                10, 3, 5
            ],
            fov: 25
        }} gl={{
            preserveDrawingBuffer: true
        }}>
            <Suspense fallback={< CanvasLoader />}>
                <OrbitControls
                    autoRotate={isIdle}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}/>
                <Computers isMobile={isMobile}/>
                <Shape isMobile={isMobile}/>
                <Shape2 isMobile={isMobile}/>
                <Shape3 isMobile={isMobile}/>
                <Shape4 isMobile={isMobile}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};

export default ComputersCanvas;