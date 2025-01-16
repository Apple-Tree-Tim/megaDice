import React from "react";
import Marquee from "react-fast-marquee"; // Ensure you have this installed: `npm install react-fast-marquee`

const teamMembers = [
  {
    id: 1,
    name: "Raven - X",
    role: "CEO",
    image: "assets/images/team/team1.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Hawk - 9",
    role: "Developer",
    image: "assets/images/team/team2.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Wise Man",
    role: "Game Developer",
    image: "assets/images/team/team3.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Lily - 3",
    role: "Developer",
    image: "assets/images/team/team4.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Water Lily - Y",
    role: "Financial Expert",
    image: "assets/images/team/team5.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

const Team = () => {
  return (
    <section className="team-section pt-80 pb-80">
      <div className="container">
        <div className="row" style={{marginBottom: "30px"}}>
          <div className="col-lg-12">
            <div className="dreamit-section-title text-center pb-20">
              <div className="dreamit-section-sub-title">
                <h5>OUR TEAM</h5>
              </div>
              <div className="dreamit-section-main-title">
                <h1>Meet Our Expert Team</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Marquee effect */}
        <Marquee gradient={false} speed={40}>
          {teamMembers.map(({ id, name, role, image, social }) => (
            <div
              key={id}
              style={{ margin: "0px 20px" }}
            >
              <div className="single-team-box">
                <div className="team-thumb">
                  <img
                    src={image || "assets/images/default-team.png"}
                    alt={`Portrait of ${name}, ${role}`}
                  />
                  <div className="team-social-icon">
                    <ul>
                      {Object.entries(social).map(
                        ([platform, link]) =>
                          link && (
                            <li key={platform}>
                              <a
                                href={link}
                                aria-label={`Visit ${name}'s ${platform}`}
                              >
                                <i className={`fab fa-${platform}`}></i>
                              </a>
                            </li>
                          )
                      )}
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h3>{name}</h3>
                  <span>{role}</span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Team;
