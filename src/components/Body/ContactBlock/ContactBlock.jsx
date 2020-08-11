import React from 'react';
import './ContactBlock.scss'; 
import SiteSection from '../../Templates/SiteSection/SiteSection';

class ContactBlock extends React.Component {
  render() {
    return (
      <div className="app-contact-block">
        <SiteSection title="Me contacter">
          <h3>
            Une mission, un projet à concevoir, des questions techniques, etc... ?
          </h3>
          <p className="content">
            Discutons et trouvons des solutions correspondantes à vos besoins.
          </p>
          <p className="content">
            N'hésitez pas à me contacter sur <a href="mailto:hylian.mesmoudi@gmail.com">hylian.mesmoudi@gmail.com</a>
          </p>
        </SiteSection>
      </div>
    )
  }
}

export default ContactBlock;
