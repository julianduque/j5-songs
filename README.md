# j5-songs [![Build Status](https://secure.travis-ci.org/julianduque/j5-songs.png?branch=master)](http://travis-ci.org/julianduque/j5-songs)

Songs for Johnny-Five Piezo class

## Getting Started
Install the module with: `npm install j5-songs --save`

```javascript
var five = require('johnny-five');
var songs = require('j5-songs');

five.Board().on('ready', function () {
  var piezo = new five.Piezo();

  // Load a song object
  var song = songs.load('never-gonna-give-you-up');
  
  // Play it !
  piezo.play(song);

  // List all songs
  songs.list(function (err, tunes) {
    // Object literal with all the songs
  });
});
```

## Songs

| Song ID                 | Artist        | Name                    |
|-------------------------|---------------|-------------------------|
| beethovens-fifth        | Beethoven     | Beethoven's Fifth       |
| claxon                  | Brian Genisio | A Claxon 2x             |
| do-re-mi                | Richard Rogers| Do-Re-Mi                |
| doorbell                | Unknown       | Classic Doorbell        |
| mario-fanfare           | Nintendo      | Super Mario Theme       |
| mario-intro             | Nintendo      | Super Mario Intro       |
| never-gonna-give-you-up | Rick Astley   | Never Gonna Give You Up |
| pew-pew-pew             | Brian Genisio | A shooter noise         |
| starwars-theme          | John Williams | THE Star Wars Theme     |

## License
Copyright (c) 2014 Julian Duque, Brian Genisio. Licensed under the MIT license.
