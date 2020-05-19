
import React, { useState } from 'react';
import { IonToggle, IonInput, IonItem, IonCheckbox, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import { locationOutline, locationSharp } from 'ionicons/icons';

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

interface ContainerProps {
    name: string;
}


const LeftTopExploreContainer: React.FC<ContainerProps> = ({ name }) => {

    const [text, setText] = useState<string>();

    return (
        <div className="main-page-header">
            <IonTitle >
                Tous vos producteurs près de chez vous
                    </IonTitle>
            <IonItem lines="none" className="input-main-page">
                <IonInput value={text}
                    placeholder="Recherche"
                    onIonChange={e => setText(e.detail.value!)}>
                </IonInput>
                {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="always"></IonSearchbar> */}
                <IonIcon slot="end" icon={connexion.iosIcon} />
            </IonItem>
        </div>


    );


}


export default LeftTopExploreContainer;