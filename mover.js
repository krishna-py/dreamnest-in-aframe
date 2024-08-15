AFRAME.registerComponent('mover', {
    init: function()    {
        let el = this.el;

        this.animateMove = function()  {
            let pos = el.getAttribute('position');
            let newPos = {x: pos.x - 5, y: pos.y, z: pos.z};

            let params = {
                property: 'position',
                to: newPos,
                dur: 3000,
                easing: 'easeInOutElastic'
            };
            
            el.setAttribute('animation', params);
        }

        this.el.addEventListener('click', this.animateMove);
    },
    remove: function()  {
        this.el.removeEventListener('click', this.animateMove);
    }
});