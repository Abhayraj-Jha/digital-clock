function clock(){

    var hour= document.getElementById("hour");
    var minute= document.getElementById("minute");
    var second= document.getElementById("second");
    var am_pm= document.getElementById("am");

    var time= new Date();

    var h= time.getHours();
    var m= time.getMinutes();
    var s= time.getSeconds();
    var session= "AM";

    if(h == 0){
        h = 12;
    }

    else if(h > 12){
        h = h -12;
        session = "PM";
    }
    

    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
    am_pm.innerHTML=session;
   
}

setInterval(clock,1000);



var button= document.querySelector(".set-time-button");
button.addEventListener('click', ()=>{
    var select1= document.getElementById("wakeup-selector");
    var i1= select1.options[select1.selectedIndex].value;

    var select2=document.getElementById("lunch-selector");
    var i2=select2.options[select2.selectedIndex].value;

    var select3= document.getElementById("dinner-selector");
    var i3= select3.options[select3.selectedIndex].value;
    
    var time= new Date().getHours();

    var textIndiv= document.getElementById("text");

    var dynamicImage= document.querySelector(".image-container");

    if(time==i1){
        textIndiv.innerHTML="LET'S HAVE SOME BREAKFAST !!";
        dynamicImage.style.backgroundImage="url('./wakeup_image.svg')";
    }

    else if(time==i2){
        textIndiv.innerHTML="LET'S HAVE SOME LUNCH !!";
        dynamicImage.style.backgroundImage="url('./lunch_image.png')";
    }

    else if(time==i3){
        textIndiv.innerHTML="LET'S HAVE A DINNER !!";
        dynamicImage.style.backgroundImage="url('./goodnight_image.svg')";
    }



    var dynamic= document.createElement('div');
    dynamic.id="dynamic-block";

    document.querySelector(".dynamic-container").appendChild(dynamic);
    
    var textvalue= select1.options[select1.selectedIndex].text;

    if(textvalue!="Default"){
        document.getElementById("dynamic-block").innerHTML="Wake-up : "+textvalue;
    }

    var dynamic4= document.createElement('div');
    dynamic4.id="dynamic-block-4";

    document.querySelector(".dynamic-container").appendChild(dynamic4);

    var textvalue4 =select2.options[select2.selectedIndex].text;

    if(textvalue4!="Default"){
        document.getElementById("dynamic-block-4").innerHTML="Lunch Time : "+textvalue4;
    }

    
    
    var dynamic3= document.createElement('div');
    dynamic3.id="dynamic-block-3";

    document.querySelector(".dynamic-container").appendChild(dynamic3);

    var textvalue3 =select3.options[select3.selectedIndex].text;

    if(textvalue3!="Default"){
        document.getElementById("dynamic-block-3").innerHTML="Dinner Time : "+textvalue3;
    }

    
    

    

});