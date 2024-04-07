import React, { useState } from "react";
import "./TeamModal.css";
import { ReactComponent as PhoneIcon } from "../../_assets/_Icons/Vector.svg";
import { ReactComponent as LinkedInIcon } from "../../_assets/_Icons/linkedin_2.svg";
import { ReactComponent as EmailIcon } from "../../_assets/_Icons/mail_2.svg";
import { ReactComponent as CloseButtonIcon } from "../../_assets/_Icons/X.svg";
import { ReactComponent as PreviousIcon } from "../../_assets/_Icons/Previous.svg";
import { ReactComponent as NextIcon } from "../../_assets/_Icons/Next.svg";
import { TeamMember } from "../MainSection/MainSection";

interface TeamModalProps {
  closeTeamModal: () => void;
  isOpen: boolean;
  teamMember: TeamMember | null;
}

const TeamModal: React.FC<TeamModalProps> = ({
  closeTeamModal,
  isOpen,
  teamMember,
}) => {
  if (!isOpen || !teamMember) {
    return null;
  }

  const sentences = teamMember.bio.split(/(?<=[.?!])\s+(?=[A-Z])/);

  const bioParagraphs: string[] = [];
  let currentParagraph = "";

  sentences.forEach((sentence, index) => {
    currentParagraph += sentence + " ";
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
            <img src={teamMember.headshot} alt="Team member headshot" />
          </div>
          <div className="team-member-details-section">
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
                    <PhoneIcon />
                  </span>
                  {teamMember.number}
                </a>
                <a
                  className="contact-icons"
                  href={`mailto:${teamMember.email}`}
                >
                  <span>
                    <EmailIcon />
                  </span>
                  Email Me
                </a>
                <a className="contact-icons" href={teamMember.linkedin}>
                  <span>
                    <LinkedInIcon />
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
                    <PreviousIcon />
                  </span>
                  Previous
                </a>
              </div>
              <div className="prev-btn">
                <a>
                  Next
                  <span className="next">
                    <NextIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <button className="close-modal" onClick={closeTeamModal}>
            <CloseButtonIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
