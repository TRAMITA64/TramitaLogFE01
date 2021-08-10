let l_arrEmpSinGrupoDeAtencion = [];
let l_arrEmpConGrupoDeAtencion = [];
let g_enviarOpcion = "";

let g_arrayInput = [ "idActualizar", "idLimpiar", "idBtnQuitar", "idBtnAgregar"];

$(document).ready(function () {
    paramValue = "{param:'yo mero'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
    document.getElementById("idBtnAgregar").addEventListener("click", onClickAgregarEmp);
    document.getElementById("idBtnQuitar").addEventListener("click", onClickQuitarEmp);

    catGen.catUtility.disableInput(true, "");
    
});

$(function () {
    $("#includeModal").load("modal.html");
});

function dragStart(ev) {

}

function fnChangeGpoAtt() {
    let idGrupo = catGen.catUtility.getSelectOptionID("idfsGruposDeAtencion");
    
    let strText = "";
    let arrTemp = l_arrEmpConGrupoDeAtencion.filter(val => val.idGrupo == idGrupo);
    for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
        strText += (strText == "" ? "" : "$") + arrTemp[iIndex].idEmp + "|" + catGen.catUtility.getNameEmpleado(arrTemp[iIndex].idEmp);
    }
    if (strText == "")
        strText ="0|No hay empleados en este grupo de atención"
    let objResult = { txtEmpleados: strText };
    
    catGen.catUtility.fnCreateMsEmpleados(objResult, "msEmpUpdates", "Empleados actualizar", 2, fnChangeEmpUpdate, onClickEmpUpdate);
    
}

function fnChangeEmpUpdate() {

}
function onClickEmpUpdate() {
    
    catGen.catUtility.disableInput(false, "idBtnQuitar");
    catGen.catUtility.disableInput(true, "idBtnAgregar");
}




function onClickQuitarEmp() {
    
    let idArrSelect = catGen.catUtility.getMultipleSelectOptionID("id2msEmpUpdates");
    let msUpdateEmp = document.getElementById("id2msEmpUpdates");
    let msSinAtt =   document.getElementById("id0msEmpSinGrupo");
    let arrChildren = msUpdateEmp.children;
    if (msSinAtt.children.length == 1) {
        if (msSinAtt.children[0].value == 0)
            msSinAtt.innerHTML = "";
    }

    for (let iIndex = 0; idArrSelect.length > iIndex; iIndex++) {

        for (let jIndex = 0; arrChildren.length > 0; jIndex++) {
            if (arrChildren[jIndex].value == idArrSelect[iIndex]) {
                
                if (msSinAtt.children.length > 0) {
                    if (findEmpList(msSinAtt.children, arrChildren[jIndex].value) == 0) {
                        arrChildren[jIndex].selected = false;
                        arrChildren[jIndex].classList.remove("newOption");
                        arrChildren[jIndex].removeEventListener("click", onClickEmpUpdate);
                        arrChildren[jIndex].addEventListener("click", onClickEmpSinAtt);
                        msSinAtt.insertBefore(arrChildren[jIndex], msSinAtt.children[0]);
                        catGen.catUtility.disableInput(false, "idActualizar,idLimpiar");
                        catGen.catUtility.disableInput(true, "idBtnAgregar");
                    }
                    else
                        arrChildren[jIndex].classList.add("removeOption");
                }
                else
                    msSinAtt.appendChild(arrChildren[jIndex]);
                break;
            }
        }
    }
    document.getElementById("idInputFiltrarEmpSinGpo").value = "";
    
}

function findEmpList(arrChildren, idEmp) {
    for (let iIndex = 0; arrChildren.length > iIndex; iIndex++) {
        if (arrChildren[iIndex].value == idEmp) {
            return 1;
        }
    }
    return 0;
}

