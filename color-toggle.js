AFRAME.registerComponent('color-toggle', {
    init: function()  {
      let el = this.el;
      this.toggleColor = function()  {
        let color = el.getAttribute('material').color;
        let invertedColor = invertHexColor(color);
        console.log(color, invertedColor);

        el.setAttribute('material', 'color', invertedColor);
      }
      this.el.addEventListener('click', this.toggleColor);
    },
    remove: function()  {
      this.el.removeEventListener('click', this.toggleColor);
    }
  })


  hexToRgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  };

  invertColor = function(rgb)   {
    return {
      r: 255 - rgb.r,
      g: 255 - rgb.g,
      b: 255 - rgb.b
    };
  };

  rgbToHex = function(rgb)  {
    return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
  }

  invertHexColor = function(hex)  {
    let rgb = hexToRgb(hex);
    let inverted = invertColor(rgb);
    return rgbToHex(inverted);
  }
