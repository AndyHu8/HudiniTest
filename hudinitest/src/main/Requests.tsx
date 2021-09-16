import { useEffect, useState } from "react";
import { dataModel } from "./DataModel";

export default function Requests() {
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<dataModel>();

  useEffect(() => {
    fetch("http://localhost:5000/Artikel")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(data);
          console.log("Die Daten vom Backend: " + JSON.stringify(result));
          setError(false);
        },
        () => {
          setError(true);
        }
      );
  }, []);

  if (error) {
    return data;
  } else {
    console.log("ERROR: FEHLER IZZ DA");
  }
}
