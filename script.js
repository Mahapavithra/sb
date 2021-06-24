function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function myFunction() {
    var list=document.getElementById("mySidenav").classList.toggle("show");
    console.log(list);
  }
  
  
  