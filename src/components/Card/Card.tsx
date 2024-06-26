import React from "react";
import "./Card.css";
import { ReactComponent as Arrow } from "../../_assets/_Icons/Next.svg";

interface CardProps {
  name: string;
  title: string;
  headshot: string;
  designation?: string;
  openTeamModal: () => void;
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  headshot,
  designation,
  openTeamModal,
}) => {
  const handleClick = () => {
    openTeamModal();
  };

  return (
    <>
      <div className="card-body" onClick={handleClick}>
        <img src={headshot} className="team-image" />
        <div className="title-container">
          <h4 className="team-title">
            <a className="team-title-link">
              {designation ? `${name}, ${designation}` : name}
            </a>
          </h4>
          <div className="card-arrow">
            <Arrow />
          </div>
        </div>
        <p className="team-link">{title}</p>
      </div>
    </>
  );
};

export default Card;
