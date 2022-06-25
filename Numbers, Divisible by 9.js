function forLoop(input) {
    let from = Number(input[0]);
    let to = Number(input[1]);
    let sum = 0;
    let outputNumbers = "";
    for (let i = from; i <= to; i++) {
        if (i % 9 == 0) {
            sum += i;
            outputNumbers += i +  "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers);
}
forLoop(['100', '200']);