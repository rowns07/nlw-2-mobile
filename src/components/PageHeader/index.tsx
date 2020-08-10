import React from 'react';
import { View, Image, Text } from 'react-native';

import iconback from '../../assets/images/icons/back.png';
import iconLogo from '../../assets/images/logo.png';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


interface PageHeaderProps {
    title:string;
    subtitle?:string;
}

const PageHeader:React.FC<PageHeaderProps> = ({title,subtitle}) =>{

    const {navigate} = useNavigation();
    function handleGoHome(){
        navigate('Landing')
    }
    return(
        <View style={styles.container}>
            <View style={styles.barTop}>

                <BorderlessButton 
                onPress={handleGoHome}>
                    <Image 
                    resizeMode='contain'
                    source={iconback}
                    />
                </BorderlessButton>

            
            <Image  
              resizeMode='contain'
              source={iconLogo}
            />

            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default PageHeader;