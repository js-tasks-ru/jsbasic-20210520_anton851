function getMinMax(str) {
  whoa = [...str]
  .map(i => {if(isFinite(i) == true || i == "." || i == "-"){
    return i
  } else {
    return " "}
  })
  .join("")
  .split(" ")
  .filter(i => i != "")
  .map(i => Number(i));
  let min = Math.min(...whoa);
  let max = Math.max(...whoa);
  let finalObj = {
    min: min ,
    max: max
  };
  return finalObj;
}
