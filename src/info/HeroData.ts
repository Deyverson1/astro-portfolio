/* The code you provided is importing various icons from different files and then exporting an array
called `HeroData` containing objects with information about different links and icons. Each object
in the `HeroData` array represents a link with a name, URL, icon, and target attribute. The icons
imported are used as values for the `icon` property in each object. This code seems to be setting up
data for a hero section with links to contact information and various interests. */
import Gmail from "../components/icons/Gmail.astro";
import GithubCat from "../components/icons/GithubCat.astro";
import LinkedinIcon from "../components/icons/LinkedinIcon.astro";
import Spotify from "../components/icons/Spotify.astro";
import ProjectIcon from "../components/icons/ProjectIcon.astro";

export const HeroData = [
  {
    name: "Contáctame",
    link: "mailto:deyversongp@gmail.com",
    icon: Gmail,
    target: "_blank",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deyverson/",
    icon: LinkedinIcon,
    target: "_blank",
  },
  { name: "Proyectos", link: "/projects", icon: ProjectIcon, iconClass: "fill-white" },
  {
    name: "Github",
    link: "https://github.com/Deyverson1",
    icon: GithubCat,
    target: "_blank",
    iconClass: "fill-black"
  },
  { name: "Música", link: "/music", icon: Spotify },
];