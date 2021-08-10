let arrayInput = ["idInputSedeName", "idInputDireccion", "idInputName", "idInputApellidoP", "idInputApellidoM", "idInputCorreo", "idInputTelefono"];
let g_arrayInput = ["idEnviar", "idBorrar", "idCancelar", "idActualizar"];

let g_arrMunicipiosSedes = [];
let g_municipioForm = "";
let g_formParam = "";
let g_idSede="";

//Funcion inicial de la pagina
$(document).ready(function () {
    
    catGen.catUtility.requestMunicipiosList(onQueryDataMunicipios);
    catGen.catUtility.disableInput(true, "");

});

$(function () {
    $("#includeModal").load("modal.html");
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
        

        getMpioAtiendeList(document.getElementById('idMunicipios').value);
    } catch (err) {
        alert(err);
    }
}


function dropSede(ev) {
    var data = ev.dataTransfer.getData("text");
    onLimpiarSede(this);
    
    //primer borramos si es que ya tenemos uno
    catGen.catUtility.fnclearListAcordeon("idAccordionMpioSedes");
    
    let arrId = data.split("-");
    g_municipioForm = arrId[1];
    document.getElementById("idMunicipioName").value = catGen.catUtility.getNameMunicipio(arrId[1]);
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
    catGen.catUtility.disableInput(false, "idEnviar,idCancelar");
}

function allowDrop(ev) {

        ev.preventDefault();
}
function dragStart(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
}

function ondblclickSede() {
    
    let element = document.getElementById(this.id);
    g_idSede=this.id.split("-")[1];
    let idEle = element.parentNode.id.split("-")[1];
    let arrTemp = g_arrMunicipiosSedes.filter(value => value.id == idEle)
    let arrSede = arrTemp.filter(value => value.idS == this.id.split("-")[1]);
    document.getElementById("idMunicipioName").value = catGen.catUtility.getNameMunicipio(idEle);
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
        catGen.catUtility.disableInput(false, "idBorrar,idCancelar,idActualizar");
    }//aqui es el doble click del caso del acoordeon
    g_formParam = getFormParam(0);
}


function onLimpiarSede(event) {
    for (iIndex = 0; arrayInput.length > iIndex; iIndex++) {
        valueInput = document.getElementById(arrayInput[iIndex]).value="";
    }
    document.getElementById("idSedeInserta").value = "";
    g_formParam = "";
    g_idSede = "";
    catGen.catUtility.disableInput(true, "");
    document.getElementById("idMunicipioName").value = "Arrastra aqui";
    document.getElementById("formSedes").classList.remove("was-validated");
}

function onClickAT() {
    catGen.catUtility.clearListButtonsActive(this.parentNode.id);
    this.classList.add("active");
}

