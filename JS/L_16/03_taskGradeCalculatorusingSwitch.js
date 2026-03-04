let num = 98;

switch(num) {
    case (num >= 90 && num <= 100):
        console.log("A");
        break; 
    case num >= 88 && num <= 89:
        console.log("B");
        break;   
    case num >= 70 && num <= 79:
        console.log("C");
        break;   
    case num >= 60 && num <= 69:
        console.log("D"); 
        break;
    case num < 60:
        console.log("F");  
        break;
}