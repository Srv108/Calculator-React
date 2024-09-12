export function Calculate(str){
    let a;
    let x = "";
    let operation = '';
    console.log("i m here");
    for(let char of str){
        if(char === '+' || char === '*' || char === '-' || char === '/'){
            operation = char;
            a = parseInt(x);
            x = "";
            continue;
        }
        x += char
    }
    console.log(a);
    let b = parseInt(x);
    console.log(b);
    if(operation === '*'){
        return a * b;
    }else if(operation === '+'){
        return a + b;
    }else if(operation === '/'){
        return a / b;
    }else{
        return a - b;
    }
    return 0;
}