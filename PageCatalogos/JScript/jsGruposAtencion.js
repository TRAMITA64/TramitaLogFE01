/// <reference path="../WebServices/CatWebService.asmx" />
/// <reference path="../WebServices/CatWebService.asmx" />
let g_arrMunicipios = [];
let g_nameGruposDeAtencion = [];//no es arreglo es un objeto con clave:nombre ejemplo 2010:COBRANZA
let g_GruposDeAtencionAll = [];//este si es arreglo que guarda obj {gpo,mpio,sede}
let g_arrMunicipiosSedes = [];
let g_idGrupoAtencion = 0;
let g_enviarOpcion = 'NADA'
let g_arrayInput = ["idEnviar", "idBorrar", "idLimpiar", "idActualizar"];

$(document).ready(function () {

    fnGetMunicipiosList();
    disableInput(true,"");
});

function disableInput(valor,listInput) {
    for (let iIndex = 0; g_arrayInput.length > iIndex; iIndex++) {
        if (listInput == "")
            document.getElementById(g_arrayInput[iIndex]).disabled = valor;
        else {
            if (listInput.indexOf(g_arrayInput[iIndex]) != -1)
                document.getElementById(g_arrayInput[iIndex]).disabled = valor;
        }
    }
    
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
            
            let tmp = result;
            tmp = tmp.replace(/[$]/gi, "\",\"");
            tmp = tmp.replace(/[|]/gi, "\":\"");
            tmp = "{\"" + tmp + "\"}"
            g_arrMunicipios = JSON.parse(tmp);

            fnMpiosQueAtienden();

        },
        failure: function (response) {
            alert(response.d);
        }
    });
}

function fnGrupo_TodosMpiosYsedes() {

    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/getMpiosYsedes",
        data: "{param1:''}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            let nlength = 0;

            let tmp = result;
            
            g_arrMunicipiosSedes = [];//limpiamos el arreglo
            let arrTmp = tmp.split("$");
            let arrTmp2 = [];
            for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
                arrTmp2 = arrTmp[iIndex].split("|");
                g_arrMunicipiosSedes.push({ id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7] });
            }

            fnGetNombresGruposAtencion();
        },
        failure: function (response) {
            alert(response.d + " idNumMpiosConAtt");
        }
    });

}

