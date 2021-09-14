export default function Annotationen() {
  return (
    <div style={annotationen.container}>
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
        <input type="text" placeholder="Nach Wörtern suchen" />
      </div>
    </div>
  );
}

const annotationen = {
  container: {
    marginTop: 30,
    marginLeft: 80,
    marginRight: 80,
    display: "flex",
  },
};
