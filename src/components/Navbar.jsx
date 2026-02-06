import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; // rename if needed

const items = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/beliefs", label: "What We Believe" },
  { to: "/ministries", label: "Ministries" },
  { to: "/leaders", label: "Leaders" },
  { to: "/events", label: "Events" },
  { to: "/giving", label: "Giving" },
  { to: "/contact", label: "Contact" },
  { to: "/history", label: "History" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    (scrolled ? "nav-link-dark" : "nav-link") + (isActive ? " opacity-100" : "");

  return (
    <header className={`sticky top-0 z-50 ${scrolled ? "bg-white/90 backdrop-blur border-b" : "bg-fcPurple"}`}>
      <div className="container-default py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="First Church logo" className="h-10 w-10 object-contain" />
          <div className={`font-extrabold ${scrolled ? "text-fcPurple" : "text-white"} leading-tight`}>
            First Church COGIC
            <div className={`text-xs font-semibold ${scrolled ? "text-slate-600" : "text-white/80"}`}>
              West Palm Beach, FL
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <NavLink key={it.to} to={it.to} className={linkClass} end>
              {it.label}
            </NavLink>
          ))}
        </nav>


        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? "text-fcInk" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className={`md:hidden ${scrolled ? "bg-white border-b" : "bg-fcPurple"}`}>
          <div className="container-default py-3 grid gap-2">
            {items.map((it) => (
              <NavLink
                key={it.to}
                to={it.to}
                className={linkClass}
                end
                onClick={() => setOpen(false)}
              >
                {it.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
