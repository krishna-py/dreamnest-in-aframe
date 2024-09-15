
AFRAME.registerComponent('levitate', {
    tick: function (t, dt) {
      var mesh = this.el.getObject3D('mesh');
      if (!mesh) return;
      mesh.rotation.y += 0.1 * dt / 1000;
      // mesh.position.y = 0.25 * Math.sin(t / 1000);
    }
  });