
let g_arrMunicipiosSedes = [];
let g_idGrupoAtencion = 0;
let g_enviarOpcion = 'NADA'
let g_arrayInput = ["idEnviar", "idBorrar", "idLimpiar", "idActualizar"];

$(document).ready(function () {
    
    catGen.catUtility.requestMunicipiosList(onQueryDataMunicipios);
    
    catGen.catUtility.disableInput(true, "");
    
});

$(function () {
    $("#includeModal").load("modal.html");
});

function onCrearGrupo(event) {
    let element = document.getElementById("idInputNombreGrupo");
    
    if (element.value == "") {
        document.getElementById("formGposAtencion").classList.add("was-validated");
        return;
    }
    element.value = element.value.toUpperCase().trim();
    
    for (var prop in catGen.catUtility.getArrNameGruposDeAtencion()) {
        if (catGen.catUtility.getNameGruposDeAtencion(prop) == element.value) {
            document.getElementById("inputMessage").innerText = "El grupo de atencion " + element.value+" ya existe!";
            element.value = "";
            document.getElementById("formGposAtencion").classList.add("was-validated");
            return;
        }
            
    }
   
    catGen.catUtility.disableInput(false, "idLimpiar");
    let elementTitle = document.getElementById("idNameGrupo");
    elementTitle.value = element.value;
    elementTitle.innerHTML = element.value;

    document.getElementById("idInputTodosMunicipios").disabled= false;
    document.getElementById("idInputTodasSedes").disabled = false;
        
}
function dropMunicipio(ev) {
    
    let data = ev.dataTransfer.getData("text");
    let element = document.getElementById("idNameGrupo");
    
    if ((element.value == undefined || element.value == "") && data.indexOf("itemAcoor")==-1 ) {
        document.getElementById("formGposAtencion").classList.add("was-validated");
        return;
    }
    
    if (data.indexOf("itemAcoor") == -1) {
    //lado izq
        catGen.catUtility.disableInput(false, "idEnviar,idLimpiar");
        
        if (document.getElementById("idAccordionMpioSedes").childElementCount == 0) {
            catGen.catUtility.requestMpioYsedes(data.split("-")[1], onQueryDataMpioYsedes);
        }
        else {
            fnAddMpioYsedes(data.split("-")[1]);
        }
    } else {
        //llega del lado derecho
        
        catGen.catUtility.disableInput(false, "idActualizar,idBorrar,idLimpiar");
        let idNameGrupo = data.split("-")[1];
        document.getElementById("idInputNombreGrupo").value = catGen.catUtility.getNameGruposDeAtencion(idNameGrupo);
        document.getElementById("idNameGrupo").innerHTML = catGen.catUtility.getNameGruposDeAtencion(idNameGrupo);
        document.getElementById("idNameGrupo").value = catGen.catUtility.getNameGruposDeAtencion(idNameGrupo);
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
    
    catGen.catUtility.fnCreateListAcordeonCehckBox("idAccordionMpioSedes", result, 1, "append", catGen.catUtility.getArrNameMunicipio());
   
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

    catGen.catUtility.fnCreateListAcordeonCehckBox("idAccordionMpioSedes", result, 1, "append", catGen.catUtility.getArrNameMunicipio());

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
            catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        if (arrMunSedes[1] == "") {
            let text = 'Seleccione al menos una sede!';
            catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        g_enviarOpcion = 'ACTUALIZAR';


        let text = 'El grupo de atencion ' + nameGrupo + ' se actualizara con los cambios realizados ¿Desea continuar?';
        catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
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
            catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        if (arrMunSedes[1] == "") {
            let text = 'Seleccione al menos una sede!';
            catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
            return;
        }
        g_enviarOpcion = 'INSERTAR';
        botones = 0;
        let text = 'El grupo de atencion ' + nameGrupo + ' se creara con las sedes y municipios seleccionados ¿Desea continuar?';
        catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
       
    }
}




function onchangeIncluirMunicipios(obj) {
    if (obj.checked == true) {
        fnAddAllMpioYsedes();
    }
    catGen.catUtility.disableInput(false, "idEnviar,idLimpiar");
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
    catGen.catUtility.fnclearListAcordeon("idAccordionMpioSedes");
    document.getElementById("idInputTodosMunicipios").checked = false;
    document.getElementById("idInputTodasSedes").checked = false;
    catGen.catUtility.disableInput(true,"");
    g_idGrupoAtencion = 0;
    document.getElementById("formGposAtencion").classList.remove("was-validated");
    document.getElementById("inputMessage").innerText = "Por favor ingrese un nombre para el grupo de atencion.";
}

function onclickAt() {
    catGen.catUtility.clearListButtonsActive(this.parentNode.id);
    this.classList.add("active");
}

function ondblclickAt() {
    
    let element = document.getElementById("idNameGrupo");

    if (element.value == undefined || element.value == "")  {
        document.getElementById("formGposAtencion").classList.add("was-validated");
        return;
    }

    //lado izq
    catGen.catUtility.disableInput(false, "idEnviar,idLimpiar");

    if (document.getElementById("idAccordionMpioSedes").childElementCount == 0) {
        catGen.catUtility.requestMpioYsedes(this.id.split("-")[1], onQueryDataMpioYsedes);
    }
    else {
        fnAddMpioYsedes(this.id.split("-")[1]);
    }
    //xxxx
}
function ondblclickGrupos() {
    //no se usa pero debe existir la fn
    //alert("ondblclickGrupos");
}

function onBorrarSede(obj) {
    
    let botones = 0;
    g_enviarOpcion = 'BORRAR';
    let nameGrupo = document.getElementById('idNameGrupo').innerHTML;
    
    let text = 'El grupo de atencion ' + nameGrupo+' se borrara de todas las sedes y municipios ¿Desea continuar?';
    catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
    
    
}


function onClickModal(valor) {
    if (valor == 1) {
        let nombreGrpo = catGen.catUtility.getNameGruposDeAtencion(g_idGrupoAtencion);
        switch (g_enviarOpcion) {
            case 'BORRAR':
                borrarGrupoAtencion();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se Borro el grupo de atencion " + nombreGrpo + "!", 3000);
                break;
            case 'INSERTAR':
                nombreGrpo = document.getElementById("idNameGrupo").value;
                crearGrupoAtencion();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se creo el grupo de atencion " + nombreGrpo + "!", 3000);
                break;
            case 'ACTUALIZAR':
                updateGrupoAtencion();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se actualizo el grupo de atencion " + nombreGrpo + "!", 3000);
                break;
        }
    }
}

function updateGrupoAtencion() {
    let strName = document.getElementById("idNameGrupo").value;
    if (strName != undefined) {
        let strTmp = getStringMunicipiosYsedes();
        let arrMunSedes = strTmp.split("$");
        let strUser = "yo mero";
        let strDescripcion = "";
        let dataParam = "{param1:'" + strName + "',param2:'" + strDescripcion + "',param3:'" + arrMunSedes[0] + "',param4:'" + arrMunSedes[1] + "',param5:'" + strUser + "'}";
        catGen.catUtility.requestUpdateGrupoDeAtencion(dataParam, onQueryDataUpdateGrupoDeAtencion)
    }
}

function crearGrupoAtencion() {
    let strName = document.getElementById("idNameGrupo").value;

    if (strName != undefined) {
        let strTmp = getStringMunicipiosYsedes();
        let arrMunSedes = strTmp.split("$");
        let strUser = "yo mero";
        let strDescripcion = "";
        let dataParam = "{param1:'" + strName + "',param2:'" + strDescripcion + "',param3:'" + arrMunSedes[0] + "',param4:'" + arrMunSedes[1] + "',param5:'" + strUser + "'}";
        catGen.catUtility.requestCreateGrupoDeAtencion(dataParam, onQueryDataCreateGrupoDeAtencion);
    }
}


function borrarGrupoAtencion() {
    let strName = document.getElementById("idNameGrupo").value;
    if (strName != undefined) {

        let user = "yo mero";
        let dataParam = "{param1:'" + g_idGrupoAtencion + "',user:'" + user + "'}";
        catGen.catUtility.requestBorraGrupoDeAtencion(dataParam, onQueryDataBorraGrupoDeAtencion);
    }
}


function dragStart(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
}
/*-------------------------------------------------------------------------------------------------------------------*/

function onQueryDataMunicipios(result) {
    paramValue = "{param:'nada'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
}

function onQueryDataMpiosQueAtienden(result) {
    catGen.catUtility.fnCreateListButtonDraggable("idMunicipiosQueAtienden", result, "Municipios que atienden", dragStart, ondblclickAt, onclickAt);
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
}

function onQueryDataGrupoTodosMpiosYsedes(result) {
    
    var tmp = result;
    g_arrMunicipiosSedes = [];//limpiamos el arreglo
    let arrTmp = tmp.split("$");
    let arrTmp2 = [];
    for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
        arrTmp2 = arrTmp[iIndex].split("|");
        g_arrMunicipiosSedes.push({ id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7] });
    }
    
    let dataParam = { param1: "yo mero"};
    catGen.catUtility.requestCatGruposAtencion(dataParam, onQueryDataCatGruposAtencion)

}

