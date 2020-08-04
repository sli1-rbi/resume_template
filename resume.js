function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="">${workExperience.emoji}</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}


const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="notebook">${educationalExperience.emoji}</span>
      ${educationalExperience.university}<span class="comma">,</span>
      <span class="light">${educationalExperience.school}</span>
    </h3>
    <ul>
      ${educationalExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`



function renderSkills(skill) {
  return `
  <div>
    <span class="date">${skill.dates}</span>
    <h3>
    <span role="img" aria-label="talk">${skill.emoji}</span>${skill.skillone}
    <span class="comma">,</span>
    <span class="light">${skill.skilltwo}</span>
    </h3>
    <ul>${skill.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
  }

const fetchData = async() => {
  const response = await fetch("./data.json");
  const data = await response.json();

  document.title = data.name;
  const name = document.querySelector("#name");
  name.textContent = data.name;

  const emojiContainer = document.querySelector("h1 span[role='img']"); //because span doesnt have an id, need to target directly
  emojiContainer.textContent = data.mainEmoji.character;
  emojiContainer.setAttribute("aria-label", data.mainEmoji.ariaLabel);

  const phoneContainer = document.querySelector('#phone-number');
  phoneContainer.textContent = data.phoneNumber;
  const phoneLink = document.querySelector('nav li:nth-child(1) a');
  phoneLink.setAttribute('href', `tel:${data.phoneNumber}`);

  const emailContainer = document.querySelector("#email");
  emailContainer.textContent = data.email;
  const emailLink = document.querySelector('nav li:nth-child(2) a');
  emailLink.href = `emailto:${data.email}`;

  const githubContainer = document.querySelector("#github");
  githubContainer.textContent += data.gitHandle;
  const gitLink = document.querySelector('nav li:nth-child(3) a');
  gitLink.href = `https://github.com/${data.gitHandle}`;

  const linkedinContainer = document.querySelector("#linkedin");
  linkedinContainer.textContent = `https://www.linkedin.com/in/${data.linkedin}`;
  const linkedinLink = document.querySelector('nav li:nth-child(4) a');
  linkedinLink.setAttribute('href',`https://www.linkedin.com/in/${data.linkedin}`);

  const workExperienceHeadingEmoji = document.querySelector("h2:nth-of-type(1) span[role='img']");
  workExperienceHeadingEmoji.innerHTML = data.headingEmojis.workExperienceHeading.character;
  workExperienceHeadingEmoji.setAttribute("aria-label", data.headingEmojis.workExperienceHeading.ariaLabel);

  const workContainer = document.querySelector('#work-experience');
  const eachWorkExpHTML = data.workExperiences.map(renderWorkExperience); //each exp in [] is mapped to HTML
  const allWorkExpHTML = eachWorkExpHTML.join(''); //join all the HTML into one string
  workContainer.innerHTML = allWorkExpHTML; // DONT USE: workContainer.textContent = renderWorkExperience(data.workExperiences);

  const educationExperienceHeadingEmoji = document.querySelector("h2:nth-of-type(2) span[role='img']");
  educationExperienceHeadingEmoji.innerHTML = data.headingEmojis.educationExperienceHeading.character;
  educationExperienceHeadingEmoji.setAttribute("aria-label", data.headingEmojis.educationExperienceHeading.ariaLabel);

  const educationContainer = document.querySelector('#education');
  const eachEducationExpHTML = data.educationalExperiences.map(renderEducationalExperience);
  const allEducExpHTML = eachEducationExpHTML.join('');
  educationContainer.innerHTML = allEducExpHTML;

  const skillsExperienceHeadingEmoji = document.querySelector("h2:nth-of-type(3) span[role='img']");
  skillsExperienceHeadingEmoji.innerHTML = data.headingEmojis.skillsExperienceHeading.character;
  skillsExperienceHeadingEmoji.setAttribute("aria-label", data.headingEmojis.skillsExperienceHeading.ariaLabel);

  const skillContainer = document.querySelector(`#skills`);
  const eachSkillHTML = data.skills.map(renderSkills);
  const allSkillsHTML = eachSkillHTML.join('');
  skillContainer.innerHTML = allSkillsHTML;
};

fetchData();
