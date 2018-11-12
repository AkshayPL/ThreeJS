var scene = new THREE.Scene();
 //scene.background = new THREE.Color( 0xff0000 );
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
var renderer =new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
//renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 1);
document.body.appendChild( renderer.domElement );
window.addEventListener('resize',function()
           {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize (width,height);
            camera.aspect = width/height;
            camera.updateProjectionMatrix();
            });
var controls = new THREE.OrbitControls( camera,renderer.domElement );
 controls.enablePan=false;
 controls.maxDistance=50.0;
controls.minDistance=5.0;
controls.enableDamping=true;
controls.dampingFactor=0.2;
controls.rotateSpeed=0.3;
var loader = new THREE.GLTFLoader();
loader.load(
	// resource URL
	'gltf/logo.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
         );

//Lights
light = new THREE.PointLight(0xffffff,0.8,18);
light.position.set(0,2,10);
light.castShadow = true;
light.shadow.camera.near=0.1;
light.shadow.camera.far=25;
scene.add(light);
//
light2 = new THREE.PointLight(0xffffff,0.8,18);
light2.position.set(0,2,-10);
light2.castShadow = true;
light2.shadow.camera.near=0.1;
light2.shadow.camera.far=25;
scene.add(light2);
//
        var ambient= new THREE.AmbientLight( 0xffffff,0.5);
       // scene.add( ambient );
         //var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
         var keyLight =new THREE.AmbientLight( 0xffccff);
	keyLight.position.set(-1, 0, 11);
 
	//var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
    var fillLight = new THREE.AmbientLight( 0xffffff);
	fillLight.position.set(1, 0, 11);
 
	var backLight = new THREE.AmbientLight( 0xffeecc);
	backLight.position.set(1, 0, -11).normalize();
 
	//scene.add(keyLight);
	//scene.add(fillLight);
	//scene.add(backLight);
         
        

         camera.position.z = 10;
         function animate() 
         {
	       requestAnimationFrame( animate );
		   controls.update();
	       renderer.render( scene, camera );
         }
         animate();