function onClickAgregarEmp() {
    let idArrSelect = catGen.catUtility.getMultipleSelectOptionID("id0msEmpSinGrupo");
    let msSinGRupo = document.getElementById("id0msEmpSinGrupo");
    let msUpdate = document.getElementById("id2msEmpUpdates");
    let arrChildren = msSinGRupo.children;
    if (msUpdate.children.length == 1) {
        if (msUpdate.children[0].value == 0)
            msUpdate.innerHTML = "";
    }

    for (let iIndex = 0; idArrSelect.length > iIndex; iIndex++) {

        for (let jIndex = 0; arrChildren.length > 0; jIndex++) {
            if (arrChildren[jIndex].value == idArrSelect[iIndex]) {
                
                if (msUpdate.children.length > 0) {
                    if (findEmpList(msUpdate.children, arrChildren[jIndex].value) == 0) {
                        arrChildren[jIndex].selected = false;
                        arrChildren[jIndex].classList.add("newOption");
                        arrChildren[jIndex].removeEventListener("click", onClickEmpSinAtt);
                        arrChildren[jIndex].addEventListener("click", onClickEmpUpdate);
                        msUpdate.insertBefore(arrChildren[jIndex], msUpdate.children[0])
                        catGen.catUtility.disableInput(false, "idActualizar,idLimpiar");
                        catGen.catUtility.disableInput(true, "idBtnAgregar");
                    }
                }
                else
                    msUpdate.appendChild(arrChildren[jIndex]);
                break;
            }
        }
    }
    document.getElementById("idInputFiltrarEmpSinGpo").value = "";
    

    
}


function fnChangeEmpSinAtt() {
    
    
    
}
function onclickMunicipiosAt() {
    catGen.catUtility.clearListButtonsActive(this.parentNode.id);
    this.classList.add("active");
    let strMunicipioId = this.id.split("-")[1];
    let nameMunicipioSelected = catGen.catUtility.getNameMunicipioAtienden(strMunicipioId);
    document.getElementById("idMunicipioListEmp").innerHTML = "Empleados municipio " + nameMunicipioSelected;
    filtrarEmpleadosSinGrupo("msEmpSinGrupo", "Empleados sin grupo de atencion", strMunicipioId, fnSelectEmpSinGpo, onClickEmpSinAtt);
    
    catGen.catUtility.disableInput(true, "idBtnAgregar");
    document.getElementById("idInputFiltrarEmpSinGpo").value = "";
}
function ondblClickMuniciosAt() {
    catGen.catUtility.clearListButtonsActive("idMpiosQueAtienden0");
    this.classList.add("active");
    catGen.catUtility.disableInput(true, "idBtnAgregar");

}

function onClickEmpSinAtt() {
    catGen.catUtility.disableInput(true, "idBtnQuitar");
    catGen.catUtility.disableInput(false, "idBtnAgregar");
    
}

function fnChangeEmpConAtt() {
    

    let arrChildren = document.getElementById("idfsGruposDeAtencion").children;
    let arrEmp = l_arrEmpConGrupoDeAtencion.filter(val => val.idEmp == this.value);
    let idGrupo = arrEmp[0].idGrupo;
    
    for (let iIndex = 0; arrChildren.length > iIndex; iIndex++) {
      //  alert(arrChildren[iIndex].value + " " + this.value);
        if (idGrupo != arrChildren[iIndex].value)
            arrChildren[iIndex].selected = false;
        else {
            
            arrChildren[iIndex].selected = true;
            fnChangeGpoAtt();
        }
    }
}

function onClickEmpConAtt() {
    
    let arrEmp = l_arrEmpConGrupoDeAtencion.filter(val =>  val.idEmp == this.value);
    let idGrupo = arrEmp[0].idGrupo;
    let arrChildren = document.getElementById("idfsGruposDeAtencion").children;
    for (let iIndex = 0; arrChildren.length > iIndex; iIndex++) {
        if (idGrupo != arrChildren[iIndex].value)
            arrChildren[iIndex].selected = false;
        else {
            arrChildren[iIndex].selected = true;
            fnChangeGpoAtt();
        }
    }
    
}


function fndblclickGrupAttEmp() {

}

