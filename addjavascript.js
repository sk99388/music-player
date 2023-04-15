window.scrollTo(0,200);

var latesthindi=document.getElementsByClassName('queue-element')
 var targetdistance=latesthindi.getBoundingClientRect();
var countdistance=0;
var scroll=setInterval(function(){
       if(targetdistance ==0){
        clearInterval(scroll);
        return;
       }
       countdistance+=50;
       window.scrollBy(0,50);
},50)