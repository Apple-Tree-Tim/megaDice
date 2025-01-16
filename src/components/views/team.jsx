import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "John Abraham",
    role: "Head of Marketing",
    image: "assets/images/team/team-1.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Robert Philips",
    role: "Chef Executive",
    image: "assets/images/team/team-2.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Sandra Irvin",
    role: "HR Manager",
    image: "assets/images/team/team-3.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "assets/images/team/team-4.png",
    social: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Emily Carter",
    role: "Product Manager",
    image: "assets/images/team/team-1.png",
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
        <div className="text-center pb-20">
          <h5 className="dreamit-section-sub-title">OUR TEAM</h5>
          <h1 className="dreamit-section-main-title">Meet Our Expert Team</h1>
        </div>
        <div className="row">
          {teamMembers.map(({ id, name, role, image, social }) => (
            <div key={id} className="col-lg-4 col-md-6">
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
        </div>
      </div>
    </section>
  );
};

export default Team;
