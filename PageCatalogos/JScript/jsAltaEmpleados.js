
let g_arrayInput = ["idEnviar",  "idLimpiar", "idActualizar"];


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

function SelectEmpleado(idEmpleado,accor) {
    let arrTemp = catGen.catUtility.getArrEmpleados().filter(value => value.idEmp == idEmpleado);
    let objEmpleado = arrTemp[0];

    llenaInputs(objEmpleado, 1);
    if (accor != 1) {
        onChangeMunicipio(objEmpleado.idM, objEmpleado.idS);
        onChangeSedeEmpleado(objEmpleado.idM, objEmpleado.idS);
    }
    catGen.catUtility.disableInput(true, "");
    catGen.catUtility.disableInput(false, "idActualizar,idLimpiar");
    g_strParam = getParamCompara();
}

function fnSelectEmpleado() {
    SelectEmpleado(catGen.catUtility.getSelectOptionID(this.id),0);
}

function fnSelectEmpleadoClick() {
    
    SelectEmpleado(catGen.catUtility.getSelectOptionID(this.parentNode.id),0);
}
function fndblclickSedeEmpleado() {
    let idElement = this.id.split("-")[1];
    if (idElement >= 5000) {//empleado
        SelectEmpleado(idElement,1);
    }
}

function ondblclickSede(obj) {
    SelectEmpleado(obj.id.split("-")[1],0);
}

function onChangeSedeEmpleado(idMSelect, idSedeSelect) {
    catGen.catUtility.fnCreateAcoorSedesEmpleados("idAccordionSedeEmpleado", idMSelect, fndblclickSedeEmpleado);
    putTitleMunicipioSedes();
}

function fnChangeMunicipio() {
    
    let idSelect = catGen.catUtility.getSelectOptionID(this.id);
    let arrTemp = catGen.catUtility.getArrMunicipiosSedes().filter(value => value.id == idSelect)
    let result2 = "";
    for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
        result2 += (result2 == "" ? "" : "$") + arrTemp[iIndex].idS + "|" + arrTemp[iIndex].n1;
        
    }

    catGen.catUtility.fnCreatefloatingSelect("fsSedesMunicipio", result2, "Selecciona la sede", 0)//centro sedes

    let arrTemp2 = catGen.catUtility.getArrEmpleados().filter(value => value.idM == idSelect)
    if (arrTemp2.length > 0) {
        let objEmpleado = arrTemp2[0];
        
        onChangeSedeEmpleado(objEmpleado.idM, objEmpleado.idS);
        putTitleMunicipioSedes();
    } else {
        let idSelectSede = catGen.catUtility.getSelectOptionID("idfsSedesMunicipio");
        
        onChangeSedeEmpleado(idSelect, idSelectSede);
    }
    
}

function dragStart(ev) {
    //ev.dataTransfer.setData("text", ev.target.id);
}

function selectButton(obj) {
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

    let objEmpleado = { idEmp: "", rfc: "", n1: "", ap: "", am: "", idM: 0, idS: 0, fa: today, st: 0, co: "" };
    llenaInputs(objEmpleado, 1);
    catGen.catUtility.disableInput(true, "");
    catGen.catUtility.disableInput(false, "idEnviar,idLimpiar");
    document.getElementById("idfsMpiosQueAtienden").value = obj.id.split("-")[1];
    catGen.catUtility.eventFire(document.getElementById("idfsMpiosQueAtienden"), "change");
}

function onclickAt() {
    catGen.catUtility.clearListButtonsActive(this.parentNode.id);
    this.classList.add("active");
    selectButton(this);
    putTitleMunicipioSedes();
}

function ondblclickAt() {
    selectButton(this);
}

function putTitleMunicipioSedes() {
    
    let idSelect = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    
    document.getElementById("idTitleMunicipio").innerHTML = "Municipio " + catGen.catUtility.getNameMunicipio(idSelect);
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
    
    catGen.catUtility.disableInput(false, "idEnviar,idLimpiar");
    document.getElementById("formEmpleados").classList.remove("was-validated");

    document.getElementById("idInputFiltrar").value = "";
    catGen.catUtility.eventFire(document.getElementById("idInputFiltrar"), "keyup");
}

