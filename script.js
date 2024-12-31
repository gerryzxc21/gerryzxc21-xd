// JavaScript for handling form submission, displaying the message, and name validation
function submitMessage(event) {
    event.preventDefault(); // Prevent form submission (page reload)

    var name = document.getElementById("nameInput").value;
    var messageDiv = document.getElementById("message");

    // Correct name for the message
    var correctName = "Andrea Biasura";  // Set the correct name to "Gerry Villanueva"

    if (name === correctName) {
        // Display the personalized message for your girlfriend if the name is correct
        messageDiv.innerHTML = `<h2>Special Message for My Girlfriend:</h2>
                                <p><em>"I love you, and I'm so grateful for you. Wishing us the best for the coming year!"</em></p>`;
        messageDiv.style.color = "#333";  // You can adjust this color to your preference
    } else {
        // If the name is incorrect, show an error message
        messageDiv.textContent = "Wrong name, please try again!";
        messageDiv.style.color = "red";  // Error message in red
    }
}

// Function to toggle music play/pause
function toggleMusic() {
    var audio = document.getElementById("backgroundSound");
    var musicStatusText = document.getElementById("musicStatusText");
    var toggleMusicBtn = document.getElementById("toggleMusicBtn");

    if (audio.paused) {
        audio.play();
        musicStatusText.textContent = "Music is playing...";
        toggleMusicBtn.textContent = "Pause Music";
    } else {
        audio.pause();
        musicStatusText.textContent = "Music is paused.";
        toggleMusicBtn.textContent = "Play Music";
    }
}
