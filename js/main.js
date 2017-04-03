/*****************************************************************************
 * Configuration
 *****************************************************************************/
var BACKGROUND_DAY = 'background.jpg';
var BACKGROUND_NIGHT = 'background-night.jpg';
var doChangeBackground = false;


var UKEDAGER = [
  'Søndag',
  'Mandag',
  'Tirsdag',
  'Onsdag',
  'Torsdag',
  'Fredag',
  'Lørdag',
];

var previousTime;
var previousDay;

$(document).ready(function () {
  setInterval(updateTime, 1000);
  updateTime();
});

$(window).resize(function () {
  setFontSizes(previousDay);
});

function updateTime() {
  var now = new Date();
  var day = UKEDAGER[now.getDay()];
  var time = now.getHours() + ':' + ('0' + now.getMinutes()).slice(-2);
  if (time !== previousTime) {
    $('#time').text(time);
    updateBackground(now);
    previousTime = time;
  }
  if (day === previousDay) {
    return;
  }
  setFontSizes(day);
  $('#day').text(day);
}

function updateBackground(now) {
  if (!doChangeBackground) {
    return;
  }
  if (now.getHours() > 6 && now.getHours() < 18) {
    $('.background').css({ 'background-image': 'url(' + BACKGROUND_DAY +')' });
  } else {
    $('.background').css({ 'background-image': 'url(' + BACKGROUND_NIGHT +')' });
  }
}

function setFontSizes(day) {
  $('#hidden').text(day);
  var txtWidth = $('#hidden').width();
  var bkgWidth = $('#background').width();
  var dayFontSize = 97 * bkgWidth / txtWidth;
  var timeFontSize = bkgWidth * 0.3;
  $('#day').css({ 'font-size': dayFontSize });
  $('#time').css({ 'font-size': timeFontSize });
}
