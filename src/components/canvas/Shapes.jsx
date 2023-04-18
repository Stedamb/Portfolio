import React, {Suspense, useEffect, useState, useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Preload} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Torus = () => {
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
            <torusGeometry />
            <meshStandardMaterial color='orange' wireframe/>
        </mesh>
    )
}

const Capsule = ({isMobile}) => {
    if (!isMobile) {
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
                <capsuleBufferGeometry args={[1, 1, 2]} position={[1, 1, 1]}/>
                <meshStandardMaterial color='#A3333D' wireframe/>
            </mesh>
        )
    }
}

const Cone = ({isMobile}) => {
    if (!isMobile) {
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
                <coneBufferGeometry args={[4, 8, 32]} position={[1, 1, 1]}/>
                <meshStandardMaterial color='#A06CD5' wireframe opacity/>
            </mesh>
        )
    }
}

const Sphere = ({isMobile}) => {
    if (!isMobile) {
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
                <sphereBufferGeometry />
                <meshStandardMaterial color='#477998' wireframe/>
            </mesh>
        )
    }
}

const Icosahedron = ({isMobile}) => {
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
                <icosahedronBufferGeometry position={[1, 1, 1]}/>
                <meshStandardMaterial color='#758E29' wireframe/>
            </mesh>
        )
    }
}
const Lights = () => {
    const mesh = useRef();

    useFrame(() => {
        if (!mesh.current) {
            return;
        }

        mesh.current.rotation.x += 0.005;
        mesh.current.rotation.y += 0.001;
    });

    return (
        <mesh ref={mesh} position={[10, 0.6, 10]} scale={0.6}>
            <hemisphereLight intensity={0.5} groundColor='black'/>
            <spotLight
                position={[20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
            <pointLight intensity={2}/>
        </mesh>
    )

}

const ShapesCanvas = () => {
    const [isMobile,
        setIsMobile] = useState(false);
    const [isIdle,
        setIdle] = useState(false);

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
                    autoRotate={isIdle}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}/>
                <Torus/>
                <Capsule isMobile={isMobile}/>
                <Cone isMobile={isMobile}/>
                <Sphere isMobile={isMobile}/>
                <Icosahedron isMobile={isMobile}/>
                <Lights/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};

export default ShapesCanvas;