function onCrearGrupo(event) {
    let element = document.getElementById("idInputNombreGrupo");
    
    if (element.value == "") {
        document.getElementById("formGposAtencion").classList.add("was-validated");
        return;
    }
    element.value = element.value.toUpperCase().trim();
    for (var prop in g_nameGruposDeAtencion) {
        if (g_nameGruposDeAtencion[prop] == element.value) {
            document.getElementById("inputMessage").innerText = "El grupo de atencion " + element.value+" ya existe!";
            element.value = "";
            document.getElementById("formGposAtencion").classList.add("was-validated");
            return;
        }
            
    }
    
        
    
    
    disableInput(false, "idLimpiar");
    let elementTitle = document.getElementById("idNameGrupo");
    elementTitle.value = element.value;
    elementTitle.innerHTML = element.value;
    

    document.getElementById("idInputTodosMunicipios").disabled= false;
    document.getElementById("idInputTodasSedes").disabled = false;
        
}
function dropMunicipio(ev) {
    
    let data = ev.dataTransfer.getData("text");
    let element = document.getElementById("idNameGrupo");
    
    if (element.value == undefined && data.indexOf("itemAcoor")==-1 ) {
        document.getElementById("formGposAtencion").classList.add("was-validated");
        return;
    }
    
    if (data.indexOf("itemAcoor") == -1) {
        disableInput(false, "idEnviar,idLimpiar");
        if (document.getElementById("idAccordionMpioSedes").childElementCount == 0)
            fnMpioYsedes(data.split("-")[1]);
        else
            fnAddMpioYsedes(data.split("-")[1]);
    } else {
        //llega del lado derecho
        
        disableInput(false, "idActualizar,idBorrar,idLimpiar");
        let idNameGrupo = data.split("-")[1];
        document.getElementById("idInputNombreGrupo").value = g_nameGruposDeAtencion[idNameGrupo];
        document.getElementById("idNameGrupo").innerHTML = g_nameGruposDeAtencion[idNameGrupo];
        document.getElementById("idNameGrupo").value = g_nameGruposDeAtencion[idNameGrupo];
        let arrTemp = g_GruposDeAtencionAll.filter(value => value.gpo == idNameGrupo);
        
        g_idGrupoAtencion = idNameGrupo;
        let anterior = "";
        for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
            actual = arrTemp[iIndex]["mpio"];
            if (anterior != actual) {
                fnAddMpioYsedesQueExiste(actual);
            }
            anterior = actual  ;
        }
        
        let inputs = document.getElementsByTagName('input');
        for (let iIndex = 0; iIndex < inputs.length; ++iIndex) {
        
            arr = inputs[iIndex].id.split("-");
            if (arr.length == 2) {
                let municipio = inputs[iIndex].parentElement.parentElement.id.split("-")[1];
                let sede = inputs[iIndex].id.split("-")[1];
                //alert(municipio +" "+ sede +" "+ idNameGrupo);
                let arrTempCheck = g_GruposDeAtencionAll.filter(value => value.mpio == municipio && value.sede == sede && value.gpo == idNameGrupo);
                inputs[iIndex].checked = arrTempCheck.length == 0 ? false : true;
            }
        }
       
    }
}
function allowMunicipio(ev) {
    ev.preventDefault();
}
function getTextResult(municipio) {
    let arrTemp = g_arrMunicipiosSedes.filter(value => value.id == municipio)
    if (document.getElementById("id1itemAcoor-" + arrTemp[0]["id"]) != null)
        return;//no permito repetidos
    let result = "";
    strSeparador = "";
    for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
        result += strSeparador + arrTemp[iIndex]["id"] + "|" +
            arrTemp[iIndex]["n1"] + "|" +
            arrTemp[iIndex]["id"] + "|" +
            arrTemp[iIndex]["d1"] + "|" +
            arrTemp[iIndex]["r1"] + "|" +
            arrTemp[iIndex]["idS"] + "|" +
            arrTemp[iIndex]["c1"] + "|" +
            arrTemp[iIndex]["t1"] + "|";
        strSeparador = "$";
    }
    return result;
}

function fnAddMpioYsedesQueExiste(municipio) {
    let result = getTextResult(municipio);
    
    fnCreateListAcordeonCehckBox("idAccordionMpioSedes", result, 1, "append", g_arrMunicipios);
   
}

function fnAddMpioYsedes(municipio) {
    
    let result = getTextResult(municipio);
    let inputs = document.getElementsByTagName('input');
    let arr = [];
    let arrChecked=[];
    for (iIndex = 0; iIndex < inputs.length; ++iIndex) {
        arr = inputs[iIndex].id.split("-");
        if (arr.length == 2) {
            
            arrChecked.push({ id: inputs[iIndex].id, checked: inputs[iIndex].checked });
        }
    }

    fnCreateListAcordeonCehckBox("idAccordionMpioSedes", result, 1, "append", g_arrMunicipios);

    for (jIndex = 0; arrChecked.length > jIndex; jIndex++) {
        
        document.getElementById(arrChecked[jIndex].id).checked = arrChecked[jIndex].checked;
    }
    //id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7]
    
}

function fnAddAllMpioYsedes() {
    //let arrTemp = g_arrMunicipiosSedes.filter(value => value.id == municipio)
    let anterior = "";
    let actual = "";
    for (let iIndex = 0; g_arrMunicipiosSedes.length > iIndex; iIndex++) {
        actual = g_arrMunicipiosSedes[iIndex]["id"];
        if (anterior != actual)
            fnAddMpioYsedes(actual);
        anterior = actual;
    }
    //id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7]

}


