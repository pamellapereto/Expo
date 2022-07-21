import { Text, View, Image } from "react-native";
import { ScrollView } from "react-native";
import { global } from "../../css/Styles";

export default function Stories(){
    return(
        <View>
            <Text style = {global.titlestory}>Stories</Text>
            <ScrollView horizontal = {true}>
                <View>
                    <View style = {global.containerLive}>
                        <Text style={global.tag}>Live</Text>
                        <Text style={global.like}>20.5k</Text>
                    </View>             
                    <Image source={require("../../assets/story1.jpg")} style={global.storyimg}/>
                    <Text style={global.username}>Savannah⠀
                    <Image source={require("../../assets/check.png")} style={global.checkimg}/>
                    </Text>
                </View>

                <View>
                    <View style = {global.containerLive}>
                        <Text style={global.tag2}>Premiere</Text>
                    </View>   
                    <Image source={require("../../assets/story2.jpg")} style={global.storyimg}/>
                    <Text style={global.username}>Cooper⠀
                    <Image source={require("../../assets/check.png")} style={global.checkimg}/>
                    </Text>
                </View>

                <View>
                    <View style = {global.containerLive}>
                        <Text style={global.tag}>Live</Text>
                        <Text style={global.like}>14.3k</Text>
                    </View>   
                    <Image source={require("../../assets/story3.jpg")} style={global.storyimg}/>
                    <Text style={global.username}>Howard⠀
                    <Image source={require("../../assets/check.png")} style={global.checkimg}/>
                    </Text>
                </View>

            </ScrollView>

        </View>
    );
}
