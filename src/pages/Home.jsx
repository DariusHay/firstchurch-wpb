import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSlideshow from "../components/HeroSlideshow";

// Background slides in the EXACT order you requested:
import slide1 from "../assets/logo.png";
import slide2 from "../assets/First-Lady-and-Pastor.jpg";
import slide3 from "../assets/Pastor_2.jpg";
import slide4 from "../assets/First_Lady.jpg";
import slide5 from "../assets/Church_Mother.jpg";
import slide6 from "../assets/Pastor.jpg";

import church_time from "../assets/church_time.jpg";
import christ_community from "../assets/christ_community.jpg";
import give from "../assets/give.jpg";

// Foreground logo for the hero (if you want it on top as well)
import logo from "../assets/logo.png";
import { s } from "framer-motion/client";

const HERO_SRC =
  "https://unsplash.com/photos/jBI220z-cU4/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8U2FsdmF0aW9ufGVufDB8fHx8MTc1OTM0NzIyM3ww&force=true";

const HERO_IMAGES = [
  { src: slide1, pos: "center 35%", mobilePos: "center 35%", zoom: 0.95 },
  { src: slide2, pos: "center 5%", mobilePos: "center 20%", zoom: 1.05 },
  // { src: slide3, pos: "center 22%", mobilePos: "center 18%", zoom: 1.05 },
  // { src: slide4, pos: "center 22%", mobilePos: "center 18%", zoom: 1.05 },
  // { src: slide5, pos: "center 18%", mobilePos: "center 15%", zoom: 1.05 },
  { src: HERO_SRC, pos: "0% 20%" }, // default starting point
  { src: slide6, pos: "center 20%", mobilePos: "center 18%", zoom: 1.05 },
];

