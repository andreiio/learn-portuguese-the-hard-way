audiojs.events.ready(function() {
  var as = audiojs.createAll({
    settings: {
      preload: false,
    },
    css: false,
    createPlayer: {
      markup: '\
        <div class="play-pauseZ"> \
          <p class="playZ"></p> \
          <p class="pauseZ"></p> \
          <p class="loadingZ"></p> \
          <p class="errorZ"></p> \
        </div> \
        <div class="scrubberZ"> \
          <div class="progressZ"></div> \
          <div class="loadedZ"></div> \
        </div> \
        <div class="timeZ"> \
          <em class="playedZ">00:00</em>/<strong class="durationZ">00:00</strong> \
        </div> \
        <div class="error-messageZ"></div>',
      playPauseClass: 'play-pauseZ',
      scrubberClass: 'scrubberZ',
      progressClass: 'progressZ',
      loaderClass: 'loadedZ',
      timeClass: 'timeZ',
      durationClass: 'durationZ',
      playedClass: 'playedZ',
      errorMessageClass: 'error-messageZ',
      playingClass: 'playingZ',
      loadingClass: 'loadingZ',
      errorClass: 'errorZ',
    },
  });
});
