import React from 'react';
import {View,StyleSheet} from 'react-native'
import ContactRow from '../components/ContactRow';
import { colors } from '../config/constants';
import Separator from '../components/Separator';
import Cell from '../components/Cell';

const Settings =() => {
    return(
        <View>
            <ContactRow
                name="Hakime Nur Erkcan"
                subtitle="hnerkcan98@gmail.com"
                style={styles.ContactRow}
            />
            <Separator/>
            <Cell
                title="Logout"
                icon="log-out-outline"
                tintColor={colors.red}
                onPress={()=> {
                    alert("don't touch me again")
                }}
                
            />
            <Cell
                title="Tell a Friend"
                icon="heart-outline"
                tintColor={colors.pink}
                onPress={()=> {
                    alert("don't touch me again")
                }}
                style={{marginTop:20}}
            />
            <Cell
                title="Help"
                icon="informationrd-outline"
                tintColor={colors.green}
                onPress={()=> {
                    alert("don't touch me again")
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    ContactRow:{
        backgroundColor:'white',
        marginTop:16,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:colors.border,
        
    }


})
export default Settings;