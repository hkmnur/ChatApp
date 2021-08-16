import React,{useEffect} from 'react';
import { SafeAreaView,StyleSheet} from 'react-native';
import ContactRow from '../components/ContactRow';
import Separator from '../components/Separator';


/*const chats =[
    {
        users:["hnerkcan98@gmail.com","a@gmail.com"],
        messages:[],
    },
    {
        users:["hnerkcan98@gmail.com","b@gmail.com"],
        messages:[],
    },
    {
        users:["hnerkcan98@gmail.com","d@gmail.com"],
        messages:[],
    },
    {
        users:["hnerkcan98@gmail.com","e@gmail.com"],
        messages:[],
    },

]*/

const Chats = ({navigation}) => {
    useEffect(() => { 
        const isLoggedIn=false;
        if (!isLoggedIn) {
            navigation.navigate("SignUp");
        }
       
    }, [] );/*bu ekran açıldığında bu fonksiyon çalışacak */


    return (
        <SafeAreaView>
            <ContactRow
                name="Hakime Nur Erkcan"
                subtitle="No message yet"
                onPress={() => {
                            navigation.navigate('Chat')
                        }}
             />
            <Separator/>
            
        
        </SafeAreaView>
    );
}


const styles =StyleSheet.create({
   
})

export default Chats;

