// 1. Parent Class
class Media {
    play() {
        console.log("Playing generic media...");
    }
}

// 2. Child Class 1 - Handles Audio
class Audio extends Media {
    play() {
        console.log("🔊 Playing MP3: Streaming audio through speakers.");
    }
}

// 3. Child Class 2 - Handles Video
class Video extends Media {
    play() {
        console.log("📺 Playing MP4: Rendering 4K video frames on screen.");
    }
}

// --- Polymorphism in Action ---
// This function doesn't care WHAT kind of media you give it, 
// as long as that media has a .play() method!
function clickPlayButton(mediaInstance) {
    mediaInstance.play(); // Polymorphic call
}

const song = new Audio();
const movie = new Video();

clickPlayButton(song);  // Output: 🔊 Playing MP3: Streaming audio through speakers.
clickPlayButton(movie); // Output: 📺 Playing MP4: Rendering 4K video frames on screen.