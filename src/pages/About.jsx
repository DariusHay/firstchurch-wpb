import PageHero from "../components/PageHero";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About First Church"
        subtitle="A historic Church of God in Christ congregation serving West Palm Beach since 1924."
      />

      <div className="container-default section grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="h-section text-fcPurple">Our Story</h2>
          <p className="mt-3 text-slate-700">
            First Church of God in Christ began in 1924 as believers gathered for prayer at the home of Sister Ella Nottage Perry.
            As the congregation grew, the church was officially organized by Bishop A.M. Cohen, and the ministry expanded with a heart to
            “BRING THEM IN” through prayer, revival, and outreach.
          </p>
          <p className="mt-3 text-slate-700">
            After storms and relocation, the church established its present site at 610 14th Street, West Palm Beach, Florida.
            Today, First Church continues its mission of evangelism, discipleship, and community impact.
          </p>

          <h2 className="h-section text-fcPurple mt-10">Mission</h2>
          <p className="mt-3 text-slate-700">
            Our mission is to build a Christ-centered, Spirit-filled, and community-focused congregation that transforms lives through the Gospel,
            discipleship, and love—spreading the good news of Jesus Christ, empowering believers, and serving local needs.
          </p>

          <h2 className="h-section text-fcPurple mt-10">Vision</h2>
          <p className="mt-3 text-slate-700">
            We envision believers grounded in the Word and filled with the Holy Spirit, growing through discipleship and Bible study.
            We also envision a church that is a beacon of hope—addressing poverty, education, homelessness, and spiritual brokenness through outreach and partnerships.
          </p>
        </div>

        <div className="card p-6">
          <div className="h-eyebrow text-slate-600">Quick Info</div>
          <div className="mt-3 text-slate-700">

            <div className="font-bold text-fcPurple mt-4">Phone</div>
            <div>(561) 331-1531</div>

            <div className="font-bold text-fcPurple mt-4">Email</div>
            <div>firstchurchwpb@gmail.com</div>
            <div className="font-bold text-fcPurple">Address</div> 
            <div>610 14th Street, West Palm Beach, FL 33401</div>
            <iframe
            title="map"
            className="w-full h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=610%2014th%20Street%20West%20Palm%20Beach%20FL%2033401&output=embed"
          />
          </div>
        </div>
      </div>
    </>
  );
}
