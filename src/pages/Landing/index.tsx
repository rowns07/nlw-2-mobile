import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import heartIcon from '../../assets/images/icons/heart.png'
import { useNavigation } from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';


function Landing() {

    const {navigate} = useNavigation();

    function handleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyTabsPage(){
        navigate('StudyTabs');
    }

    return (
        <View style={styles.container}>

            <Image source={LandingImg} style={styles.banner}></Image>

            <Text style={styles.title}> 
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                 onPress={handleNavigateToStudyTabsPage}
                style={[styles.button,styles.buttonPrimary]}
                >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </RectButton>

                <RectButton 
                onPress={handleNavigateToGiveClassesPage}
                style={[styles.button,styles.buttonSecondary]}
                >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>
                        Dar Aula
                    </Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de 235 conexões ja realizadas {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    );
}

export default Landing;