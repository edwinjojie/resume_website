import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

// Fallback for missing maath or if we want a different effect
const Particles = () => {
    // We'll use a simple implementation if maath fails or just standard particles
    // But since maath is in package.json, we can use the above Stars component
    // If we need to fix imports later, we will.
    return null;
}

const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-0 p-0 m-0 pointer-events-none opacity-50 dark:opacity-30">
            {/* We use a lower z-index and pointer-events-none so it doesn't block interaction */}
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
