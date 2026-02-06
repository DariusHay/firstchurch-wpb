import { Link } from "react-router-dom";
import pastor from "../assets/Pastor.jpg";
import firstLady from "../assets/First_Lady.jpg";
import churchMother from "../assets/Church_Mother.jpg";
import PageHero from "../components/PageHero";

import slide1 from "../assets/logo.png";
import slide2 from "../assets/First-Lady-and-Pastor.jpg";
import slide3 from "../assets/Pastor_2.jpg";
import slide4 from "../assets/First_Lady.jpg";
import slide5 from "../assets/Church_Mother.jpg";
import slide6 from "../assets/Pastor.jpg";

export default function Leaders() {
    return (
        <>

            <PageHero
                eyebrow="Our Leadership"
                title="Meet Our Leaders"
                subtitle="Godly leadership serving with love, wisdom, and vision."
            />

            <section>
                <div className="container-default section">
                    <div className="text-center">
                        <div className="h-eyebrow text-slate-600">Our Leaders</div>
                        <h2 className="h-section text-fcPurple mt-2">Elder Deandre J. Poole, Ph.D. & First Lady Stephanie O. Poole, DVM</h2>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                        <div className="card">
                            <img className="card-img" src={slide6} alt="Pastor" style={{ objectPosition: "center 15%" }} />
                            <div className="p-5">
                                <div className="font-bold text-fcPurple">Elder Deandre J. Poole, Ph.D.</div>
                                <p className="mt-2 text-sm text-slate-700">Senior Pastor</p>
                            </div>
                            <div className="pb-3 text-center">
                                <Link to={`/leaders/pastor`} className="btn-gold inline-flex">
                                    Read Bio
                                </Link>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img" src={slide4} alt="First Lady" style={{ objectPosition: "center 29%" }} />
                            <div className="p-5">
                                <div className="font-bold text-fcPurple">First Lady Stephanie O. Poole, DVM</div>
                                <p className="mt-2 text-sm text-slate-700">Evangelist Missionary</p>
                            </div>
                            <div className="pb-3 text-center">
                                <Link to={`/leaders/first-lady`} className="btn-gold inline-flex">
                                    Read Bio
                                </Link>
                            </div>
                        </div>

                        <div className="card">
                            <img className="card-img" src={slide5} alt="Church Mother" style={{ objectPosition: "center 15%" }} />
                            <div className="p-5">
                                <div className="font-bold text-fcPurple">Evangelist Patricia Moorer, M.S.</div>
                                <p className="mt-2 text-sm text-slate-700">Church Mother</p>
                            </div>
                            <div className="pb-3 text-center">
                                <Link to={`/leaders/church-mother`} className="btn-gold inline-flex">
                                    Read Bio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
