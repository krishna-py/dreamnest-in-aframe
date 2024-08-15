AFRAME.registerComponent('goaround', {
    init: function () {
        let el = this.el;

        this.animateCircularMove = function () {
            let angle = 0;
            const radius = 20; // Radius of the circle
            const centerX = 0; // X coordinate of the circle's center
            const centerY = 30; // Y coordinate of the circle's center (height)
            const centerZ = 0; // Z coordinate of the circle's center
            const speed = 0.5 * Math.PI / 180; // Speed of the animation in degree

            function update() {
                angle += (speed);
                angle = angle % (2 * Math.PI); // Keep angle within 0 to 2*PI rad
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + (centerY/4) * Math.cos(1*(angle - Math.PI)); // 
                const z = centerZ + radius * Math.sin(angle);
                const rotation = angle * (180 / Math.PI); // Convert radians to degrees
                
                el.setAttribute('position', { x: x, y: y, z: z });
                el.setAttribute('rotation', { x: 0, y: -rotation, z: 0 });

                requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
        };

        this.animateCircularMove();
    },
    remove: function () {
        // Cleanup code if necessary
    }
});