class Cat extends Animal {
  second(){
    return this.name
  }
  meows(){
    return ' meows.';
  }

  speak(){

    return this.second() +  this.meows();
  }

}
