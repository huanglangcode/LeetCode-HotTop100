function annotateName(target, name, desc) {
  var method = desc.value;
  desc.value = function () {
    var prevMethod = this.currentMethod;
    this.currentMethod = name;
    method.apply(this, arguments);
    this.currentMethod = prevMethod;
  };
}

class Foo {
  currentMethod: string;

  @annotateName
  bar() {
    console.log(1, `${this.currentMethod}`);
    this.tux();
    console.log(2, this.currentMethod);
  }

  @annotateName
  tux() {
    console.log(3, this.currentMethod);
  }
}

new Foo().bar();
