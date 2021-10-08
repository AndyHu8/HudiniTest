import Annotationen from "./Annotationen";
import KopfMitText from "./KopfMitText";
import Navigation from "./Navigation";
import Requests from "./Requests";

export default function Hauptseite() {
  let result = Requests();

  return (
    <div>
      <Navigation />
      <KopfMitText headline={result?.headline} volltext={result?.volltext} />
      <Annotationen dataModel={result} />
    </div>
  );
}
