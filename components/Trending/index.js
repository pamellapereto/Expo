import { Text, View, Image } from "react-native";
import { global } from "../../css/Styles";

export default function Trending(){
    return(
        <View>
            <View style = {global.areaTrending}>
                <Text style = {global.trending}>Trending</Text>
                <Text style = {global.more}>More →</Text>
            </View>

            <View style={global.containerGray}>
                <View style={global.containerLightGray}>
                    <View>
                        <Image source={require ("../../assets/esporte.jpg")} style = {global.imgTrending}/>
            
                            <View style={global.containerLike}>
                                <Image source={require ("../../assets/like.png")} style = {global.likeTrending}/>
                                <Text style={global.txtLike}>Like</Text>
                            </View>
                    </View>

                    <View style={global.areaUser}>
                        <Image source={require ("../../assets/user2.jpg")} style = {global.userimg2}/>

                        <View style={global.areaNome}>
                            <Text style={{color: "white", fontSize: 20}}>Antônio</Text>
                            <Text style={{color: "white", fontSize: 15}}>2 min ago</Text>
                       
                   

                            <Text style={{color: "white", fontSize: 14}}>
                                Inserir comentário aqui.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )}