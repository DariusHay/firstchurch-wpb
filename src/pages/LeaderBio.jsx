import { Link, useParams } from "react-router-dom";
import pastor from "../assets/Pastor.jpg";
import firstLady from "../assets/First_Lady.jpg";
import churchMother from "../assets/Church_Mother.jpg";
import PageHero from "../components/PageHero";

const DATA = {
    pastor: {
        name: "Deandre J. Poole, PhD",
        title: "Senior Pastor",
        verse: "“Feed my sheep.” — John 21:17",
        img: pastor,
        body: `Elder Deandre Poole, Ph.D., is a dedicated servant of God, with a profound commitment to ministry, education, and leadership. Raised in Pleasant City, West Palm Beach, FL, Elder Poole's faith journey began at an early age under the guidance of his grandmothers, whose steadfast faith in Jesus Christ left a lasting impact on his life.

Dr. Poole is a highly accomplished academic, holding a Bachelor of Arts in Communication, Rhetoric, and Society, a Master of Arts in Communication, and a Doctor of Philosophy in Communication and Culture from Howard University. His extensive experience spans nearly two decades of teaching at the college level, where he has empowered students to think critically about communication dynamics, leadership, and organizational culture.
Currently, Dr. Poole serves as the Jurisdictional Executive Secretary for the Florida Eastern Ecclesiastical Jurisdiction under Jurisdictional Prelate Bishop Michael E. Hill, Sr., a General Board Member of the Church of God in Christ (COGIC). In this role, he supports the administrative and organizational needs of the jurisdiction, contributing to the advancement of the ministry.

Dr. Poole is also a commissioner for the Port of Palm Beach, where he plays a crucial role in the oversight and strategic planning of one of Florida's key economic hubs. His commitment to service extends to his role as Senior Pastor and Elder at First Church of God in Christ of West Palm Beach, Inc., where he is leading efforts to reopen and revitalize the church community.

As a manuscript-based preacher, Dr. Poole is passionate about thoughtful, intentional preaching that faithfully interprets Scripture. His time in seminary has expanded his perspective, deepened his understanding of theology and enhanced his effectiveness as a minister. Guided by his belief that those who lead in ministry should be educated and trained, Dr. Poole strives to model godly character and integrity both within and beyond the pulpit.
Elder Poole's dedication to holistic ministry is reflected in his commitment to social justice, advocacy for the marginalized, and his desire to see believers grow in their relationship with Christ. He is inspired by the teachings of the Apostle Paul, particularly in the Pastoral Epistles, and seeks to demonstrate the qualities outlined in 1 Timothy 3—blamelessness, faithfulness, hospitality, and self-control.

With a heart for ministry, a love for learning, and a passion for serving God's people, Dr. Poole, continues to make a meaningful impact in this church and the community. He firmly believes in Jeremiah 3:15: 'And I will give you pastors according to mine heart, which shall feed you with knowledge and understanding,' and seeks to embody this calling in his ministry.
`,
    },
    "first-lady": {
        name: "Stephanie O. Poole, DVM",
        title: "First Lady",
        verse: "“She opens her mouth with wisdom.” — Proverbs 31:26",
        img: firstLady,
        body: `First Lady Stephanie O. Poole is a woman of grace, wisdom, and unwavering faith, dedicated to serving God, her family, and the church community. She stands as a pillar of strength and support in the ministry of First Church of God in Christ of West Palm Beach, Inc. With a heart for service, she exemplifies the virtues of a godly woman, embodying love, compassion, and excellence in all that she does.

A licensed Evangelist Missionary in the Church of God in Christ (COGIC), Dr. Poole is deeply committed to spreading the Gospel and nurturing the spiritual growth of those she encounters. She has a passion for teaching, mentoring, and empowering individuals to walk in their divine purpose. Before coming to First Church, she faithfully served as an avid Sunday school teacher and Youth Ministry Leader at New Day Covenant Life COGIC, where she played a pivotal role in shaping the spiritual lives of young people through dynamic teaching, discipleship, and community outreach. Her dedication to outreach is also evident in her involvement in both the prison and street ministries, where she has touched countless lives through compassion, counsel, and the transformative power of God’s Word.

Dr. Poole is a proud graduate of Tuskegee University, where she earned her Bachelor of Science in Animal and Poultry Science before pursuing her lifelong passion for veterinary medicine. She later obtained her Doctor of Veterinary Medicine (DVM) from Tuskegee University College of Veterinary Medicine, one of the nation’s most prestigious historically Black veterinary programs. As a highly skilled veterinarian, she is committed to the care and well-being of animals while also using her platform to educate and inspire others in the field of science and medicine.

A passionate servant leader, Dr. Poole plays a vital role in the spiritual and community life of First Church, fostering an atmosphere of prayer, worship, and fellowship. Her dedication to women’s ministry, family enrichment, and discipleship reflects her desire to see lives transformed by the power of God.

Beyond her ministry work and professional career, Dr. Poole is known for her warm spirit, wisdom, and ability to inspire others to walk in faith and purpose. She is deeply committed to building strong families, promoting spiritual growth, and cultivating a church culture where love, faith, and holiness are at the center.

With a heart devoted to the will of God, Dr. Poole, continues to be a source of encouragement and a beacon of light to all who cross her path. Alongside her husband, she remains steadfast in the mission of First Church, leading with integrity, faith, and an unwavering commitment to the Kingdom of God.
`,
    },
    "church-mother": {
        name: "Evangelist Patricia Moorer, M.S.",
        title: "Church Mother",
        verse: "“Older women… teachers of good things.” — Titus 2:3",
        img: churchMother,
        body: `Evangelist Missionary Moore is a devoted servant of God, a passionate educator, and a pillar in the community with a lifelong commitment to ministry and education. She holds a Bachelor of Science in Sociology with a minor in History from Allen University, a Master’s in Christian Education from the International Teaching Seminary, and a Master’s in Psychology from Atlantic University.

With a heart for nurturing both spiritual and academic growth, Evangelist Missionary Moore dedicated 21 years as a licensed daycare child provider, operating Day and Night Childcare Service to support families in need. Her commitment to education extended to higher learning, where she served as a professor at Bethune-Cookman College’s Belle Glade Campus, teaching New Testament Studies and Introduction to Psychology.

In the Church of God in Christ (COGIC), she has held numerous leadership positions, reflecting her unwavering dedication to the ministry. Her roles include:

Chairman for the Ft. Pierce District

Co-Chairman under Mother Ramsey

President of the Scholarship Programs in the Ft. Pierce District

Evangelist Elect Lady for the Ft. Pierce District

President of the Pastor’s Aid

District Missionary of the Tampa District under Superintendent J.B. Brown

As the Church Mother, Evangelist Missionary Moore continues to be a guiding light, offering wisdom, mentorship, and spiritual leadership to the congregation. Her life’s work embodies faith in action, and she remains committed to uplifting others through education, ministry, and service.
`,
    },
};

export default function LeaderBio() {
    const { slug } = useParams();
    const d = DATA[slug];

    if (!d) {
        return (
            <div className="container-default section">
                <p>Leader not found.</p>
                <Link to="/leaders" className="btn-gold mt-4 inline-flex">Back</Link>
            </div>
        );
    }

    return (
        <>

            <PageHero
                eyebrow={d.title}
                title={d.name}
                subtitle={d.verse}
            />

            <div className="container-default section grid lg:grid-cols-2 gap-8 items-start">
                <div className="card overflow-hidden">
                    <img
                        src={d.img}
                        alt={d.name}
                        className="w-full h-[28rem] object-cover"
                        style={{ objectPosition: "center 10%" }}
                    />
                    <div className="p-4 text-center font-semibold bg-fcGold text-fcInk">
                        {d.verse}
                    </div>
                </div>

                <div className="card p-7">
                    <div className="h-eyebrow text-fcGold">Bio</div>
                    <h2 className="h-section text-fcPurple mt-2">{d.title}</h2>
                    <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
                        {d.body.split("\n\n").map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    <Link to="/leaders" className="btn-gold mt-6 inline-flex">Back to Leaders</Link>
                </div>
            </div>
        </>
    );
}
