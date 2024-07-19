import React from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export default function Techguy(props) {
  const group = React.useRef();
  const { scene } = useGLTF('/Techguy/Techguy.gltf');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials, animations } = useGraph(clone);

  // Ensure animations are available
  const { actions } = useAnimations(animations || [], group);
  console.log(actions);
  React.useEffect(() => {
    if (actions) {
      // Play a specific animation by its name
      // Ensure to replace 'YourAnimationName' with the actual name of the animation in your GLTF file
      const action = actions['YourAnimationName'];
      if (action) {
        action.play();
        action.setLoop(THREE.LoopRepeat); // Set animation loop if needed
      }
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1.977}>
          <group name="SKM_TechGuyfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" />
                  <group name="Object_11" />
                  <group name="Object_14" />
                  <group name="Object_16" />
                  <group name="Body" />
                  <group name="Eyes" />
                  <group name="Eyelashes" />
                  <group name="Eyewear" />
                  <group name="Tops" />
                  <group name="Hats" />
                  <group name="Shoes" />
                  <group name="Bottoms" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_8.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_9.skeleton} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_12.skeleton} />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_13.skeleton} />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_15.skeleton} />
                  <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Scene_-_Root']} skeleton={nodes.Object_17.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/Techguy/Techguy.gltf');
