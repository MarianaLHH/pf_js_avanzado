class Gato {
  //Clase pokemon
  //METODO
  constructor(id, descripcion, imagen) {
    this.id = id;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  toDiv() {
    //METODO
    const card = document.createElement("div");
    card.classList.add("card");

    //Image
    console.log("i=" + this.img);
    const img = document.createElement("img");
    img.src = this.imagen; // this-->Accedo a las propiedades del metodo constructor
    card.appendChild(img);

    //Name
    const name = document.createElement("p");
    name.textContent = this.id;
    card.appendChild(name);
    //Description
    const des = document.createElement("p");
    des.textContent = this.descripcion;
    card.appendChild(des);

    return card; //----??xq retorna card
  }
}
