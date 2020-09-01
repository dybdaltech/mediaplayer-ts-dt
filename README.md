# MEDIAPLAYER

Challenged myself to create a fully functional mediaplayer library in Typescript, the javascript file is a result from npx tsc. 


### How to use:

in your HTML, add:
* A button with ID "startstop"
* A div with the ID of "mediacontrols"

Leave the contents of the div empty, will add autocreate for the rest later.

For now, you need to add the mediafiles to the medias variable at the bottom of audioLib.js.
```javascript
var medias = [
    "./assets/audio/01. The Fall of Oriath (Main Theme).mp3",
    "./assets/audio/02. Lioneye’s Watch.mp3",
    "./assets/audio/03. Coast.mp3"
];
```

Loading from dir is a WIP. 