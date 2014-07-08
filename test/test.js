'use strict';

var songs = require('../lib/');

exports.songs = {
  load: function (test) {
    test.expect(4);

    var tune = songs.load('test-song');

    test.ok(tune, 'should load a song object');
    test.ok(tune.song, 'should contain a song property');
    test.ok(Array.isArray(tune.song), 'song property should be an array');
    test.equal(tune.tempo, 150, 'tempo should be equal');

    test.done();
  },

  list: function (test) {
    test.expect(3);

    songs.list(function (err, tunes) {
      test.ok(!err, 'should not return an error');
      test.ok(tunes, 'should load the songs object');
      test.ok("test-song" in tunes, 'should load the test song');

      test.done();
    });
  }
};
