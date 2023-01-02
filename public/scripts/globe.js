let canvas, scene, renderer, data;

// Cache DOM selectors
const container = document.getElementsByClassName("js-globe")[0];

// Object for country HTML elements and letiables
let elements = {};

// Three group objects
let groups = {
  main: null, // A group containing everything
  globe: null, // A group containing the globe sphere (and globe dots)
  globeDots: null, // A group containing the globe dots
};

// Check for dark mode
const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Map properties for creation and rendering
let props = {
  mapSize: {
    // Size of the map from the intial source image (on which the dots are positioned on)
    width: 2048 / 2,
    height: 1024 / 2,
  },
  globeRadius: 200, // Radius of the globe (used for many calculations)
  dotsAmount: 20, // Amount of dots to generate and animate randomly across the lines
  startingCountry: "paris", // The key of the country to rotate the camera to during the introduction animation (and which country to start the cycle at)
  colours: {
    // Cache the colours
    globeDots: isDarkMode ? "rgb(255, 255, 255)" : "rgb(0,0,0)", // No need to use the Three constructor as this value is used for the HTML canvas drawing 'fillStyle' property
  },
  alphas: {
    // Transparent values of materials
    globe: 0.7,
  },
};

// Angles used for animating the camera
let camera = {
  object: null, // Three object of the camera
  controls: null, // Three object of the orbital controls
  angles: {
    // Object of the camera angles for animating
    current: {
      azimuthal: null,
      polar: null,
    },
    target: {
      azimuthal: null,
      polar: null,
    },
  },
};

// Booleans and values for animations
let animations = {
  dots: {
    current: 0, // Animation frames of the globe dots introduction animation
    points: [], // Array to clone the globe dots coordinates to
  },
};

// Boolean to enable or disable rendering when window is in or out of focus
let isHidden = false;

/* SETUP */

function getData() {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/617753/globe-points.json",
    true
  );

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      data = JSON.parse(request.responseText);
      setupScene();
    } else {
      showFallback();
    }
  };

  request.onerror = showFallback;

  request.send();
}

function showFallback() {
  /*
    This function will display an alert if WebGL is not supported.
  */

  alert("WebGL not supported. Please use a browser that supports WebGL.");
}

