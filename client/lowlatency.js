
var preloadAudio = function () {
  console.log('--------->  preloaded!');
  window.plugins.NativeAudio.preloadComplex(
      'apito1', 
      'application/audio/apito1.aiff', 
      1, 
      1, 
      0,
      function (msg) { console.log(msg) });

  window.plugins.NativeAudio.preloadComplex(
      'apito2', 
      'application/audio/apito2.aiff', 
      1, 
      1, 
      0,
      function (msg) { console.log(msg) });

  window.plugins.NativeAudio.preloadComplex(
      'apito3', 
      'application/audio/apito3.aiff', 
      1, 
      1, 
      0,
      function (msg) { console.log(msg) });
};

Template.sounds.onRendered( function () {
  preloadAudio();
});

Template.sounds.helpers({
});

Template.sounds.events({
  'click .sound1': function (e, template) {
    console.log('sound1 clicked');
  },
  'touchend .sound1': function (e, template) {
    console.log('sound1 end');
    window.plugins.NativeAudio.stop('apito1');
  },
  'touchstart .sound1': function ( e, template) {
    console.log('sound1 start');
    window.plugins.NativeAudio.loop('apito1');
  },
  'touchend .sound2': function (e, template) {
    console.log('sound2 end');
    window.plugins.NativeAudio.stop('apito2');
  },
  'touchstart .sound2': function (e, template) {
    console.log('sound2 start');
    window.plugins.NativeAudio.loop('apito2');
  },
  'touchend .sound3': function (e, template) {
    console.log('sound3 end');
    window.plugins.NativeAudio.stop('apito3');
  },
  'touchstart .sound3': function (e, template) {
    console.log('sound3 start');
    window.plugins.NativeAudio.loop('apito3');
  }
});

