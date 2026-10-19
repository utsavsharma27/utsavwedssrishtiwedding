/**
 * Edit this file to launch or customize the site.
 * No other source files need content changes.
 */

export const site = {
  siteUrl: "https://utsavsharma27.github.io/utsavwedssrishti/",
  defaultTheme: "lotus",
  themes: [
    { id: "marigold", label: "Marigold" },
    { id: "ruby", label: "Ruby" },
    { id: "emerald", label: "Emerald" },
    { id: "sapphire", label: "Sapphire" },
    { id: "lotus", label: "Lotus" },
  ],
  meta: {
    title: "Utsav & Srishti — We're getting married",
    description:
      "Join Utsav and Srishti at The Namah Grand, Noida, on 11 December 2026 for Haldi and Reception.",
  },
  couple: {
    partnerA: "Utsav",
    partnerB: "Srishti",
    familyA: "S/o Smt. Anju Lata & Sh. Sanjay Kumar Sharma",
    familyB: "D/o Smt. Kamlesh & Sh. Ram Kumar Sharma",
  },
  blessing: {
    shloka: [
      "॥ श्री गणेशाय नमः ॥",
      "वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभ।",
      "निर्विघ्नं कुरु मे देव, सर्व कार्येषु सर्वदा ॥",
    ],
    ganeshLeft: "photos/ganesh-left.png",
    ganeshRight: "photos/ganesh-right.png",
  },
  hashtag: "#SrishtiMeinUtsav",
  weddingDateIso: "2026-12-11T10:00:00+05:30",
  displayDate: "11 December 2026",
  city: "Noida, Uttar Pradesh",
  music: {
    src: "music/celebration.wav",
    labelPlay: "Play music",
    labelPause: "Pause music",
  },
  skipLink: "Skip to content",
  splash: {
    image: "photos/goddess.png",
    alt: "Goddess seated on a tiger, blessing the celebration",
    jai: "Jai Mata Di",
    prompt: "Scroll up to open the card",
  },
  hero: {
    kickerLines: [
      "With the divine blessings of",
      "Late Smt. Subhadra Devi & Late Shri Pyare Lal Sharma",
      "request your gracious presence for the wedding ceremony of their grand son",
    ],
    ctaLabel: "Open the invitation",
    ctaHref: "#invitation",
  },
  invitation: {
    eyebrow: "A humble invitation",
    heading: "With hearts full of gratitude",
    paragraphs: [
      "Together with our families, we joyfully invite you to share in the beginning of our new journey. Utsav and Srishti are getting married, and your presence and blessings would make these days truly complete.",
      "Please join us for Haldi on 11 December in the morning and our Reception that evening. The Phere and Vidai follow on 12 December. Your love and good wishes mean more to us than any gift. We humbly request you to come and bless the couple.",
    ],
    signOff: "With respect and warm regards",
  },
  countdown: {
    heading: "Until we begin our journey together",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    arrivedHeading: "The day is here",
    arrivedMessage: "The celebrations have begun. We are grateful to have you with us.",
  },
  lineup: {
    eyebrow: "The celebrations",
    heading: "Event line-up",
    mapsLabel: "Open in Google Maps",
  },
  events: [
    {
      id: "ghurchadi",
      title: "Ghurchadi",
      date: "11 December 2026",
      time: "4:00 PM",
      venue: "The Namah Grand, Sector 149, Noida",
      note: "A cherished family ritual, filled with laughter and blessings.",
      accent: "emerald",
      mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    },
    {
      id: "reception",
      title: "Reception (Varmala)",
      date: "11 December 2026",
      time: "7:00 PM onwards",
      venue: "The Namah Grand, Sector 149, Noida",
      note: "An evening of dinner, good company, and blessings for the newly married couple.",
      accent: "lotus",
      mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    },
    {
      id: "phere",
      title: "Phere",
      date: "12 December 2026",
      time: "7:30 AM",
      venue: "The Namah Grand, Sector 149, Noida",
      note: "The sacred pheras, taken with the blessings of both families.",
      accent: "ruby",
      mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    },
    {
      id: "vidai",
      title: "Vidai",
      date: "12 December 2026",
      time: "10:00 AM",
      venue: "The Namah Grand, Sector 149, Noida",
      note: "A tender farewell as the bride begins her new journey.",
      accent: "sapphire",
      mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    },
  ],
  venue: {
    eyebrow: "Find us",
    heading: "The venue",
    name: "The Namah Grand",
    addressLines: [
      "(Previously Ganeshwaram Hotel)",
      "Near Kidzee Play School, Kondli Market, Sector 149",
      "Noida, Uttar Pradesh 201304",
      "India",
    ],
    directions:
      "Please use the map link to find the venue. Kindly reach a little before your event time so that you can be seated comfortably.",
    mapsCta: "Open in Google Maps",
    mapsUrl: "https://maps.app.goo.gl/kyKHVdrF3FLKGzbR7",
    loadMapLabel: "Load the map",
    mapTitle: "Map of The Namah Grand, Noida",
    embedUrl:
      "https://maps.google.com/maps?q=The%20Namah%20Grand%20Sector%20149%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed",
    facadeCaption: "Tap to load Google Maps. The map is not loaded until you ask, so the page stays light.",
  },
  footer: {
    closing: "With the blessing and love, we look forward to celebrating with you.",
    crafted: "With best compliments from Unnati - Akash Upadhyay",
    family: "Along with all members of Sharma Family",
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "invitation", label: "Invite" },
  { id: "countdown", label: "When" },
  { id: "lineup", label: "Events" },
  { id: "venue", label: "Venue" },
];

export default site;
