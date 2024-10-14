document.addEventListener('DOMContentLoaded', function() {
    const cfdButtons = document.querySelectorAll('.cfd-button');
    const cfdVideo = document.getElementById('cfd-video');

    cfdButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            cfdButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Change the video source based on the button clicked
            const videoSource = this.getAttribute('data-video') + '.mp4';
            cfdVideo.querySelector('source').src = videoSource;
            cfdVideo.load(); // Reload the new video
        });
    });
});
