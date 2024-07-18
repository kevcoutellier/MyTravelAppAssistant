import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // ---------------------------------------------------------------------------------------Commun CSS--------------------------------------------------------------------------------------------------------------------

  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 0,
    fontFamily: "Kumbh Sans",
    fontSize: 50,
    lineHeight: 62,
    color: "#01403B",
    textAlign: "center",
  },
  logo: {},

  // ---------------------------------------------------------------------------------------Root App--------------------------------------------------------------------------------------------------------------------

  root: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // ---------------------------------------------------------------------------------------Login Screen--------------------------------------------------------------------------------------------------------------------
  login: {
    position: "relative",
    width: 390,
    height: 844,
    backgroundColor: "#F9F7F2",
  },
  inputLogin: {
    position: "absolute",
    left: 16,
    top: 422,
    width: 358,
    height: 112,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputLoginWrapper: {
    flexDirection: "column",
    width: "100%",
  },
  inputLoginLabel: {
    fontFamily: "DM Sans",
    fontSize: 10,
    lineHeight: 13,
    color: "#525252",
    marginBottom: 0,
  },
  LoginTextInput: {
    height: 25,
    backgroundColor: "#F9F7F2",
    borderBottomWidth: 3,
    borderBottomColor: "#006D77",
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#262626",
    fontFamily: "Poppins",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#01403B",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#FFF",
    fontFamily: "DM Sans",
    fontSize: 16,
  },
  register: {
    marginTop: 20,
    fontFamily: "DM Sans",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    textDecorationLine: "underline",
    color: "#006D77",
    textAlign: "center",
  },
  homeIndicator: {
    width: 139,
    height: 5,
    backgroundColor: "#000",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 8,
  },

  // ---------------------------------------------------------------------------------------Home Page--------------------------------------------------------------------------------------------------------------------

  homepage: {
    // flex: 1,

    backgroundColor: "#F5F5F5",
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  TripsTitle: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "bold",
  },

  // ---------------------------------------------------------------------------------------Profile Page--------------------------------------------------------------------------------------------------------------------

  profile: {
    flex: 1,
    backgroundColor: "#FFDDD2",
  },
  ProfileBackground: {
    height: "30%",
    width: "100%",
    backgroundColor: "#01403B",
    justifyContent: "flex-end",
  },
  pp: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 20,
    marginTop: -73,
  },
  ppp: {
    width: 146,
    height: 146,
    borderRadius: 73,
    backgroundColor: "#FFDDD2",
    alignItems: "flex-end",
  },
  ProfileName: {
    fontSize: 36,
    color: "#FFDDD2",
    marginLeft: 20,
    marginTop: 20,
  },
  ProfileDescription: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 20,
  },
  ProfileDescriptionText: {
    flex: 1,
    fontSize: 24,
    color: "#01403B",
    flexDirection: "column",
    justifyContent: "center",
  },

  // ---------------------------------------------------------------------------------------Banner--------------------------------------------------------------------------------------------------------------------

  banner: {
    width: "90%",
    height: 176,
    backgroundColor: "#CAD2C5",
    borderRadius: 20,
    marginHorizontal: 20,
  },

  bannerContainer: {
    alignItems: "flex-end",
    paddingHorizontal: 32,
    paddingTop: 32,
    width: "100%",
  },
  bannerTitle: {
    color: "#006D77",
    fontSize: 48,
    fontWeight: "bold",
  },

  // ---------------------------------------------------------------------------------------Card--------------------------------------------------------------------------------------------------------------------

  card: {
    height: 80,
    width: "90%",
    backgroundColor: "#E29578",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "medium",
  },
  cardDate: {
    fontSize: 14,
    // color: "#888",
  },
  chip: {
    backgroundColor: "#007BFF",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  cardContainer: {
    flexDirection: "row",
    gap: 8,
  },
  userContainer: {
    flexDirection: "row",
    gap: -10,
  },
  userCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: -5,
  },
  flexContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },

//Ne pas continuer faire du tail wind css
 
});



export default styles;
