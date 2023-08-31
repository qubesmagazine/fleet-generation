import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 90,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    alignItems: "center",
    flexDirection: "row",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 5,
    borderColor: '#dc143c',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: SIZES.medium,
    borderRadius: "45px",
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontFamily: FONT.bold,
  
  },
});

export default styles;