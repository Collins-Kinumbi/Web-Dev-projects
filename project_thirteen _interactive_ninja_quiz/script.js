const correctAns = ["B", "B", "B", "B"];

const form = document.querySelector(".quiz-form");

const results = document.querySelector(".result");

form.addEventListener("submit", function (e) {
  let score = 0;
  const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  // console.log(userAns);

  //Check ans
  userAns.forEach((ans, index) => {
    if (ans === correctAns[index]) {
      score += 25;
    }
  });
  // console.log(`${score} %`);

  // // // THE WAY I DID IT!!!
  // //show result on page
  // // console.log(results);
  // // console.log(results.firstElementChild.firstElementChild.textContent);
  // results.firstElementChild.firstElementChild.innerHTML = `<p>You are <span class="text-primary display-4 p-3">${score} %</span> Ninja</p>`;
  // results.setAttribute("class", "result py-4 bg-light text-center");

  // // OTHER WAY!!!
  //show result on page
  const resultText = results.querySelector("span");
  // console.log(resultText);
  resultText.innerText = `${score} %`;
  // console.log(resultText);
  // results.setAttribute("class", "result py-4 bg-light text-center");
  results.classList.remove("d-none");

  // HOW I IMPLIMANTED SCROLL
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  // //OTHER WAY TO IMPLIMENT SCROLL
  // window.scrollTo(0, 0); // y and x co-ordinates

  //ANIMATING THE SCORE
  let output = 0;
  const timer = setInterval(function () {
    resultText.innerText = `${output} %`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  e.preventDefault();
});
