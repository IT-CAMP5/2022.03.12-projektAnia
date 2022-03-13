function cart(cakeNumber, addonsCount) {
    for (var i = 0; i < addonsCount; i++) {
       var value = document.getElementById("cb"+cakeNumber+i).checked;
       alert(value);
    }

    //cos sie wysyla do javy
}