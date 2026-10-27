"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Scissors,
  Crown,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  Star,
  ShieldCheck,
  MessageCircle,
  Search,
  Sparkles,
  X,
  Banknote,
  Menu,
  Copy,
  Check,
  ChevronRight,
  User,
  Navigation,
  Camera,
} from "lucide-react";
import {
  CATEGORIES,
  ALL_SERVICES,
  HERO_IMG,
  REAL_IMAGES,
  PHONE_DISPLAY,
  PHONE_INTL,
  ADDRESS,
  TOWN,
  REGION,
  REVIEWS,
  HIGHLIGHTS,
  waLink,
  Service,
} from "@/lib/data";

export default function Site() {
  const [bookOpen, setBookOpen] = useState(false);
  const [presetService, setPresetService] = useState<Service | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedGps, setCopiedGps] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Shop Open Status based on Ghana Time (GMT)
  const isShopOpen = useMemo(() => {
    const gmtHour = new Date().getUTCHours();
    return gmtHour >= 8 && gmtHour < 21;
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyGps = () => {
    navigator.clipboard?.writeText(ADDRESS);
    setCopiedGps(true);
    showToast(`GhanaPost GPS ${ADDRESS} copied to clipboard!`);
    setTimeout(() => setCopiedGps(false), 2500);
  };

  const openBooking = (service?: Service | string) => {
    if (typeof service === "string") {
      const match = ALL_SERVICES.find((s) => s.name === service) || null;
      setPresetService(match);
    } else {
      setPresetService(service || null);
    }
    setBookOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-paper pb-20 md:pb-0">
      {/* Top Notice Bar */}
      <div className="bg-sapphire-deep px-3 py-2 text-center text-xs text-white sm:px-4 sm:text-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1.5 font-medium">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                isShopOpen ? "bg-emerald-400" : "bg-amber"
              }`}
            />
            {isShopOpen ? "Open Now · Daily 8:00 AM – 9:00 PM" : "Opens daily at 8:00 AM"}
          </span>
          <span className="hidden text-blue-200 sm:inline">|</span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-amber" />
            <span>
              {TOWN} (<button onClick={copyGps} className="underline hover:text-amber">{ADDRESS}</button>)
            </span>
          </span>
          <span className="hidden text-blue-200 sm:inline">|</span>
          <span className="flex items-center gap-2">
            <a href={`tel:${PHONE_INTL}`} className="font-semibold underline hover:text-amber">
              Call/WhatsApp {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-2.5 font-bold text-sapphire">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sapphire to-sapphire-deep text-amber shadow-sm">
              <Crown className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              Righteous
              <span className="block text-[11px] font-semibold text-gold">Salon & Business Services</span>
              <span className="block text-[10px] font-normal text-slate-500">Tuobodom · Techiman</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            <a href="#services" className="transition hover:text-sapphire">
              Services
            </a>
            <a href="#gallery" className="transition hover:text-sapphire">
              Our Shop
            </a>
            <a href="#business-hub" className="transition hover:text-sapphire">
              Business Hub
            </a>
            <a href="#why-us" className="transition hover:text-sapphire">
              Why Us
            </a>
            <a href="#reviews" className="transition hover:text-sapphire">
              Reviews
            </a>
            <a href="#location" className="transition hover:text-sapphire">
              Location
            </a>
          </nav>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => openBooking()}
              className="hidden rounded-full bg-gold px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-amber hover:shadow active:scale-98 md:inline-flex"
            >
              Book Appointment
            </button>
            <a
              href={waLink("Hello Righteous Salon, I would like to book an appointment.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm transition hover:bg-emerald-500 active:scale-95 md:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-700 active:scale-95 transition md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl md:hidden"
            >
              <div className="flex flex-col gap-2 font-semibold text-slate-800">
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-slate-50 transition"
                >
                  <span>Services ({ALL_SERVICES.length})</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-slate-50 transition"
                >
                  <span>Our Shop (Real Photos)</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href="#business-hub"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-slate-50 transition"
                >
                  <span>Business Hub (Mobile Money & Digital Services)</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href="#why-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-slate-50 transition"
                >
                  <span>Why People Choose Us</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href="#reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-slate-50 transition"
                >
                  <span>Client Reviews (4.8★)</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href="#location"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-slate-50 transition"
                >
                  <span>Location & GPS Address</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </a>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
                <button
                  onClick={() => openBooking()}
                  className="w-full rounded-xl bg-gold py-2.5 text-center text-sm font-bold text-white shadow-sm transition active:scale-98"
                >
                  Book Chair
                </button>
                <a
                  href={`tel:${PHONE_INTL}`}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-sapphire py-2.5 text-center text-sm font-bold text-sapphire transition active:scale-98"
                >
                  <Phone className="h-4 w-4" /> Call Direct
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-sapphire to-sapphire-deep text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:gap-12">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-amber backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Tuobodom & Techiman’s Trusted Grooming Destination</span>
            </div>

            <h1 className="text-3xl font-extrabold leading-[1.15] sm:text-5xl sm:leading-[1.1]">
              Sharp Looks, Seamless Service in Tuobodom.
            </h1>

            <p className="mt-4 max-w-lg text-base text-blue-100 sm:text-lg">
              Techiman’s trusted destination for precision haircuts, beard grooming, hair treatments, and convenient
              business services.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => openBooking()}
                className="flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-amber active:scale-98"
              >
                <Scissors className="h-5 w-5" />
                Book Your Chair
              </button>
              <a
                href={waLink("Hello Righteous Salon, I would like to book an appointment")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20 active:scale-98"
              >
                <MessageCircle className="h-5 w-5 text-emerald-400" />
                Book via WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/15 pt-6 text-xs text-blue-100 sm:grid-cols-3 sm:text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-amber text-amber shrink-0" />
                <span>4.8 Rating (16+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber shrink-0" />
                <span>Open Daily till 9 PM</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber shrink-0" />
                <span>GPS: {ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Hero Image Showcase - Real Shop View */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-3xl border-2 border-white/20 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMG}
                alt="Inside Righteous Unisex Salon and Business Services in Tuobodom"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-3 text-slate-900 backdrop-blur-md shadow-md sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">Tuobodom Salon & Business Hub</p>
                    <p className="text-sm font-bold text-sapphire sm:text-base">Righteous Unisex Salon · {ADDRESS}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
                    Walk-ins Welcome
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Shop Photo Gallery */}
      <section id="gallery" className="bg-slate-50 py-12 sm:py-14 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5">
                <Camera className="h-3.5 w-3.5" /> Inside Our Location
              </span>
              <h2 className="mt-1 text-2xl font-extrabold text-sapphire sm:text-3xl">Our Tuobodom Shop</h2>
              <p className="mt-1 text-sm text-slate-600">A clean, comfortable environment designed for precision grooming and fast business errands.</p>
            </div>
            <a
              href="#location"
              className="inline-flex items-center gap-1 text-xs font-bold text-sapphire underline hover:text-sapphire-deep"
            >
              Get Directions to Shop <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                src: REAL_IMAGES.entrance,
                title: "Salon & Business Hub Entrance",
                desc: "Spacious layout with client waiting area, styling chairs, and service counter.",
              },
              {
                src: REAL_IMAGES.booth,
                title: "Righteous Business Services",
                desc: "Dedicated booth for Mobile Money cash in/out, utility payments, and document printing.",
              },
              {
                src: REAL_IMAGES.stations,
                title: "Styling Stations & Mirrors",
                desc: "Air-conditioned grooming stations with premium tools and hygienic equipment.",
              },
            ].map((photo, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md hover:border-gold"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sapphire text-sm">{photo.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection onBook={openBooking} />

      {/* Business Hub Spotlight */}
      <section id="business-hub" className="bg-gradient-to-r from-amber/10 via-amber/5 to-transparent py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-amber/20 bg-white p-6 shadow-sm sm:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/15 px-3 py-1 text-xs font-bold text-amber">
                  <Banknote className="h-4 w-4" /> Dual Service Hub in Tuobodom
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-sapphire sm:text-3xl">
                  Get Groomed While Handling Your Daily Errands
                </h2>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Why make separate trips? At Righteous Salon, you can get a fresh haircut or hair treatment and simultaneously
                  handle Mobile Money cash in/out, pay utility bills, or print urgent documents in one stop.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Mobile Money Cash In / Cash Out</p>
                      <p className="text-xs text-slate-600">Deposit and withdraw easily while you wait for your haircut.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Utility Bill Payments & Digital Services</p>
                      <p className="text-xs text-slate-600">Pay bills and handle online errands with quick counter assistance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Document Printing / Photocopying</p>
                      <p className="text-xs text-slate-600">Printing and copying help for registration forms and documents.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={waLink("Hello Righteous Salon, I would like to ask about your business services in Tuobodom.")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-sapphire px-5 py-2.5 text-sm font-bold text-white hover:bg-sapphire-deep transition active:scale-98"
                  >
                    <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
                  </a>
                  <button
                    onClick={() => openBooking()}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition active:scale-98"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>

              {/* Real Righteous Business Services Booth Photo */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={REAL_IMAGES.booth}
                  alt="Righteous Business Services Booth in Tuobodom"
                  className="h-72 sm:h-88 w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">The Righteous Standard</span>
            <h2 className="mt-1 text-2xl font-extrabold text-sapphire sm:text-3xl">
              Why people in Techiman come back
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {HIGHLIGHTS.map((item) => {
              const Icon =
                item.icon === "Scissors"
                  ? Scissors
                  : item.icon === "ShieldCheck"
                  ? ShieldCheck
                  : item.icon === "Banknote"
                  ? Banknote
                  : Clock;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-paper p-5 transition hover:border-gold hover:shadow-sm"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber/15 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-sapphire">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inline Booking Section */}
      <section id="book" className="bg-sapphire py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber">Appointments</span>
            <h2 className="mt-1 text-2xl font-extrabold sm:text-4xl">Book your chair</h2>
            <p className="mt-4 text-sm text-blue-100 sm:text-base">
              Fill in your details and we’ll open WhatsApp with your request ready to send. Prices are confirmed with
              you on WhatsApp before your visit.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl bg-white/10 p-5 backdrop-blur-sm text-sm text-blue-50">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Direct confirmation via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Clean, fully air-conditioned shop</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>Open daily until 9:00 PM</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href={`tel:${PHONE_INTL}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber hover:underline"
              >
                <Phone className="h-4 w-4" /> Prefer to call? {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-xl text-slate-900 sm:p-7">
            <h3 className="text-xl font-bold text-sapphire">Request an Appointment</h3>
            <p className="mt-1 text-xs text-slate-500">Prices are confirmed with you on WhatsApp before your visit.</p>
            <div className="mt-4">
              <BookingForm preset={presetService} onDone={() => showToast("Request prepared! Opening WhatsApp...")} />
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section id="reviews" className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Testimonials</span>
              <h2 className="mt-1 text-2xl font-extrabold text-sapphire sm:text-3xl">What clients say</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-amber/15 px-4 py-1.5 text-xs font-bold text-slate-800">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber text-amber" />
                ))}
              </div>
              <span>4.8 from 16 Google reviews</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber text-amber" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">“{r.text}”</blockquote>
                </div>
                <figcaption className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-sm font-bold text-sapphire">{r.name}</p>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="bg-mist py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold">Location</span>
            <h2 className="mt-1 text-2xl font-extrabold text-sapphire sm:text-3xl">Find us in Tuobodom</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Conveniently situated in Tuobodom, Techiman Municipality in the Bono Region.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
                <MapPin className="mt-1 h-5 w-5 text-gold shrink-0" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase">Digital Address</p>
                  <p className="text-base font-bold text-slate-900">{ADDRESS}</p>
                  <p className="text-xs text-slate-600">{TOWN}, {REGION}</p>
                  <button
                    onClick={copyGps}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-sapphire hover:bg-slate-200 transition active:scale-95"
                  >
                    {copiedGps ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    {copiedGps ? "Copied!" : "Copy GPS Code"}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Call / WhatsApp</p>
                  <a href={`tel:${PHONE_INTL}`} className="text-sm font-bold text-sapphire underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
                <Clock className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase">Hours</p>
                  <p className="text-sm font-bold text-slate-900">Monday to Sunday, open till 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink("Hello Righteous Salon")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sapphire px-5 py-2.5 text-sm font-bold text-white hover:bg-sapphire-deep shadow-sm transition active:scale-98"
              >
                <MessageCircle className="h-4 w-4" /> Message on WhatsApp
              </a>
              <a
                href="https://maps.app.goo.gl/N3JRxdPZN6WbNK8J6"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sapphire px-5 py-2.5 text-sm font-bold text-sapphire hover:bg-sapphire/5 transition active:scale-98"
              >
                <Navigation className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </div>

          <div className="h-80 sm:h-96 overflow-hidden rounded-3xl border border-slate-300 shadow-md">
            <iframe
              title="Righteous Salon Tuobodom Location Map"
              src="https://www.google.com/maps?q=Tuobodom,Techiman,Ghana&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sapphire-deep py-12 text-sm text-blue-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2.5 font-bold text-white text-lg">
              <Crown className="h-6 w-6 text-amber" />
              <span>Righteous Unisex Salon and Business Services</span>
            </div>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-blue-200">
              Premium grooming, hair care and local business solutions in Tuobodom, Techiman.
            </p>
            <p className="mt-3 text-xs text-amber font-semibold">GhanaPost: {ADDRESS} · {TOWN}</p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <p className="font-bold text-white uppercase text-xs tracking-wider mb-2">Services</p>
              <ul className="space-y-1.5 text-xs text-blue-200">
                <li><a href="#services" className="hover:text-white">Haircuts & Fades</a></li>
                <li><a href="#services" className="hover:text-white">Beard Care & Shave</a></li>
                <li><a href="#services" className="hover:text-white">Hair Treatments</a></li>
                <li><a href="#services" className="hover:text-white">Executive Grooming</a></li>
                <li><a href="#business-hub" className="hover:text-white">Business Hub</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white uppercase text-xs tracking-wider mb-2">Navigation</p>
              <ul className="space-y-1.5 text-xs text-blue-200">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#gallery" className="hover:text-white">Our Shop</a></li>
                <li><a href="#why-us" className="hover:text-white">Why Us</a></li>
                <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
                <li><a href="#location" className="hover:text-white">Location</a></li>
                <li><a href={waLink("Hello Righteous Salon")} className="hover:text-white">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-4 pt-6 text-center text-xs text-blue-300 sm:px-6">
          © {new Date().getFullYear()} Righteous Unisex Salon and Business Services. All rights reserved. Tuobodom, Techiman.
        </div>
      </footer>

      {/* Mobile Sticky Quick Action Bar */}
      <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur-lg shadow-2xl md:hidden">
        <div className="grid grid-cols-4 gap-2">
          <a
            href={`tel:${PHONE_INTL}`}
            className="flex flex-col items-center justify-center rounded-xl py-1.5 text-slate-700 hover:bg-slate-50 transition active:scale-95"
          >
            <Phone className="h-5 w-5 text-sapphire" />
            <span className="text-[10px] font-bold mt-0.5">Call</span>
          </a>
          <a
            href={waLink("Hello Righteous Salon, I would like to book an appointment.")}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center rounded-xl py-1.5 text-slate-700 hover:bg-slate-50 transition active:scale-95"
          >
            <MessageCircle className="h-5 w-5 text-emerald-600" />
            <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
          </a>
          <button
            onClick={() => openBooking()}
            className="flex flex-col items-center justify-center rounded-xl bg-gold py-1.5 text-white shadow-sm transition active:scale-95"
          >
            <Scissors className="h-5 w-5 text-white" />
            <span className="text-[10px] font-bold mt-0.5">Book</span>
          </button>
          <a
            href="https://maps.app.goo.gl/N3JRxdPZN6WbNK8J6"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center rounded-xl py-1.5 text-slate-700 hover:bg-slate-50 transition active:scale-95"
          >
            <MapPin className="h-5 w-5 text-gold" />
            <span className="text-[10px] font-bold mt-0.5">Map</span>
          </a>
        </div>
      </aside>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookOpen && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setBookOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Book an appointment"
              className="relative my-8 w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"
              initial={{ y: 15, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 15, scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close"
                onClick={() => setBookOpen(false)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <Crown className="h-5 w-5 text-gold" />
                <h3 className="text-xl font-bold text-sapphire">Book an Appointment</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Prices are confirmed with you on WhatsApp before your visit.
              </p>

              <BookingForm
                preset={presetService}
                onDone={() => {
                  setBookOpen(false);
                  showToast("Opening WhatsApp...");
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-xl flex items-center gap-2 border border-slate-700"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Service Explorer Component */
function ServicesSection({ onBook }: { onBook: (s: Service) => void }) {
  const [tab, setTab] = useState<string>("all");
  const [q, setQ] = useState("");
  const searching = q.trim().length > 0;

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (searching) {
      return ALL_SERVICES.filter(
        (s) =>
          s.name.toLowerCase().includes(term) ||
          s.desc.toLowerCase().includes(term)
      );
    }
    if (tab === "all") {
      return ALL_SERVICES;
    }
    const cat = CATEGORIES.find((c) => c.id === tab);
    return cat ? cat.items : [];
  }, [q, tab, searching]);

  return (
    <section id="services" className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold">Our Services</span>
            <h2 className="mt-1 text-2xl font-extrabold text-sapphire sm:text-3xl">
              Precision Grooming & Care
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Select a service below to book your chair. Prices are confirmed with you on WhatsApp before your visit.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search: fade, beard, shave, hair…"
              aria-label="Search services"
              className="w-full rounded-full border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-9 text-sm focus:bg-white focus:border-sapphire focus:ring-1 focus:ring-sapphire transition duration-150"
            />
            {q && (
              <button
                onClick={() => setQ("")}
                aria-label="Clear search"
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills (Horizontal Scrollable on Mobile) */}
        <div
          role="tablist"
          className={`no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-2 pt-1 ${
            searching ? "opacity-40 pointer-events-none" : ""
          }`}
        >
          <button
            role="tab"
            aria-selected={tab === "all"}
            onClick={() => {
              setQ("");
              setTab("all");
            }}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition ${
              tab === "all" ? "bg-sapphire text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Services ({ALL_SERVICES.length})
          </button>

          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={tab === c.id}
              onClick={() => {
                setQ("");
                setTab(c.id);
              }}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-bold transition ${
                tab === c.id ? "bg-sapphire text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {c.shortLabel}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>
            {searching ? `Search results for “${q}”:` : tab === "all" ? "Displaying all services:" : "Filtered services:"}{" "}
            <strong className="text-sapphire">{results.length} available</strong>
          </span>
          {searching && (
            <button onClick={() => setQ("")} className="text-sapphire font-semibold underline">
              Reset search
            </button>
          )}
        </div>

        {/* Services Grid with Fast Standard CSS Grid */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {results.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-gold hover:shadow-md"
            >
              <div>
                {/* Service Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-102"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-slate-900 group-hover:text-sapphire transition-colors sm:text-base">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      About {s.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="border-t border-slate-100 bg-slate-50/60 p-3 sm:px-5 flex items-center justify-between gap-2">
                <a
                  href={waLink(`Hello Righteous Salon, I would like to enquire about ${s.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Enquire
                </a>

                <button
                  onClick={() => onBook(s)}
                  className="rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-amber hover:shadow active:scale-95"
                >
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>

        {results.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
            <Scissors className="mx-auto h-8 w-8 text-slate-400" />
            <p className="mt-2 text-sm font-semibold text-slate-700">No service matching “{q}”</p>
            <p className="mt-1 text-xs text-slate-500">
              Try searching for “fade”, “beard”, “shave”, or ask us on WhatsApp.
            </p>
            <button
              onClick={() => setQ("")}
              className="mt-4 rounded-full bg-sapphire px-4 py-2 text-xs font-semibold text-white transition active:scale-95"
            >
              Show all services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* Enhanced Booking Form with WhatsApp integration */
function BookingForm({ preset, onDone }: { preset: Service | null; onDone?: () => void }) {
  const [f, setF] = useState({
    name: "",
    phone: "",
    serviceName: preset?.name || "",
    dateOption: "today",
    customDate: "",
    timeSlot: "afternoon",
    customTime: "",
    notes: "",
  });

  const [err, setErr] = useState("");

  const selectedService = useMemo(() => {
    return ALL_SERVICES.find((s) => s.name === f.serviceName) || null;
  }, [f.serviceName]);

  const submit = () => {
    if (!f.name.trim()) return setErr("Please enter your name.");
    if (!f.phone.trim()) return setErr("Please enter your phone number.");
    if (!f.serviceName) return setErr("Please choose a service.");

    setErr("");

    const dateText =
      f.dateOption === "today"
        ? "Today"
        : f.dateOption === "tomorrow"
        ? "Tomorrow"
        : f.customDate || "Flexible date";

    const timeText =
      f.timeSlot === "morning"
        ? "Morning (8:00 AM – 12:00 PM)"
        : f.timeSlot === "afternoon"
        ? "Afternoon (12:00 PM – 4:00 PM)"
        : f.timeSlot === "evening"
        ? "Evening (4:00 PM – 9:00 PM)"
        : f.customTime || "Flexible time";

    const msg = [
      `Hello Righteous Salon, I would like to book an appointment.`,
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone.trim()}`,
      `Service: ${f.serviceName}`,
      selectedService ? `Approx. Duration: ${selectedService.time}` : null,
      `Preferred date: ${dateText}`,
      `Preferred time: ${timeText}`,
      f.notes.trim() ? `Notes: ${f.notes.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(msg), "_blank", "noopener");
    onDone?.();
  };

  const inputStyle =
    "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder-slate-400 focus:border-sapphire focus:ring-1 focus:ring-sapphire focus:outline-none transition duration-150";

  return (
    <div className="space-y-4 text-sm font-medium">
      {/* Service Selection */}
      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
          Service <span className="text-red-500">*</span>
        </label>
        <select
          value={f.serviceName}
          onChange={(e) => setF({ ...f, serviceName: e.target.value })}
          className={`${inputStyle} cursor-pointer`}
        >
          <option value="">Choose a service</option>
          {CATEGORIES.map((cat) => (
            <optgroup key={cat.id} label={cat.label}>
              {cat.items.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} (~{s.time})
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Date Options */}
      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Preferred Date</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["today", "Today"],
            ["tomorrow", "Tomorrow"],
            ["custom", "Choose Date"],
          ].map(([val, label]) => (
            <button
              type="button"
              key={val}
              onClick={() => setF({ ...f, dateOption: val })}
              className={`rounded-xl py-2 text-xs font-bold transition duration-150 border active:scale-95 ${
                f.dateOption === val
                  ? "border-sapphire bg-sapphire text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {f.dateOption === "custom" && (
          <input
            type="date"
            value={f.customDate}
            onChange={(e) => setF({ ...f, customDate: e.target.value })}
            className={`mt-2 ${inputStyle}`}
          />
        )}
      </div>

      {/* Time Slot Options */}
      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Preferred Time</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["morning", "Morning (8am-12pm)"],
            ["afternoon", "Afternoon (12-4pm)"],
            ["evening", "Evening (4-9pm)"],
          ].map(([val, label]) => (
            <button
              type="button"
              key={val}
              onClick={() => setF({ ...f, timeSlot: val })}
              className={`rounded-xl py-2 px-1 text-center text-[11px] font-bold transition duration-150 border active:scale-95 ${
                f.timeSlot === val
                  ? "border-gold bg-gold text-white"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={f.name}
              onChange={(e) => setF({ ...f, name: e.target.value })}
              placeholder="Your name"
              className={`${inputStyle} pl-10`}
              autoComplete="name"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
            <input
              type="tel"
              value={f.phone}
              onChange={(e) => setF({ ...f, phone: e.target.value })}
              placeholder="e.g. 020 324 5658"
              inputMode="tel"
              className={`${inputStyle} pl-10`}
              autoComplete="tel"
            />
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
          Special Notes <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          value={f.notes}
          onChange={(e) => setF({ ...f, notes: e.target.value })}
          placeholder="Any style preferences or requests"
          className={inputStyle}
        />
      </div>

      {err && (
        <p role="alert" className="rounded-lg bg-red-50 p-2.5 text-xs font-bold text-red-600">
          {err}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="button"
        onClick={submit}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-amber active:scale-98"
      >
        <MessageCircle className="h-5 w-5" />
        Send Request on WhatsApp
      </button>

      <p className="text-center text-[11px] text-slate-500">
        Prices are confirmed with you on WhatsApp before your visit.
      </p>
    </div>
  );
}
