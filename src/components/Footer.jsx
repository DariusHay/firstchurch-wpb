export default function Footer() {
  return (
    <footer className="bg-fcPurple text-white mt-16">
      <div className="container-default py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-lg">First Church of God in Christ</div>
          <p className="mt-2 text-white/80">
            “If I be lifted up from the earth, I will draw all men unto me.” — John 12:32
          </p>
        </div>

        <div>
          <div className="font-bold">Location</div>
          <p className="mt-2 text-white/80">
            610 14th Street<br />
            West Palm Beach, FL 33401
          </p>
          <p className="mt-2 text-white/80">(561) 331-1531</p>
        </div>

        <div>
          <div className="font-bold">Connect</div>
          <p className="mt-2 text-white/80">Email: firstchurchwpb@gmail.com</p>
          <p className="mt-2 text-white/80">
            Instagram: @FirstCOGICWPB<br />
            Facebook: First COGIC WPB<br />
            YouTube: FirstCOGICWPB
          </p>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-default py-4 text-sm text-white/70">
          © {new Date().getFullYear()} First Church of God in Christ • All rights reserved
        </div>
      </div>
    </footer>
  );
}