function setupScene() {
  canvas = container.getElementsByClassName("js-canvas")[0];

  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    shadowMapEnabled: false,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(1);
  renderer.setClearColor(0x000000, 0);

  // Main group that contains everything
  groups.main = new THREE.Group();
  groups.main.name = "Main";

  // Group that contains lines for each country
  groups.lines = new THREE.Group();
  groups.lines.name = "Lines";
  groups.main.add(groups.lines);

  // Group that contains dynamically created dots
  groups.lineDots = new THREE.Group();
  groups.lineDots.name = "Dots";
  groups.main.add(groups.lineDots);

  // Add the main group to the scene
  scene.add(groups.main);

  // Render camera and add orbital controls
  addCamera();
  addControls();

  // Render objects
  addGlobe();

  // Start the requestAnimationFrame loop
  render();
  animate();

  const canvasResizeBehaviour = function () {
    container.width = window.innerWidth;
    container.height = window.innerHeight;
    container.style.width = window.innerWidth + "px";
    container.style.height = window.innerHeight + "px";

    camera.object.aspect = container.offsetWidth / container.offsetHeight;
    camera.object.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  };

  window.addEventListener("resize", canvasResizeBehaviour);
  window.addEventListener("orientationchange", function () {
    setTimeout(canvasResizeBehaviour, 0);
  });
  window.addEventListener("change", () => {
    isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  canvasResizeBehaviour();
}

/* CAMERA AND CONTROLS */

function addCamera() {
  camera.object = new THREE.PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    1,
    10000
  );
  camera.object.position.z = props.globeRadius * 2.6;
}

function addControls() {
  camera.controls = new OrbitControls(camera.object, canvas);
  camera.controls.enableKeys = false;
  camera.controls.enablePan = false;
  camera.controls.enableZoom = false;
  camera.controls.enableDamping = false;
  camera.controls.enableRotate = false;

  // Set the initial camera angles to something crazy for the introduction animation
  camera.angles.current.azimuthal = -Math.PI;
  camera.angles.current.polar = 180;
}

/* RENDERING */

function render() {
  renderer.render(scene, camera.object);
}

if ("hidden" in document) {
  document.addEventListener("visibilitychange", onFocusChange);
} else if ("mozHidden" in document) {
  document.addEventListener("mozvisibilitychange", onFocusChange);
} else if ("webkitHidden" in document) {
  document.addEventListener("webkitvisibilitychange", onFocusChange);
} else if ("msHidden" in document) {
  document.addEventListener("msvisibilitychange", onFocusChange);
} else if ("onfocusin" in document) {
  document.onfocusin = document.onfocusout = onFocusChange;
} else {
  window.onpageshow =
    window.onpagehide =
    window.onfocus =
    window.onblur =
      onFocusChange;
}

function onFocusChange(event) {
  const visible = "visible";
  const hidden = "hidden";
  const eventMap = {
    focus: visible,
    focusin: visible,
    pageshow: visible,
    blur: hidden,
    focusout: hidden,
    pagehide: hidden,
  };

  event = event || window.event;

  if (event.type in eventMap) {
    isHidden = true;
  } else {
    isHidden = false;
  }
}

function animate() {
  if (isHidden === false) {
    requestAnimationFrame(animate);
  }

  if (groups.globeDots) {
    introAnimate();
  }

  camera.controls.setAzimuthalAngle(Math.cos(Date.now() * 0.0000005) * -360);
  camera.controls.setPolarAngle(1);

  camera.controls.update();

  render();
}

/* GLOBE */

function addGlobe() {
  const textureLoader = new THREE.TextureLoader();
  textureLoader.setCrossOrigin(true);

  const radius = props.globeRadius - props.globeRadius * 0.02;
  const segments = 64;
  const rings = 64;

  // Make gradient
  const canvasSize = 128;
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = canvasSize;
  textureCanvas.height = canvasSize;
  const canvasContext = textureCanvas.getContext("2d");
  canvasContext.rect(0, 0, canvasSize, canvasSize);
  const canvasGradient = canvasContext.createLinearGradient(
    0,
    0,
    0,
    canvasSize
  );
  canvasGradient.addColorStop(1, "rgba(0,0,0,0.02)");
  canvasGradient.addColorStop(1, "rgba(0,0,0,0.02)");
  canvasGradient.addColorStop(1, "rgba(0,0,0,0.02)");
  canvasContext.fillStyle = canvasGradient;
  canvasContext.fill();

  // Make texture
  const texture = new THREE.Texture(textureCanvas);
  texture.needsUpdate = true;

  const geometry = new THREE.SphereGeometry(radius, segments, rings);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0,
  });
  globe = new THREE.Mesh(geometry, material);

  groups.globe = new THREE.Group();
  groups.globe.name = "Globe";

  groups.globe.add(globe);
  groups.main.add(groups.globe);

  addGlobeDots();
}

function addGlobeDots() {
  const geometry = new THREE.Geometry();

  // Make circle
  const canvasSize = 16;
  const halfSize = canvasSize / 2;
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = canvasSize;
  textureCanvas.height = canvasSize;
  const canvasContext = textureCanvas.getContext("2d");
  canvasContext.beginPath();
  canvasContext.arc(halfSize, halfSize, halfSize, 0, 2 * Math.PI);
  canvasContext.fillStyle = props.colours.globeDots;
  canvasContext.fill();

  // Make texture
  const texture = new THREE.Texture(textureCanvas);
  texture.needsUpdate = true;

  const material = new THREE.PointsMaterial({
    map: texture,
    size: props.globeRadius / 200,
  });

  const addDot = function (targetX, targetY) {
    // Add a point with zero coordinates
    const point = new THREE.Vector3(0, 0, 0);
    geometry.vertices.push(point);

    // Add the coordinates to a new array for the intro animation
    const result = returnSphericalCoordinates(targetX, targetY);
    animations.dots.points.push(
      new THREE.Vector3(result.x, result.y, result.z)
    );
  };

  for (let i = 0; i < data.points.length; i++) {
    addDot(data.points[i].x, data.points[i].y);
  }

  for (const country in data.countries) {
    addDot(data.countries[country].x, data.countries[country].y);
  }

  // Add the points to the scene
  groups.globeDots = new THREE.Points(geometry, material);
  groups.globe.add(groups.globeDots);
}

