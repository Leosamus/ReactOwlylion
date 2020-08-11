import React from 'react';
import './SeriousProjectsBlock.scss'; 
import HorizontalElementsSection from '../../Templates/HorizontalElementsSection/HorizontalElementsSection';
import HorizontalElement from '../../Templates/HorizontalElementsSection/HorizontalElement/HorizontalElement';

import bulbio from 'images/projects/bulb_logo.png';
import owlyvote from 'images/projects/owlyvote.png';
import { Technologies } from '../../../models/technologies';
import TechnologiesLine from '../../Misc/TechnologiesLine/TechnologiesLine';

class SeriousProjectsBlock extends React.Component {
  render() {
    return (
      <div className="app-serious-projects-block">
        <HorizontalElementsSection title="Mes autres projets">
          <HorizontalElement title="Bulb.io" picture={bulbio}>
            <p className="content">
              Bulb.io est une idée qui a emérgé de ma tête il y a quelques années. 
              Il s'agit d'un réseau social à idée, permettant à tout le monde de partager ses idées et de trouver des personnes 
              compétentes et/ou passionnées pour aider les réaliser. Depuis quelques temps, 
              je me suis penché plus sérieusement dessus afin de rendre ce projet concret.
            </p>
            <p className="content">
              Ce projet me sert en partie de tremplin technologique et technique. Grâce à sa mise en oeuvre, 
              j'ai pu apprendre à scinder une application en microservices.
            </p>
            <TechnologiesLine title="Technologies utilisées" technologies={[Technologies.Angular, Technologies.Csharp]}/>
          </HorizontalElement>
          <HorizontalElement title="Owlyvote" subtitle="Octobre 2017 - Février 2018" picture={owlyvote}>
            <p className="content">
              Owlyvote est un système de vote du public pour les concours. Il permet au spectateur 
              d'un concours de voter, depuis son smartphone, pour ses participants préférés.
            </p>
            <p className="content">
              Ce projet nous a été confié par Dr. Antoine Chollet, enseignant-chercheur à l'IUT de Montpellier 
              et président de l'association Yumeji, comme projet de semestre 3 de DUT informatique.
              Il était destiné à être le nouveau système de vote utilisé par l'association lors de ses concours de cosplay.
            </p>
            <p className="content">
              Le projet a été continué dans un cadre post-scolaire mais a du être abandonné suite à des 
              conflits internes à l'association.
            </p>
            <TechnologiesLine title="Technologies utilisées" technologies={[Technologies.Php, Technologies.Js]}/>
          </HorizontalElement>
        </HorizontalElementsSection>
      </div>
    )
  }
}

export default SeriousProjectsBlock;
