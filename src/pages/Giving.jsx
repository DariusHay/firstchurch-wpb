import PageHero from "../components/PageHero";

export default function Giving() {
  return (
    <>
      <PageHero
        eyebrow="Support the Ministry"
        title="Giving"
        subtitle="Thank you for helping us serve the community and share the Gospel."
      />

      <div className="container-default section grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h2 className="h-section text-fcPurple">Ways to Give</h2>
          <p className="mt-3 text-slate-700">
            Thank you for supporting the ministry of First Church of God in Christ (WPB).
          </p>

          <ul className="mt-4 list-disc list-inside text-slate-700 space-y-2">
            <li><b>Givelify:</b> First Church of God in Christ WPB</li>
            <li><b>Cash App:</b> $FirstChurchWPB</li>
            <li><b>Zelle:</b> Firstchurchwpb@gmail.com</li>
          </ul>
        </div>

        <div className="card p-6 bg-fcCream">
          <div className="font-bold text-fcPurple">Scripture</div>
          <p className="mt-3 text-slate-700">
            “God loves a cheerful giver.” — 2 Corinthians 9:7
          </p>
          <div className="mt-6 p-4 rounded-xl bg-white border">
            <div className="font-bold text-fcPurple">Need help giving?</div>
            <p className="mt-2 text-slate-700">Contact us and we’ll guide you through the giving options.</p>
          </div>
        </div> 
      </div>
    </>
  );
}
