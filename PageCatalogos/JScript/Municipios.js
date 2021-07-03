/// <reference path="../WebServices/CatWebService.asmx" />
/// <reference path="../WebServices/CatWebService.asmx" />

let g_arrMunicipios=[];

//Funcion inicial de la pagina
$(document).ready(function () {
    fnGetMunicipiosList();
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

            //let nlength = fnCreateList("idMpiosQueAtt", result);
            let nlength = document.getElementById('idNumQueAtMunicipios').innerHTML = nlength;
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
            let nlength = fnCreateListAcordeon("accordionExample", result);
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

            //let nlength = fnCreateListDraggable("idMpiosSinAtt", result);
            let nlength = fnCreateListButtonDraggable("idMpiosSinAtt", result);
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
            let tmp = result;
            tmp = tmp.replace(/[$]/gi, "\",\"");
            tmp = tmp.replace(/[|]/gi, "\":\"");
            tmp = "{\"" + tmp + "\"}"
            g_arrMunicipios = JSON.parse(tmp);

            fnMpiosQueAtienden();
            fnMpiosConAtencion();
            fnMpiosSinAtienden();
            
            //nlength = fnCreateList("idListMunicipios", result);
            document.getElementById('idNumMunicipios').innerHTML = nlength;
            
        },
        failure: function (response) {
            alert(response.d);
        }
    });
}


function fnCreateListDraggable(idElement, result) {
    
    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    iLength = arrMunicipios.length;
    try {

        let strList = "<ul id='" + idElement +"0'>";
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            arrayNameId = arrMunicipios[iIndex].split("|");

            strList += "<li draggable='true' ondragstart='drag(event)' id='" + idElement + "-" + arrayNameId[0] + "'>" + arrayNameId[1] + "<div class='pull-right hidden' id='idX-" + arrayNameId[0]+"'>" +
                "<i class='fa fa-remove fa-1x' onclick=borrarItem(this)></i ></div ></li>";
        }
        strList += "</ul>"
        document.getElementById(idElement).innerHTML = strList;
    }
    catch (err) {
        alert("-E- fnCreayteList " + idElement);
    }
    return iLength;
}

