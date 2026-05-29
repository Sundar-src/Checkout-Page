let count = document.querySelector(".counter");
let milkprice = document.querySelector("#milkprice");
let paneerPrice = document.querySelector("#paneerPrice");
let curdPrice = document.querySelector("#curdPrice");
let a = 1;
let b = 5;
let c = 8;
let d = 10;

function increse() {
  a += 1;
  b += 5;
  c += 5;
  d += 5;
  count.innerHTML = "&nbspx" + a + "&nbsp";
  milkprice.innerHTML = `$${b}.00`;
  paneerPrice.innerHTML = `$${c}.00`;
  curdPrice.innerHTML = `$${d}.00`;

}
