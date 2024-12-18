const searchInput = document.querySelector("#search-input");
const submitBtn = document.querySelector("#submit-btn");
const suggestionsBox = document.querySelector(".suggetions");
const chatContainer = document.querySelector(".chat-container");
const deleteBtn = document.querySelector("#delete-btn");
const bodyTop = document.querySelector(".body-top");
const topic = document.querySelector(".topic");

const questions = [
  {
    question:
      "সূরা আল-ফাতিহা (১), আয়াত ১: শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।।",
    answer:
      "সূরা আল-ফাতিহা (১), আয়াত ১: 'শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।' ব্যাখ্যা: এ আয়াতে আল্লাহর দুটো গুণ— 'পরম করুণাময়' এবং 'অতি দয়ালু'— উল্লেখ করা হয়েছে। অর্থাৎ, আল্লাহ সবসময় দয়ালু এবং আমাদের সাহায্যকারী। সহজ উপলব্ধি: যে কোন কাজ শুরু করার আগে আল্লাহর নাম নিতে হবে, কারণ তিনি দয়ালু এবং করুণাময়।",
  },
  {
    question:
      "1|2|যাবতীয় প্রশংসা আল্লাহ তাআলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।",
    answer:
      "সূরা আল-ফাতিহা (১), আয়াত ২: 'যাবতীয় প্রশংসা আল্লাহ তাআলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।' ব্যাখ্যা: এ আয়াতে আল্লাহকে সৃষ্টির মালিক বলা হয়েছে। আল্লাহ একমাত্র সৃষ্টির স্রষ্টা এবং তিনি সবকিছুর পালনকর্তা। সহজ উপলব্ধি: আল্লাহ সৃষ্টির মালিক, তাই তাঁরই সমস্ত প্রশংসা করা উচিত।",
  },
  {
    question: "1|3|যিনি নিতান্ত মেহেরবান ও দয়ালু।",
    answer:
      "সূরা আল-ফাতিহা (১), আয়াত ৩: 'যিনি নিতান্ত মেহেরবান ও দয়ালু।' ব্যাখ্যা: এ আয়াতে আল্লাহর মেহেরবান এবং দয়ালু গুণের কথা বলা হয়েছে। আল্লাহ আমাদের প্রতি অত্যন্ত দয়ালু এবং তিনি আমাদের সাহায্য করবেন। সহজ উপলব্ধি: আল্লাহ আমাদের জন্য দয়ালু, তাই তাঁর কাছে সাহায্য চাইতে হবে।",
  },
];

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  // Clear the suggestion box
  suggestionsBox.innerHTML = "";

  if (query === "") {
    suggestionsBox.style.display = "none"; // Hide if input is empty
    return;
  }

  // Filter questions based on the input
  const filteredQuestions = questions.filter((item) =>
    item.question.toLowerCase().includes(query)
  );

  // Show suggestions if matches found
  if (filteredQuestions.length > 0) {
    filteredQuestions.forEach((item) => {
      const li = document.createElement("li");

      li.textContent = item.question;
      li.addEventListener("click", () => {
        searchInput.value = item.question; // Set clicked suggestion to input
        suggestionsBox.style.display = "none"; // Hide suggestions
      });
      suggestionsBox.appendChild(li);
    });
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none"; // Hide if no matches found
  }
});

// Event listener for the submit button
submitBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();

  if (query === "") {
    alert("Please type a question before submitting.");
    return;
  }

  // Find the answer for the question
  const matchedQuestion = questions.find(
    (item) => item.question.toLowerCase() === query.toLowerCase()
  );

  if (matchedQuestion) {
    topic.style.display = "none";
    chatContainer.style.display = "block";
    bodyTop.style.display = "none";
    // Create a new ul element
    const ul = document.createElement("ul");

    // Create li elements for question and answer
    const questionLi = document.createElement("li");
    questionLi.textContent = `Question: ${matchedQuestion.question}`;
    questionLi.classList.add("ques");
    const answerLi = document.createElement("li");
    answerLi.textContent = `Answer: ${matchedQuestion.answer}`;
    questionLi.classList.add("ans");

    // Append the li elements to the ul
    ul.appendChild(questionLi);
    ul.appendChild(answerLi);

    // Append the ul to the chat container
    chatContainer.appendChild(ul);

    // Clear the search input
    searchInput.value = "";
    suggestionsBox.style.display = "none";
  } else {
    alert("No matching question found.");
  }
});
// ডিলিট বাটন ক্লিক করলে ইনপুট ক্লিয়ার এবং সাজেশন লুকানো
deleteBtn.addEventListener("click", () => {
  searchInput.value = "";
  suggestionsBox.style.display = "none";
});
