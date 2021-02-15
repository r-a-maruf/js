
// first assignment

function convertor(a){
    console.log(a + " inchi = " + a*(1.57828/100000));
    
}

convertor(5);

// second assignment

// third assignment


function woodCalculator(Chair,Table,Khat){
    console.log( Chair*1+Table*3+Khat*5);

}
woodCalculator(2,3,4);

// fourth assignment
function breakCalculator(tola){
    if(tola<=10){
        console.log(tola*15*1000);
    }
    else if(tola>10&&tola<=20){
        console.log(10*15*1000+(tola-10)*12*1000);
    }
    else {
        console.log(10*15*1000+10*12*1000+(tola-20)*10*1000);
    }
}
breakCalculator(21);

// fifth assignment
function gread(mark){
    if(mark>=0&&mark<60){
        console.log("Sorry you are fail");
    }
    else if(mark>=60&&mark<=64){
        console.log("Your Gread is D");
    }
    else if(mark>=65&&mark<=69){
        console.log("Your Gread is D+");
    }
    else if(mark>=70&&mark<=74){
        console.log("Your Gread is C");
    }
    else if(mark>=75&&mark<=79){
        console.log("Your Gread is C+");
    }
    else if(mark>=80&&mark<=85){
        console.log("Your Gread is B");
    }
    else if(mark>=86&&mark<=89){
        console.log("Your Gread is A-");
    }
    else if(mark>=90&&mark<=96){
        console.log("Your Gread is A");
    }
    
    else if(mark>=97&&mark<=100){
        console.log("Congratulation! You've selected for the scholarship!  Your Gread is A+");
    }
    else {
        console.log("Invalid Marks")
    }

}
gread(60);
