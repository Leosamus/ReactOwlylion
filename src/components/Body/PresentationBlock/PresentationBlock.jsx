import React from 'react';
import './PresentationBlock.scss';
import SiteSection from '../../Templates/SiteSection/SiteSection';
import TechnologiesLine from '../../Misc/TechnologiesLine/TechnologiesLine';
import { Technologies } from '../../../models/technologies';
import SocialNetworksLine from '../../Misc/SocialNetworksLine/SocialNetworksLine';

class PresentationBlock extends React.Component {
  render() {
    return (
      <div className="app-presentation-block">
        <SiteSection title="Qui suis-je ?" anchor="presentation">
          <p className="content">
            Développeur depuis l'âge de 14 ans, j'ai commencé par créer des petits jeux
            sous RPG Maker VX. J'ai alors acquéri le goût de la création de contenu numérique.
            Jeu-vidéo, site internet, serveur, etc... 
          </p>
          <SocialNetworksLine />
          <p className="content" style={{paddingTop: '12px'}}>
            Autodidacte et très curieux, ma soif d'apprendre est sans limite. Ce site en
            est l'exemple : il a pour bbut de me faire découvrir et monter en compétence sur
            React. J'aime découvrir de nouvelles technologies et de nouvelles manières pratiques.
            De ce fait, je lis tout ce qui me passe par la main et qui concerne un aspect technique
            (<a href="#references">voir mes références</a>).
          </p>
          <p className="content" style={{paddingBottom: '5px'}}>
            Etant passionné de jeu-vidéo, je me suis également beaucoup penché sur
            le Game Design, le Game UX Design, et le prototyping. Je développe, dans mon temps libre,
            des petits jeux sur Unity, en espérant pouvoir un jour présenter un portfolio complet à un studio.
          </p>
          <TechnologiesLine title="Mes technologies principales" technologies={[Technologies.Angular, Technologies.Csharp, Technologies.Azure, Technologies.Unity]}/>
          <TechnologiesLine title="Mes autres technologies" technologies={[Technologies.React]}/>
        </SiteSection>
      </div>
    )
  }
}

export default PresentationBlock;
