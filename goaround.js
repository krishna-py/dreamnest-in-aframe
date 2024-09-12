AFRAME.registerComponent('goaround', {
    tick: function (t, dt) {
        const radius = 20; // Radius of the circle
        const centerX = 0; // X coordinate of the circle's center
        const centerY = 30; // Y coordinate of the circle's center (height)
        const centerZ = 0; // Z coordinate of the circle's center
        const speed = 0.5 * Math.PI / 180; // Speed of the animation in degree - one revolution every X secs

        let angle = dt / 1000 * speed; // dt is the time between two frames
        angle = angle % (2 * Math.PI); // Keep angle within 0 to 2*PI rad

        var mesh = this.el.getObject3D('mesh');
        if (!mesh) return;
        mesh.position.x = centerX + radius * Math.cos(angle);
        mesh.position.y = centerY + (centerY/4) * Math.cos(1*(angle - Math.PI)); // 
        mesh.position.z = centerZ + radius * Math.sin(angle);
        mesh.rotation.y = -angle * (180 / Math.PI); // Convert radians to degrees
    }
});