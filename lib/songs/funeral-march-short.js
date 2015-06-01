'use strict';

var asString = 'g g g - g - g - g g g - a# a# a a a a g g g g f# f# g g';

var song = asString.split(' ').map(function(char) {
  return [char === '-' ? null : char + '4', 0.25];
});

module.exports = {
  song: song,
  tempo: 100
};
