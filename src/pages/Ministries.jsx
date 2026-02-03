import PageHero from "../components/PageHero";

const ministries = [
  { title: "Men’s Ministry (Brotherhood)", desc: "Empowering men to grow in Christ, serve their families, and impact their communities." },
  { title: "Women’s Ministry (Department of Women)", desc: "Equipping women to live with purpose, holiness, and strength through teaching, fellowship, and service." },
  { title: "Christian Education Department", desc: "Transforming lives through sound doctrine in Sunday School, Bible Study, and discipleship programs." },
  { title: "Youth & Young Adult Ministries", desc: "Forming future leaders in faith, character, and service through teaching and mentorship." },
  { title: "Music & Worship Arts Ministry", desc: "Leading the congregation into God’s presence through anointed worship (John 4:24)." },
  { title: "Community Outreach & Social Services", desc: "Being the hands and feet of Jesus—providing resources, hope, and support to families in need." },
];

export default function Ministries() {
  return (
    <>
      <PageHero
        eyebrow="There’s Room For You"
        title="Ministries"
        subtitle="Every soul has a place to grow, serve, and glorify God."
      />

      <div className="container-default section">
        <div className="grid md:grid-cols-2 gap-6">
          {ministries.map((m) => (
            <div key={m.title} className="card p-6">
              <h3 className="text-xl font-bold text-fcPurple">{m.title}</h3>
              <p className="mt-2 text-slate-700">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
