'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

type V3 = [number, number, number];
const pink = '#e794b6';
const cream = '#c6b599';
const chrome = '#bcc7c5';

function Oval({
  at,
  size,
  color,
  metal = false,
}: {
  at: V3;
  size: V3;
  color: string;
  metal?: boolean;
}) {
  return (
    <mesh position={at} scale={size} castShadow receiveShadow>
      <sphereGeometry args={[1, 28, 18]} />
      <meshStandardMaterial
        color={color}
        metalness={metal ? 0.72 : 0.08}
        roughness={metal ? 0.26 : 0.4}
      />
    </mesh>
  );
}

function Tube({
  points,
  radius = 0.022,
  color = chrome,
}: {
  points: V3[];
  radius?: number;
  color?: string;
}) {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        points.map((point) => new THREE.Vector3(...point)),
      ),
    [points],
  );
  return (
    <mesh castShadow>
      <tubeGeometry args={[curve, 24, radius, 8, false]} />
      <meshStandardMaterial color={color} metalness={0.65} roughness={0.28} />
    </mesh>
  );
}

function Wheel({ x }: { x: number }) {
  return (
    <group position={[x, 0.35, 0]}>
      <mesh castShadow>
        <torusGeometry args={[0.255, 0.095, 14, 40]} />
        <meshStandardMaterial color="#26272a" roughness={0.93} />
      </mesh>
      {[-1, 1].map((side) => (
        <group key={side} position={[0, 0, side * 0.07]}>
          <mesh>
            <torusGeometry args={[0.204, 0.025, 8, 32]} />
            <meshStandardMaterial
              color={chrome}
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.115, 0.115, 0.05, 24]} />
            <meshStandardMaterial
              color="#888d89"
              metalness={0.65}
              roughness={0.3}
            />
          </mesh>
          {Array.from({ length: 7 }, (_, i) => {
            const a = (i * Math.PI * 2) / 7;
            return (
              <Tube
                key={i}
                radius={0.017}
                points={[
                  [Math.sin(a) * 0.08, Math.cos(a) * 0.08, 0],
                  [Math.sin(a + 0.17) * 0.2, Math.cos(a + 0.17) * 0.2, 0],
                ]}
              />
            );
          })}
        </group>
      ))}
    </group>
  );
}

