export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <div className="section-hero">
      <div className="container-default py-10 text-center">
        {eyebrow && <div className="h-eyebrow text-fcGold font-semibold">{eyebrow}</div>} 
        <h1 className="h-hero mt-2">{title}</h1>
        {subtitle && <p className="mt-3 max-w-3xl mx-auto text-fcGold font-semibold">{subtitle}</p>}
      </div>
    </div>
  );
}
