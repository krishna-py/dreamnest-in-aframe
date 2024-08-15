AFRAME.registerComponent('target-marker', {
    init: function () {
        let el = this.el;

        this.addMarker = function (e) {
            console.log(e.detail.intersection.object);
            let p = e.detail.intersection.point;
            let scene = document.querySelector('a-scene');

            let newMark = document.createElement('a-entity');
            newMark.setAttribute('geometry', {
                primitive: 'sphere', 
            });
            newMark.setAttribute('material', {
                color: 'red',
            });
            newMark.setAttribute('scale', {
                x: 0.1,
                y: 0.1,
                z: 0.1
            });
            newMark.setAttribute('position', el.object3D.worldToLocal(p));
            el.appendChild(newMark);
        }

        this.el.addEventListener('click', this.addMarker);
    },
    remove: function () {
        this.el.removeEventListener('click', this.addMarker);
    }
});