function fnCreateListAcordeonCehckBox(idElement, result, numero_c, strAppend,arrNames) {

    let arrMunicipios = result.split('$');
    let strID = "id" + numero_c;

    let arrayNameId;
    let iLength;
    let strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id=" + strID + "'itemAcoor-";
    let strAcoordeon1 = "'><h2 class='accordion-header' id='" + strID + "h2-";
    let strAcoordeon2 = "'><button class='accordion-button collapsed ' type='button' data-bs-toggle='collapse' data-bs-target='#" + strID + "Collapse-";
    let strAcoordeon3 = "' aria-expanded='false' aria-controls='Collapse-";
    let strAcoordeon4 = "'>";
    let strAcoordeon5 = "&nbsp;&nbsp;<span class='badge bg-primary  rounded-pill' style='color:white' id='" + strID + "badge-";
    let strAcoordeon51 = "'>14</span></button></h2><div id='" + strID + "Collapse-";
    let strAcoordeon6 = "' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#" + idElement + "'><div class='accordion-body'>";
    let strAcoordeon7 = "</div></div></div>";
    let strAcoordeonFin = '';
    iLength = arrMunicipios.length;
    let strList ="";
    let strAnt = '';
    var objList = { key: "", List: "" };
    let arrList = [];
    let numero = 0;
    try {

        strList = "";
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            numero++;
            arrayNameId = arrMunicipios[iIndex].split("|");

            strList += "<div class='form-check'><input class='form-check-input' type='checkbox' value='' id='" + strID + "idLiAcoor-" + arrayNameId[5] + "'>" +
                  "<label class='form-check-label' for='" + strID + "idLiAcoor-" + arrayNameId[5] + "'>" +
                arrayNameId[1] +"</label></div>";
            if (strAnt != arrayNameId[2]) {

                strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id='" + strID + "itemAcoor-";
                strAcoordeon += arrayNameId[2] + strAcoordeon1 + arrayNameId[2] + strAcoordeon2 + arrayNameId[2] + strAcoordeon3 +
                    arrayNameId[1] + strAcoordeon4 + arrNames[arrayNameId[2]] + strAcoordeon5 + arrayNameId[2] + strAcoordeon51 +
                    arrayNameId[2] + strAcoordeon6 + "<span id='" + strID + "list-" + arrayNameId[2] + "'></span>" + strAcoordeon7;
                strAcoordeonFin += strAcoordeon;
                objList["key"] = strID + "list-" + arrayNameId[2];

            }

            strAnt = arrayNameId[2]
            if (arrMunicipios.length > (iIndex + 1) && strAnt != arrMunicipios[iIndex + 1].split("|")[2]) {
                //strList += "</ul>"

                objList["list"] = strList;
                //alert(objList["key"] + '<-->' + objList["list"]);

                arrList.push({ key: objList["key"], list: objList["list"], size: numero });
                numero = 0;
                //strAcoordeonFin.replace(/[|]/gi, strList);
                strList = "";
            }

        }
        

        objList["list"] = strList;
        arrList.push({ key: objList["key"], list: objList["list"], size: numero });
        if (strAppend == "")
            document.getElementById(idElement).innerHTML = strAcoordeonFin;
        else {
            let strinnerHTML = document.getElementById(idElement).innerHTML;
            document.getElementById(idElement).innerHTML = strinnerHTML + strAcoordeonFin;
        }

        // alert(arrList.length);
        //arrList.forEach(function (valor, indice, array) {
        //  alert(valor.key + '<->' + indice + '<->' + array[indice].key);
        //        });
        for (let jIndex = 0; arrList.length > jIndex; jIndex++) {

            document.getElementById(arrList[jIndex].key).innerHTML = arrList[jIndex].list;
            //alert("badge-" + arrList[jIndex].key.split("-")[1]);
            document.getElementById(strID + "badge-" + arrList[jIndex].key.split("-")[1]).innerHTML = arrList[jIndex].size;
            //alert(arrList[jIndex].key + '<->' + arrList[jIndex].list);
        }
    }
    catch (err) {
        alert("-E- fnCreateListAcordeonCehckBox " + idElement);
    }
    return iLength;
}

