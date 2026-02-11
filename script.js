// get all DOM elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// track attendance counts
let count = 0;
const maxCount = 50;

// array to store attendee names
let attendeeNames = [];

// handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form from submitting

  // get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text; // to display the full team names instead of the values

  console.log(name, teamName);

  // Increment count
  count++;
  console.log("Total check-ins: ", count);

  // update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  // display updated attendance count on the page
  const attendeeCountElement = document.getElementById("attendeeCount");
  attendeeCountElement.textContent = count;

  // update progress bar width
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  // update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // display a welcome message
  const message = `Welcome, ${name} from ${teamName}! 🥳`;
  console.log(message);

  // display greeting message on the page in light blue box
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = message;
  greetingElement.style.display = "block";

  // clear the greeting message after 4 seconds
  setTimeout(function () {
    greetingElement.textContent = "";
    greetingElement.style.display = "none";
  }, 4000);

  // capture attendee names from the provided input
  attendeeNames.push(name);
  console.log("Attendees checked in: ", attendeeNames);

  // clear form inputs after a user refreshes the page
  form.reset();
});
