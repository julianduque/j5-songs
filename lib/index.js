'use strict';

var fs = require('fs'),
    path = require('path'),
    songsDir = path.join(__dirname, process.env.SONGS_DIR || 'songs');

var songs = exports;

// Load a song from disk
songs.load = function load(name) {
  try {
    return require(path.join(songsDir, name));
  } catch (e) {
    throw new Error('Song not found');
  }
};

// List all available songs
songs.list = function list(callback) {
  fs.readdir(songsDir, function (err, files) {
    if (err) {
      return callback(err);
    }

    var tunes = {};

    for (var i = 0; i < files.length; i++) {
      var id = path.basename(files[i], '.js');
      tunes[id] = songs.load(id);
    }

    callback(null, tunes);
  });
};
