var k = parseInt((Math.random()*1000)%255);
var l = parseInt((Math.random()*1000)%255);
var m = parseInt((Math.random()*1000)%255);
//k++;
console.log(k);
console.log(l);
console.log(m);
var idcounter = 0;
var addtask = document.getElementById("Add-btn");
addtask.addEventListener("click",function(abc){
    var btn = abc.target;
    console.log(btn);
    btn.parentNode.parentNode.style.backgroundColor = "green";
});
      var task_value = document.getElementById("task");
      var parent = document.getElementById("list");
      task_value.onkeyup = function(event)
      {
         // console.log(event);
          if(event.keyCode == 13)
          {
             k = parseInt((Math.random()*1000)%255);
             l = parseInt((Math.random()*1000)%255);
             m = parseInt((Math.random()*1000)%255);
              var node  = document.createElement("li");
              var buttondel = document.createElement("button");
              buttondel.innerHTML="X";
              node.innerHTML = task_value.value;
              node.setAttribute("class","li");
              node.setAttribute("style",`background: rgb( ${k},${l},${m}); padding:10px;border: 1px solid blue;text-size:40px;border-radius:25px;margin:2px`);
              buttondel.setAttribute("style","float:right;border-radius:25px");
              buttondel.setAttribute("id",idcounter);
              idcounter++;
              node.setAttribute("id",idcounter);
              buttondel.setAttribute("onclick","del(id)");
              idcounter++;
              node.style.color  =  "red";
              parent.appendChild(node);
              node.appendChild(buttondel);
              task_value.value="";
           }
      }
      addtask.onclick = function()
      {
         k = parseInt((Math.random()*1000)%255);
         l = parseInt((Math.random()*1000)%255);
         m = parseInt((Math.random()*1000)%255);
          var node  = document.createElement("li");
          var buttondel = document.createElement("button");
          buttondel.innerHTML="X";
          node.innerHTML = task_value.value;
              node.setAttribute("class","li");
              node.setAttribute("style",`background: rgb( ${k},${l},${m}); padding:10px;border: 1px solid blue;text-size:40px;border-radius:25px;margin:2px`);
              buttondel.setAttribute("style","float:right;border-radius:25px");
              buttondel.setAttribute("id",idcounter);
              idcounter++;
              node.setAttribute("id",idcounter);
              buttondel.setAttribute("onclick","del(id)");
              idcounter++;
              node.style.color  =  "red";
              parent.appendChild(node);
              node.appendChild(buttondel);
              task_value.value="";
      }
      function del(x)
      {
          //console.log(x);
          x++;
         var a = document.getElementById(x);
        // console.log(a);
         parent.removeChild(a);
      }
      //event listtener do not over write where as on click overwrites.(dont use both in same project or file)

      