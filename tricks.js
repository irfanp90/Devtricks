const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }
    // Regular
        console.log("hello")
    // Interpolated
        console.log("hello i am  a %s string", ":-)")
    // Styled
        console.log("%c I am smart","font-size:20px; color:red  ")
    // warning!
        console.warn("ahhhh!!!")
    // Error :|
        console.error("OH DARN!!!")
    // Info
        console.info("Irfan is the best")
    // Testing
        const p = document.querySelector('p');
        console.assert(p.classList.contains('ouch'), 'That is wrong!');
        console.assert( 1 === 1, "that is wrong")
        console.assert( 1 === 2, "that is wrong")
    // clearing
        // console.clear()
    // Viewing DOM Elements
        console.log(p);
        console.dir(p);
    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
      });
  
    // counting
    console.count("irfan");
    console.count("irfan");
    console.count("patel");
    console.count("patel");
    console.count("irfan");
    console.count("patel");
    console.count("patel");
    console.count("irfan");
    ;
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

      console.table(dogs);