function fnCreateListButtonDraggable(idElement, result) {

    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    let sClass = "class= 'list-group-item list-group-item-action'";
    let title = "<button type='button' class='list-group-item list-group-item-action active' aria-current='true' disabled>Municipios sin Atencion</button>";
    iLength = arrMunicipios.length;
    try {

        let strList = "<div id='" + idElement + "0' class='list-group' >";
        strList += title;
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            arrayNameId = arrMunicipios[iIndex].split("|");

            strList += "<button draggable='true' ondragstart='drag(event)' id='" + idElement + "-" + arrayNameId[0] + "' " + sClass+" >" + arrayNameId[1] +
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

function fnCreateList(idElement, result) {

    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    iLength = arrMunicipios.length;
    try {

        let strList = "<ul id='" + idElement + "0'>";
        for (let iIndex = 0; arrMunicipios.length > iIndex; iIndex++) {

            arrayNameId = arrMunicipios[iIndex].split("|");

            strList += "<li  id='" + idElement + "-" + arrayNameId[0] + "'>" + arrayNameId[1] + "</li>";
        }
        strList += "</ul>"
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
    
    ev.preventDefault();
    if (document.getElementById("idAtiende").children.length == 1) {
        alert("Primero arrastra el municipio que atiende");
    } else {
        
        var data = ev.dataTransfer.getData("text");
        let municipio = data.split("-")[1];
        let itemBorrar = document.getElementById("idX-" + municipio);
        itemBorrar.className = "pull-right"
        document.getElementById("idAtendidos").appendChild(document.getElementById(data));
        
        document.getElementById("idNumSinAtMunicipios").innerHTML = document.getElementById("idMpiosSinAtt0").children.length;
    }

}

function dropAtiende(ev) {
    let strText = ev.dataTransfer.getData("text");
    
    let IdAtiende;
    if (document.getElementById("idAtiende").children.length >= 3) {
        alert("Cancela para limpiar las cajas");
        return;
    }
    if (strText.indexOf("itemAcoor") != -1) {//caso de todo un grupo
        IdAtiende = strText.split("-")[1];
        let listElement = document.getElementById("list-" + IdAtiende);
        let municipio;
        
        for (let iIndex = 0; listElement.children.length ; ) {

            //alert("Atendidos-->" + listElement.children.length);
            municipio = listElement.children[iIndex].id.split("-")[1]
            let itemBorrar = document.getElementById("idXAcoor-" + municipio);
            
            
            if (IdAtiende != municipio) {
                document.getElementById("idAtendidos").appendChild(listElement.children[iIndex]);
                itemBorrar.className = "pull-right"
            }
            else {
                document.getElementById("idAtiende").appendChild(listElement.children[iIndex]);
                itemBorrar.className = "pull-right hidden"
            }
        }
        return;
    }

    if (document.getElementById("idAtiende").children.length < 3) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        let municipio = data.split("-")[1];
        let itemBorrar = document.getElementById("idX-" + municipio);
        itemBorrar.className = "pull-right"
        document.getElementById("idAtiende").appendChild(document.getElementById(data));
        document.getElementById("idNumSinAtMunicipios").innerHTML = document.getElementById("idMpiosSinAtt0").children.length;

    } else {
        alert("Solo se permite un municipio que atiende");
    }
}
function onCancelarMunicipioAtiende(event) {
    let arr = [];
    let arr2 = [];
    let itemBorrar;
    
    if (!document.getElementById("idAtiende").children.length>1)
        return;
    if (document.getElementById("idAtiende").children[2].id.indexOf("SinAt") != -1) {
        
        let el = document.getElementById("idAtendidos");
        let arrayId = [];
        let municipio;
        let itemBorrar;
        if (el.children.length) {
            for (let iIndex = 0; el.children.length > iIndex; iIndex++) {
                if (el.children[iIndex].id.length) {
                    municipio = el.children[iIndex].id.split("-")[1];
                    itemBorrar = document.getElementById("idX-" + municipio);
                    itemBorrar.className = "pull-right hidden"
                    arrayId.push(el.children[iIndex].id);
                }
            }
        }
        for (let jIndex = 0; arrayId.length > jIndex; jIndex++) {
            document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(arrayId[jIndex]));
        }
        municipio = document.getElementById("idAtiende").children[2].id.split("-")[1];
        itemBorrar = document.getElementById("idX-" + municipio);
        itemBorrar.className = "pull-right hidden"
        document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(document.getElementById("idAtiende").children[2].id));
    
        return //caso de lista sin atencion
    }

    for (let iIndex = 0; document.getElementById("idAtiende").children.length > iIndex; iIndex++) {
        if (document.getElementById("idAtiende").children[iIndex].id) {
            arr = document.getElementById("idAtiende").children[iIndex].id.split("-");
            itemBorrar = document.getElementById("idXAcoor-" + arr[1] );
            itemBorrar.className = "pull-right hidden"
            document.getElementById("list-"+arr[1]).appendChild(document.getElementById("idAtiende").children[iIndex]);
        }
        
    }
    
    for (let jIndex = 0; document.getElementById("idAtendidos").children.length; jIndex++) {
        if (document.getElementById("idAtendidos").children[jIndex].id) {
            arr2 = document.getElementById("idAtendidos").children[jIndex].id.split("-");
            itemBorrar = document.getElementById("idXAcoor-" + arr2[1]);
            itemBorrar.className = "pull-right hidden"
            document.getElementById("list-" + arr[1]).appendChild(document.getElementById("idAtendidos").children[jIndex]);
            jIndex = 0;
        }
    }
}

