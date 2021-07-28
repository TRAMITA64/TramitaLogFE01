let g_arrMunicipios = [];
let g_arrayInput = ["idEnviar",  "idLimpiar", "idActualizar"];
let g_arrMunicipiosSedes = []; //{ id: , n1: , d1: , r1: , idS: , c1: , t1:  }
let g_arrEmpleados = []; //{ idEmp: , rfc: , n1: , ap: , am: , idM: , idS: , fa: , st:, co: }
let g_arrInputs = ["idInputRfc", "idInputName", "idInputApellidoP", "idInputApellidoM", "idInputCorreo", "idInputCorreo", "idInputAlta"];
let g_enviarOpcion = 'NADA'
let g_strParam = "";

$(document).ready(function () {
    
    catGen.catUtility.requestMunicipiosList(onQueryDataMunicipios);
    catGen.catUtility.disableInput(true, "");
    catGen.catUtility.disableInput(false, "idEnviar,idLimpiar");
});

$(function () {
    $("#includeModal").load("modal.html");
});

function SelectEmpleado(idEmpleado) {
    let arrTemp = g_arrEmpleados.filter(value => value.idEmp == idEmpleado)
    let objEmpleado = arrTemp[0];

    llenaInputs(objEmpleado, 1);

    onChangeMunicipio(objEmpleado.idM, objEmpleado.idS);

    onChangeSedeEmpleado(objEmpleado.idM, objEmpleado.idS);
    catGen.catUtility.disableInput(true, "");
    catGen.catUtility.disableInput(false, "idActualizar,idLimpiar");
    g_strParam = getParamCompara();
}

function fnSelectEmpleado() {
    SelectEmpleado(catGen.catUtility.getSelectOptionID(this.id));
}

function ondblclickSede(obj) {
    SelectEmpleado(obj.id.split("-")[1]);
}

function onChangeSedeEmpleado(idMSelect, idSedeSelect) {
    
    let arrSedes = g_arrMunicipiosSedes.filter(val => val.id == idMSelect);
    let result3 = "";
    let arrSedesName=[];
    function getNameSedes(value) {
        return arrSedesName[value]
    }
    let arrEmp;
    let empleado;
    let arrSede;
    for (let iIndex = 0; arrSedes.length > iIndex; iIndex++) {
        
        arrEmp = g_arrEmpleados.filter(value => value.idS == arrSedes[iIndex].idS);
        if (arrEmp.length) {//si tengo empleados en la se
            for (let jIndex = 0; arrEmp.length > jIndex; jIndex++) {
                
                empleado = arrEmp[jIndex];
                arrSede = g_arrMunicipiosSedes.filter(value => value.idS == arrSedes[iIndex].idS);
                arrSedesName[empleado.idS] = arrSede[0].n1;
                result3 += (result3 == "" ? "" : "$") + empleado.idEmp + "|" + empleado.n1 + " " + empleado.ap + " " + empleado.am + "|" + empleado.idS;
            }
            
        } else {
            //si no tengo que hago??
            let arrSede = g_arrMunicipiosSedes.filter(value => value.idS == arrSedes[iIndex].idS);
            arrSedesName[arrSedes[iIndex].idS] = arrSede[0].n1;
            result3 += (result3 == "" ? "" : "$") + "0|No tenemos empleados en esta sede|" + arrSedes[iIndex].idS;
            nlength = catGen.catUtility.fnCreateListAcordeon("idAccordionSedeEmpleado", result3, 0, getNameSedes);//izq abajo
        }
    }
    
    nlength = catGen.catUtility.fnCreateListAcordeon("idAccordionSedeEmpleado", result3, 0, getNameSedes);//izq abajo
    putTitleMunicipioSedes();
}

function fnChangeMunicipio() {
    
    let idSelect = catGen.catUtility.getSelectOptionID(this.id);
    let arrTemp = g_arrMunicipiosSedes.filter(value => value.id == idSelect)
    let result2 = "";
    for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
        result2 += (result2 == "" ? "" : "$") + arrTemp[iIndex].idS + "|" + arrTemp[iIndex].n1;
        
    }

    catGen.catUtility.fnCreatefloatingSelect("fsSedesMunicipio", result2, "Selecciona la sede", 0)//centro sedes

    let arrTemp2 = g_arrEmpleados.filter(value => value.idM == idSelect)
    if (arrTemp2.length > 0) {
        let objEmpleado = arrTemp2[0];
        
        onChangeSedeEmpleado(objEmpleado.idM, objEmpleado.idS);
        putTitleMunicipioSedes();
    } else {
        let idSelectSede = catGen.catUtility.getSelectOptionID("idfsSedesMunicipio");
        
        onChangeSedeEmpleado(idSelect, idSelectSede);
    }
    
}

