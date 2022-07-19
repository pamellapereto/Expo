import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native";
import { global } from "../../css/Styles";

export default function Stories(){
    return(
        <View>
            <Text style = {global.titlestory}>Stories</Text>
            <ScrollView horizontal = {true}>
                <View>
                    <View>
                        <Text>Live</Text>
                        <Text>20.5k</Text>
                    </View>             
                    <Image source={require("../../assets/story1.jpg")} style={global.storyimg}/>
                    <Text>Savannah</Text>
                    <Image source={require("../../assets/check.png")} style={global.checkimg}/>
                </View>



                <Image source={require("../../assets/story2.jpg")} style={global.storyimg}/>
                <Image source={require("../../assets/story3.jpg")} style={global.storyimg}/>
            </ScrollView>

            <View style = {global.containerstory}>
             <Text style = {global.trending}>Trending</Text>
             <Text style = {global.more}>More ➜</Text>
            </View>
           
        </View>
    );
}
