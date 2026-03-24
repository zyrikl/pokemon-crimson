import * as THREE from 'three';

const container = document.querySelector("#container");

const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

const fov = 35;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 1000;
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0,0,10);

const geometry = new BoxBufferGeometry(2, 2, 2);
const material = new MeshBasicMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);

container.append(renderer.domElement);
renderer.render(scene, camera);