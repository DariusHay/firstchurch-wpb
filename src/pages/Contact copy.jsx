import PageHero from "../components/PageHero";
import facebook from "../assets/logos/Facebook_logo.png";
import instagram from "../assets/logos/Instagram_logo.png";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => {
      setSubmitted(false);
      formRef.current?.reset();
    }, 5000);
    return () => clearTimeout(t);
  }, [submitted]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
    } catch (err) {
      alert("Message failed to send. Please try again.");
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="We’d love to hear from you." />

      <div className="container-default section grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="h-section text-fcPurple">Contact Information</h2>
          <p className="mt-3 text-slate-700">
            <b>Address:</b> 610 14th Street, West Palm Beach, FL 33401<br />
            <b>Phone:</b> (561) 331-1531<br />
            <b>Email:</b> firstchurchwpb@gmail.com
          </p>

          <div className="mt-6">
            <h3 className="font-bold text-fcPurple mb-2">Connect With Us On Social Media</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61574645468625" target="_blank" className="text-fcGold hover:opacity-80">
                <img src={facebook} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/firstcogicwpb?fbclid=IwY2xjawPuVLlleHRuA2FlbQIxMABicmlkETA1OG1JZjVmMFpUQm1LTDZuc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjIIMNeq1MpvnVYahaelkxusN9x1VUYk19cgVEU1poqAnx8NyFbWW_QBCzY6_aem_pDblosABqhUEbFxqKpTp7w" target="_blank" className="text-fcGold hover:opacity-80">
                <img src={instagram} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>

        </div>

        <div className="card overflow-hidden">
          <iframe
            title="map"
            className="w-full h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=610%2014th%20Street%20West%20Palm%20Beach%20FL%2033401&output=embed"
          />
        </div>
      </div>
      {/* FORM */}
      {!submitted ? (
        <form ref={formRef} onSubmit={onSubmit} className="card p-7 space-y-4 max-w-xl mx-auto">
          <h2 className="text-xl font-extrabold text-fcPurple">Send a Message</h2>

          <input className="w-full border rounded p-3" name="name" placeholder="Name" required />
          <input className="w-full border rounded p-3" type="email" name="email" placeholder="Email" required />
          <input className="w-full border rounded p-3" name="phone" placeholder="Phone (optional)" />
          <textarea className="w-full border rounded p-3" rows="5" name="message" placeholder="Message or Prayer Request" required />

          <button className="btn-gold w-full" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>

          <p className="text-sm text-slate-500">
            By submitting, you agree to be contacted by the church.
          </p>
        </form>
      ) : (
        <div className="card p-7 bg-green-50 text-green-800">
          <h2 className="text-xl font-extrabold">Thank you!</h2>
          <p className="mt-2">Your message has been delivered successfully.</p>
          <p className="mt-4 text-sm italic">This form will reset automatically in 5 seconds…</p>
        </div>
      )}

    </>
  );
}
