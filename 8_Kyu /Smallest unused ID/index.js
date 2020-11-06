function nextId(ids){
    var t = 0;
  while (ids.includes(t))
    t += 1
  return t;
}