function onQueryDataCatGruposAtencion(result) {
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strUser + "'}";
    catGen.catUtility.requestNombresGruposAtencion(dataParam, onQueryDataNombresGruposAtencion);
}

function onQueryDataNombresGruposAtencion(result) {
    
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strUser + "'}";
    catGen.catUtility.requestGruposAtencionALL(dataParam, onQueryGruposAtencionALL);
}

function onQueryGruposAtencionALL(result) {
    
    let tmp = result;
    let arrTemp = tmp.split("$");
    let arrTemp2 = [];
    let ant = "";
    let strCadena = "";
    for (iIndex = 0; arrTemp.length > iIndex; iIndex++) {
        arrTemp2 = arrTemp[iIndex].split("|");
        g_GruposDeAtencionAll.push({ gpo: arrTemp2[0], mpio: arrTemp2[1], sede: arrTemp2[2] });

        if (ant != arrTemp2[1]) {
            if (strCadena == "")
                strCadena = arrTemp2[1] + "|" + catGen.catUtility.getNameMunicipio(arrTemp2[1]) + "|" + arrTemp2[0];
            else
                strCadena += "$" + arrTemp2[1] + "|" + catGen.catUtility.getNameMunicipio(arrTemp2[1]) + "|" + arrTemp2[0];
        }
        ant = arrTemp2[1];
    }
    console.log("asa-1- " + strCadena);
    catGen.catUtility.fnCreateListAcordeon("idAccordionGrupos", strCadena, 3, catGen.catUtility.getNameGruposDeAtencion, ondblclickGrupos);

}


