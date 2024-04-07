import React, { useState } from "react";
import teamData from "../../bioData.json";
import CardContainer from "../CardContainer/CardContainer";
import TeamModal from "../TeamModal/TeamModal";

const MainSection = () => {
  const [teamModalIsOpen, setTeamModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openTeamModal = (member) => {
    setSelectedMember(member);
    setTeamModalIsOpen(true);
  };

  const closeTeamModal = () => {
    setSelectedMember(null);
    setTeamModalIsOpen(false);
  };

  if (teamModalIsOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <CardContainer teamData={teamData.team} openTeamModal={openTeamModal} />
      {teamModalIsOpen && (
        <TeamModal
          closeTeamModal={closeTeamModal}
          isOpen={teamModalIsOpen}
          teamMember={selectedMember}
        />
      )}
    </>
  );
};

export default MainSection;
