import { imageLink } from "./imageLinks";
export const healthIndicators = [
  {
    id: "heart",
    name: "Healthy Heart",
    status: "healthy",
    position: { top: "20%", right: "-8%" },
  },
  {
    id: "legss",
    name: "Healthy Leg",
    status: "healthy",
    position: { bottom: "35%", left: "-3%" },
  },
];

export const healthStatusCards = [
  {
    id: "lungs",
    name: "Lungs",
    date: "26 Oct 2021",
    status: 80,
    image: imageLink.lungs,
    color: "#ef4444",
  },
  {
    id: "teeth",
    name: "Teeth",
    date: "26 Oct 2021",
    status: 80,
    image: imageLink.teeth,
    color: "#93D6CB",
  },
  {
    id: "bone",
    name: "Bone",
    date: "26 Oct 2021",
    status: 80,
    image: imageLink.bone,
    color: "#F5654F",
  },
];
