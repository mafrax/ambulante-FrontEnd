import React, { useState } from 'react';
import { IonToggle, IonInput, IonItem, IonCheckbox, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import { locationOutline, locationSharp } from 'ionicons/icons';
import RightTopExploreContainer from './RightTopExploreContainer'
import LeftTopExploreContainer from './LeftTopExploreContainer'

interface ContainerProps {
    name: string;
}



const TopExploreContainer: React.FC<ContainerProps> = ({ name }) => {



    return (
        <IonRow >
            <IonCol >
                <LeftTopExploreContainer name={name}/>
            </IonCol>
            <IonCol>
                <RightTopExploreContainer name={name} />          
            </IonCol>
        </IonRow>


    );

}

export default TopExploreContainer;