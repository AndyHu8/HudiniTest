import Annotationen from "./Annotationen";
import KopfMitText from "./KopfMitText";
import Navigation from "./Navigation";

export default function Hauptseite() {
  return (
    <div>
      <Navigation />
      <KopfMitText />
      <Annotationen />
    </div>
  );
}