function onEnviarMunicipioAtiende(event) {
    let param1 = "param1:'";
    let param2 = "param2:'";
    let arr = [];
    let isAcoor = -1;
    let element;
    for (let iIndex = 0; document.getElementById("idAtiende").children.length > iIndex; iIndex++) {
        element = document.getElementById("idAtiende").children[iIndex];
        arr = element.id.split("-");
        if (arr.length == 2) {
            param1 += arr[1];
            isAcoor = element.id.indexOf("Acoor")
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
    
    fnEnviarMunicipioAtiende(param1, param2, isAcoor );
    
        
    clearParent("idAtiende", "Municipio que Atiende");
    clearParent("idAtendidos","Municipios atendidos");
}

function clearParent(strID,title) {
    let parent = document["getElementById"](strID);
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
    var node = document["createElement"]("button"); 
    var textnode = document["createTextNode"](title);         
    node["appendChild"](textnode);                              
    node["className"] = "list-group-item list-group-item-action active";
    node["type"] ="buttom"
    document["getElementById"](strID)["appendChild"](node);

    node = document["createElement"]("button");
    textnode = document["createTextNode"]("Arrastra aqui");
    node["appendChild"](textnode);
    node["className"] = "list-group-item list-group-item-action";
    node["type"] = "buttom"
    document["getElementById"](strID)["appendChild"](node);
    
}

function fnEnviarMunicipioAtiende(param1, param2, isAcoor) {
    let data01;
    let proce;
    if (isAcoor == -1) {
        data01 = "{" + param1 + "," + param2 + "}";
        proce = "EnviarMunicipioAtiende";
    } else {
        data01 = "{" + param1 + "," + param2 + "}";
        proce = "updateMunicipioAtiende";
    }
    $.ajax({
        type: "POST",
        url: "../WebServices/CatWebService.asmx/" + proce,
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

function fnCreateListAcordeon(idElement, result) {
    
    let arrMunicipios = result.split('$');
    let arrayNameId;
    let iLength;
    let strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='drag(event)' id='itemAcoor-";
    let strAcoordeon1 =  "'><h2 class='accordion-header' id='";
    let strAcoordeon2 = "'><button class='accordion-button collapsed ' type='button' data-bs-toggle='collapse' data-bs-target='#Collapse-";
    let strAcoordeon3 = "' aria-expanded='false' aria-controls='Collapse-";
    let strAcoordeon4 = "'>";
    let strAcoordeon5 = "&nbsp;&nbsp;<span class='badge bg-primary  rounded-pill' style='color:white' id='badge-";
    let strAcoordeon51=    "'>14</span></button></h2><div id='Collapse-";
    let strAcoordeon6 = "' class='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'><div class='accordion-body'>";
    let strAcoordeon7 = "</div></div></div>";
    let strAcoordeonFin ='';
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
            /*strList += "<li  id='idLiAcoor-" + arrayNameId[0] + "'>" + arrayNameId[1] + "<div class='pull-right hidden' id='idXAcoor-" +
                arrayNameId[0] + "'><i class='fa fa-remove fa-1x' onclick='borrarItem(this)'></i></div></li>";*/
            
            strList += "<button type='button' class='list-group-item list-group-item-action' id='idLiAcoor-" + arrayNameId[0] + "'>" + arrayNameId[1] + "<div class='pull-right hidden' id='idXAcoor-" +
                    arrayNameId[0] + "'><i class='fa fa-remove fa-1x' onclick='borrarItem(this)'></i></div></button>";
            if (strAnt != arrayNameId[2]) {
                
                strAcoordeon = "<div class='accordion-item' draggable='true' ondragstart='drag(event)' id='itemAcoor-";
                strAcoordeon += arrayNameId[2] + strAcoordeon1 + arrayNameId[2] + strAcoordeon2 + arrayNameId[2] + strAcoordeon3 +
                    arrayNameId[1] + strAcoordeon4 + g_arrMunicipios[arrayNameId[2]] + strAcoordeon5 + arrayNameId[2] + strAcoordeon51 +
                    arrayNameId[2] + strAcoordeon6 + "<span id='list-" + arrayNameId[2] + "'></span>" + strAcoordeon7;
                strAcoordeonFin += strAcoordeon;
                objList["key"]=  "list-" + arrayNameId[2];
                
            }
            
            strAnt = arrayNameId[2]
            if (arrMunicipios.length > (iIndex + 1) && strAnt != arrMunicipios[iIndex + 1].split("|")[2]) {
                //strList += "</ul>"
                
                objList["list"] = strList;
                //alert(objList["key"] + '<-->' + objList["list"]);
                
                arrList.push({ key: objList["key"], list: objList["list"], size: numero});
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
        /*arrList.forEach(function (valor, indice, array) {
            alert(valor.key + '<->' + indice + '<->' + array[indice].key);
        });*/
        for (let jIndex = 0; arrList.length > jIndex; jIndex++) {
            document.getElementById(arrList[jIndex].key).innerHTML = arrList[jIndex].list;
            document.getElementById("badge-" + arrList[jIndex].key.split("-")[1]).innerHTML = arrList[jIndex].size;
            //alert(arrList[jIndex].key + '<->' + arrList[jIndex].list);
        }
    }
    catch (err) {
        alert("-E- fnCreateListAcordeon " + idElement);
    }
    return iLength;
}

function borrarItem(Element) {
    let arrayId = [];
    let arrayIdmove = [];
    if (Element.parentNode.parentNode.id.indexOf("idLiAcoor") != -1) {
        let el = document.getElementById("idAtiende");
        arrayId = el.children[2].id.split("-");
        //alert(Element.parentNode.parentNode.id + "<-->" + el.children[1].id)
        if (Element.parentNode.parentNode.id != el.children[1].id) {
            let itemBorrar = document.getElementById("idXAcoor-" + Element.parentNode.parentNode.id.split("-")[1]);
            itemBorrar.className = "pull-right hidden";
            document.getElementById("list-" + arrayId[1]).appendChild(Element.parentNode.parentNode);
        } else {
            let el = document.getElementById("idAtendidos");
            if (el.children.length) {
                let municipio;
                let itemBorrar;
                for (let iIndex = 0; el.children.length > iIndex; iIndex++) {
                    if (el.children[iIndex].id.length) {
                        municipio = el.children[iIndex].id.split("-")[1];
                        itemBorrar = document.getElementById("idXAcoor-" + municipio);
                        itemBorrar.className = "pull-right hidden"
                        arrayIdmove.push(el.children[iIndex].id);
                    }

                }
            }
            for (let jIndex = 0; arrayIdmove.length > jIndex; jIndex++) {
                document.getElementById("list-" + arrayId[1]).appendChild(document.getElementById(arrayIdmove[jIndex]));
            }
            let itemBorrar = document.getElementById("idXAcoor-" + arrayId[1]);
            itemBorrar.className = "pull-right hidden"
            document.getElementById("list-" + arrayId[1]).appendChild(document.getElementById(Element.parentNode.parentNode.id));
        }
        return;
    }
    
    
    if (Element.parentNode.parentNode.parentNode.id == "idAtiende") {
        let el = document.getElementById("idAtendidos");
        if (el.children.length) {
            for (let iIndex = 0; el.children.length > iIndex; iIndex++) {
                if (el.children[iIndex].id.length) {
                    let municipio = el.children[iIndex].id.split("-")[1];
                    let itemBorrar = document.getElementById("idX-" + municipio);
                    itemBorrar.className = "pull-right hidden"
                    arrayId.push(el.children[iIndex].id);
                }
               
            }
        }
        for (let jIndex = 0; arrayId.length > jIndex; jIndex++) {
            document.getElementById("idMpiosSinAtt0").appendChild(document.getElementById(arrayId[jIndex]));
        }
    }
    Element.parentNode.className = "pull-right hidden"
    document.getElementById("idMpiosSinAtt0").appendChild(Element.parentNode.parentNode);
    
}