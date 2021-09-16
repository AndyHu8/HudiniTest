export default function Navigation() {
  return (
    <div style={navigation.navi}>
      <h2 style={navigation.schrift}>Hudini - Vergabe von Annotationen</h2>
    </div>
  );
}

const navigation = {
  navi: {
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  schrift: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 40,
    color: "white",
    fontFamily: "Sedgwick Ave Display, cursive",
    paddingTop: 10,
    paddingBottom: 10,
  },
};
