import React, { useRef, useMemo } from "react";

import { TextureLoader, MeshStandardMaterial, RepeatWrapping } from "three";

import woodUrl from "../assets/imgs/crate.gif";

export const WoodenBox = ({ position, scale }) => {
	const mesh = useRef();

	const texture = useMemo(() => new TextureLoader().load(woodUrl), [woodUrl]);
	return (
		<mesh ref={mesh} position={position} scale={scale} castShadow>
			<boxBufferGeometry attach="geometry" />
			<meshStandardMaterial
				attach="material"
				color={"white"}
				map={texture}
			/>
		</mesh>
	);
};
