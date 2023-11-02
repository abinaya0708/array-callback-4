document.write("Define a function that calculates the area of a circle"+"<br>");

document.write("Given array:let circles=[10,30,50]"+"<br>");
let circles=[10,30,50];




let empty=[];
let res1=circles.map(function(value,index,array){
    if(index==0){
         let area=Math.floor(3.14*value**2);
        
        empty.push(area);
    }
});

let res2=circles.map(function(value,index,array){
    if(index==1){
        let area=Math.floor(3.14*value**2);
        
        empty.push(area);
    }
    
});


let res3=circles.map(function(value,index,array){
    if(index==2){
         let area=Math.floor(3.14*value**2);
        
        empty.push(area);
    }
});
document.write(empty);

