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
          setData(result);
          setError(false);
        },
        () => {
          setError(true);
        }
      );
  }, []);

  if (!error) {
    return data as dataModel;
  } else {
    console.log("ERROR: FEHLER IZZ DA");
  }
}

export function AnsBackendRequests(
  dataModel: dataModel | undefined,
  kategorie: string | undefined,
  tonalitaet: string | undefined
) {
  console.log("Ans backend schicken:");
  console.log(JSON.stringify(dataModel));
  console.log(kategorie);
  console.log(tonalitaet);
}
