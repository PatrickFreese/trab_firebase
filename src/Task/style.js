import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    gap: 10,
    alignItems: 'center'
  },
  Tasks: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    borderBottomWidth: 1,
    paddingVertical: 10,
    alignItems: "center"
  },
  
  FinishTask: {
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "yellow",
  },
  DeleteTaskText: {
    color: "white"
  },
  FinishTaskText: {
    color: "white"
  },
  DescriptionTask: {
    fontWeight: "bold",
    color: "#282b2db5",
    maxWidth: 180,
  },
  ContainerStatus: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center"
  },
  buttonNewTask:{
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#F92e6a",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton:{
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default styles