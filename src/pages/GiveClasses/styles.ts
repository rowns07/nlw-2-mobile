import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8257E5',
      justifyContent: 'center',
      padding:40
  
    },
    content:{
        flex:1,
        justifyContent:'center'

    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#fff',
        fontSize:32,
        lineHeight:37,
        maxWidth:180
    },
    description:{
        marginTop:24,
        color:'#fff',
        fontSize:16,
        lineHeight:26,
        maxWidth:240,
        fontFamily:'Poppins_400Regular'
    },
    button:{
        backgroundColor:'#04D361',
        padding:20,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontFamily:'Archivo_700Bold',
        fontSize:16
    }

  });

  export default styles;