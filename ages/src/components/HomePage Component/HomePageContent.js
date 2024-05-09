import React from "react";
import ExecutiveSummaryRow from "./ExecutiveSummaryRow";
import HomePagePictureRow from "./HomePagesPictureRow";
import GoalsRow from "./GoalsRow";
import KeyFeaturesRow from "./KeyFeatures";
import ConclusionRow from "./ConclusionRow";
import IconsCardRow from "./IconsCardRow";
import AufbauRow from "./AufbauRow";
import ClientRow from "./ClientRow";
import PersonCardsRow from "./PersonCardsRow";
import StartExamButton from "../StartExam Component/StartExamButton"

const Content = () => {

  return (
    <div>
      <HomePagePictureRow />

      <StartExamButton />

      <ExecutiveSummaryRow />

      <GoalsRow />

      <KeyFeaturesRow />

      <ConclusionRow />

      <IconsCardRow />

      <AufbauRow />

      <ClientRow />

      <PersonCardsRow />
    </div>
  );
};

export default Content;
