let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);

// Arrow

let comparaComThisArrow = (param) => console.log(this === param);

comparaComThisArrow(global);
