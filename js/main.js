const card = document.querySelector(".card");
const container = document.querySelector(".container");
const tenis = document.querySelector(".tenis img");
const titulo = document.querySelector(".titulo");
const descricao = document.querySelector(".info h3");
const tamanhos = document.querySelector(".tamanhos");
const comprar = document.querySelector(".comprar button");

container.addEventListener("mousemove", (e) => {
  let eixoHorizontal = (window.innerWidth / 2 - e.pageX) / 10;
  let eixoVertical = (window.innerHeight / 2 - e.pageY) / 10;

  card.style.transform = `rotateY(${eixoHorizontal}deg) rotateX(${-eixoVertical}deg)`;
});

container.addEventListener("mouseenter", () => {
  card.style.transition = "none";

  tenis.style.transform = "translateZ(150px) rotateZ(45deg)";
  titulo.style.transform = "translateZ(50px)";
  descricao.style.transform = "translateZ(70px)";
  tamanhos.style.transform = "translateZ(90px)";
  comprar.style.transform = "translateZ(120px)";
});

container.addEventListener("mouseleave", () => {
  card.style.transition = ".5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  tenis.style.transform = "translateZ(0px) rotateZ(0)";
  titulo.style.transform = "translateZ(0)";
  descricao.style.transform = "translateZ(0)";
  tamanhos.style.transform = "translateZ(0)";
  comprar.style.transform = "translateZ(0)";
});
