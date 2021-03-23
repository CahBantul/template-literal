// template literals / template string
// const nama = "Fardan";
// const umur = 28;
// console.log(`Halo nama saya ${nama}, saya ${umur} tahun`);

// embedded expression
// console.log(`${alert("halo")}`);
// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "gajil"}`);

// HTML fragments
// const mhs = {
//   nama: "fardan Nozami",
//   umur: 28,
//   email: "fardan.nozami@gmail.com",
// };

// const el = `<div className="mhs">
// <h2>${mhs.nama}</h2>
// <span className="umur">${mhs.umur}</span></div>`;

// console.log(el);

// tagged template
// const nama = "fardan Nozami";
// const umur = 28;

// function coba(strings, ...values) {
//   // let hasil = "";
//   // strings.forEach((str, i) => {
//   //   hasil += `${str}${values[i] || ""}`;
//   // });
//   // return hasil;

//   // menggunakan reduce
//   return strings.reduce((res, str, i) => `${res}${str}${values[i] || ""}`, "");
// }

// const str = coba`Halo nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

// highlight
const nama = "fardan Nozami";
const umur = 28;

function highlight(strings, ...values) {
  return strings.reduce(
    (res, str, i) => `${res}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo nama saya ${nama}, saya ${umur} tahun`;
console.log(str);
