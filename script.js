document.getElementById("sendButton").addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value.trim();

  if (userInput) {
    // Update iframe URLs with Google Search and Bing as alternatives
    const chatgptSearchURL = `https://www.google.com/search?q=${encodeURIComponent(
      "ChatGPT " + userInput
    )}`;
    const geminiSearchURL = `https://www.google.com/search?q=${encodeURIComponent(
      "Google Gemini " + userInput
    )}`;

    // Update iframe sources
    document.getElementById("chatgptFrame").src = chatgptSearchURL;
    document.getElementById("geminiFrame").src = geminiSearchURL;
  } else {
    alert("Please enter a question.");
  }
});
