// var vs let vs const
// scope

// block scope {}
// function scope function square(num) {}

// 1. Shadowing
    //if we try to shadow let variable by var variable its illegel shadowing

    //example illigal shadowing
    /* function test() {
        var a = "Hi";
        let b = "Goodbye";

        if(true) {
            let a = "Hi";
            var b = "Goodbye";

            console.log(a);
            console.log(b);
        }
    } */

    function test() {
      var a = "Hi";

      if (true) {
        var a = "Hi1";
        console.log(a);
      }
    }

    test()

    // 2. Declaration
    // 1(1). Redeclare: we can redeclare var, but we can't redeclare let and const example let ab; let ab;(error) & var ab; var ab;(fine)

    // 2(2). Declaration without initialization: in var its possible but in const its not possible
    //var a;(will work)
    //const b;(error)
    //let a;(will work)

    //3. hoisting

    function abc() {
        console.log(a,b,c);

        const c = 20;
        let b = 20;
        var a = 10;
        //here c &b will initialize in temporary dead zone
    }

    abc()