import "./App.css";
import React, { useRef, useMemo } from "react";

import { useState, useEffect } from "react";

import { Canvas, useFrame, useLoader } from "react-three-fiber";
import {
	softShadows,
	MeshWobbleMaterial,
	OrbitControls,
	Sky,
	Cylinder,
} from "drei";

import { Text, Html } from "drei";
import { useSpring, a } from "react-spring/three";

import { Lights } from "./Lights";
import { Floor } from "./Floor";

import { WoodenBox } from "./WoodenBox";

softShadows();

const SpinningCube = ({ position, color, speed, args }) => {
	const mesh = useRef();
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});

	const [expand, setExpand] = useState(false);
	const anims = useSpring({
		scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
	});
	return (
		<a.mesh
			ref={mesh}
			position={position}
			scale={anims.scale}
			castShadow
			onClick={() => setExpand(!expand)}
		>
			<boxBufferGeometry attach="geometry" args={args} />
			<MeshWobbleMaterial
				attach="material"
				color={color}
				speed={speed}
				factor={0.3}
			/>
		</a.mesh>
	);
};

class App extends React.Component {
	render() {
		return (
			<Canvas
				shadowMap
				colorManagement
				camera={{ position: [-5, 2, 10], fov: 60 }}
			>
				<Lights />
				<group>
					<Floor />
					<SpinningCube
						position={[0, 1, 0]}
						color="purple"
						args={[3, 2, 1]}
						speed={2}
					/>
					<SpinningCube
						position={[-2, 1, -5]}
						color="blue"
						speed={5}
					/>
					<SpinningCube
						position={[5, 1, -2]}
						color="yellow"
						speed={14}
					/>
					<Text
						color="green"
						scale={[11, 11, 11]}
						position={[0, -2, 2]}
						rotation={[-Math.PI / 2, 0, 0]}
						castShadow
						args={[5, 5, 5]}
					>
						Shivam Agrawal
					</Text>
					<Text
						color="purple"
						scale={[5, 5, 5]}
						position={[0, -2.5, 4]}
						rotation={[-Math.PI / 2, 0, 0]}
						castShadow
					>
						He lives at Pipariya
					</Text>
					<Cylinder
						position={[5, -1, 1]}
						castShadow
						args={[1.2, 1.2, 1]}
						rotation={[Math.PI / 2, 0, Math.PI / 2]}
					>
						<meshStandardMaterial
							attach="material"
							color="red"
							opacity={0.4}
							castShadow
							transparent
						/>
					</Cylinder>
					<WoodenBox position={[-5, -3, -2]} scale={[2, 2, 2]} />
					<Sky />
				</group>
				<OrbitControls />
			</Canvas>
		);
	}
}

export default App;
