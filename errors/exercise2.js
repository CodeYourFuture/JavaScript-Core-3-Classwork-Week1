let charge = function () {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
//syntax error - closing curly bracket after promptBikeRide(); was missing
