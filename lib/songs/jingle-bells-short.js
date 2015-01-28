'use strict';

var asString = 'e - e - e - - e - e - e - - e e g g c c d d e e';

var song = asString.split(' ').map(function(char) {
  return [char === '-' ? null : char + '4', 0.25];
});

module.exports = {
  song: song,
  tempo: 100
};
