/**
 * Every fact on the homepage lives here.
 *
 * Source: chunkymonkey.com.pk, read through Internet Archive snapshots dated
 * June–July 2026 (/, /about-us/, /park-rides/, /attractions/, /book-event/,
 * /contact-us/). The live domain did not resolve when this was written, so
 * confirm hours and contact details with the park before launch.
 *
 * Deliberately left out: the Rs. 1000 reload offer (the artwork dates from 2023)
 * and ticket prices (none are published on the official site).
 */

const maps = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const whatsappNumber = "923377248659";

export const brand = {
  name: "Chunky Monkey",
  tagline: "Fun For All",
  owner: "Pioneer Amusement Services (Pvt.) Ltd, a subsidiary of the Dolmen Group",
  hours: { days: "Mon to Sun", time: "4PM to Midnight" },
  email: "info@chunkymonkey.com.pk",
  whatsapp: `https://wa.me/${whatsappNumber}`,
  social: {
    facebook: "https://www.facebook.com/chunkymonkeypark",
    instagram: "https://www.instagram.com/chunkymonkey_cm",
  },
};

export const booking = {
  phone: { label: "+92-21-35296062-5", href: "tel:+922135296062" },
  email: "marketing@chunkymonkey.com.pk",
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Chunky Monkey, I'd like to book an event.",
  )}`,
};

export type Park = {
  id: string;
  level: string;
  name: string;
  city: string;
  address: string;
  phone: { label: string; href: string };
  established: string;
  area: string;
  rides: string;
  ridesNote: string;
  directions: string;
};

export const parks: Park[] = [
  {
    id: "seaview",
    level: "01",
    name: "Sea View",
    city: "Karachi",
    address: "B-1, Khayban-e-Sahil, Seaview Road, DHA, Karachi",
    phone: { label: "+92-21-35248116-8", href: "tel:+922135248116" },
    established: "2015",
    area: "65,000 sq ft",
    rides: "56+",
    ridesNote: "Indoor and outdoor",
    directions: maps("Chunky Monkey Amusement Parks, Sea View Road, DHA, Karachi"),
  },
  {
    id: "phase-iv",
    level: "02",
    name: "DHA Phase IV",
    city: "Karachi",
    address: "Adjacent Nisar Shaheed Park, DHA, Phase IV, Karachi",
    phone: { label: "+92-21-35899583-4", href: "tel:+922135899583" },
    established: "1996",
    area: "3.3 acres",
    rides: "30+",
    ridesNote: "7D Cinema, Fun City, indoor games",
    directions: maps("Chunky Monkey Amusement Park, DHA Phase 4, Karachi"),
  },
  {
    id: "hyderabad",
    level: "03",
    name: "Hyderabad",
    city: "Hyderabad",
    address: "1st Floor, Mehran Shopping Complex, opp: Cantonment Board, Hyderabad",
    phone: { label: "+92-22-2783989", href: "tel:+92222783989" },
    established: "2007",
    area: "4,400 sq ft",
    rides: "54",
    ridesNote: "Indoor kiddie rides",
    directions: maps("Chunky Monkey Hyderabad"),
  },
];

/** Named on the official rides page, per park. Not exhaustive: the ride counts above are larger. */
export const rideRoster = {
  "Sea View": [
    "Tagada", "Frisbee", "Flying Carpet", "Merry Go Round", "Speedy Car", "Train",
    "Gyro Loop", "Flash Tower", "Twist and Bounce", "Bumping Car", "7D Cinema",
  ],
  "DHA Phase IV": [
    "Tea Cups", "Merry Go Round", "Dodgem Car", "Family Coaster", "Tagada", "Parachute",
    "Flying Carpet", "Flying Chair", "Pirate Ship", "Pirate Party", "Frisbee", "Octopus",
    "Skater", "Caterpillar", "Sindbad", "Happy Swing", "Sea Shell", "Time Travel",
    "Action Arm", "Shake Off", "7D Cinema",
  ],
};

export const facilities = [
  { name: "Dedicated parking", note: "Separate parking for visitors" },
  { name: "Lost & found", note: "A counter for anything left behind" },
  { name: "First aid", note: "A kit on site, ready when needed" },
  { name: "Security", note: "Security teams and protocols" },
  { name: "Toilets", note: "Separate male and female" },
  { name: "Prayer rooms", note: "Separate male and female" },
];

export const rules = [
  "No outside food",
  "No weapons",
  "No entry without family",
  "No smoking",
  "No pets",
];
