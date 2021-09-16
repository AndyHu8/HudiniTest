export default function KopfMitText() {
  return (
    <div style={kopfMitText.container}>
      <h1 style={kopfMitText.ueberschrift}>
        Überschrift des Textes. Kann auch lang werden, wie dieses hier. Also
        Achtung!
      </h1>
      <div style={kopfMitText.bodyText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus enim
        accusantium modi ducimus nam, nulla itaque quam quibusdam. Delectus
        pariatur iste, incidunt perferendis animi ut sint aspernatur odit
        distinctio aperiam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque commodi pariatur modi itaque repudiandae quis nulla et!
        Magni explicabo deserunt odio maxime quo, iusto rerum earum recusandae
        quibusdam dignissimos eos ex eligendi vitae delectus facilis, ipsa fugit
        obcaecati at tempore laboriosam temporibus. Sed labore distinctio minima
        dolorum neque natus tempore? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Non velit possimus nesciunt atque unde excepturi,
        cumque est quas consectetur, dolore voluptatem culpa soluta maxime.
        Recusandae vero porro dolore repellendus at numquam, natus molestias
        voluptates adipisci, harum beatae animi! Odit delectus, sapiente
        architecto neque iusto temporibus dignissimos quibusdam aut adipisci
        incidunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Veniam dolores ducimus, dicta, possimus voluptates maxime nihil libero
        molestias quos assumenda inventore et quod ullam quidem ratione sapiente
        natus? Corporis, veritatis dolores autem optio voluptatum deserunt
        cupiditate neque incidunt adipisci tempore aliquam, ducimus aspernatur
        facilis. Beatae officiis ullam nisi itaque assumenda quis veritatis
        minima quasi aperiam! Vel libero nesciunt ex sit eum, delectus ut quis
        itaque blanditiis tempore aliquid enim impedit, perferendis error
        suscipit! Odio perspiciatis nisi, iure corporis accusamus laudantium
        quia est fugiat praesentium eum dolore earum recusandae possimus, nemo
        incidunt repellat fuga odit commodi nobis ipsa. Repellendus, cum
        necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deleniti dignissimos quam dolorem, maxime nam iste. Explicabo
        accusantium aliquid minima quaerat at ipsum illo aperiam atque
        distinctio hic eos, dolorem magni veritatis perferendis numquam odio
        corrupti culpa quam modi? Delectus iste quidem animi! Temporibus quam
        optio odit tempora, molestiae numquam dolore adipisci obcaecati sunt
        dignissimos cumque nemo eius maxime, labore libero! Maiores nobis illo
        earum eveniet quaerat nesciunt eum vel? Asperiores nulla vitae hic neque
        commodi possimus a voluptatibus blanditiis quibusdam distinctio quas
        impedit magnam sed laudantium ab, quo sit nobis reprehenderit. Nulla,
        eum. Nemo, eius recusandae. Ab soluta illum quis?
      </div>
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
