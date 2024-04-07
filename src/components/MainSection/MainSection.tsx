import React, { useState } from "react";
import teamData from "../../bioData.json";
import CardContainer from "../CardContainer/CardContainer";
import TeamModal from "../TeamModal/TeamModal";

const teams = teamData.team as unknown as TeamMember[];

export interface TeamMember {
  name: string;
  title: string;
  designation?: string;
  number: string;
  email: string;
  linkedin: string;
  headshot: string;
  bio: string;
}

const MainSection: React.FC = () => {
  const [teamModalIsOpen, setTeamModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const openTeamModal = (member: TeamMember) => {
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
      <CardContainer teamData={teams} openTeamModal={openTeamModal} />
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
