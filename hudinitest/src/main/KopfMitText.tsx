type Props = {
  headline: string | undefined;
  volltext: string | undefined;
};

export default function KopfMitText(props: Props) {
  return (
    <div style={kopfMitText.container}>
      <h1 style={kopfMitText.ueberschrift}>{props.headline}</h1>
      <div style={kopfMitText.bodyText}>{props.volltext}</div>
    </div>
  );
}

const kopfMitText = {
  container: {
    marginLeft: 80,
    marginRight: 80,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    borderBottom: "1px solid black",
  },
  ueberschrift: {
    marginTop: 20,
    marginBottom: 20,
  },
  bodyText: {
    overflowY: "scroll" as "scroll",
    height: 400,
    textAlign: "left" as "left",
  },
};
