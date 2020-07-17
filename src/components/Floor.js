import React from "react";

export const Floor = () => {
	return (
		<mesh
			rotation={[-Math.PI / 2, 0, 0]}
			position={[0, -3, 0]}
			receiveShadow
		>
			<planeBufferGeometry attach="geometry" args={[100, 100]} />
			{/* <meshStandardMaterial attach="material" color="green" /> */}
			<shadowMaterial attach="material" opacity={0.2} />
		</mesh>
	);
};
