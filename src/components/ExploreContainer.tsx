import React from 'react';
import './ExploreContainer.css';
import { IonToggle, IonInput, IonItem, IonCheckbox, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        
    </div >
  );
};

export default ExploreContainer;