function getStringMunicipiosYsedes() {
    
    let strSedes = "";
    let strMunicipios = "";
    inputs = document.getElementsByTagName('input');
    let arr = [];
    for (iIndex = 0; iIndex < inputs.length; ++iIndex) {
        arr = inputs[iIndex].id.split("-");
        if (arr.length == 2 && inputs[iIndex].checked) {
            if (strSedes.length == 0)
                strSedes = arr[1];
            else
                strSedes += "," + arr[1];
        }
    }
    let elemMunicipios = document.getElementById('idAccordionMpioSedes');

    for (let jIndex = 0; elemMunicipios.children.length > jIndex; jIndex++) {
        if (strMunicipios.length == 0)
            strMunicipios = elemMunicipios.children[jIndex].id.split("-")[1];
        else
            strMunicipios += "," + elemMunicipios.children[jIndex].id.split("-")[1];
    }
    return strMunicipios + "$" + strSedes;
}

function onActualizar(ev) {
    
    if (document.getElementById("idNameGrupo").value != undefined) {
        let strTmp = getStringMunicipiosYsedes();

        let arrMunSedes = strTmp.split("$");
        let botones = 1;
        let nameGrupo = document.getElementById('idNameGrupo').innerHTML;
        if (arrMunSedes[0] == "") {
            let text = 'Seleccione al menos un municipio!';
            alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        if (arrMunSedes[1] == "") {
            let text = 'Seleccione al menos una sede!';
            alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        g_enviarOpcion = 'ACTUALIZAR';


        let text = 'El grupo de atencion ' + nameGrupo + ' se actualizara con los cambios realizados ¿Desea continuar?';
        alertDlg(botones, 'Alerta tramita', text);
    }
}


function onEnviarGrupo(ev) {
    if (document.getElementById("idNameGrupo").value != undefined) {
        let strTmp = getStringMunicipiosYsedes();
        
        let arrMunSedes = strTmp.split("$");
        let botones = 1;
        let nameGrupo = document.getElementById('idNameGrupo').innerHTML;
        if (arrMunSedes[0] == "") {
            let text = 'Seleccione al menos un municipio!';
            alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        if (arrMunSedes[1] == "") {
            let text = 'Seleccione al menos una sede!';
            alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        g_enviarOpcion = 'INSERTAR';
        

        let text = 'El grupo de atencion ' + nameGrupo + ' se creara con las sedes y municipios seleccionados ¿Desea continuar?';
        alertDlg(botones, 'Alerta tramita', text);
       
    }
}

function updateGrupoAtencion() {
    let strName = document.getElementById("idNameGrupo").value;
    if (strName != undefined) {
        let strTmp = getStringMunicipiosYsedes();
        let arrMunSedes = strTmp.split("$");
        fnUpdateGrupoDeAtencion(strName, "", arrMunSedes[0], arrMunSedes[1])
    }
}

function crearGrupoAtencion() {
    let strName = document.getElementById("idNameGrupo").value;
    if (strName != undefined) {
        let strTmp = getStringMunicipiosYsedes();
        let arrMunSedes = strTmp.split("$");
        fnEnviaGrupoDeAtencion(strName, "", arrMunSedes[0], arrMunSedes[1])
    }
}

function fnUpdateGrupoDeAtencion(strName, strDescripcion, strMunicipios, strSedes) {
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strName + "',param2:'" + strDescripcion + "',param3:'" + strMunicipios + "',param4:'" + strSedes + "',param5:'" + strUser + "'}";
    //alert(dataParam);
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/updateGrupoDeAtencion",
        data: dataParam,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            onLimpiar(this);
            fnclearListAcordeon("idAccordionGrupos");
            fnGetNombresGruposAtencion();

        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });

}


function fnEnviaGrupoDeAtencion(strName, strDescripcion, strMunicipios, strSedes) {
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strName + "',param2:'" + strDescripcion + "',param3:'" + strMunicipios + "',param4:'" + strSedes + "',param5:'" + strUser + "'}";
    //alert(dataParam);
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/EnviaGrupoDeAtencion",
        data: dataParam,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            onLimpiar(this);
            fnclearListAcordeon("idAccordionGrupos");
            fnGetNombresGruposAtencion();

        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });

}

