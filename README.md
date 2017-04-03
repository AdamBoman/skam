# SKAM
Display the current time and day of the week like in [the Norwegian TV series "SKAM"](http://skam.p3.no/).

[Live example](http://skam.substrat.se/)

##Configuration
Configure by adding an image named `background.jpg` and uncommenting the following line in `css/main.css`:
```
/*background-image: url(../background.jpg);*/
```

To change images between day and night, configure the following lines in `js/main.js`:
```
/*****************************************************************************
 * Configuration
 *****************************************************************************/
var BACKGROUND_DAY = 'background.jpg';
var BACKGROUND_NIGHT = 'background-night.jpg';
var doChangeBackground = true;
```