function ondblclickAt(obj, parent) {
    
    document.getElementById("idfsMpiosQueAtienden").value = obj.id.split("-")[1];
    catGen.catUtility.eventFire(document.getElementById("idfsMpiosQueAtienden"), "change");
    //limpia
    let idSelect = catGen.catUtility.getSelectOptionID("id0msEmpleados");
    
    let ele = document.getElementById("id0msEmpleados");
    for (let iIndex = 0; ele.children.length > iIndex; iIndex++) {
        if (ele.children[iIndex].value == idSelect)
            ele.children[iIndex].selected = false;
    }
    let today = new Date().toLocaleDateString()

    let objEmpleado = { idEmp: "", rfc: "", n1: "", ap: "", am: "", idM: 0, idS: 0, fa: today , st:0, co:"" };
    llenaInputs(objEmpleado,1);
    catGen.catUtility.disableInput(true, "");
    catGen.catUtility.disableInput(false, "idEnviar,idLimpiar");
    document.getElementById("idfsMpiosQueAtienden").value = obj.id.split("-")[1];
    catGen.catUtility.eventFire(document.getElementById("idfsMpiosQueAtienden"), "change");
    
}

function putTitleMunicipioSedes() {
    let idSelect = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    document.getElementById("idTitleMunicipio").innerHTML = "Municipio " + g_arrMunicipios[idSelect];
}



function llenaInputs(objEmpleado,borrar) {
    
    document.getElementById("idInputRfc").value = objEmpleado.rfc;
    document.getElementById("idInputName").value = objEmpleado.n1;
    document.getElementById("idInputApellidoP").value = objEmpleado.ap;
    document.getElementById("idInputApellidoM").value = objEmpleado.am;
    document.getElementById("idInputCorreo").value = objEmpleado.am;
    document.getElementById("idInputCorreo").value = objEmpleado.co;
    let today = new Date().toLocaleDateString()
    document.getElementById("idInputAlta").value = objEmpleado.fa == "" ? today : objEmpleado.fa.split(" ")[0];
    if (borrar) {
        document.getElementById("idfsMpiosQueAtienden").value = objEmpleado.idM;
        document.getElementById("idfsSedesMunicipio").value = objEmpleado.idS;
        document.getElementById("idSelectStatusEmp").value = objEmpleado.st;
    }
}

function onLimpiar(obj) {
    let today = new Date().toLocaleDateString()
    let objEmpleado = { idEmp: "", rfc: "", n1: "", ap: "", am: "", idM: 0, idS: 0, fa: today, st: 0, co: "" };
    llenaInputs(objEmpleado,1);
    document.getElementById("idTitleMunicipio").innerHTML = "";
    document.getElementById("idAccordionSedeEmpleado").innerHTML = "";
    catGen.catUtility.disableInput(true, "");
    document.getElementById("formEmpleados").classList.remove("was-validated");
}

function onEnviar(event) {
    if (catGen.catUtility.validaInputs("formEmpleados", g_arrInputs) == true) {
        g_enviarOpcion = 'INSERTAR';
        let botones = 0;
        let nameEmpleado = document.getElementById("idInputName").value +" "+document.getElementById("idInputApellidoP").value ;
        let text = 'El empleado con el nombre ' + nameEmpleado + ' va ser dado de alta en el sistema ¿Desea continuar?';
        catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
    }
}
function onActualizar(ev) {
    if (catGen.catUtility.validaInputs("formEmpleados", g_arrInputs) == true) {
        let nombreEmpleado = document.getElementById("idInputName").value + " " + document.getElementById("idInputApellidoP").value;
        if (g_strParam != getParamCompara()) {
            g_enviarOpcion = 'ACTUALIZAR';
            let botones = 0;
            let text = 'El empleado con el nombre ' + nombreEmpleado + ' va ser actualizado en el sistema ¿Desea continuar?';
            catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
        } else {
            catGen.catUtility.fireAlert("idAlertEmp", "No hay cambios para el empleado" + nombreEmpleado + "!", 5000);
        }
    } 
}