function fndblclickGrupAttEmpSelected() {
    let idElement = this.id.split("-")[1];
    if (idElement >= 5000) {
        
        let idGrupo = this.parentNode.id.split("-")[1];
        let arrChildren = document.getElementById("idfsGruposDeAtencion").children;
        for (let iIndex = 0; arrChildren.length > iIndex; iIndex++) {
            if (idGrupo != arrChildren[iIndex].value)
                arrChildren[iIndex].selected = false;
            else {
                arrChildren[iIndex].selected = true;
                fnChangeGpoAtt();
            }
        }
    }
}






function fnSelectEmpSinGpo() {

}



function fnChangeFiltrarEmpSinGpo() {
    this.value = this.value.toUpperCase();
    let strFiltro = this.value;
    
    filtrarEmpleadosSinGrupo("msEmpSinGrupo", "Empleados sin grupo de atencion", strFiltro, fnSelectEmpSinGpo, onClickEmpSinAtt);
}

function fnChangeFiltrarEmpConGpo() {
    this.value = this.value.toUpperCase();
    let strFiltro = this.value;
                                                                                            
    filtrarEmpleadosConGrupo("msEmpConGrupo", "Empleados con grupo de atencion", strFiltro, fnChangeEmpConAtt, onClickEmpConAtt);
}

function filtrarEmpleadosConGrupo(msElement, title, strFiltro, fnSelectItem, fnSelectItemClick) {

    Array.prototype.FilterEmpConGrupo = function (callback) {
        var newArray = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i]) != undefined) {
                
                newArray.push(this[i]);
            }
        }
        return newArray;
    };
    
    var arrEmpleadosConGrupo = catGen.catUtility.getArrEmpleados().FilterEmpConGrupo(function (item) {
        arrEmpConGrp = l_arrEmpConGrupoDeAtencion.filter(val => val.idEmp == item.idEmp)
        return arrEmpConGrp[0];
    });

    let arrEmpleadosFiltro = arrEmpleadosConGrupo.filter(val => (val.n1 + val.ap + val.am + val.rfc).indexOf(strFiltro) != -1);
    
    let result = catGen.catUtility.createCadenaFilter(arrEmpleadosFiltro, 1);
    catGen.catUtility.fnCreateFilterMSelect(result, msElement, title, fnSelectItem, fnSelectItemClick);
}

function filtrarEmpleadosSinGrupo(msElement, title, strFiltro, fnSelectItem, fnSelectItemClick) {
    
    Array.prototype.FilterEmpSinGrupo = function (callback) {
        var newArray = [];
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i]) != undefined) {

                newArray.push(this[i]);
            }
        }
        return newArray;
    };

    var arrEmpleadosSinGrupo = catGen.catUtility.getArrEmpleados().FilterEmpSinGrupo(function (item) {
        arrEmpConGrp = l_arrEmpSinGrupoDeAtencion.filter(val => val.idEmp == item.idEmp)
        /*if (arrEmpConGrp[0] != undefined) {
            let arrTmp = document.getElementById("id2msEmpUpdates").children;
            for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
                if (arrTmp[iIndex].value == arrEmpConGrp[0].idEmp)
                    return undefined;
            }
        }*/
        return arrEmpConGrp[0];
    });
    let arrEmpleadosFiltro = "";
    if (isNumber(strFiltro) == true)
        arrEmpleadosFiltro = arrEmpleadosSinGrupo.filter(val => val.idM == strFiltro);
    else
        arrEmpleadosFiltro = arrEmpleadosSinGrupo.filter(val => (val.n1 + val.ap + val.am + val.rfc).indexOf(strFiltro) != -1);

    let result = catGen.catUtility.createCadenaFilter(arrEmpleadosFiltro, 1);
    catGen.catUtility.fnCreateFilterMSelect(result, msElement, title, fnSelectItem, fnSelectItemClick);
}
function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

