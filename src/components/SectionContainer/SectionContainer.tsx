import { Card } from '@chakra-ui/react';

import './SectionContainer.css'
import { ReactNode } from 'react';

interface Props {
  propertiesComponent: ReactNode;
  canvaComponent: ReactNode;
  codeComponent: ReactNode;
}

const SectionContainer = ({ propertiesComponent, canvaComponent, codeComponent } : Props) => {
  return (
    <div className="section-container">
      <Card p={5} className="properties">
        {propertiesComponent}
      </Card>
      <Card p={5} className="canva">
        {canvaComponent}
      </Card>
      <Card p={5} className="code">
        {codeComponent}
      </Card>
    </div>
  );
};

export default SectionContainer;
