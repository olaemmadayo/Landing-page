import { facebooks, twitter, linkedin, dribble, github } from "../assets/icons";

export const footerLinks = [
  {
      title: "Products",
      links: [
          { name: "Overview", link: "/" },
          { name: "Features", link: "/" },
          { name: "Solution", link: "/" },
          { name: "Tutorials", link: "/" },
          { name: "Pricing", link: "/" },
          
      ],
  },
  {
      title: "Company",
      links: [
          { name: "About us", link: "/" },
          { name: "Careers", link: "/" },
          { name: "Press", link: "/" },
          { name: "News", link: "/" },
          
      ],
  },
  {
    title: "Social",
    links: [
        { name: "Twitter", link: "/" },
        { name: "LinkedIn", link: "/" },
        { name: "GitHub", link: "/" },
        { name: "Dribble", link: "/" },
        
    ],
},
  {
    title: "Legal",
    links: [
        { name: "Terms", link: "/" },
        { name: "Privacy", link: "/" },
        { name: "Cookies", link: "/" },
        { name: "Contact", link: "/" },
        
    ],
},
  
];

export const socialMedia = [
  { src: twitter, alt: "twitter logo" },
  { src: linkedin, alt: "linkedin logo" },
  { src: facebooks, alt: "facebooks logo" },
  { src: github, alt: "github logo" },
  { src: dribble, alt: "dribble logo" },
];