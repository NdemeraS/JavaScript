function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
}


function bitwiseAND(n1, n2) {
	r1 = decimalToBinary(n1);
    r2 = decimalToBinary(n2);
    

    let text = "";

    for (let i = 0; i < (r1.toString()).length; i++) {
        console.log(r1.toString()[i]);

        

        if (r1.toString()[i] === r2.toString()[i]) {
            text = text + r1.toString()[i];
        }
    }
    console.log(text);

}

bitwiseAND(6,23);


//const Result = decimalToBinary(35);
//console.log(Result);
//console.log(decimalToBinary(25));