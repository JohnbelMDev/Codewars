function whichKind(name='friend of a friend', type='non-spicy') {
    if (name=='spicy') return {name: 'friend of a friend', type: 'spicy' }
    if (name=='non-spicy') return { name: 'friend of a friend', type: 'non-spicy' }
    var a={name:name,type:type};
    return a;
  }
console.log(whichKind('johnbel',''));