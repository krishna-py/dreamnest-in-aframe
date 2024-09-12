/* global AFRAME */
AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
  
      this.roomStyleNameEl = document.querySelector('#roomStyleName');
      this.roomDescriptionEl = document.querySelector('#roomStyleDescription');
  
      this.roomInfo = {
        roomStyleButton: {
          title: 'Modern',
          imgEl: document.querySelector('#roomStyleImage'),
          description: 'Based on Lowes: Large, L-shape Kitchen.'
        }
      };
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);
      this.backgroundEl = document.querySelector('#background');
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
      }
      this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      this.el.object3D.renderOrder = 9999999;
      this.el.object3D.depthTest = false;
    },
  
    onMenuButtonClick: function (evt) {
      var roomInfo = this.roomInfo[evt.currentTarget.id];
  
      this.backgroundEl.object3D.scale.set(1, 1, 1);
  
      this.el.object3D.scale.set(1, 1, 1);
      if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
      this.el.object3D.visible = true;
  
      if (this.roomImageEl) { this.roomImageEl.object3D.visible = false; }
      this.roomImageEl = roomInfo.imgEl;
      this.roomImageEl.object3D.visible = true;
  
      this.roomStyleNameEl.setAttribute('text', 'value', roomInfo.title);
      this.roomDescriptionEl.setAttribute('text', 'value', roomInfo.description);
    },
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
    }
  });