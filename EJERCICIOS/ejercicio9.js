let vec = [2,4,1,5,3,6,8,3,7,1];
let aux

aux = vec[vec.length-1]
for(let i = vec.length-1; i > 0 ; i--) {
    vec[i] = vec[i-1]
}

vec[0] = aux

console.log(vec)