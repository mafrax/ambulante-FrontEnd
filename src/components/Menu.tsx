import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp
  } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'La carte des producteurs',
    url: '/page/La carte des producteurs',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Les producteurs',
    url: '/page/Les producteurs',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Les produits',
    url: '/page/Les produits',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Qu\'est ce Goù ?',
    url: '/page/Qu\'est ce Goù ?',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Connexion',
    url: '/page/Connexion',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" className="menuClass">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Goù</IonListHeader>
          <IonNote>Nos petits producteurs</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
