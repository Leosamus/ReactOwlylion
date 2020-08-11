import React from 'react';
import './ReferencesBlock.scss'; 
import GridElementsSection from '../../Templates/GridElementsSection/GridElementsSection';
import GridElement from '../../Templates/GridElementsSection/GridElement/GridElement';

import gamersbrain from 'images/references/gamers_brain.jpg';
import artofgamedesign from 'images/references/art_of_game_design.jpg';
import cleancode from 'images/references/clean_code.jpg';

class ReferencesBlock extends React.Component {
  render() {
    return (
      <div className="app-references-block" id="references">
        <GridElementsSection title="Mes références" columns="3">
          <GridElement title="The Gamer's Brain" subtitle="de Celia Hodent" picture={gamersbrain}>
            <p className="content">
              Ce livre est certainement le livre le plus important pour moi. Il m'a fait changer de regard
              sur les interaction homme-machine et sur la manière de concevoir un logiciel, que ce soit
              un logiciel SaaS, un client lourd, ou un jeu-vidéo. La User Experience est devenue primordiale
              dans ma vie grâce à ce livre.
            </p>
          </GridElement>
          <GridElement title="The Art of Game Desing" subtitle="de Jesse Schell" picture={artofgamedesign}>
            <p className="content">
              Celui-ci fût mon premier livre traitant du jeu-vidéo. Grâce à celui-ci, j'ai pu apprendre les bases du Game Design 
              ainsi que l'auto-critique sur ses créations.
            </p>
          </GridElement>
          <GridElement title="Clean Code" subtitle="Robert C. Martin" picture={cleancode}>
            <p className="content">
              Comment puis-je travailler sur du développement avec quelqu'un sans employer le terme de Clean Code ?
              Ce livre a toujours guidé mes pratiques concernant le code. En passant 2min à respecter certaines règles, 
              on fait gagner 1h à la prochaine personne qui passera derrière nous. Clean Architecture, du même auteur,
              guide encore plus ma façon de travailler.
            </p>
          </GridElement>
        </GridElementsSection>
      </div>
    )
  }
}

export default ReferencesBlock;
