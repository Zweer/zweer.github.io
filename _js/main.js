'use strict';

const $ = require('jquery');

require('./_menu.js');

$(function () {
    $( '#dl-menu' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in', classout : 'dl-animate-out' }
    });
});