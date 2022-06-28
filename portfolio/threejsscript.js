
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import GLTFLoader from 'three-gltf-loader';


	let camera, controls, scene, renderer;

	init();
	animate();

	function init() {

		scene = new THREE.Scene();
		scene.background = new THREE.Color( '#f4f4f4' );
		scene.fog = new THREE.FogExp2( '#f4f4f4', 0.001 );

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );

		camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.set( 400, 200, 0 );
		controls = new OrbitControls( camera, renderer.domElement );
		controls.listenToKeyEvents( window );
		controls.enableDamping = true; 
		controls.dampingFactor = 0.05;
		controls.screenSpacePanning = false;
		controls.minDistance = 100;
		controls.maxDistance = 500;
		controls.maxPolarAngle = Math.PI / 2;
		const geometry = new THREE.SphereGeometry( 5, 13, 4 );
		const material = new THREE.MeshPhongMaterial( { color: '#d3d1d1', flatShading: true } );

		

		for ( let i = 0; i < 500; i ++ ) {
			const mesh = new THREE.Mesh( geometry, material );
			mesh.position.x = Math.random() * 1600 - 800;
			mesh.position.y = Math.random() * 400 - 200;
			mesh.position.z = Math.random() * 1600 - 800;
			
			mesh.updateMatrix();
			mesh.matrixAutoUpdate = false;
			scene.add( mesh );
		}

		const dirLight1 = new THREE.DirectionalLight( 0xffffff );
		dirLight1.position.set( 1, 1, 1 );
		scene.add( dirLight1 );

		const dirLight2 = new THREE.DirectionalLight( 0xffffff );
		dirLight2.position.set( - 1, - 1, - 1 );
		scene.add( dirLight2 );

		const dirLight3 = new THREE.DirectionalLight( 0xffffff );
		dirLight3.position.set( - 1, 2, - 1 );
		scene.add( dirLight3 );
		const ambientLight = new THREE.AmbientLight( 0x808080 );
		scene.add( ambientLight );
		window.addEventListener( 'resize', onWindowResize );
	}

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function animate() {
		requestAnimationFrame( animate );
		controls.update(); 
		render();
	}

	function render() {
		renderer.render( scene, camera );
	}






// // const scene = new THREE.Scene()
// // scene.add(new THREE.AxesHelper(5))


// // const ambientLight = new THREE.AmbientLight('white', .75)
// // scene.add(ambientLight)

// // const camera = new THREE.PerspectiveCamera(
// //     75,
// //     window.innerWidth / window.innerHeight,
// //     0.1,
// //     1000
// // )
// // camera.position.z = 40
// // const container  = document.querySelector(".three_bg")


// // const renderer = new THREE.WebGLRenderer(
// //     {
// //         antialias :true, 

// //     }
// // )
// // renderer.physicallyCorrectLights = true
// // renderer.shadowMap.enabled = true
// // // renderer.outputEncoding = THREE.sRGBEncoding
// // renderer.setSize(window.innerWidth, window.innerHeight)
// // document.body.appendChild(renderer.domElement)
// // container.appendChild(renderer.domElement)

// // const controls = new OrbitControls(camera, renderer.domElement)
// // controls.enableDamping = true

// // const loader = new GLTFLoader()
// // loader.load(
    
// // 	'../portfolio/assets/static/models/DamagedHelmet/glTF/mayeight2.gltf',
// //     function (gltf) {
// //         gltf.scene.traverse(function (child) {
          
// //         })
// //         scene.add(gltf.scene)
// //     },
// //     (xhr) => {
// //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
// //     },
// //     (error) => {
// //         console.log(error)
// //     }
// // )

// // window.addEventListener('resize', onWindowResize, false)
// // function onWindowResize() {
// //     camera.aspect = window.innerWidth / window.innerHeight
// //     camera.updateProjectionMatrix()
// //     renderer.setSize(window.innerWidth, window.innerHeight)
// //     render()
// // }

// // const stats = Stats()
// // document.body.appendChild(stats.dom)

// // function animate() {
// //     requestAnimationFrame(animate)

// //     controls.update()

// //     render()

// //     stats.update()
// // }

// // function render() {
// //     renderer.render(scene, camera)
// // }

// // animate()


// import * as THREE from "three";
// import GLTFLoader from "three-gltf-loader";
// import { DRACOLoader } from "@loaders.gl/draco";
// import OrbitControls from "three-orbitcontrols";
// import { load } from "@loaders.gl/core";

