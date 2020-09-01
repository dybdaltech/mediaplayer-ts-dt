/*
* AUDIO LIBRARY
* Free to use
* Made by Dybdaltech
*/


export class AudioPlayer {
    /**
     * Should be able to load a single file
     * Or multiple files
     * Start/Stop/Pause/Next/Previous
     * 
     */
    private audioBtn: any = document.getElementById("audiobtn");
    private mediaControls: any = document.getElementById("mediacontrol");
    public mediaList: string[] = [];
    private audio: any;
    public eventEmitter: any;
    index: number = 0;
    currentTrack: any;

    constructor(audioSource: string[]) {
        //Create next/prev buttons
        let nextBtn = document.createElement("button");
        let prevBtn = document.createElement("button");
        this.mediaControls.appendChild(nextBtn)
        this.mediaControls.appendChild(prevBtn)
        nextBtn.innerHTML = ">>";
        prevBtn.innerHTML = "<<";
        this.audioBtn.addEventListener('click', (e:Event) => this.startStop())
        this.audio.addEventListener('playing', (e:Event) => this.isPlaying());
        nextBtn.addEventListener('click', (e:Event) => this.loadNext())
        prevBtn.addEventListener('click', (e:Event) => this.loadPrevious())
        console.log(this.audioBtn);
        for(let src of audioSource){
            console.log(src);
            this.mediaList.push(src);
        }
        this.audio = new Audio();
        this.audio.setAttribute('src', this.mediaList[this.index]);
    }
    private isPlaying() {
        return true;
    }
    private loadNext() {
        //Get current track
        //If current track is playing, stop
        //Load next track
        //
        this.index++;
    }

    private loadPrevious() {
        //Get current track
        //
        this.index--;
    }

    getCurrentMedia() {
        return this.currentTrack;
    }

    public startStop() {
        console.log("Playing: " + this.mediaList[this.index])
        if(this.isPlaying()){
            this.audio.pause()
            this.audio.setAttribute('src', this.mediaList[this.index]);
            this.audio.play()
        } else {
            this.audio.play();
        }
    }

}


/*
Testing of the class below
*/
// npx tsc

//let medias = [
//    {id: 1, path: "./assets/audio/01. The Fall of Oriath (Main Theme).mp3"},
//    {id: 2, path: "./assets/audio/02. Lioneye’s Watch.mp3"},
//    {id: 3, path: "./assets/audio/03. Coast.mp3"}
//]
let medias = [
    "./assets/audio/01. The Fall of Oriath (Main Theme).mp3",
    "./assets/audio/02. Lioneye’s Watch.mp3",
    "./assets/audio/03. Coast.mp3"
]
const audioPlayer = new AudioPlayer(medias);