function onQueryDataMpioYsedes(result) {
    if (result.length != 0) {
        nlength = catGen.catUtility.fnCreateListAcordeonCehckBox("idAccordionMpioSedes", result, 1, "", catGen.catUtility.getArrNameMunicipio());
    }
    // document.getElementById('idNumConAtMunicipios').innerHTML = nlength;
}

function onQueryDataUpdateGrupoDeAtencion(result) {
    onLimpiar(this);
    catGen.catUtility.fnclearListAcordeon("idAccordionGrupos");
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strUser + "'}";
    catGen.catUtility.requestNombresGruposAtencion(dataParam, onQueryDataNombresGruposAtencion);
}

function onQueryDataCreateGrupoDeAtencion(result) {
    onLimpiar(this);
    catGen.catUtility.fnclearListAcordeon("idAccordionGrupos");
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strUser + "'}";
    catGen.catUtility.requestNombresGruposAtencion(dataParam, onQueryDataNombresGruposAtencion);
}


function onQueryDataBorraGrupoDeAtencion(result) {
    onLimpiar(this);
    catGen.catUtility.fnclearListAcordeon("idAccordionGrupos");
    let strUser = "yo mero";
    let dataParam = "{param1:'" + strUser + "'}";
    catGen.catUtility.requestNombresGruposAtencion(dataParam, onQueryDataNombresGruposAtencion);
}