function fnGetNombresGruposAtencion() {
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strUser + "'}";
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/NombresGruposDeAtencion",
        data: dataParam,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            g_nameGruposDeAtencion = [];
            let tmp = result;
            tmp = tmp.replace(/[$]/gi, "\",\"");
            tmp = tmp.replace(/[|]/gi, "\":\"");
            
            tmp = "{\"" + tmp + "\"}"
            
            g_nameGruposDeAtencion = JSON.parse(tmp);
            fnGetGruposAtencionALL();
            
        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
}

function fnGetGruposAtencionALL() {
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strUser + "'}";
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/GruposAtencionAll",
        data: dataParam,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            g_GruposDeAtencionAll = [];
            let tmp = result;
            let arrTemp = tmp.split("$");
            let arrTemp2 = [];
            let ant = "";
            let strCadena = "";
            for (iIndex = 0; arrTemp.length > iIndex; iIndex++) {
                arrTemp2 = arrTemp[iIndex].split("|");
                g_GruposDeAtencionAll.push({ gpo: arrTemp2[0], mpio: arrTemp2[1], sede: arrTemp2[2] });

                if ( ant != arrTemp2[1]) {
                    if (strCadena == "")
                        strCadena = arrTemp2[1] + "|" + g_arrMunicipios[arrTemp2[1]] + "|" + arrTemp2[0];
                    else
                        strCadena += "$" + arrTemp2[1] + "|" + g_arrMunicipios[arrTemp2[1]] + "|" + arrTemp2[0];
                }
                ant = arrTemp2[1];
            }
            
            fnCreateListAcordeon("idAccordionGrupos", strCadena, 3,  g_nameGruposDeAtencion);
            
        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
}

function fnCreateListAcordeon(idElement, result, numero_c, srrName) {

    let arrMunicipios = result.split('$');
    let strID = "id" + numero_c;

    let arrayNameId;
    let iLength;
    let strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id=" + strID + "'itemAcoor-";
    let strAcoordeon1 = "'><h2 class='accordion-header' id='" + strID + "h2-";
    let strAcoordeon2 = "'><button class='accordion-button collapsed ' type='button' data-bs-toggle='collapse' data-bs-target='#" + strID + "Collapse-";
    let strAcoordeon3 = "' aria-expanded='false' aria-controls='Collapse-";
    let strAcoordeon4 = "'>";
    let strAcoordeon5 = "&nbsp;&nbsp;<span class='badge bg-primary  rounded-pill' style='color:white' id='" + strID + "badge-";
    let strAcoordeon51 = "'>14</span></button></h2><div id='" + strID + "Collapse-";
    let strAcoordeon6 = "' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#" + idElement + "'><div class='accordion-body'>";
    let strAcoordeon7 = "</div></div></div>";
    let strAcoordeonFin = '';
    iLength = arrMunicipios.length;
    let strList;
    let strAnt = '';
    var objList = { key: "", List: "" };
    let arrList = [];
    let numero = 0;
    try {

        strList = "";
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            numero++;
            arrayNameId = arrMunicipios[iIndex].split("|");


            strList += "<button type='button' class='list-group-item list-group-item-action' ondblclick='ondblclickSede(this)' id='" + strID + "idLiAcoor-" + arrayNameId[5] + "'>" +
                arrayNameId[1] + "<div class='pull-right' hidden id='" + strID + "XAcoor-" +
                arrayNameId[0] + "'><i class='fa fa-remove fa-1x' onclick='borrarItem(this)'></i></div></button>";
            if (strAnt != arrayNameId[2]) {

                strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id='" + strID + "itemAcoor-";
                strAcoordeon += arrayNameId[2] + strAcoordeon1 + arrayNameId[2] + strAcoordeon2 + arrayNameId[2] + strAcoordeon3 +
                    arrayNameId[1] + strAcoordeon4 + srrName[arrayNameId[2]] + strAcoordeon5 + arrayNameId[2] + strAcoordeon51 +
                    arrayNameId[2] + strAcoordeon6 + "<span id='" + strID + "list-" + arrayNameId[2] + "'></span>" + strAcoordeon7;
                strAcoordeonFin += strAcoordeon;
                objList["key"] = strID + "list-" + arrayNameId[2];

            }

            strAnt = arrayNameId[2]
            if (arrMunicipios.length > (iIndex + 1) && strAnt != arrMunicipios[iIndex + 1].split("|")[2]) {
                //strList += "</ul>"

                objList["list"] = strList;
                //alert(objList["key"] + '<-->' + objList["list"]);

                arrList.push({ key: objList["key"], list: objList["list"], size: numero });
                numero = 0;
                //strAcoordeonFin.replace(/[|]/gi, strList);
                strList = "";
            }

        }
        //strList += "</ul>"

        objList["list"] = strList;
        arrList.push({ key: objList["key"], list: objList["list"], size: numero });
        document.getElementById(idElement).innerHTML = strAcoordeonFin;
        // alert(arrList.length);
        //arrList.forEach(function (valor, indice, array) {
        //  alert(valor.key + '<->' + indice + '<->' + array[indice].key);
        //        });
        for (let jIndex = 0; arrList.length > jIndex; jIndex++) {

            document.getElementById(arrList[jIndex].key).innerHTML = arrList[jIndex].list;
            //alert("badge-" + arrList[jIndex].key.split("-")[1]);
            document.getElementById(strID + "badge-" + arrList[jIndex].key.split("-")[1]).innerHTML = arrList[jIndex].size;
            //alert(arrList[jIndex].key + '<->' + arrList[jIndex].list);
        }
    }
    catch (err) {
        alert("-E- fnCreateListAcordeon " + idElement);
    }
    return iLength;
}

