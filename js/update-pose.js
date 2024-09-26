AFRAME.registerComponent("follow-duck", {
  schema: {
    target: { type: "selector" }
  },
  tick: (function () {
    // create once
    const tmpv = new THREE.Vector3();

    return function (t, dt) {
      if (!this.data.target) return; // ignore when there is no target
      const target = this.data.target.getObject3D("mesh"); // get the mesh
      // track the position
      const position = target.getWorldPosition(tmpv); // get the world position
      // this.el.object3D.position.lerp(tmpv, 0.001) // linear interpolation towards the world position
      this.el.object3D.position.z = tmpv.z + 1
    }
  })()
})
AFRAME.registerComponent("rotate-with-camera", {
  tick: (function () {
    // create once
    const tmpq = new THREE.Quaternion();
    const tmpe = new THREE.Euler();

    return function (t, dt) {
      if (!this.el.sceneEl.camera) return; // ignore when there is no camera
      const cam = this.el.sceneEl.camera.el; // get the camera entity
      cam.object3D.getWorldQuaternion(tmpq); // get the world rotation
      tmpe.setFromQuaternion(tmpq, 'YXZ')
      // set attribute is needed for wasd-controls
      this.el.setAttribute("rotation", { x: 0, y: 180 + tmpe.y * 180 / Math.PI, z: 0 })
    }
  })()
})


AFRAME.registerComponent("share-pose", {
  init: function () {
    var peer = new peer();
  },
  tick: (function () {
    // create once
    const tmpv = new THREE.Vector3();

    return function (t, dt) {
     const position = this.el.object3D.getWorldPosition(tmpv); // get the world position
    }
  })()
})