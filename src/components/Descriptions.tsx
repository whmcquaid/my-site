export type Desc = {
  tech: string;
  description: string;
};
const Descriptions: Desc[] = [
  {
    tech: "JavaScript, React, HTML, CSS, Styled-Components",
    description:
      "This is the app I built to learn React and styled-components.  All data and images are pulled in from The Movie DB.",
  },
  {
    tech: "React, JavaScript, HTML, CSS, Node, Express, Puppeteer, Node-cron, MongoDB",
    description:
      "I built this surf report app as a way to quickly check surf reports.  All surf reports are web scraped from magicseaweed and stored in MongoDB every hour using node-cron.",
  },
  {
    tech: "Vue, JavaScript, HTML, CSS",
    description:
      "I built this trivia app as a way to learn Vue.  All question and answer data is pulled in from The Trivia DB.",
  },
  {
    tech: "Gatsby, JavaScript, React, HTML, CSS, GraphQl",
    description:
      "I built this blog as a way to learn Gatsby static site generation.  I love how I can just upload a markdown file for a new blog post to be generated.",
  },
  {
    tech: "JavaScript, React, React Context-API, HTML, CSS, Styled-Components",
    description:
      "I built this Calculator to learn how to use React context and be able to share state with other components, without passing props, no matter how deeply they are nested.",
  },
  {
    tech: "JavaScript, HTML, CSS",
    description:
      "Etch a Sketch is a project I built as part of the curriculum of The Odin Project as I was learning JavaScript and DOM manipulation.",
  },
  {
    tech: "JavaScript, HTML, CSS",
    description:
      "The library app was part of the curriculum from The Odin Project.  This was the first time I had ever tried to save any state to local storage.",
  },

  {
    tech: "JavaScript, HTML, CSS",
    description:
      "I built this Rock, Paper, Scissors game to solidify skills with JavaScript, html, and css.  This is still one of my favorite projects.",
  },
];
export default Descriptions;
