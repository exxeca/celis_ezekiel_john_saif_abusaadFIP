document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    // Get the video element
    let video = document.getElementById('video');

    // Wait for the video metadata to load
    video.addEventListener('loadedmetadata', function() {
        // Play the video
        video.play();
    });

    // Hide the controls
    video.removeAttribute("controls");
});


document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    // Get the video element
    let video = document.getElementById('video1');

    // Wait for the video metadata to load
    video.addEventListener('loadedmetadata', function() {
        // Play the video
        video.play();
    });

    // Hide the controls
    video.removeAttribute("controls");
});
