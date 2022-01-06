class Hero {
  attack() {
    for (let i = 0; i < 1e7; i++) {
      Math.random()
    }
    console.log("attack!!!")
  }
  run() {
    console.log("runrunrun")
  }
}

function decorator(target, key) {
  const targetPrototype = target.prototype
  /*
   {
     constructor: class Hero{}
     attack: fn()
     run: fn()
     __proto__: Object
   }
   */
  const oldDescriptor = Object.getOwnPropertyDescriptor(targetPrototype, key)
  /*
    {
      configurable: true,
      enumerable: false,
      writeable: true,
      value: fn -> attack()
    }
   */

  const logTime = (...arg) => {
    let start = Date.now()
    try {
      return oldDescriptor.value.apply(this, arg) // apply call bind
    } finally {
      console.log(`执行 ${key} 耗时 ${Date.now() - start} ms`);
    }
  }

  Object.defineProperty(targetPrototype, key, { ...oldDescriptor, value: logTime })
}

decorator(Hero, 'attack')
decorator(Hero, 'run')

let hero = new Hero()
// decorator(hero, 'attack')
hero.attack()
hero.run()