function introAnimate() {
  const points = groups.globeDots.geometry.vertices;
  const totalLength = points.length;

  for (let i = 0; i < totalLength; i++) {
    // Move the point
    points[i].x = animations.dots.points[i].x * 1;
    points[i].y = animations.dots.points[i].y * 1;
    points[i].z = animations.dots.points[i].z * 1;
  }

  animations.dots.current++;

  // Update verticies
  groups.globeDots.geometry.verticesNeedUpdate = true;
}

/* COORDINATE CALCULATIONS */

// Returns an object of 3D spherical coordinates
function returnSphericalCoordinates(latitude, longitude) {
  // Convert latitude and longitude on the 90/180 degree axis
  latitude = ((latitude - props.mapSize.width) / props.mapSize.width) * -180;
  longitude = ((longitude - props.mapSize.height) / props.mapSize.height) * -90;

  // Calculate the projected starting point
  const radius = Math.cos((longitude / 180) * Math.PI) * props.globeRadius;
  const targetX = Math.cos((latitude / 180) * Math.PI) * radius;
  const targetY = Math.sin((longitude / 180) * Math.PI) * props.globeRadius;
  const targetZ = Math.sin((latitude / 180) * Math.PI) * radius;

  return {
    x: targetX,
    y: targetY,
    z: targetZ,
  };
}

// Reference: https://codepen.io/ya7gisa0/pen/pisrm?editors=0010
function returnCurveCoordinates(latitudeA, longitudeA, latitudeB, longitudeB) {
  // Calculate the starting point
  const start = returnSphericalCoordinates(latitudeA, longitudeA);

  // Calculate the end point
  const end = returnSphericalCoordinates(latitudeB, longitudeB);

  // Calculate the mid-point
  const midPointX = (start.x + end.x) / 2;
  const midPointY = (start.y + end.y) / 2;
  const midPointZ = (start.z + end.z) / 2;

  // Calculate the distance between the two coordinates
  const distance = Math.pow(end.x - start.x, 2);
  distance += Math.pow(end.y - start.y, 2);
  distance += Math.pow(end.z - start.z, 2);
  distance = Math.sqrt(distance);

  // Calculate the multiplication value
  const multipleVal = Math.pow(midPointX, 2);
  multipleVal += Math.pow(midPointY, 2);
  multipleVal += Math.pow(midPointZ, 2);
  multipleVal = Math.pow(distance, 2) / multipleVal;
  multipleVal = multipleVal * 0.7;

  // Apply the vector length to get new mid-points
  const midX = midPointX + multipleVal * midPointX;
  const midY = midPointY + multipleVal * midPointY;
  const midZ = midPointZ + multipleVal * midPointZ;

  // Return set of coordinates
  return {
    start: {
      x: start.x,
      y: start.y,
      z: start.z,
    },
    mid: {
      x: midX,
      y: midY,
      z: midZ,
    },
    end: {
      x: end.x,
      y: end.y,
      z: end.z,
    },
  };
}

// Returns an object of 2D coordinates for projected 3D position
function getProjectedPosition(width, height, position) {
  position = position.clone();
  const projected = position.project(camera.object);

  return {
    x: projected.x * width + width,
    y: -(projected.y * height) + height,
  };
}

// Returns an object of the azimuthal and polar angles of a given map latitude and longitude
function returnCameraAngles(latitude, longitude) {
  const targetAzimuthalAngle =
    ((latitude - props.mapSize.width) / props.mapSize.width) * Math.PI;
  targetAzimuthalAngle = targetAzimuthalAngle + Math.PI / 2;
  targetAzimuthalAngle = targetAzimuthalAngle + 0.1; // Add a small offset

  const targetPolarAngle = (longitude / (props.mapSize.height * 2)) * Math.PI;

  return {
    azimuthal: targetAzimuthalAngle,
    polar: targetPolarAngle,
  };
}

/* INITIALISATION */

if (!window.WebGLRenderingContext) {
  showFallback();
} else {
  getData();
}
