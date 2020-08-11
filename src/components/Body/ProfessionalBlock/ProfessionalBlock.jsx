import React from 'react';
import './ProfessionalBlock.scss'; 
import HorizontalElementsSection from '../../Templates/HorizontalElementsSection/HorizontalElementsSection';
import HorizontalElement from '../../Templates/HorizontalElementsSection/HorizontalElement/HorizontalElement';

import jvweb from 'images/pro/jvweb.png';
import zappiti from 'images/pro/zappiti.png';
import TechnologiesLine from '../../Misc/TechnologiesLine/TechnologiesLine';
import { Technologies } from '../../../models/technologies';

class ProfessionalBlock extends React.Component {
  render() {
    return (
      <div className="app-professional-block">
        <HorizontalElementsSection title="Mes expériences professionnelles">
          <HorizontalElement title="JVWEB" subtitle="Développeur R&D - Nov 2019 / Maintenant" picture={jvweb}>
            <p className="content">
              JVWEB est une agence de web marketing qui arrive à se différencier des autres 
              par la qualité de ses prestations et par ses interventions personnalisées grâce 
              à des scripts faits maison, permettant d'optimiser les comptes SEA et SMA de ses clients.
            </p>
            <p className="content">
              Mon poste chez JVWEB m'a permis de développer mes compétences sur les technologies 
              dans lesquelles je me suis spécialisé. J'ai pu apprendre à travailler avec une 
              plus grosse équipe que dans ma précédente entreprise. J'ai également découvert comment 
              analyser les besoins de mes collaborateurs et comment leur apporter des solutions. 
              Scripts personnalisés, outils divers, etc...
            </p>
            <TechnologiesLine title="Technologies utilisées" 
              technologies={[Technologies.Angular, Technologies.Csharp, Technologies.Azure ]}/>
          </HorizontalElement>
          <HorizontalElement title="Zappiti" subtitle="Analyste programmeur Unity / .NET - Fev 2019 / Nov 2019" picture={zappiti}>
            <p className="content">
              Mon poste chez Zappiti fût une expérience très enrichissante. 
              Dû au petit effectif de l'équipe de développement, 
              j'ai dû faire preuve de polyvalence ce qui m'a permis de gagner 
              en expérience sur diverses technologies.
            </p>
            <TechnologiesLine title="Technologies utilisées" 
              technologies={[Technologies.Angular, Technologies.Csharp, Technologies.Unity, Technologies.Azure]}/>
          </HorizontalElement>
        </HorizontalElementsSection>
      </div>
    )
  }
}

export default ProfessionalBlock;
