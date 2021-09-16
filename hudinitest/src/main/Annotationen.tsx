import Requests from "./Requests";

export default function Annotationen() {
  return (
    <div style={annotationen.container}>
      <div style={annotationen.flexContainer}>
        <div>
          <h2>Kategorie</h2>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div>
          <input
            style={annotationen.input}
            type="text"
            className="form-control"
            placeholder="Nach Wörtern suchen"
          />
        </div>
        <div>
          <h2>Tonalität</h2>
          <select className="form-select" aria-label="Default select example">
            <option>sehr positiv</option>
            <option>positiv</option>
            <option selected>neutral</option>
            <option>ambivalent</option>
            <option>kritisch</option>
            <option>negativ</option>
          </select>
        </div>
      </div>

      <button
        onClick={Requests}
        style={annotationen.button}
        type="button"
        className="btn btn-dark"
      >
        Speichern
      </button>
    </div>
  );
}

const annotationen = {
  container: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 80,
    marginRight: 80,
  },
  flexContainer: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  input: {
    width: "100%",
  },
  button: {
    float: "right" as "right",
    marginBottom: 20,
  },
};
