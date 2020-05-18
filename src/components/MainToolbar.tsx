import { IonSearchbar, IonButtons, IonInput, IonItem, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MainToolbar.css';
import { searchOutline, searchSharp, archiveOutline, archiveSharp,  heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import MainToolbarItems from './MainToolbarItems';

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
    }
];

const connexion: AppPage = {
    title: 'Connexion',
    url: '/page/Connexion',
    iosIcon: searchOutline,
    mdIcon: searchSharp
}

const MainToolbar: React.FC = () => {

    const [text, setText] = useState<string>();
    const [searchText, setSearchText] = useState('');
    const location = useLocation();


    return (

        <div >
            <IonGrid  >
                <IonRow>
                    <IonCol>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonMenuButton />
                            </IonButtons>
                            <IonTitle>Goù</IonTitle>
                        </IonToolbar>
                    </IonCol>

                    {/* <MainToolbarItems /> */}

                    {appPages.map((appPage, index) => {
                        return (
                            <IonCol className="MainToolbarItems">
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''}
                                 routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonCol>
                        );
                    })}

                    <IonCol >
                        <IonItem lines="none">
                            <IonInput value={text}
                             placeholder="Recherche"
                             onIonChange={e => setText(e.detail.value!)}>
                            </IonInput>
                            <IonIcon slot="end" icon={connexion.iosIcon} />
                            {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="always"></IonSearchbar> */}
                        </IonItem>
                    </IonCol>

                    <IonCol>
                        <IonItem
                            routerLink={connexion.url}
                            routerDirection="none"
                            lines="none"
                            detail={false}>
                            <IonLabel>{connexion.title}</IonLabel>
                        </IonItem>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </div>

    );

};

export default MainToolbar;

