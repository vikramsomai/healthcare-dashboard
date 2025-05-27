import { imageLink } from "./imageLinks";
export const upcomingAppointments = [
  {
    day: "Thursday",
    appointments: [
      {
        id: "checkup",
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: imageLink.injection,
      },
      {
        id: "eye",
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: imageLink.eye,
      },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      {
        id: "heart",
        title: "Cardiologist",
        time: "12:00 AM",
        icon: imageLink.heart,
      },
      {
        id: "brain",
        title: "Neurologist",
        time: "16:00 PM",
        icon: imageLink.doctor,
      },
    ],
  },
];
