import { IonButtons, IonInput, IonItem, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getClassName } from '@ionic/react/dist/types/components/utils';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';


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

const MainToolbarItems: React.FC = () => {

    const location = useLocation();

    return (
        <IonCol>
            <IonRow>


                {appPages
                    .map(p => (
                        <IonCol>
                            <IonItem className={location.pathname === p.url ? 'selected' : ''}
                                routerLink={p.url}
                                routerDirection="none"
                                lines="none" detail={false}>
                                <IonIcon slot="start" icon={p.iosIcon} />
                                <IonLabel>{p.title}</IonLabel>
                            </IonItem>
                        </IonCol>
                    ))}

            </IonRow>
        </IonCol>
    );


}

export default MainToolbarItems;