function ondblclickAt() {
    
    //es del panel de la izqierda
    catGen.catUtility.fnclearListAcordeon("idAccordionMpioSedes");
    onLimpiarSede(this);
    let arrId = this.id.split("-");
    g_municipioForm = arrId[1];
    document.getElementById("idMunicipioName").value = catGen.catUtility.getNameMunicipio(g_municipioForm);
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
    catGen.catUtility.disableInput(false, "idCancelar,idEnviar");
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

function onBorrarSede(event) {
    if (catGen.catUtility.validaInputs("formSedes", arrayInput) == true) {
        let botones = 0;
        g_enviarOpcion = "BORRAR";
        let nameSede = document.getElementById('idInputSedeName').value;
        let text = "la sede con el nombre '" + nameSede + "' se borrara del municipio ¿Desea continuar?";
        catGen.catUtility.alertDlg(botones, "Alerta tramita", text);
    }
}

function onActualizar(ev) {
    onEnviarSede(ev);
}

function onEnviarSede(event) {
    if (catGen.catUtility.validaInputs("formSedes", arrayInput) == true) {
        let valueInserta = document.getElementById("idSedeInserta").value;
        let dataParam = getFormParam(0);
        let text = "";
        if (valueInserta == "") {
            g_enviarOpcion = "INSERTAR";
            text = "insertara";
        }
        else {
            g_enviarOpcion = "ACTUALIZAR";
            text = "actualizara";
            if (g_formParam == dataParam) {
                alert("-asa- No hay cambios");
                return;
            }
            dataParam = getFormParam(1);
        }
        let botones = 0;
        let nameSede = document.getElementById('idInputSedeName').value;
        let textTmp = "La sede con el nombre '" + nameSede + "' se " + text +" en el municipio ¿Desea continuar?";
        catGen.catUtility.alertDlg(botones, "Alerta tramita", textTmp);
     }
}

function onClickModal(valor) {
    if (valor == 1) {
        let nombreSede = document.getElementById("idInputSedeName").value;
        switch (g_enviarOpcion) {
            case 'BORRAR':
                borrarGrupoAtencion();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se Borro el grupo de atencion " + nombreSede + "!", 3000);
                break;
            case 'INSERTAR':
                crearAtualizarGrupoAtencion();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se creo el grupo de atencion " + nombreSede + "!", 3000);
                break;
            case 'ACTUALIZAR':
                crearAtualizarGrupoAtencion();
                catGen.catUtility.fireAlert("idAlertGrupo", "Se actualizo el grupo de atencion " + nombreSede + "!", 3000);
                break;
        }
    }
}

function borrarGrupoAtencion() {
    let strName = document.getElementById("idInputSedeName").value;
    
    if (strName != undefined) {

        let valueInserta = document.getElementById("idSedeInserta").value;
        if (valueInserta == "") {
            //solo borra inputs
            onLimpiarSede(this);
            return;
        }
        //borra hasta bd
        let dataParam = "{param1:'" + g_idSede + "',param2:'usuario'}";

        
        catGen.catUtility.requestBorraSede(dataParam, onQueryDataBorraSede);
    }
}

function crearAtualizarGrupoAtencion() {
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
    catGen.catUtility.requestSedesInsertUpdate(dataParam, endPoint, onQueruDataSedesInsertUpdate);
}


function updateGrupoAtencion() {
    let strName = document.getElementById("idInputSedeName").value;
    
    if (strName != undefined) {
        let strTmp = getStringMunicipiosYsedes();
        let arrMunSedes = strTmp.split("$");
        let strUser = "yo mero";
        let strDescripcion = "";
        let dataParam = "{param1:'" + strName + "',param2:'" + strDescripcion + "',param3:'" + arrMunSedes[0] + "',param4:'" + arrMunSedes[1] + "',param5:'" + strUser + "'}";
        catGen.catUtility.requestUpdateGrupoDeAtencion(dataParam, onQueryDataUpdateGrupoDeAtencion)
    }
}

function onQueryDataMunicipios(result) {
    
    let paramValue = "{param:'nada'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
    
}

function onQueryDataMpiosQueAtienden(result) {
    
    catGen.catUtility.fnCreateListButtonDraggable("idMunicipiosQueAtienden", result, "Municipios que atienden", dragStart, ondblclickAt,onClickAT);
}

function onQueryDataGrupoTodosMpiosYsedes(result) {
    let tmp = result;
    g_arrMunicipiosSedes = [];//limpiamos el arreglo
    let arrTmp = tmp.split("$");
    let arrTmp2 = [];
    for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
        arrTmp2 = arrTmp[iIndex].split("|");
        g_arrMunicipiosSedes.push({ id: arrTmp2[0], n1: arrTmp2[1], d1: arrTmp2[3], r1: arrTmp2[4], idS: arrTmp2[5], c1: arrTmp2[6], t1: arrTmp2[7] });
    }
    
    if (result.length != 0) {
        nlength = catGen.catUtility.fnCreateListAcordeon("idAccordionTodosMpioSedes", result, 1, catGen.catUtility.getNameMunicipio, ondblclickSede);
    } 

    document.getElementById("idNumSedes").innerHTML = nlength;
}

function onQueryDataBorraSede(result) {
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
    onLimpiarSede(this);
}

function onQueruDataSedesInsertUpdate(result) {
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
    onLimpiarSede(this);
}