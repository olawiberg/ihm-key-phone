(function() {
  var MobileAuth;

  MobileAuth = {
    init: function() {
      return this.watchForActivate();
    },
    watchForActivate: function() {
      $('.auth-touchpad-dot-inner-circle').on('touchstart', _.bind(this.activateDotFromEvent, this));
      $('.auth-touchpad-dot-inner-circle').on('touchmove', _.bind(this.activateDotFromMoveEvent, this));
      return $('.auth-touchpad-dot-inner-circle').on('click', _.bind(this.activateDotFromEvent, this));
    },
    activateDotFromEvent: function(e) {
      var $dot;
      $dot = $(e.target);
      return $dot.css({
        background: 'red'
      });
    },
    activateDotFromMoveEvent: function(e) {
      $('h4').append(e.touches);
      return $('h4').append(e.touches);
    }
  };

  window.MobileAuth = MobileAuth;

}).call(this);