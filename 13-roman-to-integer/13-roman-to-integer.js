/**
 * @param {string} s
 * @return {number}
 */


const convert = {
    I: 1,
    IV: 4,
    V: 5, 
    IX: 9,
    X: 10, 
    XL: 40,
    L: 50, 
    XC: 90,
    C: 100, 
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
}

var romanToInt = function(s) {
    let roman = s;
    
    let ans = 0; 
    
    while (roman.length > 1) {
        let char = roman[0]; 

        switch (char) {
            case "I":
                if (roman[1] === "V" || roman[1] === "X") {
                    char += roman[1];
                    roman = roman.slice(2);
                }
                else {
                    roman = roman.slice(1);
                }
                break 
                
            case "X":
                if (roman[1] === "L" || roman[1] === "C") {
                    char += roman[1];
                    roman = roman.slice(2);
                }
                else {
                    roman = roman.slice(1);
                }
                break 
                
            case "C":
                if (roman[1] === "M" || roman[1] === "D") {
                    char += roman[1];
                    roman = roman.slice(2);
                }
                else {
                    roman = roman.slice(1);
                }
                break 
            
            default: 
                roman = roman.slice(1);
        }
 
        ans += convert[char];
    }
    
    if (roman.length) {
        ans += convert[roman];
    }
    
    return ans;
};