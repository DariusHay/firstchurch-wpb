import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";

const brotherhoodImg = "src/assets/ministries/brotherhood.png"
const womenImg = "src/assets/ministries/women.png"
const educationImg = "src/assets/ministries/education.png"
const youthImg = "src/assets/ministries/youth.png"
const musicImg = "src/assets/ministries/music.png"
const outreachImg = "src/assets/ministries/outreach.png"

const ministries = [
  { title: "Men’s Ministry (Brotherhood)", desc: "Empowering men to grow in Christ, serve their families, and impact their communities.", img: brotherhoodImg },
  { title: "Women’s Ministry (Department of Women)", desc: "Equipping women to live with purpose, holiness, and strength through teaching, fellowship, and service.", img: womenImg },
  { title: "Christian Education Department", desc: "Transforming lives through sound doctrine in Sunday School, Bible Study, and discipleship programs.", img: educationImg },
  { title: "Youth & Young Adult Ministries", desc: "Forming future leaders in faith, character, and service through teaching and mentorship.", img: youthImg },
  { title: "Music & Worship Arts Ministry", desc: "Leading the congregation into God’s presence through anointed worship (John 4:24).", img: musicImg },
  { title: "Community Outreach & Social Services", desc: "Being the hands and feet of Jesus—providing resources, hope, and support to families in need.", img: outreachImg },
];

export default function Ministries() {
  return (
    <>
      <PageHero
        eyebrow="There’s Room For You"
        title="Ministries"
        subtitle="Every soul has a place to grow, serve, and glorify God."
      />

      <h1 className="text-2xl font-bold mt-8 text-center text-fcPurple">Join a Ministry and Grow with Us</h1>
      <div className="container-default section">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <div key={m.name} className="card">
              <img
                src={m.img}
                alt={m.name}
                className="card-img object-cover"
                style={{ objectPosition: "center" }} // ✅ helps avoid cutting heads off
              />
              <div className="p-6">
                <div className="h-eyebrow text-fcGold">{m.title}</div>
                <h3 className="text-xl font-extrabold text-fcPurple">{m.name}</h3>
                <p className="mt-2 text-slate-700">{m.desc}</p>
                <Link to="/contact" className="btn-gold mt-4 inline-flex">
                  Get Involved
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
