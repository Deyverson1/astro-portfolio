/* The code snippet you provided is a TypeScript file that defines an array of objects representing
Mecatrónica projects. Each project object contains properties such as title, description, github
link, image path, color, tags, and more. The projects array holds two project objects with details
about implementing sensors and digital logic in mechatronics. */
// Mecatrónica Projects
import { tags } from "../components/Tags.astro";
export const ProjectsMecatronicaPreview = [
  {
    title: "Implementación de sensores",
    description:
      "Este proyecto contiene código de Arduino y Processing para la medida con los sensores SHT-30, HC-SR04, Termistor.",
    github:
      "https://github.com/Deyverson1/SHT-30-Humidity-HC-SR04-Distance-Termistor-Temperatura",
    link: "",
    documentation: '/mechatronics/documentation',
    image: "/projects/sensores.webp",
    color: "border-pink-600",
    tags: [tags.C]
  },
  {
    title: "Lógica Digital Mecatrónica Industrial",
    description: "Se presentan diferentes soluciones para diversos problemas relacionadas con lógica digital, entre ellas la implementación de un reloj con el uso de diversas compuertas lógicas, implementación de Sumadores, Decodificadores, Codificadores, Multiplexores, Memorias, Sistemas de control, Secuencias, Registros y Contadores. Resueltos en el software de Proteus",
    link: "",
    github: "https://github.com/Deyverson1/mechatronic-digital-logic",
    image: "/projects/logic-picture.png",
    tags: [],
    color: "border-red-500",
    id: ""
  }
];