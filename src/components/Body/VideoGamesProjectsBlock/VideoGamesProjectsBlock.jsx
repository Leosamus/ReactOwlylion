import React from 'react';
import './VideoGamesProjectsBlock.scss'; 
import HorizontalElementsSection from '../../Templates/HorizontalElementsSection/HorizontalElementsSection';
import HorizontalElement from '../../Templates/HorizontalElementsSection/HorizontalElement/HorizontalElement';

import drateus from 'images/projects/drateus.jpg';
import stardust from 'images/projects/stardust.png';
import { Technologies } from '../../../models/technologies';
import TechnologiesLine from '../../Misc/TechnologiesLine/TechnologiesLine';

class VideoGamesProjectsBlock extends React.Component {
  render() {
    return (
      <div className="app-video-games-projects-block">
        <HorizontalElementsSection title="Mes projets vidéoludique">
          <HorizontalElement title="Drateus" picture={drateus}>
            <p className="content">
              Drateus est un univers post-apocalyptique sur lequel j'écris depuis des années.
              Toute technologie y a disparue et la magie y est réapparu. Concrétiser ce monde
              en diverses expériences numériques est quelque chose qui compte beaucoup pour moi.
            </p>
            <p className="content">
              Je n'ai produit aucun contenu vidéoludique sur l'univers de Drateus, pour l'instant.
              Les projets que je peux imaginer me semblent, pour l'instant, trop gros pour moi.
            </p>
          </HorizontalElement>
          <HorizontalElement title="Stardust UML" picture={stardust}>
            <p className="content">
              Jeu réalisé dans le contexte de la CodeGameJam 2018 à l'IUT de Montpellier, 
              qui portait le thème de "l'informatique dans l'espace". 
              Nous sommes parti de l'idée suivante : "Dieu est une machine."
            </p>
            <p className="content">
              Il a été développé sur Unity. Il s'agit d'un petit jeu de gestion où le but 
              est d'atteindre une population maximum en terraformant une planète.
            </p>
            <TechnologiesLine title="Technologies utilisées" technologies={[Technologies.Unity, Technologies.Csharp]}/>
          </HorizontalElement>
        </HorizontalElementsSection>
      </div>
    )
  }
}

export default VideoGamesProjectsBlock;
