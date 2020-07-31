const data = {
  name: "Suhan Li",
  mainEmoji: {
    character: "🥇",
    ariaLabel: "medal1",
  },
  headingEmojis: {
    workExperienceHeading: {
      character: "⛏",
      ariaLabel: "pick axe",
    },
    educationExperienceHeading: {
      character: "🏛",
      ariaLabel: "old building",
    },
    skillsExperienceHeading: {
      character: "🔥",
      ariaLabel: "fire",
    },
  },

  phoneNumber: '917.770.7801',
  linkedin: "suhanxli",
  email: "suhan.li@stern.nyu.edu",
  gitHandle: "sli1-rbi",
  workExperiences: [
    {
      emoji: "☕️",
      arialabel: "coffee",
      jobTitle: "Senior Manager, Team TBD",
      institution: "Restaurant Brands International",
      dates: "2020 - Present", // end with "present" for your current job
      details: [
        "Tech bootcamp: HTML, CSS, JavaScript, DOM Manipulation, etc.",
      ]
    },
    {
      emoji: "☕️",
      arialabel: "coffee",
      jobTitle: "MBA Intern, Development Canada, Tim Hortons",
      institution: "Restaurant Brands International",
      dates: "Summer 2019", // end with "present" for your current job
      details: [
        "Identified ~$60M EBITDA opportunity in 190 urban growth zones through regression analytics of demographic, sales, transit, and competitor data features across Canada; C-suite greenlit action plan",
        "Delivered a growth roadmap detailing site priority, competitive landscape, impact on revenue, new customer segments, and franchisee selection criteria for new urban cafe format; initiated real estate search in 20/190 sites",
        "Collaborated with new products team to integrate test data from flagship innovation café into forecast models; reduced franchisee payback period by 25% and improved new urban location viability 2x",
      ]
    },
    {
      emoji: "📡",
      arialabel: "satellite dish",
      jobTitle: "Senior Business Analyst, Investment & Program Management",
      institution: "TELUS Communications",
      dates: "2017 - 2018", // end with "present" for your current job
      details: [
        "Executed C-suite capital planning decisions and ran governance programs and forecasts on $3B annual capex budget; spearheaded monthly project review with leaders of 30+ major engineering projects totaling $500M in budget",
        "Discovered user pain points and collaborated with business unit leaders to design and test new reporting features and processes; implemented program changes to reduce reporting cycles by 50%",
        "Led capital project status interviews, helped refine customer impact messaging, and mitigated need for executive support; distilled teams’ technical barriers into actionable requests for executive committee reviews",
      ]
    },
    {
      emoji: "📡",
      arialabel: "satellite dish",
      jobTitle: "Business Analyst I & II, Graduate Engineering Leadership Program",
      institution: "TELUS Communications",
      dates: "2014 - 2017", // end with "present" for your current job
      details: [
        "Launched a new refurb product line with product marketing team; combined warehouse and customer pain points to design a product targeting improved customer conversion rates and acquisition costs (~$150 lower than average)",
        "Drove refurb product logistics; interviewed partner-clients to identify production bottlenecks and negotiated SLAs that improved inventory turnover rate from 3x to 12x per year and doubled refurb handset yield to 75%",
        "Built subscriber churn forecast to support strategy shift in response to industry consolidation; identified approx. 10% of subscribers at risk of churn, incorporated in tri- and quad-play retention marketing strategy",
        "Migrated team to Agile Kanban practices; reported productivity insights and recommended WIP limits",
        "Created models of competitor’s roaming usage on-network; used to win a regulator ruling saving ~$5M",
        "Partnered with Nymi to develop a proof of concept iOS app for third-party biometric authentication in Telus’ systems",
      ]
    },
    {
      emoji: "🕸",
      arialabel: "spider web",
      jobTitle: "Web Developer / IT",
      institution: "Papillon Ribbon & Bow Inc.",
      dates: "2013 - 2014", // end with "present" for your current job
      details: [
        "Rewrote JavaScript/SQL backend to eliminate inconsistencies for over 10,000 SKUs; migrated and consolidated global databases, improving sales team user experience feedback",
      ]
    },
  ],
  educationalExperiences: [
    {
      emoji: "💸",
      arialabel: "cash with wings",
      university: "New York University",
      school: "Leonard N. Stern School of Business",
      dates: "2018 - 2020",
      details: [
        "<strong>Master of Business Administration</strong>, <em>Specializations in Tech Product Management, Entrepreneurship, and Strategy</em>",
        "Soon-Suk Paik Scholar"
      ]
    },
    {
      emoji: "⚙️",
      arialabel: "gear",
      university: "McGill University",
      school: "Faculty of Engineering",
      dates: "2008 - 2013",
      details: [
        "<strong>Bachelor of Engineering</strong> in <em>Electrical Engineering and Minor in Finance</em>",
      ]
    },
  ],
  skills: [
    {
    emoji: "📝",
    arialabel: "paper and pencil",
    dates: "2000 - present",
    skillone: "Languages",
    skilltwo: "Frameworks",
    details: [
    "Proficient in French",
    "Beginner HTML, CSS, Javascript",
    ]
    }
    ]
};

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

const workContainer = document.querySelector('#work-experience');
const eachWorkExpHTML = data.workExperiences.map(renderWorkExperience); //each exp in [] is mapped to HTML
const allWorkExpHTML = eachWorkExpHTML.join(''); //join all the HTML into one string
workContainer.innerHTML = allWorkExpHTML; // DONT USE: workContainer.textContent = renderWorkExperience(data.workExperiences);

const educationExperienceHeadingEmoji = document.querySelector("h2:nth-of-type(2) span[role='img']");
educationExperienceHeadingEmoji.innerHTML = data.headingEmojis.educationExperienceHeading.character;
educationExperienceHeadingEmoji.setAttribute("aria-label", data.headingEmojis.educationExperienceHeading.ariaLabel);

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


const educationContainer = document.querySelector('#education');
const eachEducationExpHTML = data.educationalExperiences.map(renderEducationalExperience);
const allEducExpHTML = eachEducationExpHTML.join('');
educationContainer.innerHTML = allEducExpHTML;

const skillsExperienceHeadingEmoji = document.querySelector("h2:nth-of-type(3) span[role='img']");
skillsExperienceHeadingEmoji.innerHTML = data.headingEmojis.skillsExperienceHeading.character;
skillsExperienceHeadingEmoji.setAttribute("aria-label", data.headingEmojis.skillsExperienceHeading.ariaLabel);

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
  const skillContainer = document.querySelector(`#skills`);
  const eachSkillHTML = data.skills.map(renderSkills);
  const allSkillsHTML = eachSkillHTML.join('');
  skillContainer.innerHTML = allSkillsHTML;