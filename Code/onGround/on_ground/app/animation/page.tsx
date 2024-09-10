'use client';

import { Canvas } from "@react-three/fiber";

const Cube = ({pozition, size, color}) => {
    return (
        <mesh position={pozition}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

const Animation3D = () => {
    return (
        <>
            <Canvas>
                <directionalLight position={[0, 0, 2]} />


                <Cube pozition={[1, 0, 0]} color="green" size={[1, 1, 1]} />

                <mesh position={[-1, 0, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color={"orange"} />
                </mesh>

                <mesh position={[-1, 2, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color={"orange"} />
                </mesh>

                <mesh position={[1, 2, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color={"orange"} />
                </mesh>
            </Canvas>
        </>
    )
}

export default Animation3D;