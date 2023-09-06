function gomb() {
    beirt = parseInt(document.getElementById("adat").Value);
    mertek1 = (document.getElementById("adatmenyid").value);
    slider = parseInt(document.getElementById("slider").value);

    document.getElementById("eredmeny").innerHTML = Math.round(beirt / slider)+  "másodperc";
}
