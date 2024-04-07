import React, { useState } from "react";
import "./TeamModal.css";
import phone from "../../_assets/_Icons/Vector.svg";
import linkedin from "../../_assets/_Icons/linkedin_2.svg";
import email from "../../_assets/_Icons/mail_2.svg";
import closeButton from "../../_assets/_Icons/X.svg";
import previous from "../../_assets/_Icons/Previous.svg";
import next from "../../_assets/_Icons/Next.svg";

const TeamModal = ({ teamMember, closeTeamModal }) => {
  const sentences = teamMember.bio.split(/(?<=[.?!])\s+(?=[A-Z])/);

  const bioParagraphs = [];
  let currentParagraph = "";

  sentences.forEach((sentence, index) => {
    currentParagraph += sentence + " ";
    // Add line break after every 4th sentence
    if ((index + 1) % 4 === 0 || index === sentences.length - 1) {
      bioParagraphs.push(currentParagraph.trim());
      currentParagraph = "";
    }
  });

  return (
    <div className="team-modal">
      <div className="overlay">
        <div className="team-modal-body">
          <div className="team-modal-img">
            <img src={teamMember.headshot} />
          </div>
          <div className="team-member-details-section">
            {" "}
            <div className="title-section">
              <h4>
                {teamMember.designation
                  ? `${teamMember.name}, ${teamMember.designation}`
                  : teamMember.name}
              </h4>
              <p>{teamMember.title}</p>
              <div className="contact-details">
                <a className="contact-icons">
                  <span>
                    <img src={phone} />
                  </span>
                  {teamMember.number}
                </a>
                <a className="contact-icons" href={teamMember.email}>
                  <span>
                    <img src={email} />
                  </span>
                  Email Me
                </a>
                <a className="contact-icons" href={teamMember.linkedin}>
                  <span>
                    <img src={linkedin} />
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="team-member-bio">
              {bioParagraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  <br />
                  <br />
                </p>
              ))}
            </div>
            <div className="team-member-prev-next">
              <div className="prev-btn">
                <a>
                  <span className="prev">
                    <img src={previous} />
                  </span>
                  Previous
                </a>
              </div>
              <div className="prev-btn">
                <a>
                  Next
                  <span className="next">
                    <img src={next} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <button className="close-modal" onClick={closeTeamModal}>
            <img src={closeButton} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
