let printValuesOf = (jsObject, keys) => {
  for (let i = 0; i <= keys.length; i++) {
    let key = keys[i];
    console.log(jsObject[k]);
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: 'd'oh!',
  maggie: '(Pacifier Suck)',
};

printValuesOf(simpsonsCatchphrases, 'lisa', 'bart', 'homer');