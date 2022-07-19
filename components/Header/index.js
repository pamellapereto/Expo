import { Text, View, Image } from "react-native";
import { global } from "../../css/Styles";

export default function Header(){
    return(
        <View style = {global.header}>
            <Image source={require("../../assets/user1.jpg")} style={global.userimg}/>

            <View>
            <Text style = {global.txtname}>Saori Tanaka</Text>
            <Text style = {global.txtuser}>@saoritanaka</Text>
            </View>

            <Image source={require("../../assets/search2.png")} style={global.searchimg}/>
        </View>
    );
}
