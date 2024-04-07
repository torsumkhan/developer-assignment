import React from "react";
import Card from "../Card/Card";

const CardContainer = ({ teamData, openTeamModal }) => {
  return (
    <div className="card-container">
      {teamData.map((member) => (
        <Card
          key={member.name}
          designation={member.designation}
          name={member.name}
          title={member.title}
          headshot={member.headshot}
          openTeamModal={() => openTeamModal(member)}
        />
      ))}
    </div>
  );
};

export default CardContainer;
