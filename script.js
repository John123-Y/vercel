document.getElementById("download-btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "EMMANUEL.mp3";
    link.download = "EMMANUEL.mp3";
    link.click();
});

const audioElement = document.getElementById("audio");
const lyricsElement = document.getElementById("lyrics");

audioElement.addEventListener("play", () => {
    // Example lyrics as an array of objects with timing (in seconds)
    const lyrics = [
        { time: 0, text: "Verse 1: you answer,when we cry,you hear our voice,when we pray you answer us" },
        { time: 10, text: "Chorus:you are Emmanuel,Emmanuel,Emmanuel,Emmanuel,Emmanuel,Emmanuel " },
        { time: 20, text: "Verse 2: when we pray you answer us,when we cry you hear our voice,we are not alone for GOD is with us,Emmanuel,Emmanul,Emmanuel" },
        { time: 30, text: "Chorus: La la la la la la la la,la la la la la la la la la,Emmanuel Emmanuel" },
        { time: 0, text: "Verse 3: when we pray you answer us,when we cry you hear our voice,we are not alone for GOD is with us,Emmanuel,Emmanul,Emmanuel" },
        { time: 10, text: "Chorus:La la la la la la la la,la la la la la la la la la,Emmanuel Emmanuel " },
        { time: 20, text: "Verse 4: when we pray you answer us,when we cry you hear our voice,we are not alone for GOD is with us,Emmanuel,Emmanul,Emmanuel" },
        { time: 30, text: "Chorus: La la la la la la la la,la la la la la la la la la,Emmanuel Emmanuel" },
    
    ];

    let currentIndex = 0;

    const lyricsInterval = setInterval(() => {
        const currentTime = Math.floor(audioElement.currentTime);

        if (currentIndex < lyrics.length && currentTime >= lyrics[currentIndex].time) {
            lyricsElement.innerHTML += `<p>${lyrics[currentIndex].text}</p>`;
            currentIndex++;
        }

        if (currentIndex >= lyrics.length) {
            clearInterval(lyricsInterval);
        }
    }, 1000);
});

audioElement.addEventListener("pause", () => {
    // Clear lyrics if the audio is paused
    lyricsElement.innerHTML = '<p>Click the play button to see the lyrics appear here automatically.</p>';
    currentIndex = 0;  // Reset the index