export default function Home() {
  return (
    <>
      {/* HERO SLIDESHOW + GLAZE */}
      <HeroSlideshow
        images={HERO_IMAGES}
        interval={6500}
        // glaze overlay – adjust opacity: /45 lighter, /70 darker
        overlayOpacityClass="bg-fcPurple/60"
        className=""
      >
        <div className="container-default min-h-[65vh] flex flex-col items-center justify-center text-center py-10">
          {/* Foreground logo (optional, but usually looks great) */}
          <img
            src={logo}
            alt="Church Logo"
            className="h-24 sm:h-28 md:h-36 w-auto mb-4"
          />

          <h1 className="h-hero">
            First Church of God in Christ
          </h1>

          <p className="mt-3 text-lg max-w-3xl mx-auto text-white">
            A place to <span className="text-fcGold font-semibold">worship</span>,
            <span className="text-fcGold font-semibold"> grow</span>, and
            <span className="text-fcGold font-semibold"> serve</span> together—building faith and community together.
          </p>


          {/* <h1 className="h-hero">First Church of God in Christ</h1>

          <p className="mt-3 text-base sm:text-lg max-w-3xl text-white/90">
            A place to worship, grow, and serve—building faith and community together.
          </p> */}

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="btn-gold">
              Plan Your Visit
            </Link>
            <Link to="/events" className="btn-ghost-light">
              Events
            </Link>
          </div>

          {/* space under buttons (always) */}
          <div className="h-10" />
        </div>
      </HeroSlideshow>
      {/* Hero */}

      {/* 3 Feature cards (St John vibe) */}
      <section className="container-default section">
        <div className="grid md:grid-cols-3 gap-6">
          {/* <div className="card">
            <div className="p-6">
              <div className="h-eyebrow text-slate-600">Join Us</div>
              <h3 className="mt-2 text-xl font-bold text-fcPurple">Service Times</h3>
              <p className="mt-2 text-slate-700">
                Sunday Morning Worship 9:30 AM<br />
                Midweek Push Wednesdays 7:00 PM (Virtual)<br />
                Morning Prayer Tue/Thu 6:00–6:15 AM (Virtual)
              </p>
              <Link to="/events" className="btn-gold mt-4">View Events</Link>
            </div>
          </div> */}

          <div className="card">
            <img
              src={church_time}
              alt="Service Times"
              className="card-img"
            />

            <div className="p-6">
              <div className="h-eyebrow text-fcGold">Join Us</div>
              <h3 className="text-xl font-extrabold text-fcPurple">
                Service Times
              </h3>
              <p className="mt-2 text-slate-700">
                Sunday Worship • Midweek Bible Study • Morning Prayer
              </p>

              <Link to="/contact" className="btn-gold mt-4 inline-flex">
                Plan a Visit
              </Link>
            </div>
          </div>


          {/* <div className="card">
            <div className="p-6">
              <div className="h-eyebrow text-slate-600">Our Mission</div>
              <h3 className="mt-2 text-xl font-bold text-fcPurple">Christ-Centered Community</h3>
              <p className="mt-2 text-slate-700">
                Building a Christ-centered, Spirit-filled, community-focused congregation that transforms lives.
              </p>
              <Link to="/about" className="btn-gold mt-4">Learn More</Link>
            </div>
          </div> */}

          <div className="card">
            <img
              src={christ_community}
              alt="About us"
              className="card-img"
            />

            <div className="p-6">
              <div className="h-eyebrow text-fcGold">Our Mission</div>
              <h3 className="text-xl font-extrabold text-fcPurple">
                Christ-Centered Community
              </h3>
              <p className="mt-2 text-slate-700">
                Building a Christ-centered, Spirit-filled, community-focused congregation that transforms lives.
              </p>

              <Link to="/about" className="btn-gold mt-4 inline-flex">
                Learn More
              </Link>
            </div>
          </div>

          {/* <div className="card">
            <div className="p-6">
              <div className="h-eyebrow text-slate-600">Give</div>
              <h3 className="mt-2 text-xl font-bold text-fcPurple">Support the Ministry</h3>
              <p className="mt-2 text-slate-700">
                Givelify: First Church of God in Christ WPB<br />
                Cash App: <b>$FirstChurchWPB</b><br />
                Zelle: <b>Firstchurchwpb@gmail.com</b>
              </p>
              <Link to="/giving" className="btn-gold mt-4">Ways to Give</Link>
            </div>
          </div> */}
          <div className="card">
            <img
              src={give}
              alt="Support the Ministry"
              className="card-img"
            />

            <div className="p-6">
              <div className="h-eyebrow text-fcGold">Give</div>
              <h3 className="text-xl font-extrabold text-fcPurple">
                Support the Ministry
              </h3>
              <p className="mt-2 text-slate-700">
                Givelify: <a href="https://www.givelify.com/donate/MTUyMjMwMw==" className="text-blue-600 underline hover:text-blue-800" target="_blank">First Church of God in Christ WPB</a><br />
                Cash App: <a href="https://cash.app/$FirstChurchWPB" className="text-blue-600 underline hover:text-blue-800" target="_blank">$FirstChurchWPB</a><br />
                Zelle: <b>Firstchurchwpb@gmail.com</b>
              </p>

              <Link to="/giving" className="btn-gold mt-4 inline-flex">
                Give Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders strip */}
      <section className="bg-fcCream">
        <div className="container-default section">
          <div className="text-center">
            <div className="h-eyebrow text-slate-600">Our Leaders</div>
            <h2 className="h-section text-fcPurple mt-2">Elder Deandre J. Poole, Ph.D. & First Lady Stephanie O. Poole, DVM</h2>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card">
              <img className="card-img" src={slide6} alt="Pastor" />
              <div className="p-5">
                <div className="font-bold text-fcPurple">Elder Deandre J. Poole, Ph.D.</div>
                <p className="mt-2 text-sm text-slate-700">Senior Pastor</p>
              </div>
            </div>

            <div className="card">
              <img className="card-img" src={slide4} alt="First Lady" />
              <div className="p-5">
                <div className="font-bold text-fcPurple">First Lady Stephanie O. Poole, DVM</div>
                <p className="mt-2 text-sm text-slate-700">Evangelist Missionary</p>
              </div>
            </div>

            <div className="card">
              <img className="card-img" src={slide5} alt="Church Mother" />
              <div className="p-5">
                <div className="font-bold text-fcPurple">Evangelist Patricia Moorer, M.S.</div>
                <p className="mt-2 text-sm text-slate-700">Church Mother</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
