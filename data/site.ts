/**
 * Every fact on the homepage lives here.
 *
 * Parks and headline numbers follow the current Chunky Monkey site
 * (chunkymonkey-bytes.vercel.app): two parks, DHA Phase IV and Saima Jinnah
 * Icon Mall. Ride descriptions, facilities, rules and event details come from
 * chunkymonkey.com.pk (Internet Archive snapshots, June–July 2026).
 *
 * Deliberately left out: ticket prices and seasonal offers, which change.
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
  tag: string;
  city: string;
  address: string;
  about: string;
  phone?: { label: string; href: string };
  directions: string;
};

export const parks: Park[] = [
  {
    id: "phase-iv",
    level: "01",
    name: "DHA Phase IV",
    tag: "Flagship park",
    city: "Karachi",
    address: "Adjacent Nisar Shaheed Park, DHA Phase IV, Karachi",
    about: "Outdoor rides, indoor games, 7D Cinema and Fun City",
    phone: { label: "+92-21-35899583-4", href: "tel:+922135899583" },
    directions: maps("Chunky Monkey DHA Phase 4 Karachi"),
  },
  {
    id: "icon-mall",
    level: "02",
    name: "Saima Jinnah Icon Mall",
    tag: "At the mall",
    city: "Karachi",
    address: "Saima Jinnah Icon Mall, Karachi",
    about: "Come and find us at the mall",
    directions: maps("Saima Jinnah Icon Mall"),
  },
];

export const stats = [
  { value: "2", label: "Branches", note: "Phase IV and the mall", color: "#dfff38" },
  { value: "30+", label: "Rides", note: "Fast, gentle and everything between", color: "#ff6637" },
  { value: "100+", label: "Arcade machines", note: "Bring your high score", color: "#f6f0df" },
  { value: "30", label: "Years in business", note: "Fun for all, since day one", color: "#dfff38" },
];

/** Rides named on the Chunky Monkey sites. Not exhaustive. */
export const rideRoster = [
  "Merry Go Round", "Time Travel", "Speedy Car", "Flying Chair", "Pirate Party",
  "Bumping Car", "Flash Tower", "Flying Carpet", "Tea Cups", "Family Coaster",
  "Tagada", "Parachute", "Pirate Ship", "Frisbee", "Octopus", "Skater",
  "Caterpillar", "Sindbad", "Happy Swing", "Sea Shell", "Action Arm", "Shake Off",
  "7D Cinema",
];

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
