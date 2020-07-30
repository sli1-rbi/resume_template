const data = {
  name: "Suhan Li",
  mainEmoji: {
    character: "🥇",
    ariaLabel: "medal1",
  },
  phoneNumber: "917.770.7801",
  linkedin: "suhanxli",
  email: "suhan.li@stern.nyu.edu",
  gitHandle: "sli1-rbi"
};

document.title = data.name;
const name = document.querySelector("#name");
name.textContent = data.name;

const emojiContainer = document.querySelector("h1 span[role='img']"); //because span doesnt have an id, need to target directly
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute("aria-label", data.mainEmoji.ariaLabel);

const phoneContainer = document.querySelector("#phone-number");
phoneContainer.textContent = data.phoneNumber;
const emailContainer = document.querySelector("#email");
emailContainer.textContent = data.email;
const linkedinContainer = document.querySelector("#linkedin");
linkedinContainer.textContent = `https://www.linkedin.com/in/${data.linkedin}`;
const githubContainer = document.querySelector("#github");
githubContainer.textContent = `github.com/${data.gitHandle}`;