function onLimpiar() {
    let selectElement = document.getElementById("msEmpUpdates").children[0];
    let msSinGpoAtt = document.getElementById("id0msEmpSinGrupo");
    for (let iIndex = 0; selectElement.children.length > iIndex; iIndex++) {
        if (selectElement.children[iIndex].classList == "newOption") {
            selectElement.children[iIndex].classList.remove("newOption");
            selectElement.children[iIndex].removeEventListener("click", onClickEmpUpdate );
            selectElement.children[iIndex].addEventListener("click", onClickEmpSinAtt);
            msSinGpoAtt.appendChild(selectElement.children[iIndex]);
            iIndex = -1;
        }
    }
    if (selectElement.children.length == 0) {
        let stroption = "<option value='0'>No hay empleados en este grupo de atención</option>"
        selectElement.innerHTML = stroption;
    }
    catGen.catUtility.disableInput(true, "");
    fnChangeGpoAtt();
    
    let strText = "";
    for (let iIndex = 0; l_arrEmpSinGrupoDeAtencion.length > iIndex; iIndex++) {
        
        //objElementos = { idEmp: arrElementos[0], idM: arrElementos[1], idS: arrElementos[2], idGrupo: arrElementos[3] };

        strText += (strText == "" ? "" : "$") + l_arrEmpSinGrupoDeAtencion[iIndex].idEmp + "|" + catGen.catUtility.getNameEmpleado(l_arrEmpSinGrupoDeAtencion[iIndex].idEmp)
    }
    let objResult = { txtEmpleados: strText };
    //console.log("uno " + objResult.txtEmpleados)
    catGen.catUtility.fnCreateMsEmpleados(objResult, "msEmpSinGrupo", "Empleados con atencion", 0, fnChangeEmpSinAtt, onClickEmpSinAtt);

}
function onActualizar(event) {
    g_enviarOpcion = "ACTUALIZAR";
    
    let botones = 0;
    let nameGrupo = "xxx";
    let text = 'El grupo de atencion con el nombre ' + nameGrupo + ' va ser actualizado en el sistema ¿Desea continuar?';
    catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
    
}

function onClickModal(valor) {
    if (valor == 1) {
        switch (g_enviarOpcion) {
            case "ACTUALIZAR":
                actualizarGrupoEmpleado();
                break;
        }
    }
}

function actualizarGrupoEmpleado() {
    
    let msUpdate = document.getElementById("id2msEmpUpdates");
    let strEmpleados="";
    for (let iIndex = 0; msUpdate.children.length > iIndex; iIndex++) {
        if (msUpdate.children[iIndex].classList!="removeOption")
            strEmpleados += (strEmpleados == "" ? "" : ",") + msUpdate.children[iIndex].value;
    }

    let idGrupo = catGen.catUtility.getSelectOptionID("idfsGruposDeAtencion");

    let dataParam = { idGrupo: idGrupo ,  idEmp: strEmpleados, user: 'yo mero' };
    
    catGen.catUtility.requestUpdateGrupoDeAtencionEmpleados(dataParam, onQueryDataUpdateGrupoDeAtencionEmpleados);
}

/*----------------------------------------------QueryData-------------------------------------*/

function onQueryDataMpiosQueAtienden(result) {
    //01 municipios que atienden 
    catGen.catUtility.fnCreateListButtonDraggable("idMpiosQueAtienden", result, "Municipios que atienden", dragStart, ondblClickMuniciosAt, onclickMunicipiosAt);//lado izq


    paramValue = "{param1:'',param2:'yo mero'}";
    idSelect = 0;
    catGen.catUtility.requestEmpleados(paramValue, onQueryDataEmpleados, idSelect);
    
}

function onQueryDataEmpleados(result) {
    let paramValue = { param1: 'yo mero' };

    catGen.catUtility.requestCatGruposAtencion(paramValue, onQueryDataCatGruposAtencion);
}


function onQueryDataCatGruposAtencion(result) {
   //02 catalogo grupos de atencion 
    catGen.catUtility.fnCreatefloatingSelect("fsGruposDeAtencion", result, "Selecciona el grupo dea atención", 0)//centro municipios

    document.getElementById("fsGruposDeAtencion").addEventListener("change", fnChangeGpoAtt);
    
    let paramValue = { param1: 'yo mero' };
    
    catGen.catUtility.requestEmpConGrupoAtencion(paramValue, onQueryDataEmpConGrupoAtencion);
    
}

