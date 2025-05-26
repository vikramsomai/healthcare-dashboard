export const calendarMonth = {
  month: "October",
  year: 2021,
  days: [
    { day: "Mon", date: 25 },
    { day: "Tues", date: 26 },
    { day: "Wed", date: 27 },
    { day: "Thurs", date: 28 },
    { day: "Fri", date: 29 },
    { day: "Sat", date: 30 },
    { day: "Sun", date: 31 },
  ],
};

export const timeSlots = [
  [
    { time: "10:00", status: "available" },
    { time: "11:00", status: "available" },
    { time: "12:00", status: "available" },
  ],
  [
    { time: "08:00", status: "available" },
    { time: "09:00", status: "booked", highlight: true },
    { time: "10:00", status: "available" },
  ],
  [
    { time: "12:00", status: "available" },
    { time: "—", status: "unavailable" },
    { time: "13:00", status: "available" },
  ],
  [
    { time: "10:00", status: "available" },
    { time: "11:00", status: "booked", highlight: true },
    { time: "—", status: "unavailable" },
  ],
  [
    { time: "—", status: "unavailable" },
    { time: "14:00", status: "available" },
    { time: "16:00", status: "available" },
  ],
  [
    { time: "12:00", status: "booked", highlight: true },
    { time: "14:00", status: "available" },
    { time: "15:00", status: "available" },
  ],
  [
    { time: "09:00", status: "booked", highlight: true },
    { time: "10:00", status: "available" },
    { time: "11:00", status: "available" },
  ],
];

export const appointmentCards = [
  {
    id: "dentist",
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "images/teeth.png",
    color: "indigo",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Dones",
    icon: "images/muscle.png",
    color: "light",
  },
];
