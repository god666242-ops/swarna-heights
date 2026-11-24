// Edit this file only. Everything on the page comes from here.
// TODO = confirm with the hotel. Nearby distances marked "approx." are road estimates: verify on Google Maps before launch.
export const hotel = {
  slug: "hotel-swarna-heights", // TODO: PureBook hotel slug (used by the booking button)
  name: "Swarna Heights",
  full: "Hotel Swarna Heights",
  locality: "Labbipet",
  city: "Vijayawada",
  region: "Andhra Pradesh",
  pin: "520010",
  street: "MG Road, Beside Balaji Towers, Labbipet",
  address: "MG Rd, Beside Balaji Towers, Labbipet, Vijayawada, Andhra Pradesh 520010",
  phones: [{ show: "070955 47777", tel: "+917095547777" }],
  email: "", // TODO
  mapQuery: "Hotel Swarna Heights, MG Rd, Beside Balaji Towers, Labbipet, Vijayawada 520010",
  mapLink: "https://www.google.com/maps?daddr=Hotel+Swarna+Heights,+MG+Rd,+Beside+Balaji+Towers,+Labbipet,+Vijayawada,+Andhra+Pradesh+520010",
  lat: null, // TODO: add from Google Maps
  lng: null,
};

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),
  title: "Hotel Swarna Heights, MG Road, Vijayawada",
  description:
    "Book direct at Hotel Swarna Heights on MG Road, Labbipet, Vijayawada. Deluxe, Executive and Luxury Suite rooms, free Wi-Fi, a pool and a 24-hour front desk.",
  embed: { primary: "#c4705e", theme: "light", label: "Reserve your stay" },
  ogImg: "/images/suite-1-1600.webp",
  tagline: "Stay in the heart of the city.",
  headline: "The city’s main street, a quiet room above it",
  lead: "Considered rooms, a warm welcome and a pool, in the middle of Vijayawada’s MG Road.",
  intro:
    "Hotel Swarna Heights stands on MG Road in Labbipet, steps from PVP Square and the shops, restaurants and parks that make Vijayawada’s centre. Rooms are air-conditioned and unhurried, Wi-Fi is free, and the front desk never closes. Every stay is booked direct, with live rates.",
  facts: [
    ["24h", "Front desk"],
    ["3", "Room categories"],
    ["12:00", "Check-in"],
    ["11:00", "Check-out"],
  ],
  // Room details are written from the photos: confirm beds, size and perks with the hotel.
  rooms: [
    {
      name: "Deluxe Room",
      bed: "Double bed",
      desc: "A calm, well-lit room with a padded headboard, reading lights either side and a soft brown-and-ivory scheme. Everything you need for a short city stay.",
      perks: ["Air conditioning", "Free Wi-Fi", "Room service"],
      imgs: [["deluxe-1", "Deluxe Room bed", "50% 55%"], ["deluxe-2", "Deluxe Room, front view", "50% 60%"]],
    },
    {
      name: "Executive Room",
      bed: "Double or twin beds",
      desc: "More space and more comfort: a button-tufted headboard or twin beds, a sitting chair, a work desk and a wall-mounted television. Ideal for business travel or sharing.",
      perks: ["Air conditioning", "Work desk", "Free Wi-Fi", "Television"],
      imgs: [["exec-1", "Executive twin room", "50% 55%"], ["exec-2", "Executive Room", "50% 45%"], ["exec-3", "Executive Room bed", "50% 55%"], ["exec-4", "Executive Room, angled view", "50% 50%"], ["exec-5", "Twin room with desk", "50% 55%"], ["exec-6", "Twin beds and armchair", "50% 55%"]],
    },
    {
      name: "Luxury Suite",
      bed: "Bed with living area",
      desc: "Our largest address: a tufted king headboard, a separate sofa and glass table, a wardrobe and wide polished floors. Room to spread out on longer stays.",
      perks: ["Air conditioning", "Sofa seating area", "Free Wi-Fi"],
      imgs: [["suite-1", "Luxury Suite", "50% 55%"], ["suite-2", "Luxury Suite, entrance view", "50% 55%"], ["suite-3", "Luxury Suite seating", "50% 55%"]],
    },
  ],
  amenities: [
    ["Swimming pool", "A place to unwind."],
    ["Free Wi-Fi", "Throughout the hotel."],
    ["Air conditioning", "In every room."],
    ["24-hour front desk", "Arrive at any hour."],
    ["Restaurant", "On site, with room service."],
    ["Laundry", "Full-service laundry."],
    ["Local shuttle", "Ask the front desk."],
    ["Child-friendly", "Families are welcome."],
  ],
  heroImg: "suite-1",
  // Gallery: cat = filter tab. Portrait photos get taller tiles automatically.
  gallery: [
    { src: "suite-1", alt: "Luxury Suite", cat: "Rooms" },
    { src: "street-day", alt: "MG Road from the hotel, by day", cat: "The city" },
    { src: "deluxe-1", alt: "Deluxe Room", cat: "Rooms" },
    { src: "reception", alt: "Reception and lobby", cat: "Hotel" },
    { src: "street-night", alt: "MG Road at night", cat: "The city" },
    { src: "exec-1", alt: "Executive twin room", cat: "Rooms" },
    { src: "exec-2", alt: "Executive Room", cat: "Rooms" },
    { src: "street-rain", alt: "MG Road in the rain", cat: "The city" },
    { src: "deluxe-2", alt: "Deluxe Room, front view", cat: "Rooms" },
    { src: "mattress", alt: "Hotel-collection mattress and headboard", cat: "Hotel" },
    { src: "suite-3", alt: "Luxury Suite seating", cat: "Rooms" },
    { src: "exec-3", alt: "Executive Room bed", cat: "Rooms" },
  ],
  // Around the hotel. "~" = approximate road distance (verify on the map link). Driving distances from Google where given.
  nearby: [
    { title: "Shopping and dining", items: [["PVP Square", "400 m"], ["Rubaruu", "950 m"], ["LEPL Centro", "1 km"], ["The Chennai Shopping Mall", "1.1 km"], ["Swathi Shopping Mall, MG Road", "1.1 km"], ["Under the Woods (vegetarian)", "1.1 km"], ["D-Address Mall", "1.2 km"]] },
    { title: "Parks and landmarks", items: [["Raghavaiah Park", "1.9 km"], ["Riverfront Park", "2.9 km"], ["Prakasam Barrage", "~3 km"], ["Rajiv Gandhi Park", "4.1 km"], ["Kanaka Durga Temple", "~5 km"], ["K.L. Rao Park", "6.9 km"]] },
    { title: "Travel and campuses", items: [["APSRTC PNBS Bus Stand", "~3.5 km"], ["Vijayawada Junction", "~4 km"], ["Panakala Narasimha Swamy Temple", "~12 km"], ["AIIMS Mangalagiri", "~13 km"], ["Vijayawada International Airport", "~20 km"]] },
  ],
  faq: [
    ["What are the check-in and check-out times?", "Check-in is from 12:00 PM and check-out is by 11:00 AM."],
    ["What are the main amenities?", "A pool, free Wi-Fi and air-conditioned rooms, plus a 24-hour front desk, a restaurant with room service, and full-service laundry."],
    ["Does the hotel offer free Wi-Fi?", "Yes, Wi-Fi is free for guests."],
    ["Is there a pool?", "Yes, the hotel has a pool."],
    ["How long does it take to get from Hotel Swarna Heights to Sri Durga Malleswara Swamy Varla Devasthanam?", "By car: about 15 minutes. By public transport: about 25 minutes."],
    ["How long does it take to get from Hotel Swarna Heights to Vijayawada International Airport?", "By car: about 34 minutes. By public transport: about 42 minutes."],
    ["Which room types are available?", "Deluxe Room, Executive Room and Luxury Suite. See live rates for each in the booking window."],
    ["How do I book?", "Press Reserve your stay, choose your dates and complete the booking in the window that opens. You can also call the front desk on 070955 47777."],
  ],
};