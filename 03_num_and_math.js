    const score = 400;
    console.log(score);

    const score2 = new Number(100);
    console.log(score2);
    console.log(score2.toString().length);
    console.log(score2.valueOf());
    console.log(score2.toFixed(2));

    const num = 234.789;
    console.log(num.toPrecision(4));

    const hundreds = 10000000;
    console.log(hundreds.toLocaleString('en-IN'));



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

    console.log(Math.floor(Math.random()*10 +1));
    const max = 10;
    const min = 2;
    console.log(Math.floor(Math.random()*(max-min+1)) + min);