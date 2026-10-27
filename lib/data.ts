export const PHONE_DISPLAY = "020 324 5658";
export const PHONE_INTL = "+233203245658";
export const WA = "233203245658";
export const ADDRESS = "BX-0000-0895";
export const TOWN = "Tuobodom, Techiman";
export const REGION = "Bono Region, Ghana";

export const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const I = {
  cut: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
  beard: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop",
  hair: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
  nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
  biz: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop",
};

export const REAL_IMAGES = {
  entrance: "/images/real/shop-interior-2.jpg",
  booth: "/images/real/shop-interior-1.jpg",
  stations: "/images/real/shop-exterior.jpg",
};

export const HERO_IMG = REAL_IMAGES.entrance;

export type Service = {
  id: string;
  name: string;
  desc: string;
  time: string;
  img: string;
  category: string;
};

export type Category = {
  id: string;
  label: string;
  shortLabel: string;
  desc: string;
  img: string;
  items: Service[];
};

export const CATEGORIES: Category[] = [
  {
    id: "barber",
    label: "Barbershop & Haircuts",
    shortLabel: "Haircuts",
    desc: "Clean clipper work, precision skin fades, tapers and razor line-ups tailored to your style.",
    img: I.cut,
    items: [
      { id: "buzz-cut", name: "Buzz Cut", desc: "Even, close clipper cut all over with crisp temple and neckline detailing.", time: "20 min", img: I.cut, category: "barber" },
      { id: "fade-cut", name: "Fade Cut (Low / Mid / High)", desc: "Smooth skin blend from zero to desired length, matched to your hair density and shape.", time: "40 min", img: I.cut, category: "barber" },
      { id: "custom-cut-lineup", name: "Custom Cut & Line-Up", desc: "Your signature style finished with a razor-sharp edge.", time: "45 min", img: I.cut, category: "barber" },
      { id: "military-haircut", name: "Military Haircut", desc: "Clean, short and regulation neat short cut.", time: "30 min", img: I.cut, category: "barber" },
      { id: "long-haircut", name: "Long Haircut", desc: "Shaping and trimming for longer styles and textured hair.", time: "45 min", img: I.cut, category: "barber" },
      { id: "children-cuts", name: "Children's Cuts", desc: "Patient, gentle cuts for young clients in our comfortable salon.", time: "25 min", img: I.cut, category: "barber" },
      { id: "hair-shape-up", name: "Hair Shape-Up", desc: "Hairline and edges tidied crisply between full haircut visits.", time: "15 min", img: I.cut, category: "barber" },
    ],
  },
  {
    id: "beard",
    label: "Beard Care & Shaving",
    shortLabel: "Beard & Shave",
    desc: "Sculpted full beards, hot towel treatments, natural dye enhancements, and smooth clean shaves.",
    img: I.beard,
    items: [
      { id: "beard-trim", name: "Beard Trim & Shaping", desc: "Defined cheek lines and balanced facial contours.", time: "25 min", img: I.beard, category: "beard" },
      { id: "beard-maintenance", name: "Beard Maintenance", desc: "Routine upkeep to keep your beard neat, conditioned and healthy.", time: "20 min", img: I.beard, category: "beard" },
      { id: "beard-conditioning", name: "Beard Conditioning Treatment", desc: "Softens and deeply nourishes dry, coarse facial hair.", time: "30 min", img: I.beard, category: "beard" },
      { id: "beard-dyeing", name: "Beard Dyeing & Color Enhancement", desc: "Even natural colour that covers greys and enhances fullness.", time: "40 min", img: I.beard, category: "beard" },
      { id: "clean-shave", name: "Clean Shave", desc: "Smooth, close razor shave followed by soothing aftershave care.", time: "25 min", img: I.beard, category: "beard" },
      { id: "head-shave", name: "Head Shave", desc: "Complete, silky smooth head shave with warm lather.", time: "30 min", img: I.beard, category: "beard" },
      { id: "hot-towel-shave", name: "Hot Towel Shave", desc: "Warm towel, rich lather and razor for a revitalizing, comfortable finish.", time: "35 min", img: I.beard, category: "beard" },
    ],
  },
  {
    id: "salon",
    label: "Hair Color & Treatments",
    shortLabel: "Color & Treatment",
    desc: "Vibrant hair colouring, deep protein revitalization, texturizing, curls, and extensions.",
    img: I.hair,
    items: [
      { id: "hair-colouring", name: "Hair Colouring & Tinting", desc: "Rich colour and tint for men and women.", time: "60 min", img: I.hair, category: "salon" },
      { id: "capillary-treatment", name: "Capillary Hair Treatment", desc: "Restorative treatment for dry, damaged or brittle hair.", time: "45 min", img: I.hair, category: "salon" },
      { id: "hair-straightening", name: "Hair Straightening / Perms", desc: "Straight or textured styles that look sleek and last.", time: "90 min", img: I.hair, category: "salon" },
      { id: "curly-styling", name: "Curly Hair Styling", desc: "Defined curls and coils with proper moisture lock.", time: "60 min", img: I.hair, category: "salon" },
      { id: "hair-extensions", name: "Hair Extensions", desc: "Added length and volume, fitted neatly and securely.", time: "2 hrs", img: I.hair, category: "salon" },
    ],
  },
  {
    id: "spa",
    label: "Executive Grooming",
    shortLabel: "Executive Grooming",
    desc: "Full groom wedding prep, male manicure, brow shaping, and total body grooming.",
    img: I.nails,
    items: [
      { id: "eyebrow-trimming", name: "Eyebrow Trimming & Tinting", desc: "Clean, natural-looking brows with subtle shaping.", time: "20 min", img: I.nails, category: "spa" },
      { id: "male-body-hair", name: "Male Body Hair Removal", desc: "Careful removal and trimming for a smooth, hygienic finish.", time: "40 min", img: I.nails, category: "spa" },
      { id: "mens-manicures", name: "Men's Manicures", desc: "Nails cleaned, shaped, buffed and hands conditioned.", time: "30 min", img: I.nails, category: "spa" },
      { id: "groom-packages", name: "Full Groom Packages (Wedding Prep)", desc: "Cut, beard, shave and executive finishing for your special day.", time: "2 hrs", img: I.nails, category: "spa" },
    ],
  },
  {
    id: "biz",
    label: "Business Hub",
    shortLabel: "Business Services",
    desc: "Convenient local community hub: MTN MoMo, utility bill payments, and printing.",
    img: I.biz,
    items: [
      { id: "mobile-money", name: "Mobile Money Cash In / Cash Out", desc: "Deposit and withdraw while you wait for your haircut.", time: "5 min", img: I.biz, category: "biz" },
      { id: "utility-bills", name: "Utility Bill Payments & Digital Services", desc: "Pay ECG power, water bills and handle digital errands in one stop.", time: "10 min", img: I.biz, category: "biz" },
      { id: "document-printing", name: "Document Printing / Photocopying", desc: "Printing, copying and scanning help for forms and documents.", time: "10 min", img: I.biz, category: "biz" },
    ],
  },
];

