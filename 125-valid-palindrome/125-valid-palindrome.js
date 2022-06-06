/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const alpha = /[^a-zA-Z0-9]/g;
    
    let word = s.toLowerCase().replace(alpha, '');
    
    const recur = (w) => {
        
        switch (w.length) {
            case 0: 
            case 1: 
                return true;
            default: 
                if (w[0] === w[w.length-1]) {
                    return recur(w.slice(1, w.length-1))
                } else return false;
        }    
    }
    
    return recur(word); 

};