function onEnviar(event) {
    let nombreEmpleado = document.getElementById("idInputName").value + " " + document.getElementById("idInputApellidoP").value;
    let idSelect1 = catGen.catUtility.getSelectOptionID("idSelectStatusEmp");
    let idSelect2 = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    let idSelect3 = catGen.catUtility.getSelectOptionID("idfsSedesMunicipio")
    if ((idSelect1 * idSelect2 * idSelect3) == 0) {

        if (idSelect1 == 0) {
            catGen.catUtility.fireAlert("idAlertEmp", "Selecceione un estado para el empleado " + nombreEmpleado + "!", 5000);
            return;
        }
        if (idSelect2 == 0) {
            catGen.catUtility.fireAlert("idAlertEmp", "Selecceione un municipio para el empleado " + nombreEmpleado + "!", 5000);
            return;
        }
    }
        
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
            catGen.catUtility.fireAlert("idAlertEmp", "No hay cambios para el empleado " + nombreEmpleado + "!", 5000);
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
    let arrEMP = catGen.catUtility.getArrEmpleados().filter(val => val.rfc == currentRFC)
    if (arrEMP.length > 0)
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
    let idSelect = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    
    catGen.catUtility.requestEmpleados(paramValue, onQueryDataEmpleados, idSelect);
}

function fnChangeFiltrar() {
    //
    this.value = this.value.toUpperCase();
    let strFiltro = this.value;
    
    catGen.catUtility.fnFiltrarEmpleados("msEmpleados", "Empleados", strFiltro, fnSelectEmpleado, fnSelectEmpleadoClick );
}

function onChangeMunicipio(idSelect, idSede) {
    let arrTemp = catGen.catUtility.getArrMunicipiosSedes().filter(value => value.id == idSelect)
    let result2 = "";
    for (let iIndex = 0; arrTemp.length > iIndex; iIndex++) {
        result2 += (result2 == "" ? "" : "$") + arrTemp[iIndex].idS + "|" + arrTemp[iIndex].n1;
    }
    catGen.catUtility.fnCreatefloatingSelect("fsSedesMunicipio", result2, "Selecciona la sede", idSede)//centro sedes
}
/*----------------------------------------------QueryData-------------------------------------*/
function onQueryDataMunicipios(result) {
    //01 municipios
    paramValue = "{param:'nada'}";
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
}

function onQueryDataMpiosQueAtienden(result) {
    //02 municipios que atienden 
    catGen.catUtility.fnCreateListButtonDraggable("idMpiosQueAtienden", result, "Municipios que atienden", dragStart, ondblclickAt, onclickAt);//lado izq
    catGen.catUtility.fnCreatefloatingSelect("fsMpiosQueAtienden", result, "Selecciona el municipo", 0)//centro municipios
    document.getElementById("idfsMpiosQueAtienden").addEventListener("change", fnChangeMunicipio);
    document.getElementById("idInputFiltrar").addEventListener("keyup", fnChangeFiltrar);
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes);
}

function onQueryDataGrupoTodosMpiosYsedes(result) {
    //03 todos los municipios y sedes
    let idSelect = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    onChangeMunicipio(idSelect,0);
    
    paramValue = "{param1:'',param2:'yo mero'}";
    idSelect = catGen.catUtility.getSelectOptionID("idfsMpiosQueAtienden");
    catGen.catUtility.requestEmpleados(paramValue, onQueryDataEmpleados, idSelect);

    let today = new Date().toLocaleDateString()
    document.getElementById("idInputAlta").value= today;
}

function onQueryDataEmpleados(result) {
    catGen.catUtility.fnCreateMsEmpleados(result, "msEmpleados", "Empleados", 0, fnSelectEmpleado, fnSelectEmpleadoClick);
    catGen.catUtility.fnCreateAcoorSedesEmp(result, "idAccordionSedeEmpleado",0, fndblclickSedeEmpleado);
    let paramValue = "{param1:'',param2:'yo mero'}";
    catGen.catUtility.requestStatusEmpleados(paramValue, onQueryDataStatusEmpleados)
    putTitleMunicipioSedes();
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