function onQueryDataEmpConGrupoAtencion(result) {
    //03 en pleados con grupo de atencion
    
    let arrResult = result.split("$");
    let arrElementos = [];
    let objElementos = {};
    let strTextEmp = "";
    let strTextGrupoAttEmp = "";
    let empleado = {};
    let arrGrupos = [];
    l_arrEmpConGrupoDeAtencion = [];
    for (let iIndex = 0; arrResult.length > iIndex; iIndex++) {
        arrElementos = arrResult[iIndex].split("|");
        objElementos = { idEmp: arrElementos[0], idM: arrElementos[1], idS: arrElementos[2], idGrupo: arrElementos[3] };
        arrGrupos[objElementos.idGrupo] = catGen.catUtility.getNameGruposDeAtencion(objElementos.idGrupo);
        l_arrEmpConGrupoDeAtencion.push(objElementos);
        empleado = catGen.catUtility.getNameEmpleado(arrElementos[0]);
        strTextEmp += (strTextEmp == "" ? "" : "$") + arrElementos[0] + "|" + empleado
        strTextGrupoAttEmp += (strTextGrupoAttEmp == "" ? "" : "$") + arrElementos[0] + "|" + empleado + "|" + objElementos.idGrupo;
    }
    let objResult = { txtEmpleados: strTextEmp };
                                                                                                    
    catGen.catUtility.fnCreateMsEmpleados(objResult, "msEmpConGrupo", "Empleados sin atencion", 0, fnChangeEmpConAtt, onClickEmpConAtt);
    
    let objResult2 = { txtSedeEmp: strTextGrupoAttEmp, arrSede: [...arrGrupos] };


    catGen.catUtility.fnCreateAcoorSedesEmp(objResult2, "idAccordionGrupAttEmp", 0,fndblclickGrupAttEmpSelected);

        
    let paramValue = { param1: 'yo mero' };
    catGen.catUtility.requestEmpSinGrupoAtencion(paramValue, onQueryDataEmpSinGrupoAtencion);

    fnChangeGpoAtt();
}
function onQueryDataEmpSinGrupoAtencion(result) {

   // alert(result);
    let arrResult = result.split("$");
    let arrElementos = [];
    let objElementos = {};
    let strText = "";
    let empleado = {};
    l_arrEmpSinGrupoDeAtencion = [];
    for (let iIndex = 0; arrResult.length > iIndex; iIndex++) {
        arrElementos = arrResult[iIndex].split("|");
        objElementos = { idEmp: arrElementos[0], idM: arrElementos[1], idS: arrElementos[2], idGrupo: arrElementos[3] };
        l_arrEmpSinGrupoDeAtencion.push(objElementos);
        empleado = catGen.catUtility.getNameEmpleado(arrElementos[0]);
        strText += (strText == "" ? "" : "$") + arrElementos[0] + "|" + empleado
    }
    let objResult = { txtEmpleados: strText };
    //console.log("uno " + objResult.txtEmpleados)
    
    catGen.catUtility.fnCreateMsEmpleados(objResult, "msEmpSinGrupo", "Empleados con atencion", 0, fnChangeEmpSinAtt, onClickEmpSinAtt);

    document.getElementById("idInputFiltrarEmpSinGpo").addEventListener("keyup", fnChangeFiltrarEmpSinGpo);
    document.getElementById("idInputFiltrarEmpConGrupo").addEventListener("keyup", fnChangeFiltrarEmpConGpo);

    let paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
}

function onQueryDataGrupoTodosMpiosYsedes(request) {

}


function onQueryDataUpdateGrupoDeAtencionEmpleados(result) {
    if (result == 1) {
        let nombreEmpleado = "xxx";
        catGen.catUtility.fireAlert("idAlertGrupo", "Se actualizo el grupo de atencion " + nombreEmpleado + " de forma correcta!", 3000);
        let paramValue = { param1: 'yo mero' };
        catGen.catUtility.requestEmpConGrupoAtencion(paramValue, onQueryDataEmpConGrupoAtencion);
    }
}