function onClickModal(valor) {
    if (valor == 1) {
        
        switch (g_enviarOpcion) {
            case 'INSERTAR':
                insertarEmpleado();
                break;
            case 'ACTUALIZAR':
                    actualizarEmpleado();
                break;
        }
    }
}

function getParamInsertarEmpleado() {
    let currentRFC = document.getElementById("idInputRfc").value;
    let idEmp  = 0;
    let arrEMP=g_arrEmpleados.filter(val => val.rfc == currentRFC)
    if (g_arrEmpleados.length > 0)
        idEmp = arrEMP[0].idEmp
    let today = new Date().toLocaleDateString();
    
    let paramString = {
        idEmp: idEmp,
        rfc: currentRFC,
        n1: document.getElementById("idInputName").value,
        ap: document.getElementById("idInputApellidoP").value,
        am: document.getElementById("idInputApellidoM").value,
        co: document.getElementById("idInputCorreo").value,
        fa: today,
        idM: document.getElementById("idfsMpiosQueAtienden").value,
        idS: document.getElementById("idfsSedesMunicipio").value,
        st: document.getElementById("idSelectStatusEmp").value,
        us: "yo mero"
    }
    return paramString;
}
function getParamCompara() {
    return document.getElementById("idInputRfc").value +
        document.getElementById("idInputName").value +
        document.getElementById("idInputApellidoP").value +
        document.getElementById("idInputApellidoM").value +
        document.getElementById("idInputCorreo").value +
        document.getElementById("idfsMpiosQueAtienden").value +
        document.getElementById("idfsSedesMunicipio").value +
        document.getElementById("idSelectStatusEmp").value;
}

function insertarEmpleado() {
        catGen.catUtility.requestInsertEmpleado(getParamInsertarEmpleado(), onQueryDataInsertEmpleado);
}

function actualizarEmpleado() {
        catGen.catUtility.requestUpdateEmpleado(getParamInsertarEmpleado(), onQueryDataUpdateEmpleado);
}

function fnLimpiaYcargaEmpleados()
{
    let today = new Date().toLocaleDateString()
    let objEmpleado = { idEmp: "", rfc: "", n1: "", ap: "", am: "", idM: 0, idS: 0, fa: today, st: 0, co: "" };
    llenaInputs(objEmpleado, 0);

    paramValue = "{param1:'',param2:'yo mero'}";
    catGen.catUtility.requestEmpleados(paramValue, onQueryDataEmpleados);
}

function fnChangeFiltrar() {
    //
    this.value = this.value.toUpperCase();
    let strFiltro = this.value;
    let arrEmpleadosFiltro = g_arrEmpleados.filter(val => (val.n1 + val.ap + val.am + val.rfc).indexOf(strFiltro) != -1);
    let strTextResult = "";
    
    let empleado;
    for (iIndex = 0; arrEmpleadosFiltro.length > iIndex; iIndex++) {
        empleado = arrEmpleadosFiltro[iIndex];
        strTextResult += (strTextResult == "" ? "" : "$") + empleado.idEmp + "|" + empleado.n1 + " " + empleado.ap + " " + empleado.am;
    }

    if (strTextResult.length > 0) {
        let strText = catGen.catUtility.fnCreateMultipleSelect("msEmpleados", strTextResult, "0", "Empleados", 0);
        document.getElementById("msEmpleados").innerHTML = strText;
        document.getElementById("id0msEmpleados").addEventListener("change", fnSelectEmpleado);
    } else {
        let strText = catGen.catUtility.fnCreateMultipleSelect("msEmpleados", "0|No  hay coincidencias", "0", "Empleados", 0);
        document.getElementById("msEmpleados").innerHTML = strText;
    }
        
}


/*----------------------------------------------QueryData-------------------------------------*/
function onQueryDataMunicipios(result) {
    paramValue = "{param:'nada'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
}

