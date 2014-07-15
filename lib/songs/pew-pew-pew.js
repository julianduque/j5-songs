'use strict';

var pew = [
    ["G5", 1/4],
    ["F5", 1/4],
    ["E5", 1/4],
    ["D5", 1/4],
    ["C5", 1/4],
    ["B5", 1/4],
    ["A5", 1/4],
    [null, 1/2]
];

module.exports = {
  song: pew.concat(pew, pew),
  tempo: 300
};
