var hammingDistance = function(x,y){
    let diff = 0;
    //convert to binary string
    x = parseInt(x,10).toString(2);
    y = parseInt(y,10).toString(2);
    if(x.length > y.length){ //x is longer
        let filler = x.length -y.length;
        for(let i = 0; i < filler;i++){
            y = "0" + y;
        }
    }
    else if(y.length > x.length){ //y array is longer
        let filler = y.length - x.length;
        for(let i = 0; i < filler;i++){
            x = "0" + x;
        }
    }
    
    for(let i = 0 ; i < x.length; i++){
        if(x.charAt(i)!== y.charAt(i)){
            diff++;
        }
    }
    return diff;
};