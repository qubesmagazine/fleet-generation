import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  deliveryName: {
    fontSize: SIZES.large,
    fontFamily: "DMBold",
    color: COLORS.primary,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'lightblue',
    borderRadius: 15,
  },
  deliveryType: {
    fontSize: SIZES.small + 1,
    fontFamily: "DMRegular",
    color: 'black',
    fontWeight: 'bold',
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;