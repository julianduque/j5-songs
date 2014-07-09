'use strict';

var claxon = [
    ["C4", 4],
    [null, 4],
    ["C4", 4],
    [null, 4],
    ["C4", 4],
    [null, 8]
];

module.exports = {
  song: claxon.concat(claxon),
  tempo: 150
};