export const ALL_SERVICES = CATEGORIES.flatMap((c) => c.items);
export const ALL_SERVICE_NAMES = ALL_SERVICES.map((s) => s.name);

export const REVIEWS = [
  {
    name: "Kwame A.",
    role: "Regular Client · Techiman",
    rating: 5,
    text: "Best fade in Tuobodom! The barber takes his time with the line-up, and it stayed sharp for two solid weeks.",
  },
  {
    name: "Abena O.",
    role: "Client · Tuobodom",
    rating: 5,
    text: "Clean shop, cool air conditioning and friendly staff. I got my hair treated and sent mobile money in one visit.",
  },
  {
    name: "Yaw B.",
    role: "Wedding Groom",
    rating: 5,
    text: "Did my groom package before the wedding. Everyone asked where I got it done. Excellent service from start to finish.",
  },
  {
    name: "Esi M.",
    role: "Parent · Tuobodom",
    rating: 5,
    text: "My son used to cry at barbers. Here he sat quietly and left smiling.",
  },
];

export const HIGHLIGHTS = [
  {
    title: "Master craftsmanship",
    desc: "Precision cuts and expert beard grooming tailored to your style.",
    icon: "Scissors",
  },
  {
    title: "Hygienic and comfortable",
    desc: "A clean, fully air-conditioned shop with premium equipment and fresh towels.",
    icon: "ShieldCheck",
  },
  {
    title: "Dual service hub",
    desc: "Get groomed while handling mobile money and local business errands.",
    icon: "Banknote",
  },
  {
    title: "Extended hours",
    desc: "Open until 9:00 PM every day to fit busy schedules.",
    icon: "Clock",
  },
];
