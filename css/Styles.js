import { StyleSheet } from "react-native";

export const global = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#090909',
    },

    header: {
        height: 150,
        flexDirection: "row",
        paddingTop: 55,
    },

    txtname: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
    },

    txtuser: {
        color: '#c4c4c4',
        fontSize: 13,
        paddingLeft: 10,
    },

    userimg: {
        width: 68,
        height: 68,
        borderRadius: 40,
        marginLeft: 20,
    },

    searchimg: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginLeft: 155,
        marginTop: 10,

    },

    titlestory: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 5,
    },

    storyimg: {
        width: 140,
        height: 230,
        resizeMode: 'cover',
        margin: 10,
        borderRadius: 20,
    },

    containerLive: {
        flexDirection: "row",
        zIndex: 1000,
        position: "absolute",
        marginTop: 20,
        marginLeft: 20,
    },

    tag: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        padding: 7,
        borderRadius: 8,
        textAlign: "center",
        backgroundColor: '#090909'
    },

    tag2: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        padding: 7,
        borderRadius: 6,
        textAlign: "center",
        backgroundColor: 'red'
    },

    like: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        marginLeft: 9,
        textAlign: "center",
        marginTop: 4,
        textShadowColor: '#000000',
        textShadowOffset: {width: 0, height: 0.8},
        textShadowRadius: 1,
  
    },

    username: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 13,
        marginLeft: 20,

    },

    checkimg: {
        width: 15,
        height: 15,
    },

    areaTrending: {
        marginTop: 15,
        height: 60,
        flexDirection: "row",
    },

    trending: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
    },

    more: {
        color: '#FFC901',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 230,
        marginTop: 20,
    },

    containerGray: {
        backgroundColor: '#2c2c2c',
        borderRadius: 20,
    },

    containerLightGray: {
        backgroundColor: '#404040',
        borderRadius: 20,
    },

    imgTrending: {
        width: 320,
        height: 195,
        borderRadius: 20,
        resizeMode: 'cover',
    },

    containerLike: {

    },

    likeTrending: {

    },

    txtLike: {

    },

    areaUser: {

    },

    userimg2: {
        width: 68,
        height: 68,
        borderRadius: 10,
        marginLeft: 20,
    },

    areaNome: {

    },

});