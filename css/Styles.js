import { StyleSheet } from "react-native";

export const global = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#090909',
    },

    header: {
        height: 150,
        flexDirection: "row",
        paddingTop: 60,
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
        position: "absolute",
        marginTop: 70,
        right: 15,
    },

    titlestory: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
    },

    storyimg: {
        width: 140,
        height: 230,
        resizeMode: 'cover',
        margin: 10,
        borderRadius: 20,
    },

    containerstory: {
        height: 150,
        flexDirection: "row",
        backgroundColor: '#c4c4c4',
    },

    trending: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
    },

    more: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20,
    }

});