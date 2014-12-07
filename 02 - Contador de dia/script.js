function getDateDif() {
    var D1 = document.getElementById("D1").value;
    var M1 = document.getElementById("M1").value;
    var A1 = document.getElementById("A1").value;
    var D2 = document.getElementById("D2").value;
    var M2 = document.getElementById("M2").value;
    var A2 = document.getElementById("A2").value;

    
    M1 -= 1;
    M2 -= 1;

    var date1 = new Date(A1,M1,D1);
    var date2 = new Date(A2,M2,D2);

    document.getElementById("final").innerHTML = (date2.getTime() - date1.getTime()) / 86400000;


}