function onchangeIncluirMunicipios(obj) {
    if (obj.checked == true) {
        fnAddAllMpioYsedes();
    }
    disableInput(false, "idEnviar,idLimpiar");
}

function onchangeIncluirSedes(obj) {
    
    inputs = document.getElementsByTagName('input');//los input con el id que tengan - son los unicos con check
    let arr = [];
    for (iIndex = 0; iIndex < inputs.length; ++iIndex) {
        arr = inputs[iIndex].id.split("-");
        if (arr.length == 2) {
            document.getElementById(inputs[iIndex].id).checked = true;
        }
    }
    
}

function onLimpiar(obj) {
    let element = document.getElementById("idNameGrupo");
    element.innerHTML = "";
    element.value = "";
    document.getElementById("idInputNombreGrupo").value = "";
    fnclearListAcordeon("idAccordionMpioSedes");
    document.getElementById("idInputTodosMunicipios").checked = false;
    document.getElementById("idInputTodasSedes").checked = false;
    disableInput(true,"");
    g_idGrupoAtencion = 0;
    document.getElementById("formGposAtencion").classList.remove("was-validated");
    document.getElementById("inputMessage").innerText = "Por favor ingrese un nombre para el grupo de atencion.";
}

function alertDlg(botones, titulo, mensaje) {
    if (botones == 1) {
        document.getElementById("idBtnCancelar").hidden = true;
    } else {
        document.getElementById("idBtnCancelar").hidden = false;
    }
    document.getElementById("alertModalLabel").innerHTML = titulo;
    document.getElementById("idMessageAlertDlg").innerHTML = mensaje;
    eventFire(document.getElementById("idAlerDialog"), "click");
}
function ondblclickAt(obj, parent) {
    //alert("ondblclickAt");
}

function onBorrarSede(obj) {
    
    let botones = 0;
    g_enviarOpcion = 'BORRAR';
    let nameGrupo = document.getElementById('idNameGrupo').innerHTML;
    
    let text = 'El grupo de atencion ' + nameGrupo+' se borrara de todas las sedes y municipios ¿Desea continuar?';
    alertDlg(botones, 'Alerta tramita', text);
    
    
}
function hiddenAlert() {
    document.getElementById("idAlertGrupo").innerText = "";
    document.getElementById("idAlertGrupo").hidden = true;
}

