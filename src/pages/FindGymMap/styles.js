import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: "#1F2123",
    minHeight: 110
  },
  firstHeader: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center"
  },
  headerText: {
    marginLeft: 16,
    color: "#B8B8B8"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
