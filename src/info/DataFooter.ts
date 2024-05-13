/* The `const data` array in the provided TypeScript code snippet is storing an array of objects. Each
object in the array represents a social media platform with properties like `name`, `link`, and
`icon`. Here's a breakdown of what each object represents: */
import Instagram from "../components/icons/Instagram.astro";
import LinkedinIcon from "../components/icons/LinkedinIcon.astro";
import Discord from "../components/icons/Discord.astro";
export const data = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/deyverson08?igsh=MXFheHd5eXg3ZWxjcg==",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/deyverson?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: LinkedinIcon,
  },
  {
    name: "Discord",
    link: "https://discord.com/invite/bBNutX3D",
    icon: Discord,
  },
];