function showAlert(strText) {
    document.getElementById("idAlertGrupo").innerText = strText;
    document.getElementById("idAlertGrupo").hidden = false;
}

function fireAlert(strText) {
    setTimeout(function () { showAlert(strText); }, 500);
    setTimeout(function () { hiddenAlert(); }, 3000);
}

function onClickModal(valor) {
    if (valor == 1) {
        let nombreGrpo = g_nameGruposDeAtencion[g_idGrupoAtencion];
        switch (g_enviarOpcion) {
            case 'BORRAR':
                fnBorraGrupoDeAtencion();
                fireAlert("Se Borro el grupo de atencion " + nombreGrpo +"!");
                break;
            case 'INSERTAR':
                nombreGrpo = document.getElementById("idNameGrupo").value;
                fireAlert("Se creo el grupo de atencion " + nombreGrpo + "!");
                crearGrupoAtencion();
                
                break;
            case 'ACTUALIZAR':
                updateGrupoAtencion();
                fireAlert("Se actualizo el grupo de atencion " + nombreGrpo +"!");
                break;
        }
        
        
    }
}

function fnBorraGrupoDeAtencion() {
    let user = "yo mero";
    let dataParam = "{param1:'" + g_idGrupoAtencion + "',user:'" + user + "'}";
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/borrarGrupoDeAtencion",
        data: dataParam,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            onLimpiar(this);
            fnclearListAcordeon("idAccordionGrupos");
            fnGetNombresGruposAtencion();
        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
    
}

//------------------------------------------------------------------------sin cambios-----------------------------------------------------------------
function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function fnMpiosQueAtienden() {

    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/getMpiosQueAtienden",
        data: "{param:'nada'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            //fnCreateSelectMunicipiosList(result);
            let nlength = fnCreateListButtonDraggable("idMunicipiosQueAtienden", result, "Municipios que atienden");
            //document.getElementById('idNumQueAtMunicipios').innerHTML = nlength;
            fnGrupo_TodosMpiosYsedes()

        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
}

function fnCreateListButtonDraggable(idElement, result, boxTitle) {

    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    let sClass = "class= 'list-group-item list-group-item-action'";
    let title = "<button type='button' class='list-group-item list-group-item-action active' aria-current='true' disabled>" + boxTitle + "</button>";
    iLength = arrMunicipios.length;
    try {

        let strList = "<div id='" + idElement + "0' class='list-group' >";
        strList += title;
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            arrayNameId = arrMunicipios[iIndex].split("|");

            strList += "<button type='button' draggable='true' ondragstart='dragStart(event)' id='" + idElement + "-" + arrayNameId[0] + "' " + sClass + " ondblclick='ondblclickAt(this,this.parent)'>" + arrayNameId[1] +
                "<div class='pull-right' hidden id='idX-" + arrayNameId[0] + "'>" +
                "<i class='fa fa-remove fa-1x' onclick=borrarItem(this)></i ></div ></button>";
        }
        strList += "</div>"
        document.getElementById(idElement).innerHTML = strList;
    }
    catch (err) {
        alert("-E- fnCreayteList " + idElement);
    }
    return iLength;
}


function fnMpioYsedes(municipio) {

    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/getMpiosYsedes",
        data: "{param1:'" + municipio + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            let nlength = 0;
            
            if (result.length != 0) {
                nlength = fnCreateListAcordeonCehckBox("idAccordionMpioSedes", result, 1, "", g_arrMunicipios);
            }
            // document.getElementById('idNumConAtMunicipios').innerHTML = nlength;
        },
        failure: function (response) {
            alert(response.d + " idNumMpiosConAtt");
        }
    });

}
function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

function fnclearListAcordeon(idclear) {
    if (document.getElementById(idclear).children.length) {
        for (let iIndex = 0; document.getElementById(idclear).children.length > 0;) {
            document.getElementById(idclear).removeChild(document.getElementById(idclear).children[iIndex]);
        }
    }
}