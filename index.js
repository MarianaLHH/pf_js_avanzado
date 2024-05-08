const inputRaza = document.getElementById("buscar");
const buscarRazaButton = document.getElementById("buscar_raza");
const container = document.getElementById("contenedor");
var id;
var imagen;
var descripcion;
//var g;
buscarRazaButton.onclick = () => {
  axios({
    method: "GET",
    //url: "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_IFhsJEd6wLtuRjjo6MofUOoCUNCrZz42EiaRL6KDpon9BRATRYqp5d2QEaqLZR2u",
    url: `https://api.thecatapi.com/v1/breeds/search?q=${inputRaza.value}&attach_image=1`,
  }).then((response) => {
    //console.log(JSON.stringify(response.data));
    id = response.data[0].id;
    descripcion = response.data[0].description;
    console.log(id);
  });
  console.log("id" + id);
  //2
  axios({
    method: "GET",
    //url: "https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_IFhsJEd6wLtuRjjo6MofUOoCUNCrZz42EiaRL6KDpon9BRATRYqp5d2QEaqLZR2u",
    url: `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=pers&api_key=live_IFhsJEd6wLtuRjjo6MofUOoCUNCrZz42EiaRL6KDpon9BRATRYqp5d2QEaqLZR2u`,
  }).then((response) => {
    //console.log("id" + id);
    console.log(response.data);
    imagen = response.data[0].url;
    console.log("gato:" + id + "/n des: " + descripcion + "/n +img:" + imagen);
    const g = new Gato(id, descripcion, imagen);
    //g.toDiv
    container.append(g.toDiv());
  });
};