function onQueryDataMpiosQueAtienden(result) {

    catGen.catUtility.fnCreateListButtonDraggable("idMpiosQueAtienden", result, "Municipios que atienden");//lado izq
    catGen.catUtility.fnCreatefloatingSelect("fsMpiosQueAtienden", result, "Selecciona el municipo", 0)//centro municipios
    document.getElementById("idfsMpiosQueAtienden").addEventListener("change", fnChangeMunicipio);
    document.getElementById("idInputBuscar").addEventListener("keyup", fnChangeFiltrar);
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
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
    let idSelect = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    onChangeMunicipio(idSelect,0);
    
    paramValue = "{param1:'',param2:'yo mero'}";
    catGen.catUtility.requestEmpleados(paramValue, onQueryDataEmpleados);

    let today = new Date().toLocaleDateString()
    document.getElementById("idInputAlta").value= today;
}

function onChangeMunicipio(idSelect,idSede) {
    let arrTemp = g_arrMunicipiosSedes.filter(value => value.id == idSelect)
    let result2 = "";
    for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
        result2 += (result2 == "" ? "" : "$") + arrTemp[iIndex].idS + "|" + arrTemp[iIndex].n1;
    }
    catGen.catUtility.fnCreatefloatingSelect("fsSedesMunicipio", result2, "Selecciona la sede", idSede)//centro sedes
}

function onQueryDataEmpleados(result) {
    
    let arrEmpleados = result.split("$");
    let arrCampos = [];
    let strTextResult = "";
    let result3 = "";
    let empleado = {};
    let arrSedes = [];
    function getNameSedes(value) {
        return arrSedes[value]
    }
    let idSelect = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    g_arrEmpleados = [];
    let arrSede;
    for (let iIndex = 0; arrEmpleados.length > iIndex; iIndex++) {
        arrCampos = arrEmpleados[iIndex].split("|");
        empleado = { idEmp: arrCampos[0], rfc: arrCampos[1], n1: arrCampos[2], ap: arrCampos[3], am: arrCampos[4], idM: arrCampos[5], idS: arrCampos[6], fa: arrCampos[9], st: arrCampos[11], co: arrCampos[12]};
        g_arrEmpleados.push(empleado);
        strTextResult += (strTextResult == "" ? "" : "$") + empleado.idEmp + "|" + empleado.n1 + " " + empleado.ap + " " + empleado.am;
        if (idSelect == empleado.idM) {
            arrSede = g_arrMunicipiosSedes.filter(value => value.idS == empleado.idS);
            arrSedes[empleado.idS] = arrSede[0].n1;
            result3 += (result3 == "" ? "" : "$") + empleado.idEmp + "|" + empleado.n1 + " " + empleado.ap + " " + empleado.am + "|" + empleado.idS;
        }
    }
    nlength = catGen.catUtility.fnCreateListAcordeon("idAccordionSedeEmpleado", result3, 0, getNameSedes);//izq abajo
    putTitleMunicipioSedes();
    
    let strText = catGen.catUtility.fnCreateMultipleSelect("msEmpleados", strTextResult, "0", "Empleados", 0);
    document.getElementById("msEmpleados").innerHTML = strText;
    document.getElementById("id0msEmpleados").addEventListener("change", fnSelectEmpleado);

    let paramValue = "{param1:'',param2:'yo mero'}";
    catGen.catUtility.requestStatusEmpleados(paramValue, onQueryDataStatusEmpleados)
}

function onQueryDataStatusEmpleados(result) {
    let strResult = catGen.catUtility.fnCreateSelectList("idSelectStatusEmp","status empleado" ,result);
    document.getElementById("sttatusEmp").innerHTML = strResult;
}

function onQueryDataInsertEmpleado(result) {
    
    let nombreEmpleado = document.getElementById("idInputName").value + " " + document.getElementById("idInputApellidoP").value;
    if (result != "-1") {
        catGen.catUtility.fireAlert("idAlertGrupo", "Se dio de alta al empleado " + nombreEmpleado + "!",3000);
        fnLimpiaYcargaEmpleados();
    } else {
        catGen.catUtility.fireAlert("idAlertEmp", "No se dio de alta al empleado " + nombreEmpleado + " RFC ya existe!",5000);
    }
}

function onQueryDataUpdateEmpleado(result) {
    let nombreEmpleado = document.getElementById("idInputName").value + " " + document.getElementById("idInputApellidoP").value;
    catGen.catUtility.fireAlert("idAlertGrupo", "Se actualizo al empleado " + nombreEmpleado + "!", 3000);
    fnLimpiaYcargaEmpleados();
}