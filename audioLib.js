"use strict";
/*
* AUDIO LIBRARY
* Free to use
* Made by Dybdaltech
*/
let exports = {};
exports.__esModule = true;
exports.AudioPlayer = void 0;
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(audioSource) {
        var _this = this;
        /**
         * Should be able to load a single file
         * Or multiple files
         * Start/Stop/Pause/Next/Previous
         *
         */
        this.audioBtn = document.getElementById("audiobtn");
        this.mediaControls = document.getElementById("mediacontrol");
        this.mediaList = [];
        this.index = 0;
        //Create next/prev buttons
        var nextBtn = document.createElement("button");
        var prevBtn = document.createElement("button");
        this.mediaControls.appendChild(nextBtn);
        this.mediaControls.appendChild(prevBtn);
        nextBtn.innerHTML = ">>";
        prevBtn.innerHTML = "<<";
        this.audioBtn.addEventListener('click', function (e) { return _this.startStop(); });
        nextBtn.addEventListener('click', function (e) { return _this.loadNext(); });
        prevBtn.addEventListener('click', function (e) { return _this.loadPrevious(); });
        console.log(this.audioBtn);
        for (var _i = 0, audioSource_1 = audioSource; _i < audioSource_1.length; _i++) {
            var src = audioSource_1[_i];
            console.log(src);
            this.mediaList.push(src);
        }
        this.audio = new Audio();
        this.audio.setAttribute('src', this.mediaList[this.index]);
        this.audio.addEventListener('playing', function (e) { return _this.isPlaying(); });

    }
    AudioPlayer.prototype.isPlaying = function () {
        return true;
    };
    AudioPlayer.prototype.loadNext = function () {
        //Get current track
        //If current track is playing, stop
        //Load next track
        //
        this.index++;
    };
    AudioPlayer.prototype.loadPrevious = function () {
        //Get current track
        //
        this.index--;
    };
    AudioPlayer.prototype.getCurrentMedia = function () {
        return this.currentTrack;
    };
    AudioPlayer.prototype.startStop = function () {
        console.log("Playing: " + this.mediaList[this.index]);
        if (this.isPlaying()) {
            this.audio.pause();
            this.audio.setAttribute('src', this.mediaList[this.index]);
            this.audio.play();
        }
        else {
            this.audio.play();
        }
    };
    return AudioPlayer;
}());
exports.AudioPlayer = AudioPlayer;
/*
Testing of the class below
*/
// npx tsc
//let medias = [
//    {id: 1, path: "./assets/audio/01. The Fall of Oriath (Main Theme).mp3"},
//    {id: 2, path: "./assets/audio/02. Lioneye’s Watch.mp3"},
//    {id: 3, path: "./assets/audio/03. Coast.mp3"}
//]
var medias = [
    "./assets/audio/01. The Fall of Oriath (Main Theme).mp3",
    "./assets/audio/02. Lioneye’s Watch.mp3",
    "./assets/audio/03. Coast.mp3"
];
var audioPlayer = new AudioPlayer(medias);
