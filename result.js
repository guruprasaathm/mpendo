function Submit(){
    

    document.getElementsByClassName("Submit-Success")[0].style.display="block";
    var facname=document.getElementsByClassName("facnameinput")[0].value;
    var ratings=document.querySelector('input[name="stars"]:checked').value;
    document ="scores.html";
    var class_fac=document.getElementsByClassName(facname)[0];
    console.log("hi");
    console.log(class_fac);
}