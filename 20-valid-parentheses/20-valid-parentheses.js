/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    const open = ["(", "[", "{"];
    const close = [")", "]", "}"];
    
    for (i=0; i < s.length; i++) {
        
        if (open.includes(s[i])) {
            stack.push(s[i]);
        }
        
        else {
            const last = stack.pop();
            switch (s[i]) {
                case ")": 
                    if (last === "(") {
                        break;
                    } else return false;
                case "]": 
                    if (last === "[") {
                        break; 
                    } else return false;
                case "}": 
                    if (last === "{") {
                        break; 
                    } else return false;
                default: 
                    return false;
            }
        }
        }
    
    if (stack.length) return false; 
    
    return true;
}
    