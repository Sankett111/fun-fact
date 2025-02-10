// script.js
const facts = [
    "It is impossible for most people to lick their own elbow.",
    "A crocodile cannot stick its tongue out.",
    "A shrimp's heart is in its head.",
    "The \"sixth sick sheik's sixth sheep's sick\" is believed to be the toughest tongue twister in the English language.",
    "Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.",
    "The world's oldest piece of chewing gum is over 9,000 years old!",
    "The average person spends six months of their lifetime waiting for red lights to turn green.",
    "You can't fold a piece of paper in half more than seven times.",
    "The population of the earth is about 8 billion people."
    // Add more fun facts here!
  ];
  
  let factElement = document.getElementById("fact");
  
  function newFact() {
    let randomIndex = Math.floor(Math.random() * facts.length);
    factElement.innerHTML = facts[randomIndex];
  }
  
  // Display a fact on page load
  newFact();
  
  