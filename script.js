const youtubeVideo = document.getElementById('youtubeVideo');
const pipButton = document.getElementById('pipButton');

// Check if Picture-in-Picture API is supported
if ('pictureInPictureEnabled' in document) {
    // Toggle Picture-in-Picture mode
    pipButton.addEventListener('click', () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture()
                .catch(error => {
                    console.error('Error exiting Picture-in-Picture mode:', error);
                });
        } else {
            youtubeVideo.requestPictureInPicture()
                .catch(error => {
                    console.error('Error entering Picture-in-Picture mode:', error);
                });
        }
    });

    // Listen for Picture-in-Picture mode changes
    youtubeVideo.addEventListener('enterpictureinpicture', () => {
        console.log('Entered Picture-in-Picture mode');
        pipButton.textContent = 'Exit Picture-in-Picture';
    });

    youtubeVideo.addEventListener('leavepictureinpicture', () => {
        console.log('Left Picture-in-Picture mode');
        pipButton.textContent = 'Toggle Picture-in-Picture';
    });
} else {
    // Hide the button if Picture-in-Picture is not supported
    pipButton.style.display = 'none';
}


if ('documentPictureInPicture' in window) {
    // The Document Picture-in-Picture API is supported.
}