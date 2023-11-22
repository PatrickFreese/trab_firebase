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
        fontSize: 16,
        color: "#F92E6A",
    },
    input: {
        width: "90%",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#F92E6A",
        margin: "auto",
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92e6a",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100
    },
    icontButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold"
    },
});

export default styles