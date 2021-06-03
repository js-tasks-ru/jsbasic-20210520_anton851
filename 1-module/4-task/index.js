function checkSpam (str){
  let words = ['1XBet','XXX']
  for(let i = 0; i < words.length; i++){
      if(!str) return str;
      if (str.toLowerCase().includes(words[i].toLowerCase())) return true;
  }
  return false;
}

checkSpam('1XbeT');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");