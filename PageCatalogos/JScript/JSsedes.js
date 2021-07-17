/// <reference path="../WebServices/CatWebService.asmx" />
/// <reference path="../WebServices/CatWebService.asmx" />
                   
let arrayInput = ["idInputSedeName", "idInputDireccion", "idInputName", "idInputApellidoP", "idInputApellidoM", "idInputCorreo", "idInputTelefono"];
let g_arrMunicipios = [];
let g_arrMunicipiosSedes = [];
let g_municipioForm = "";
let g_formParam = "";
let g_idSede="";

//Funcion inicial de la pagina
$(document).ready(function () {
    
    fnGetMunicipiosList();
});

function validaInputs() {
    let valueInput;
    for (iIndex = 0; arrayInput.length > iIndex; iIndex++) {
        valueInput = document.getElementById(arrayInput[iIndex]).value;
        if (valueInput == "" || valueInput == undefined)
        {
            return false
        }
    }
    return true;
}
/*
(function () {
    'use strict'
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()*/

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
            let tmp = result;
            tmp = tmp.replace(/[$]/gi, "\",\"");
            tmp = tmp.replace(/[|]/gi, "\":\"");
            tmp = "{\"" + tmp + "\"}"
            g_arrMunicipios = JSON.parse(tmp);
            
            fnMpiosQueAtienden();
            
            fnTodosMpiosYsedes();
            
            
        },
        failure: function (response) {
            alert(response.d);
        }
    });
}

function fnTodosMpiosYsedes() {
    
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
            let arrTmp2=[];
            for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
                arrTmp2 = arrTmp[iIndex].split("|");
                g_arrMunicipiosSedes.push({ id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7]});
            }

            //g_arrMunicipiosSedes = JSON.parse(tmp);
            
            if (result.length != 0) {
                nlength = fnCreateListAcordeon("idAccordionTodosMpioSedes", result,0);
            } /*else
                fnclearListAcordeon("idAccordionMpioSedes");*/
            
            document.getElementById('idNumConAtMunicipios').innerHTML = nlength;
        },
        failure: function (response) {
            alert(response.d + " idNumMpiosConAtt");
        }
    });

}

function fnMpioYsedes(municipio) {

    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/getMpiosYsedes",
        data: "{param1:'" + municipio+"'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            let nlength = 0;

            if (result.length != 0) {
                nlength = fnCreateListAcordeon("idAccordionMpioSedes", result,1);
            } 
           // document.getElementById('idNumConAtMunicipios').innerHTML = nlength;
        },
        failure: function (response) {
            alert(response.d + " idNumMpiosConAtt");
        }
    });

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
            let nlength = fnCreateListButtonDraggable("idMunicipiosQueAtienden", result,"Municipios que atienden");
            //document.getElementById('idNumQueAtMunicipios').innerHTML = nlength;
            
        },
        failure: function (response) {
            alert(response.d + "#2");
        }
    });
}

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


