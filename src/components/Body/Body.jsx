import React from 'react';
import './Body.scss';
import LandingBlock from './LandingBlock/LandingBlock';
import PresentationBlock from './PresentationBlock/PresentationBlock';
import SeriousProjectsBlock from './SeriousProjectsBlock/SeriousProjectsBlock';
import VideoGamesProjectsBlock from './VideoGamesProjectsBlock/VideoGamesProjectsBlock';
import ProfessionalBlock from './ProfessionalBlock/ProfessionalBlock';
import ReferencesBlock from './ReferencesBlock/ReferencesBlock';
import ToTopButton from '../Misc/ToTopButton/ToTopButton';
import ContactBlock from './ContactBlock/ContactBlock';

class Body extends React.Component {
  render() {
    return (
      <div className="app-body">
        <LandingBlock />
        <PresentationBlock />
        <ProfessionalBlock />
        <VideoGamesProjectsBlock />
        <SeriousProjectsBlock />
        <ReferencesBlock />
        <ContactBlock />

        <ToTopButton />
      </div>
    )
  }
}

export default Body;
