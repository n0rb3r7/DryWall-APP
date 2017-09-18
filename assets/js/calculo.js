  function desmontable120() {


      var ladoA = document.getElementById("ladoA120").value;
      var ladoB = document.getElementById("ladoB120").value;
      var area = ladoA * ladoB;
      var placasDesm = Math.ceil(((ladoA * ladoB) / 0.74) * 1.05);
      var perimetral = Math.ceil(((parseFloat(ladoA) + parseFloat(ladoB)) * 2) / 3);
      var larguero = Math.ceil((((Math.floor((ladoB / 1.2))) * ladoA) / 3.66));
      var fijaciones6 = Math.ceil(((perimetral * 5) + placasDesm));
      var travesanio122 = Math.ceil((Math.floor(ladoB / 1.2)) * (Math.ceil((ladoA / 0.6))));
      var alambre = cantAlambre(placasDesm);
      var output120 = document.getElementById("output120");
      var input120 = document.getElementById("input120");

      document.getElementById("anchoA").innerHTML = ladoA + "m";
      document.getElementById("largoB").innerHTML = ladoB + "m";
      document.getElementById("area").innerHTML = "Superficie: " + (area.toFixed(2)) + "m2";
      document.getElementById("placasD").innerHTML = placasDesm;
      document.getElementById("perimetral").innerHTML = perimetral;
      document.getElementById("larguero").innerHTML = larguero;
      document.getElementById("travesanio122").innerHTML = travesanio122;
      document.getElementById("fijaciones6").innerHTML = fijaciones6;
      document.getElementById("alambre").innerHTML = alambre;


      output120.classList.remove("hidden");
      input120.classList.add("hidden");

  }

  function cantAlambre(plac) {
      var alam = 1;
      var m = 1;
      m = plac;
      alam = Math.ceil(m / 50);
      return alam;
  }

  function desmontable60() {

      var ladoA = document.getElementById("ladoA60").value;
      var ladoB = document.getElementById("ladoB60").value;
      var area = ladoA * ladoB;
      var placasDesm = Math.ceil(((ladoA * ladoB) / 0.74) * 1.05);
      var perimetral = Math.ceil(((parseFloat(ladoA) + parseFloat(ladoB)) * 2) / 3);
      var larguero = Math.ceil((((Math.floor((ladoB / 1.2))) * ladoA) / 3.66));
      var fijaciones6 = Math.ceil(((perimetral * 5) + placasDesm));
      var travesanio122 = Math.ceil((Math.floor(ladoB / 1.2)) * (Math.ceil((ladoA / 0.6))));
      var travesanio061 = travesanio122;
      var alambre = cantAlambre(placasDesm);
      var output60 = document.getElementById("output60");
      var input60 = document.getElementById("input60");


      document.getElementById("anchoA60R").innerHTML = ladoA + "m";
      document.getElementById("largoB60R").innerHTML = ladoB + "m";
      document.getElementById("area60").innerHTML = "Superficie: " + (area.toFixed(2)) + "m2";
      document.getElementById("placasD60").innerHTML = placasDesm;
      document.getElementById("perimetral60").innerHTML = perimetral;
      document.getElementById("larguero60").innerHTML = larguero;
      document.getElementById("travesanio12260").innerHTML = travesanio122;
      document.getElementById("fijaciones660").innerHTML = fijaciones6;
      document.getElementById("alambre60").innerHTML = alambre;
      document.getElementById("travesanio06160").innerHTML = travesanio061;


      output60.classList.remove("hidden");
      input60.classList.add("hidden");

  }

  function cantAlambre(plac) {
      var alam = 1;
      var m = 1;
      m = plac;
      alam = Math.ceil(m / 50);


      return alam;
  }

  function juntaTomada() {

      var ladoA = document.getElementById("ladoA").value;
      var ladoB = document.getElementById("ladoB").value;
      var area = ladoA * ladoB;
      var placas = Math.ceil(((ladoA * ladoB) / 2.88));
      var sol = Math.ceil((((parseFloat(ladoA) + parseFloat(ladoB)) * 2) / 2.6) * 1.3);
      var mon = Math.ceil(((((Math.floor((ladoB / 0.4))) * ladoA) / 2.6) * 1.25));
      var t1 = placas * 20;
      var t2 = placas * 40;
      var fijaciones6 = placas * 6;
      var cinta = Math.ceil((placas * 2.4) * 1.4);
      var mas = Math.ceil(area);
      var outputJT = document.getElementById("outputJT");
      var inputJT = document.getElementById("inputJT");

      document.getElementById("anchoA").innerHTML = ladoA + "m";
      document.getElementById("largoB").innerHTML = ladoB + "m";
      document.getElementById("area").innerHTML = "Superficie: " + (area.toFixed(2)) + "m2";
      document.getElementById("placas9").innerHTML = placas;
      document.getElementById("solera35").innerHTML = sol;
      document.getElementById("montante34").innerHTML = mon;
      document.getElementById("tornillo1").innerHTML = t1;
      document.getElementById("tornillo2").innerHTML = t2;
      document.getElementById("fijaciones6").innerHTML = fijaciones6;
      document.getElementById("cinta").innerHTML = cinta + "m";
      document.getElementById("masilla").innerHTML = mas + "kg";


      outputJT.classList.remove("hidden");
      inputJT.classList.add("hidden");

  }

  function paredInterior() {
      var alto = document.getElementById("ladoA").value;
      var largo = document.getElementById("ladoB").value;
      var area = alto * largo;
      var placas = Math.ceil((2 * (alto * largo)) / 2.88);
      var mon = Math.ceil((((largo / 0.4) * alto) / 2.6) + 1);
      var sol = Math.ceil((largo * 2) / 2.6);
      var t1 = placas * 20;
      var t2 = placas * 40;
      var fijaciones6 = (placas * 6) / 2;
      var cinta = Math.ceil((placas * 2.4) * 1.4);
      var mas = Math.ceil(area * 2);
      var outputPI = document.getElementById("outputPI");
      var inputPI = document.getElementById("inputPI");

      document.getElementById("anchoA").innerHTML = alto + "m";
      document.getElementById("largoB").innerHTML = largo + "m";
      document.getElementById("area").innerHTML = "Superficie: " + (area.toFixed(2)) + "m2";
      document.getElementById("placas12").innerHTML = placas;
      document.getElementById("solera70").innerHTML = sol;
      document.getElementById("montante69").innerHTML = mon;
      document.getElementById("tornillo1").innerHTML = t1;
      document.getElementById("tornillo2").innerHTML = t2;
      document.getElementById("fijaciones6").innerHTML = fijaciones6;
      document.getElementById("cinta").innerHTML = cinta + "m";
      document.getElementById("masilla").innerHTML = mas + "kg";


      outputPI.classList.remove("hidden");
      inputPI.classList.add("hidden");
  }

  function revestimiento() {
      var outputREV = document.getElementById("outputREV");
      var inputREV = document.getElementById("inputREV");
      var alto = document.getElementById("ladoA").value;
      var largo = document.getElementById("ladoB").value;
      var area = alto * largo;
      var placas = Math.ceil(((alto * largo)) / 2.88);
      var omega = Math.ceil((((largo / 0.4) * alto) / 2.6) + 1);
      var t2 = placas * 40;
      var fijaciones6 = omega * 14;
      var cinta = Math.ceil((placas * 2.4) * 1.4);
      var mas = Math.ceil(area);


      document.getElementById("anchoA").innerHTML = alto + "m";
      document.getElementById("largoB").innerHTML = largo + "m";
      document.getElementById("area").innerHTML = "Superficie: " + (area.toFixed(2)) + "m2";
      document.getElementById("placas12").innerHTML = placas;
      document.getElementById("omega").innerHTML = omega;
      document.getElementById("tornillo2").innerHTML = t2;
      document.getElementById("fijaciones6").innerHTML = fijaciones6;
      document.getElementById("cinta").innerHTML = cinta + "m";
      document.getElementById("masilla").innerHTML = mas + "kg";

      outputREV.classList.remove("hidden");
      inputREV.classList.add("hidden");
  }

  function paredIntExt() {
      var alto = document.getElementById("ladoA").value;
      var largo = document.getElementById("ladoB").value;
      var area = alto * largo;
      var placas = Math.ceil((area) / 2.88);
      var placasCem = placas;
      var mon = Math.ceil((((largo / 0.4) * alto) / 2.6) + 1);
      var sol = Math.ceil((largo * 2) / 2.6);
      var t1 = placas * 20;
      var t2 = placas * 40;
      var t2a = placasCem * 25;
      var fijaciones6 = (placas * 6) / 2;
      var cinta = Math.ceil((placas * 2.4) * 1.4);
      var mas = Math.ceil(area);
      var sell = Math.ceil(placasCem / 4);
      var outputPIE = document.getElementById("outputPIE");
      var inputPIE = document.getElementById("inputPIE");

      document.getElementById("anchoA").innerHTML = alto + "m";
      document.getElementById("largoB").innerHTML = largo + "m";
      document.getElementById("area").innerHTML = "Superficie: " + (area.toFixed(2)) + "m2";
      document.getElementById("placas12").innerHTML = placas;
      document.getElementById("placasExt").innerHTML = placasCem;
      document.getElementById("solera70").innerHTML = sol;
      document.getElementById("montante69").innerHTML = mon;
      document.getElementById("tornillo1").innerHTML = t1;
      document.getElementById("tornillo2").innerHTML = t2;
      document.getElementById("fijaciones6").innerHTML = fijaciones6;
      document.getElementById("cinta").innerHTML = cinta + "m";
      document.getElementById("tornillo2A").innerHTML = t2a;
      document.getElementById("masilla").innerHTML = mas + "kg";
      document.getElementById("sellador").innerHTML = sell;

      outputPIE.classList.remove("hidden");
      inputPIE.classList.add("hidden");
  }
