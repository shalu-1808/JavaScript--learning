    const score = 400;
    console.log(score);

    const score2 = new Number(100); // creating a number object
    console.log(score2);
    console.log(score2.toString().length); // this will return the length of the number
    console.log(score2.valueOf()); // this will return the primitive value of the number object
    console.log(score2.toFixed(2)); // this will return the number with 2 decimal places

    const num = 234.789;
    console.log(num.toPrecision(4)); // this will return the number with 4 significant digits

    const hundreds = 10000000;
    console.log(hundreds.toLocaleString('en-IN')); // this will return the number with locale-specific formatting



    //MATHS
    console.log(Math.PI);
    console.log(Math.E);
    console.log(Math.max(1, 2, 3, 4, 5));
    console.log(Math.min(1, 2, 3, 4, 5));
    console.log(Math.abs(-5));
    console.log(Math.ceil(4.2));
    console.log(Math.floor(4.8));
    console.log(Math.round(4.5));
    console.log(Math.sqrt(16));
    console.log(Math.pow(2, 3));
    console.log(Math.random());
    console.log(Math.random()*10 +1);

    console.log(Math.floor(Math.random()*10 +1)); // this will return a random number between 1 and 10
    const max = 10;
    const min = 2;
    console.log(Math.floor(Math.random()*(max-min+1)) + min); // this will return a random number between min and max