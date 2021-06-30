/// <reference path="../WebServices/CatWebService.asmx" />
/// <reference path="../WebServices/CatWebService.asmx" />



//Funcion inicial de la pagina
$(document).ready(function () {
    
    
    fnGetMunicipiosList();
    fnMpiosQueAtienden();
    fnMpiosConAtencion();
    fnMpiosSinAtienden();

    
    
});




function fnCreateSelectMunicipiosList(result) {
    let strMunicipios = result;
    let arrMunicipios;
    try {
        let strListselect = "<select id='idMunicipios'>";
        arrMunicipios = strMunicipios.split('$');
        let parMubicipio = [];
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {
            parMubicipio = arrMunicipios[iIndex].split("|");
            strListselect += "<option value='" + parMubicipio[0] + "'>" + parMubicipio[1] + "</option>";
        }
        strListselect += "</select>";
        document.getElementById('idS1').innerHTML = strListselect;
        document['getElementById']('idMunicipios')['addEventListener']('change', fnSelectChangeMunicipio);
        //alert(document.getElementById('idMunicipios').addEventListener('change', fnSelectChangeMunicipio));
        
        getMpioAtiendeList(document.getElementById('idMunicipios').value);
    } catch (err) {
        alert(err);
    }
}

function fnSelectChangeMunicipio(paramSelect) {
    
    getMpioAtiendeList(paramSelect['target']['value'])
}

function getMpioAtiendeList(paramValue) {
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/GetMpioAtiendeList",
        data: "{param:'" + paramValue +"'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            
            fnCreateList("idMpio",result);
        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
}



function fnMpiosQueAtienden()
{   
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/getMpiosQueAtienden",
        data: "{param:'nada'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;

            let nlength = fnCreateList("idMpiosQueAtt", result);
            document.getElementById('idNumQueAtMunicipios').innerHTML = nlength;
            fnCreateSelectMunicipiosList(result);
        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
}
        
function fnMpiosConAtencion() {
    
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/getMpiosConAtencion",
        data: "{param:'nada'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            let nlength = fnCreateList("idMpiosConAtt", result);
            document.getElementById('idNumConAtMunicipios').innerHTML = nlength;
        },
        failure: function (response) {
            alert(response.d + " idNumMpiosConAtt");
        }
    });
    
}

function fnMpiosSinAtienden() {
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/getMpiosSinAtencion",
        data: "{param:'nada'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;

            let nlength = fnCreateList("idMpiosSinAtt", result);
            document.getElementById('idNumSinAtMunicipios').innerHTML = nlength;
        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
}


function fnGetMunicipiosList() {
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/GetMunicipiosList",
        data: "{param:'nada'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            let nlength;
            nlength = fnCreateList("idListMunicipios", result);
            document.getElementById('idNumMunicipios').innerHTML = nlength;
            //nlength = fnCreateRadioList("idRadioMpios", result);
        },
        failure: function (response) {
            alert(response.d);
        }
    });
}


function  fnCreateList(idElement, result) {
    
    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    iLength = arrMunicipios.length;
    try {

        let strList = "<ul id='" + idElement +"0'>";
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            arrayNameId = arrMunicipios[iIndex].split("|");

            strList += "<li draggable='true' ondragstart='drag(event)' id='" + idElement+"-"+ arrayNameId[0] +"'>" + arrayNameId[1] + "</li>";
        }
        strList += "</ul>"
        document.getElementById(idElement).innerHTML = strList;
    }
    catch (err) {
        alert("-E- fnCreayteList " + idElement);
    }
    return iLength;
}

function fnCreateRadioList(idElement, result) {
    //<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    iLength = arrMunicipios.length;
    try {

        let strList = "";
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {
            strList += "<label class='btn-primary' for='";
            arrayNameId = arrMunicipios[iIndex].split("|");
            strList += "id_mpo_" + arrayNameId[0] + "'><input id='id_mpo_" + arrayNameId[0] + "' type='radio' name='Municipios' class='radioMpo'> " + arrayNameId[1];
            strList += "</label>"
            
        }
        
        document.getElementById(idElement).innerHTML = strList;
    }
    catch (err) {
        alert("-E- fnCreayteList " + idElement);
    }
    return iLength;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropAtendidos(ev) {
    if (document.getElementById("idAtiende").children.length == 1) {
        alert("Primero arrastra el municipio que atiende");
    } else {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        document.getElementById("idAtendidos").appendChild(document.getElementById(data));
        //ev.target.appendChild(document.getElementById(data));
        //alert(document.getElementById("div2").style.height);
        document.getElementById("div2").style.height = (document.getElementById("idAtendidos").children.length + 1) * 30;
        //alert(document.getElementById("div2").style.height);


        document.getElementById("idNumSinAtMunicipios").innerHTML = document.getElementById("idMpiosSinAtt0").children.length;
    }

}

function dropAtiende(ev) {
    if (document.getElementById("idAtiende").children.length < 2) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        //alert(document.getElementById("idAtiende").children.length);
        document.getElementById("idAtiende").appendChild(document.getElementById(data));
        document.getElementById("idNumSinAtMunicipios").innerHTML = document.getElementById("idMpiosSinAtt0").children.length;

    } else {
        alert("Solo se permite un municipio que atiende");
    }
}

function onEnviarMunicipioAtiende(event) {
    let param1 = "param1:'";
    let param2 = "param2:'";
    let arr = [];
    for (let iIndex = 0; document.getElementById("idAtiende").children.length > iIndex; iIndex++) {
     
        arr = document.getElementById("idAtiende").children[iIndex].id.split("-");
        if (arr.length == 2) {
            param1 += arr[1];
        }
    }
    param1 = param1 + "'";
    for (let jIndex = 0; document.getElementById("idAtendidos").children.length > jIndex; jIndex++) {
        arr=document.getElementById("idAtendidos").children[jIndex].id.split("-");
        if (arr.length == 2) {
            if (param2 == "param2:'")
                param2 += arr[1];
            else
                param2 += "," + arr[1];
        }
    }
    param2 = param2 + "'";
    fnEnviarMunicipioAtiende(param1, param2);
}
function fnEnviarMunicipioAtiende(param1, param2) {
    let data01 = "{" + param1 + "," + param2 + "}";
    alert(data01);
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/EnviarMunicipioAtiende",
        data: data01,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            fnMpiosQueAtienden();
            fnMpiosConAtencion();
            fnMpiosSinAtienden();
        },
        failure: function (response) {
            alert(response.d);
        }
    });
}