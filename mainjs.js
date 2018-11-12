var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
var controls = new THREE.OrbitControls( camera );
var renderer =new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(new THREE.Color(0x0000ff, 1.0));
document.body.appendChild( renderer.domElement );
window.addEventListener('resize',function()
           {
            var width = window.innerWidth;
            var height = window.innerHeight;
            renderer.setSize (width,height);
            camera.aspect = width/height;
            camera.updateProjectionMatrix();
            });
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load( 'models/Dri_webgl.obj', function( materials ) {

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials( materials );
  objLoader.load(
	'models/Dri_webgl.obj',
	// called when resource is loaded
	function ( object ) {
                object.scale.set(0.01,0.01,0.01);
		scene.add( object );

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

} );
	 /*var loader = new THREE.OBJLoader();

         // load a resource
        loader.load(
	'models/Dri_webgl.obj',
	// called when resource is loaded
	function ( object ) {
                object.scale.set(0.01,0.01,0.01);
		scene.add( object );

	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
         );*/
        var ambient= new THREE.AmbientLight( 0x101030);
        scene.add( ambient );
         var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
	keyLight.position.set(-100, 0, 100);
 
	var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
	fillLight.position.set(100, 0, 100);
 
	var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
	backLight.position.set(100, 0, -100).normalize();
 
	scene.add(keyLight);
	scene.add(fillLight);
	scene.add(backLight);
         
         /*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
         var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
         var cube = new THREE.Mesh( geometry, material );
         scene.add( cube );*/

         camera.position.z = 100;
         
         function animate() 
         {
	       requestAnimationFrame( animate );
		   controls.update();
	       renderer.render( scene, camera );
         }
         animate();