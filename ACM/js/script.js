
var li = document.getElementsByTagName("li");
var ul = document.getElementsByTagName("ul");
console.log(li);
console.log(ul);
var previd=null;
function del(id)
{
    if(previd!=null)
    li[previd].children[1].classList.remove('hover');
    previd = id-1;
  for(var i=0;i<5;i++)
  {
      li[i].style.width = "5%";
  }
  id--;
  li[id].style.width = "80%";
  li[id].children[1].classList.add('hover');
}