function fnCreateListButtonDraggable(idElement, result,boxTitle) {

    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    let sClass = "class= 'list-group-item list-group-item-action'";
    let title = "<button type='button' class='list-group-item list-group-item-action active' aria-current='true' disabled>" + boxTitle+"</button>";
    iLength = arrMunicipios.length;
    try {

        let strList = "<div id='" + idElement  +"0' class='list-group' >";
        strList += title;
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            arrayNameId = arrMunicipios[iIndex].split("|");

            strList += "<button draggable='true' ondragstart='dragStart(event)' id='" + idElement + "-" + arrayNameId[0] + "' " + sClass + " ondblclick='ondblclickAt(this,this.parent)'>" + arrayNameId[1] +
                "<div class='pull-right hidden' id='idX-" + arrayNameId[0] + "'>" +
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

function fnCreateListAcordeon(idElement, result, numero_c) {
    
    let arrMunicipios = result.split('$');
    let strID = "id" + numero_c;
    
    let arrayNameId;
    let iLength;
    let strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id=" + strID +"'itemAcoor-";
    let strAcoordeon1 = "'><h2 class='accordion-header' id='" + strID +"h2-";
    let strAcoordeon2 = "'><button class='accordion-button collapsed ' type='button' data-bs-toggle='collapse' data-bs-target='#" + strID+"Collapse-";
    let strAcoordeon3 = "' aria-expanded='false' aria-controls='Collapse-";
    let strAcoordeon4 = "'>";
    let strAcoordeon5 = "&nbsp;&nbsp;<span class='badge bg-primary  rounded-pill' style='color:white' id='" + strID+ "badge-";
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
                arrayNameId[1] + "<div class='pull-right hidden' id='" + strID + "XAcoor-" +
                arrayNameId[0] + "'><i class='fa fa-remove fa-1x' onclick='borrarItem(this)'></i></div></button>";
            if (strAnt != arrayNameId[2]) {

                strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='dragStart(event)' id='" + strID +"itemAcoor-";
                strAcoordeon += arrayNameId[2] + strAcoordeon1 + arrayNameId[2] + strAcoordeon2 + arrayNameId[2] + strAcoordeon3 +
                    arrayNameId[1] + strAcoordeon4 + g_arrMunicipios[arrayNameId[2]] + strAcoordeon5 + arrayNameId[2] + strAcoordeon51 +
                    arrayNameId[2] + strAcoordeon6 + "<span id='" + strID +"list-" + arrayNameId[2] + "'></span>" + strAcoordeon7;
                strAcoordeonFin += strAcoordeon;
                objList["key"] = strID+"list-" + arrayNameId[2];

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
            document.getElementById(strID +"badge-" + arrList[jIndex].key.split("-")[1]).innerHTML = arrList[jIndex].size;
            //alert(arrList[jIndex].key + '<->' + arrList[jIndex].list);
        }
    }
    catch (err) {
        alert("-E- fnCreateListAcordeon " + idElement);
    }
    return iLength;
}

function fnclearListAcordeon(idclear) {
    if (document.getElementById(idclear).children.length) {
        for (let iIndex = 0; document.getElementById(idclear).children.length > 0;) {
            document.getElementById(idclear).removeChild(document.getElementById(idclear).children[iIndex]);
        }
    }
}


function dropSede(ev) {
    var data = ev.dataTransfer.getData("text");
    onLimpiarSede(this);

    //primer borramos si es que ya tenemos uno
    fnclearListAcordeon("idAccordionMpioSedes");
    
    let arrId = data.split("-");
    g_municipioForm = arrId[1];
    document.getElementById("idMunicipioName").innerHTML = g_arrMunicipios[arrId[1]];
    fnMpioYsedes(arrId[1]);
    
    
}
function allowDrop(ev) {

        ev.preventDefault();
}
function dragStart(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
}

function ondblclickSede(obj) {
    
    
    let element = document.getElementById(obj.id);
    g_idSede=obj.id.split("-")[1];
    let idEle = element.parentNode.id.split("-")[1];
    
    let arrTemp = g_arrMunicipiosSedes.filter(value => value.id == idEle)
    
    let arrSede = arrTemp.filter(value => value.idS == obj.id.split("-")[1]);
    
    if (element.parentNode.id.indexOf("id0list") == -1) {
        document.getElementById("idInputSedeName").value = arrSede[0]["n1"];
        document.getElementById("idInputDireccion").value = arrSede[0]["d1"];
        let objResponsable = JSON.parse(arrSede[0]["r1"]);
        document.getElementById("idInputName").value = objResponsable["name"];
        document.getElementById("idInputApellidoP").value = objResponsable["AP"];
        document.getElementById("idInputApellidoM").value = objResponsable["AM"];
        document.getElementById("idInputCorreo").value = arrSede[0]["c1"]
        document.getElementById("idInputTelefono").value = arrSede[0]["t1"]

        document.getElementById("idSedeInserta").value = arrSede[0]["idS"];
    }//aqui es el doble click del caso del acoordeon
    g_formParam = getFormParam(0);
}
function onBorrarSede(event) {
    if (validaInputs() == true) {
        let valueInserta = document.getElementById("idSedeInserta").value;
        if (valueInserta == "") {
            //solo borra inputs
            onLimpiarSede(this);
            return;
        }
        //borra hasta bd
        let dataParam = "{param1:'" + g_idSede + "',param2:'usuario'}";
        
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/deleteSede",
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                
                fnTodosMpiosYsedes();
                fnMpioYsedes(g_municipioForm);
                onLimpiarSede(this);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }
    
}

function onEnviarSede(event) {
    if (g_municipioForm == "") {
        alert("-asa- Para insertar una sede, primero selecciona un municipio ")
        return;
    }
    if (validaInputs() == true) {
        let dataParam = getFormParam(0);
        
        let endPoint = "insertaSede";
        let valueInserta = document.getElementById("idSedeInserta").value;
        if (valueInserta == "") {

            endPoint = "insertaSede";
        }
        else {
            endPoint = "updateSede";
            if (g_formParam == dataParam) {
                
                alert("-asa- No hay cambios");
                return;
            }
            dataParam = getFormParam(1);
        }
        
        $.ajax({
            type: "POST",
            url: "../WebServices/CatWebService.asmx/" + endPoint,
            data: dataParam,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var result = response.d;
                fnTodosMpiosYsedes();
                fnMpioYsedes(g_municipioForm);
                onLimpiarSede(this);
            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }
    
    

}

function onLimpiarSede(event) {
    
    let valueInput;
    for (iIndex = 0; arrayInput.length > iIndex; iIndex++) {
        valueInput = document.getElementById(arrayInput[iIndex]).value="";
    }
    document.getElementById("idSedeInserta").value = "";
    g_formParam = "";
    g_idSede = "";
}

function ondblclickAt(obj, p) {
    //es del panel de la izqierda
    fnclearListAcordeon("idAccordionMpioSedes");
    onLimpiarSede(this);
    let arrId = obj.id.split("-");
    g_municipioForm = arrId[1];
    document.getElementById("idMunicipioName").innerHTML = g_arrMunicipios[g_municipioForm];
    fnMpioYsedes(g_municipioForm);
}

function getFormParam(valor)
{
    
    let dataPram = '';
    for (iIndex = 0; arrayInput.length > iIndex; iIndex++) {
        if (dataPram.length == 0) {
            dataPram = "{'" + arrayInput[iIndex].replace("idInput", "") + "':'" + document.getElementById(arrayInput[iIndex]).value;
        } else {
            dataPram += "','" + arrayInput[iIndex].replace("idInput", "") + "':'" + document.getElementById(arrayInput[iIndex]).value;
        }
    }
    if (valor == 0) {
        dataPram += "','Municipio':'" + g_municipioForm + "'}";
    } else {
        dataPram += "','sede':'" + g_idSede + "'}";
    }
    return dataPram;
}