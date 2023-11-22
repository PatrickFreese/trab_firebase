import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#fff'
    },
    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 18,
        color: "black",
    },
    input: {
        width: "90%",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        margin: "auto",
    },
    buttonTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92e6a",
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "black",
        fontSize: 18,
    },
});

export default styles