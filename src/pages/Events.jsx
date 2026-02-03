import PageHero from "../components/PageHero";

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Worship With Us"
        title="Events & Service Times"
        subtitle="Weekly gatherings and church life."
      />

      <div className="container-default section">
        <h2 className="h-section text-fcPurple">Weekly & Recurring</h2>
        <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
          <li>Sunday Morning Worship — 9:30 AM</li>
          <li>Midweek Push — Wednesdays 7:00 PM (Virtual)</li>
          <li>Morning Prayer — Tuesdays & Thursdays 6:00–6:15 AM (Virtual)</li>
        </ul>

        <h2 className="h-section text-fcPurple mt-10">Special Events</h2>
        <p className="mt-3 text-slate-700">None at this time.</p>
      </div> 
    </>
  );
}
