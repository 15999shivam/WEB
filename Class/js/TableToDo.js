

      //to do with table
      var id = 0;
      var sn = 1;
      var table = document.getElementById("table");
      var button = document.getElementById("Add-btn");
      var todo = document.getElementById("task");
      button.addEventListener("click",function(){

        var tr1 = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3  = document.createElement("td");
        var td4 = document.createElement("td");
        var delb = document.createElement("Button");

        td1.innerHTML = sn;
        sn++;
        td1.setAttribute("id",id);
        id++;

        td2.innerHTML = todo.value;

        delb.innerHTML = "X";
        delb.setAttribute("id",id);
        id++;
        delb.setAttribute("onclick","del(id)");

        td3.appendChild(delb);

        td4.innerHTML = new Date().toString();

        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);

        tr1.setAttribute("id",id);
        id++;
        table.appendChild(tr1);
    
        


      });

      function del(id1)
      {
          id1++;
          var a = document.getElementById(id1);
          sn--;
          table.removeChild(a);
          id1++;
          for(var m= id1 ;m<id;m++)
          {
              var temp =  document.getElementById(m);
              console.log("this is m:"+m);
              console.log("this is temp:"+temp);
              var t = temp.id%3;
              console.log("this is t:"+t);
              temp.id = temp.id-3;
              console.log("this is inner html"+temp.innerHTML);
              if(t==0)
              {
                  var val = parseInt(temp.innerHTML);
                temp.innerHTML = val-1;
              }
             console.log("this is id:"+id);
            
              /*switch(t)
              {
                  case 1:

                  break;
                  case 2:
                  break;
                  case 3:
                  break;
              }*/
          }
          id=id-3;
      }