import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import LandingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'

function Landing() {
    return (
        <View style={styles.container}>

            <Image source={LandingImg} style={styles.banner}></Image>

            <Text style={styles.title}> 
                Seja bem vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button,styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button,styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>
                        Estudar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Landing;