function GP1() {
    var input1 = []
        for(var i1=1; i1 <= 6 ; i1++){
         input1.push(document.getElementById("para1_input_box_" + i1).value)
        }
        input1.join(" . ");
        document.getElementById("p1").innerHTML = input1.push().innerHTML = input1.join(" . ")
}

function GP2() {
    var input2 = []
        for(var i2=1; i2 <= 6 ; i2++){
         input2.push(document.getElementById("para2_input_box_" + i2).value)
        }
        input2.join(" . ");
        document.getElementById("p2").innerHTML = input2.push().innerHTML = input2.join(" . ")
}
