function generateTranscript() {
    const url = document.getElementById("videoUrl").value;
    const output = document.getElementById("output");
  
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      output.innerText = "Please enter a valid YouTube URL.";
      return;
    }
  
    // Placeholder transcript (since real API/backend is not integrated here)
    output.innerText = "Transcript generation feature will be available soon...\n\n(This is where the transcript will appear.)";
  }
  