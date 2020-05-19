import React, { useState } from 'react';
import './ExploreContainer.css';
import { IonToggle, IonInput, IonItem, IonCheckbox, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import { searchOutline, searchSharp, locationOutline, locationSharp } from 'ionicons/icons';
import TopExploreContainer from './TopExplorer/TopExploreContainer';


interface ContainerProps {
  name: string;
}

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}


const connexion: AppPage = {
  title: 'Connexion',
  url: '/page/Connexion',
  iosIcon: locationOutline,
  mdIcon: locationSharp
}


const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const [text, setText] = useState<string>();

  return (
    <IonContent>
      <IonGrid>
        <TopExploreContainer name={name}/>
      </IonGrid>
    </IonContent>

  );
};

export default ExploreContainer;