/** A lightweight, self-contained model based on Mahera's pink retro scooter. */
export function Scooter({ night }: { night: boolean }) {
  const body = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.02, 1.48);
    shape.bezierCurveTo(-0.9, 1.64, -0.62, 1.53, -0.6, 1.28);
    shape.lineTo(-0.38, 0.67);
    shape.quadraticCurveTo(-0.36, 0.58, -0.24, 0.58);
    shape.lineTo(0.22, 0.58);
    shape.lineTo(0.27, 1.08);
    shape.bezierCurveTo(0.48, 1.25, 1.16, 1.19, 1.19, 0.93);
    shape.bezierCurveTo(1.21, 0.65, 1, 0.47, 0.72, 0.44);
    shape.lineTo(-0.58, 0.37);
    shape.quadraticCurveTo(-0.82, 0.34, -0.93, 0.63);
    shape.quadraticCurveTo(-1.21, 1.17, -1.02, 1.48);
    return shape;
  }, []);
  const apron = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.02, 1.48);
    shape.bezierCurveTo(-1.24, 1.32, -1.22, 0.98, -0.97, 0.58);
    shape.quadraticCurveTo(-0.83, 0.36, -0.59, 0.37);
    shape.lineTo(0.67, 0.44);
    shape.lineTo(0.72, 0.52);
    shape.lineTo(-0.5, 0.49);
    shape.quadraticCurveTo(-0.71, 0.53, -0.71, 0.76);
    shape.bezierCurveTo(-0.7, 1.02, -0.62, 1.43, -1.02, 1.48);
    return shape;
  }, []);
  const windshield = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.4, 0);
    shape.quadraticCurveTo(-0.47, 0.46, -0.3, 0.72);
    shape.quadraticCurveTo(0, 1.03, 0.3, 0.72);
    shape.quadraticCurveTo(0.47, 0.46, 0.4, 0);
    shape.quadraticCurveTo(0, -0.11, -0.4, 0);
    return shape;
  }, []);

  return (
    <group
      name="Mahera's pink scooter"
      position={[2, -0.53, 17.5]}
      rotation={[0, 0.35, 0]}
      scale={1.15}
    >
      <Wheel x={-1.02} />
      <Wheel x={0.9} />
      {/* Swept, bevelled bodywork keeps the step-through silhouette open. */}
      <mesh position={[0, 0, -0.25]} castShadow receiveShadow>
        <extrudeGeometry
          args={[
            body,
            {
              depth: 0.5,
              bevelEnabled: true,
              bevelSize: 0.065,
              bevelThickness: 0.06,
              bevelSegments: 4,
              curveSegments: 20,
            },
          ]}
        />
        <meshStandardMaterial color={cream} roughness={0.38} metalness={0.12} />
      </mesh>
      <mesh position={[0, 0, -0.28]} castShadow>
        <extrudeGeometry
          args={[
            apron,
            {
              depth: 0.56,
              bevelEnabled: true,
              bevelSize: 0.045,
              bevelThickness: 0.045,
              bevelSegments: 4,
              curveSegments: 20,
            },
          ]}
        />
        <meshPhysicalMaterial
          color={pink}
          roughness={0.3}
          metalness={0.12}
          clearcoat={0.75}
          clearcoatRoughness={0.3}
        />
      </mesh>
      {/* Fender arches over the wheel rather than filling it with a box. */}
      <mesh position={[-1.02, 0.35, 0]}>
        <torusGeometry args={[0.395, 0.115, 12, 32, Math.PI]} />
        <meshStandardMaterial color={pink} metalness={0.1} roughness={0.32} />
      </mesh>
      {[-1, 1].map((side) => (
        <group key={side}>
          <Oval
            at={[0.78, 0.85, side * 0.31]}
            size={[0.43, 0.26, 0.09]}
            color={pink}
          />
          <Tube
            points={[
              [-0.67, 0.42, side * 0.35],
              [-0.2, 0.42, side * 0.35],
              [0.5, 0.48, side * 0.35],
            ]}
            radius={0.014}
          />
          <Tube
            points={[
              [-1.02, 0.35, side * 0.13],
              [-0.83, 0.97, side * 0.13],
            ]}
            radius={0.035}
          />
          <Oval
            at={[0.93, 0.39, side * 0.11]}
            size={[0.28, 0.12, 0.06]}
            color="#373b39"
          />
          <Oval
            at={[0.64, 0.88, side * 0.404]}
            size={[0.055, 0.075, 0.008]}
            color={chrome}
            metal
          />
        </group>
      ))}
      {/* Ribbed cream footboard and stitched saddle. */}
      {Array.from({ length: 9 }, (_, i) => (
        <Tube
          key={i}
          radius={0.012}
          color="#e5dccb"
          points={[
            [-0.34 + i * 0.062, 0.61, -0.26],
            [-0.34 + i * 0.062, 0.61, 0.26],
          ]}
        />
      ))}
      <Oval at={[0.64, 1.24, 0]} size={[0.66, 0.16, 0.37]} color="#b59b78" />
      <Oval at={[0.64, 1.185, 0]} size={[0.66, 0.065, 0.372]} color="#8c775e" />
      <Tube
        points={[
          [0.34, 1.18, -0.38],
          [1.14, 1.19, -0.38],
          [1.3, 1.21, 0],
          [1.14, 1.19, 0.38],
          [0.34, 1.18, 0.38],
        ]}
      />
      <Tube
        points={[
          [1.12, 1.1, -0.19],
          [1.3, 1.51, -0.19],
          [1.3, 1.51, 0.19],
          [1.12, 1.1, 0.19],
        ]}
        radius={0.028}
      />
      <Oval at={[1.26, 1.51, 0]} size={[0.095, 0.17, 0.25]} color="#47413e" />
      <Oval at={[1.19, 1.52, 0]} size={[0.035, 0.135, 0.21]} color="#b39a79" />
      <Oval at={[1.22, 0.88, 0]} size={[0.04, 0.065, 0.19]} color="#a6413e" />
      <Tube
        color="#373b39"
        radius={0.025}
        points={[
          [0.25, 0.5, 0],
          [0.15, 0.03, 0.38],
          [0.28, 0.03, 0.4],
        ]}
      />

      {/* Steering housing, round lamp, rubber grips and stalk mirrors. */}
      <group position={[-0.86, 1.54, 0]} rotation={[0, -0.12, 0]}>
        <Oval at={[0, 0, 0]} size={[0.21, 0.17, 0.32]} color={pink} />
        <Tube
          points={[
            [0.03, 0, -0.55],
            [0.08, 0.03, 0],
            [0.03, 0, 0.55],
          ]}
          radius={0.035}
        />
        {[-1, 1].map((side) => (
          <group key={side}>
            <Tube
              color="#303431"
              radius={0.048}
              points={[
                [0.04, 0, side * 0.4],
                [0.04, 0, side * 0.65],
              ]}
            />
            <Tube
              radius={0.014}
              points={[
                [-0.02, -0.05, side * 0.4],
                [-0.09, -0.1, side * 0.6],
              ]}
            />
            <Tube
              radius={0.016}
              points={[
                [0.02, 0.04, side * 0.39],
                [0, 0.35, side * 0.56],
                [0.02, 0.43, side * 0.64],
              ]}
            />
            <Oval
              at={[0.02, 0.43, side * 0.64]}
              size={[0.045, 0.11, 0.145]}
              color="#323634"
            />
            <Oval
              at={[0.059, 0.43, side * 0.64]}
              size={[0.009, 0.09, 0.122]}
              color="#a6b8b6"
              metal
            />
            <Oval
              at={[-0.15, -0.12, side * 0.28]}
              size={[0.04, 0.035, 0.06]}
              color="#d7a164"
            />
          </group>
        ))}
        <mesh position={[-0.2, 0.015, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.14, 0.025, 10, 32]} />
          <meshStandardMaterial
            color={chrome}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[-0.212, 0.015, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <circleGeometry args={[0.133, 32]} />
          <meshStandardMaterial
            color="#f3edda"
            emissive="#ffe1a6"
            emissiveIntensity={night ? 1.7 : 0.15}
            roughness={0.18}
          />
        </mesh>
        <group position={[-0.06, 0.15, 0]} rotation={[0, 0, -0.18]}>
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <shapeGeometry args={[windshield, 28]} />
            <meshPhysicalMaterial
              color="#d5e5e5"
              transparent
              opacity={0.24}
              roughness={0.1}
              metalness={0.15}
              side={THREE.DoubleSide}
              depthWrite={false}
            />
          </mesh>
          <Tube
            radius={0.009}
            points={[
              [0, 0, -0.4],
              [0, 0.48, -0.4],
              [0, 0.78, -0.23],
              [0, 0.86, 0],
              [0, 0.78, 0.23],
              [0, 0.48, 0.4],
              [0, 0, 0.4],
            ]}
          />
          <Tube
            radius={0.035}
            points={[
              [0, 0.02, -0.4],
              [0, -0.025, 0],
              [0, 0.02, 0.4],
            ]}
          />
          {[-0.3, 0.3].map((z) => (
            <Oval
              key={z}
              at={[-0.035, 0.04, z]}
              size={[0.018, 0.027, 0.027]}
              color={chrome}
              metal
            />
          ))}
        </group>
      </group>
    </group>
  );
}
