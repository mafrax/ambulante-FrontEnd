
import React, { useState } from 'react';
import { IonToggle, IonInput, IonItem, IonCheckbox, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel, IonIcon, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import { locationOutline, locationSharp } from 'ionicons/icons';


interface ContainerProps {
    name: string;
}


const RightTopExploreContainer: React.FC<ContainerProps> = ({ name }) => {

    return (
        <div className="container">
                    <strong>{name}</strong>
                    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        </div >


    );


}


export default RightTopExploreContainer;