var newSoundOn = function ( aFilename, onSuccess, onError, onStateChanged ) {
  var answer = new Media(aFilename, onSuccess, onError, onStateChanged);

  // Here is a trick to get it preloaded: play and immediately pause.
  answer.play();
  answer.pause();
  // setTimeout(function () { answer.pause(); }, 1);
  return answer;
};

var preloadAudio = function (aTemplate) {
  console.log(aTemplate);

  aTemplate.sound1 = newSoundOn(
    'application/app/audio/apito1.aiff'
    , function (data) {
      console.log('success ', data);
    }
    , function (error) {
      console.log('Error', error);
    }
    , function (state) {
      // console.log(state);
      if( state === Media.MEDIA_STOPPED ) {
        aTemplate.sound1.play();
      }      
    }
    );

  aTemplate.sound2 = newSoundOn(
    'application/app/audio/apito2.aiff'
    , function (data) {
      console.log('success ', data);
    }
    , function (error) {
      console.log('Error', error);
    }
    , function (state) {
      // console.log(state);
      if( state === Media.MEDIA_STOPPED ) {
        aTemplate.sound2.play();
      }
    }
    );

  aTemplate.sound3 = newSoundOn(
    'application/app/audio/apito3.aiff'
    , function (data) {
      console.log('success ', data);
    }
    , function (error) {
      console.log('Error', error);
    }
    , function (state) {
      // console.log(state);
      if( state === Media.MEDIA_STOPPED ) {
        aTemplate.sound3.play();
      }      
    }
    );

};

Template.sounds.onRendered( function () {
  var self = this;
  preloadAudio(self);
});

Template.sounds.helpers({
});

Template.sounds.events({
  'touchend .sound1': function (e, template) {
    console.log('sound1 end');
    template.sound1.pause();
  },
  'touchstart .sound1': function ( e, template) {
    console.log('sound1 start');
    template.sound1.play();
  },
  'touchend .sound2': function (e, template) {
    console.log('sound2 end');
    template.sound2.pause();
  },
  'touchstart .sound2': function (e, template) {
    console.log('sound2 start');
    template.sound2.play();
  },
  'touchend .sound3': function (e, template) {
    console.log('sound3 end');
    template.sound3.pause();
  },
  'touchstart .sound3': function (e, template) {
    console.log('sound3 start');
    template.sound3.play();
  }
});

