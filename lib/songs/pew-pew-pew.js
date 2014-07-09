'use strict';

var pew = [
    ["G5", 1],
    ["F5", 1],
    ["E5", 1],
    ["D5", 1],
    ["C5", 1],
    ["B5", 1],
    ["A5", 1],
    [null, 2]
];

module.exports = {
  song: pew.concat(pew, pew),
  tempo: 40
};