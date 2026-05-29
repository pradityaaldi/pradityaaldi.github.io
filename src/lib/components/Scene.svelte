<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Float, GLTF } from '@threlte/extras';
	import { base } from '$app/paths';

	// global slow spin for each cluster
	let spin = $state(0);

	const accent = '#58a6ff';
	const accentDeep = '#1f6feb';
	const screen = '#0d1117';

	useTask((delta) => {
		spin += delta * 0.25;
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 11]} fov={50} />

<!-- neutral white lights → model keeps its original colors; cyan kept only as low accent -->
<T.AmbientLight intensity={0.9} />
<T.DirectionalLight position={[5, 8, 6]} intensity={2.4} color="#ffffff" />
<T.DirectionalLight position={[-4, 2, 4]} intensity={1} color="#ffffff" />
<T.PointLight position={[-6, -2, 5]} intensity={18} color={accent} />

<!-- ░░ LAPTOP (real glb model — "Laptop / MacBook Pro") ░░ -->
<!-- native model ~2.7 units wide, Y-up: light scale, no extra rotation -->
<Float speed={1.4} floatIntensity={1.2} rotationIntensity={0.3}>
	<T.Group position={[-3.3, -0.8, 0]} rotation={[0, spin, 0]} scale={1.5}>
		<GLTF url="{base}/models/macbook.glb" />
	</T.Group>
</Float>

<!-- ░░ PHONE ░░ -->
<Float speed={2} floatIntensity={1.6} rotationIntensity={0.6}>
	<T.Group position={[3.4, 1.1, -1]} rotation={[0.15, -spin, 0.2]} scale={1.05}>
		<T.Mesh>
			<T.BoxGeometry args={[1.1, 2.1, 0.16]} />
			<T.MeshStandardMaterial color={accentDeep} metalness={0.7} roughness={0.25} />
		</T.Mesh>
		<T.Mesh position={[0, 0, 0.09]}>
			<T.PlaneGeometry args={[0.92, 1.85]} />
			<T.MeshStandardMaterial color={screen} emissive={accent} emissiveIntensity={0.55} />
		</T.Mesh>
		<!-- camera dot -->
		<T.Mesh position={[0, 0.85, 0.1]}>
			<T.CircleGeometry args={[0.06, 16]} />
			<T.MeshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1} />
		</T.Mesh>
	</T.Group>
</Float>

<!-- ░░ GEAR / SETTINGS ░░ -->
<Float speed={1.4} floatIntensity={1} rotationIntensity={0.3}>
	<T.Group position={[2.4, -1.8, 0]} rotation={[1.3, 0, spin * 1.5]} scale={0.9}>
		<T.Mesh>
			<T.TorusGeometry args={[0.7, 0.22, 12, 24]} />
			<T.MeshStandardMaterial color={accent} wireframe emissive={accent} emissiveIntensity={0.6} />
		</T.Mesh>
		{#each [0, 1, 2, 3, 4, 5] as i}
			<T.Mesh
				position={[Math.cos((i / 6) * Math.PI * 2) * 0.9, Math.sin((i / 6) * Math.PI * 2) * 0.9, 0]}
				rotation={[0, 0, (i / 6) * Math.PI * 2]}
			>
				<T.BoxGeometry args={[0.28, 0.28, 0.28]} />
				<T.MeshStandardMaterial color={accentDeep} emissive={accent} emissiveIntensity={0.4} />
			</T.Mesh>
		{/each}
	</T.Group>
</Float>

<!-- ░░ SERVER / CODE CUBE ░░ -->
<Float speed={2.2} floatIntensity={1.4} rotationIntensity={0.8}>
	<T.Group position={[-2.6, -2.1, -1]} rotation={[spin, spin * 0.7, 0]} scale={0.7}>
		<T.Mesh>
			<T.BoxGeometry args={[1.2, 1.2, 1.2]} />
			<T.MeshStandardMaterial color="#ffffff" wireframe emissive={accent} emissiveIntensity={0.9} />
		</T.Mesh>
		{#each [-0.35, 0, 0.35] as y}
			<T.Mesh position={[0.62, y, 0]}>
				<T.BoxGeometry args={[0.02, 0.18, 0.9]} />
				<T.MeshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.7} />
			</T.Mesh>
		{/each}
	</T.Group>
</Float>

<!-- ░░ FLOATING NODES (network) ░░ -->
{#each [[-1, 2.6, -2], [4.4, -0.6, -1.5], [-4.2, 2.4, -2], [0.6, 3, -2.5]] as p}
	<Float speed={2.6} floatIntensity={2} rotationIntensity={0.4}>
		<T.Mesh position={p as [number, number, number]} scale={0.18}>
			<T.IcosahedronGeometry args={[1, 0]} />
			<T.MeshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1} />
		</T.Mesh>
	</Float>
{/each}
