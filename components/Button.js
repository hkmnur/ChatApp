import React from "react";
import { TouchableOpacity,Text ,StyleSheet} from "react-native";

const Button = ({title,varient }) => {
    return(
        <TouchableOpacity style={[styles.buttonContainer,
        {
            backgroundColor:varient=== "primary" ? "black":"transparent",
            paddingHorizontal: varient=== 'primary' ? 16 : 0 
        }]}>
            <Text style={[styles.buttonLabel,{color:varient ==="primary" ? "white": "black"}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:"black",
        paddingVertical:12,
        borderRadius:6,
    },
    buttonLabel:{
        color:"white",
        fontSize:18,
    }
})



export default Button;
