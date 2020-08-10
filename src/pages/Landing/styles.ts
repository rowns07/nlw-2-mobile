import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8257E5',
      justifyContent: 'center',
      padding:40
  
    },

    banner:{
        width:'100%',
        resizeMode:'contain'

    },
  
    title:{
      fontFamily:'Archivo_400Regular',
      fontSize:20,
      color:'white',
      lineHeight:30,
      marginTop:80
    },

    titleBold :{
        fontFamily:'Archivo_700Bold',
    }
    ,
    buttonsContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:40,
    },
    button:{
      height:150,
      width:'48%',
      justifyContent:'space-between',
      borderRadius:8,
      padding:24,
      backgroundColor:'#333',
    },
    buttonText:{
      fontFamily:'Archivo_700Bold',
      color:'#fff',
      fontSize:20
    },
    buttonPrimary:{
        backgroundColor:'#9871f5'
    },
    buttonSecondary:{
      backgroundColor:'#04d361'
    },
    totalConnections:{
      fontFamily:'Poppins_400Regular',
      color:'#d4c2ff',
      fontSize:12,
      lineHeight:20,
      maxWidth:140,
      marginTop:40

    }
  });

  export default styles;