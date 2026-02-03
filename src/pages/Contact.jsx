import PageHero from "../components/PageHero";

export default function Contact() {
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
                Facebook
              </a>
              <a href="https://www.instagram.com/firstcogicwpb?fbclid=IwY2xjawPuVLlleHRuA2FlbQIxMABicmlkETA1OG1JZjVmMFpUQm1LTDZuc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjIIMNeq1MpvnVYahaelkxusN9x1VUYk19cgVEU1poqAnx8NyFbWW_QBCzY6_aem_pDblosABqhUEbFxqKpTp7w" target="_blank" className="text-fcGold hover:opacity-80">
                Instagram
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
      <div className="container-default section">
      <form className="space-y-2 grid max-w-xl mx-auto">
        <input className="w-full border rounded p-3" placeholder="Name" />
        <input className="w-full border rounded p-3" placeholder="Email" />
        <textarea className="w-full border rounded p-3" rows="4" placeholder="Message or Prayer Request" />
        <button className="btn-gold">Send Message</button>
      </form>
      </div>

    </>
  );
}
