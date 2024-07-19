import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function Unicorn(props) {
  const { nodes, materials } = useGLTF('/Unicorn/Unicorn.gltf');
  return (
    <group {...props} dispose={null} scale={[2.6, 2.6, 2.6]} rotation={[0, 50 * Math.PI / 180, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.initialShadingGroup}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/Unicorn/Unicorn.gltf');
