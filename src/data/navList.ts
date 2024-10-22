import { ListNav } from "../types";

export const listGoodness: ListNav[] = [
  { name: "goodness.friends", to: "#catalog" },
  { name: "goodness.choose_friend", to: "#reviews" },
  { name: "goodness.lucky", to: "#how-to-order" },
  { name: "goodness.be_volunteer", to: "#contact" },
];

export const listAbout: ListNav[] = [
  { name: "about.about_us", to: "#about-us" },
  { name: "about.terms", to: "#terms" },
  { name: "about.team", to: "#contact" },
  { name: "about.history", to: "#contact" },
];
export const listContactDetails: ListNav[] = [
  { name: "contact.location", to: "#location" },
  { name: "contact.contacts", to: "#contact" },
  { name: "contact.info", to: "#info" },
];

export const mobileNavigationList: ListNav[] = [
  { name: "navigation.about_us", to: "#about-us" },
  { name: "navigation.friends", to: "#catalog" },
  { name: "navigation.terms", to: "#terms" },
  { name: "navigation.location", to: "#location" },
  { name: "navigation.contacts", to: "#contact" },
];

export const navHeaderDesktop: ListNav[] = [
  { name: "navigation.home", to: "/" },
  { name: "navigation.about_us", to: "#about-us" },
  { name: "navigation.friends", to: "#catalog" },
  { name: "navigation.terms", to: "#terms" },
  { name: "navigation.location", to: "#location" },
  { name: "navigation.contacts", to: "#contact" },
];
