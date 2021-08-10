let g_arrayInput = ["idActualizar", "idLimpiar"];
let g_strParam;

$(document).ready(function () {
    paramValue = "{param:'nada'}";
    //01  municipios que atienden 
    catGen.catUtility.requestMpiosQueAtienden(paramValue, onQueryDataMpiosQueAtienden);
    
    catGen.catUtility.disableInput(true, "");
    
});

$(function () {
    $("#includeModal").load("modal.html");
});
function fnSelectMunicipio() {
    let idMSelect = catGen.catUtility.getSelectOptionID(this.id);
    catGen.catUtility.fnCreateAcoorSedesEmpleados("idAccordionSedeEmpleado", idMSelect, fndblclickSedeEmpleado);
    document.getElementById("idTitleMunicipio").innerHTML = "Municipio " + catGen.catUtility.getNameMunicipioAtiende(idMSelect);
}
function fnSelectMunicipioClick() {
    
    let idMSelect = catGen.catUtility.getSelectOptionID(this.parentNode.id);
    catGen.catUtility.fnCreateAcoorSedesEmpleados("idAccordionSedeEmpleado", idMSelect, fndblclickSedeEmpleado);
    document.getElementById("idTitleMunicipio").innerHTML = "Municipio " + catGen.catUtility.getNameMunicipioAtiende(idMSelect);
}

function fnSelectEmpleado() {
    let idEmpSelect = catGen.catUtility.getSelectOptionID("id0" + this.parentNode.id);
    onSelectEmpleado(idEmpSelect);
    clearAllCheckBox();
    checkAllCheckBoxByIdEmp(idEmpSelect);
    createCardPerfiles(idEmpSelect);
    collapse_Hidden_CheckBox();
    g_strParam = getParamCompara();
}

function fnSelectEmpleadoClick() {
    let idEmpSelect = catGen.catUtility.getSelectOptionID(this.parentNode.id);
    onSelectEmpleado(idEmpSelect);
    clearAllCheckBox();
    checkAllCheckBoxByIdEmp(idEmpSelect);
    createCardPerfiles(idEmpSelect);
    collapse_Hidden_CheckBox();
    g_strParam = getParamCompara();
}
    

function fndblclickSedeEmpleado() {
    let idEmpSelect = this.id.split("-")[1];
    if (idEmpSelect >= 5000) {//empleado
        onSelectEmpleado(idEmpSelect);
        let elementSel = catGen.catUtility.changeElementSelected("id0msEmpleados", idEmpSelect);
        catGen.catUtility.eventFire(elementSel, "click");
        clearAllCheckBox();
        checkAllCheckBoxByIdEmp(idEmpSelect);
        createCardPerfiles(idEmpSelect);
        collapse_Hidden_CheckBox();
        g_strParam = getParamCompara();
    }
}

function onSelectEmpleado(idEmpSelect){
    //idEmpSelect
    let arrEmpleadosFiltro = catGen.catUtility.getArrEmpleados().filter(val => val.idEmp == idEmpSelect);

    if (arrEmpleadosFiltro.length > 0) {
        arrSede = catGen.catUtility.getArrMunicipiosSedes().filter(val => val.idS == arrEmpleadosFiltro[0].idS);
        document.getElementById("idInputNameMid").value = arrEmpleadosFiltro[0].n1;
        document.getElementById("idInputApellidoPMid").value = arrEmpleadosFiltro[0].ap;
        document.getElementById("idInputApellidoMMid").value = arrEmpleadosFiltro[0].am;
        document.getElementById("idInputName").value = arrEmpleadosFiltro[0].n1;
        document.getElementById("idInputApellidoP").value = arrEmpleadosFiltro[0].ap;
        document.getElementById("idInputApellidoM").value = arrEmpleadosFiltro[0].am;
        document.getElementById("idInputRfc").value = arrEmpleadosFiltro[0].rfc;
        document.getElementById("idInputMunicipio").value = catGen.catUtility.getNameMunicipioAtiende(arrEmpleadosFiltro[0].idM);//municipio
        document.getElementById("idInputSede").value = arrSede[0].n1;//sede
        document.getElementById("idInputAlta").value = arrEmpleadosFiltro[0].fa;
        document.getElementById("idInputStatus").value = arrEmpleadosFiltro[0].st;//status
        catGen.catUtility.disableInput(true, "");
        catGen.catUtility.disableInput(false, "idActualizar,idLimpiar");
        
    }
}


function fnFiltrarMunicipio() {
    this.value = this.value.toUpperCase();
    let strFiltro = this.value;
    catGen.catUtility.fnFiltrarMunicipios("msMunicipios", "Municipios", strFiltro, fnSelectMunicipio, fnSelectMunicipioClick );
}

function fnFiltrarEmpleado(){
    this.value = this.value.toUpperCase();
    let strFiltro = this.value;
    catGen.catUtility.fnFiltrarEmpleados("msEmpleados", "Empleados", strFiltro, fnSelectEmpleado, fnSelectEmpleadoClick);
}

function clearAllCheckBox() {
    let inputCheckbox = document.querySelectorAll('input[type=checkbox]')
    for (let jIndex = 0; inputCheckbox.length > jIndex; jIndex++) {
        inputCheckbox[jIndex].checked = false;
    }
}

function checkAllCheckBoxByIdEmp(idEmpSelect)
{
    arrEmpPerfiles = catGen.catUtility.getElementEmpPerfies(idEmpSelect);
    if (arrEmpPerfiles.length > 0) {
        for (let jIndex = 0; arrEmpPerfiles[0].perfiles.length > jIndex; jIndex++) {
            document.getElementById("idCheck-" + arrEmpPerfiles[0].perfiles[jIndex]).checked = true;
        }
    }
}
function collapse_Hidden_CheckBox() {
    let arrTemp = catGen.catUtility.getArrCatPerfile();
    for (let iIndex=0; arrTemp.length > iIndex; iIndex++) {
        if (arrTemp[iIndex].cv.charAt(1) == "0") {
            document.getElementById("collapse-" + arrTemp[iIndex].cv).classList.remove("show");
        }
    }
}
    


function createCardPerfiles(idEmpSelect) {
    //{ cv: clave, n1: nombre, des: descripcion }
    
    let arrCatPerfiles = catGen.catUtility.getArrCatPerfile();
    let clavePerfil;
    let llave1;
    //----------------------------------
    let nameCtrl = "PerfilesTab"
    let pos = "0";

    //--------------------------------
    let textUl = "<ul class='nav nav-tabs' id='id" + pos + nameCtrl + "' role='tablist'>";
    let textUl1 = "<li class='nav-item' role='presentation'><button class='nav-link disabled' id='";
    let textUl2 = "-tab' data-bs-toggle='tab' data-bs-target='#";
    let textUl3 = "' type='button' role='tab' aria-controls='";
    let textUl4 = "' aria-selected='true' >";
    let textUl5 = "</button></li>"
    let textUlFin = "</ul>";
    let texLi = "";
    let tabsIndex = 0;
    let namePerfilPrincipal = "";

    
    let descPerfil = "";
    //-------------------------------------------------------------------------------------------------
    let textCaja1 = "<div class='tab-content' id='" + pos + nameCtrl + "Content'>";

    let textCaja2 = "<div class='tab-pane fade show' id='";
    let textCaja3 = "' role='tabpanel' aria-labelledby='";
    let textCaja4 = "-tab'><div class='cajaPerfilDetalle'><div class='cajaPerfilHeader'><h5>Empleado ";
    let textCaja5 = "</h5></div><div class='cajaPerfilContent'><ul>";
    let textContent0 = "<p>"
    let textLiConten = "";
    
    let headerCaja = "";
    let arrTmp = [];
    for (let iIndex = 0; arrCatPerfiles.length > iIndex; iIndex++) {
        clavePerfil = arrCatPerfiles[iIndex].cv;
        namePerfil = arrCatPerfiles[iIndex].n1;
        descPerfil = arrCatPerfiles[iIndex].des;
        llave0 = clavePerfil.charAt(0);
        llave1 = clavePerfil.charAt(1);

        namePerfilPrincipal = catGen.catUtility.getPerfilName(clavePerfil)[0].n1;
        if (llave1 == "0") {
            if (textLiConten != "") {
                textLiConten += "</ul></div></div></div>";
                arrTmp.push(headerCaja + textLiConten);
                textLiConten = "";
                headerCaja = "";
            }

            texLi += textUl1 + namePerfilPrincipal + textUl2 + namePerfilPrincipal + textUl3 +
                    namePerfilPrincipal + textUl4 + namePerfilPrincipal + textUl5;
            tabsIndex = 1;
            headerCaja = textCaja2 + namePerfilPrincipal + textCaja3 + namePerfilPrincipal +
                    textCaja4 + namePerfilPrincipal + textCaja5 + textContent0 + descPerfil + "</p>";
            //arrCajas.push(textCajas);
        } else if (tabsIndex == 1) {

            textLiConten += "<li class='noVisible' id='li" + namePerfilPrincipal.replace(" ", "-") + "'><strong>" +
                namePerfilPrincipal + "</strong></li>" + "<p class='noVisible' id='p" + namePerfilPrincipal.replace(" ", "-") + "'>" + descPerfil + "</p>";

        }
    }
    arrTmp.push(headerCaja + textLiConten);
    let textHtmlFinal = textUl + texLi + textUlFin + textCaja1;
    for (let iIndex = 0; arrTmp.length > iIndex; iIndex++) {
        textHtmlFinal += arrTmp[iIndex]
    }
    document.getElementById("TabPerfiles").innerHTML = textHtmlFinal + "</div>";
    let buttonActive = "";
    let seEventFire = 0;
    //habilto los tab del usuario--------------------------------------------------------------------------------
    arrEmpPerfiles = catGen.catUtility.getElementEmpPerfies(idEmpSelect);
    if (arrEmpPerfiles.length > 0) {

        let clavePerfil;
        for (let jIndex = 0; arrEmpPerfiles[0].perfiles.length > jIndex; jIndex++) {
            clavePerfil = arrEmpPerfiles[0].perfiles[jIndex];
            elementPerfil = catGen.catUtility.getPerfilName(clavePerfil);
            llave0 = clavePerfil.charAt(0);
            llave1 = clavePerfil.charAt(1);
            if (llave1 == "0") {
                if (seEventFire == 0)
                    seEventFire = 1;
                buttonActive = document.getElementById(elementPerfil[0].n1 + "-tab");
                buttonActive.classList.remove("disabled");
                if (seEventFire == 1) {
                    catGen.catUtility.eventFire(buttonActive, "click");
                    seEventFire++;
                }
            } else {
                document.getElementById("p" + elementPerfil[0].n1.replace(" ","-")).classList.remove("noVisible");
                document.getElementById("li" + elementPerfil[0].n1.replace(" ", "-")).classList.remove("noVisible");
            }
            
        }
    }

}

function getParamCompara() {
    let perfilesString = "";
    let inputCheckbox = document.querySelectorAll('input[type=checkbox]')
    for (let jIndex = 0; inputCheckbox.length > jIndex; jIndex++) {
        if (inputCheckbox[jIndex].checked == true) {
            perfilesString += (perfilesString == "" ? "" : ",") + inputCheckbox[jIndex].id.split("-")[1];
        }
    }
    let idEmpSelect = catGen.catUtility.getSelectOptionID("id0msEmpleados");
    return idEmpSelect + ":" + perfilesString;
}

function onActualizar(ev) {
    if (document.getElementById("idInputNameMid").value != "") {
        let idEmpSelect = catGen.catUtility.getSelectOptionID("id0msEmpleados");
        let arrEmpleadosFiltro = catGen.catUtility.getArrEmpleados().filter(val => val.idEmp == idEmpSelect);
        let nombreEmpleado = arrEmpleadosFiltro[0].n1 + " " + arrEmpleadosFiltro[0].ap + " " + arrEmpleadosFiltro[0].am;
        if (g_strParam != getParamCompara()) {
            g_enviarOpcion = 'ACTUALIZAR';
            let botones = 0;
            let text = 'El empleado con el nombre ' + nombreEmpleado + ' va ser actualizado en el sistema ¿Desea continuar?';
            catGen.catUtility.alertDlg(botones, 'Alerta tramita', text);
        } else {
            catGen.catUtility.fireAlert("idAlertPerfiles", "No hay cambios para el empleado " + nombreEmpleado + "!", 5000);
        }
       
    }
}

function onClickModal(valor) {
    if (valor == 1) {

        switch (g_enviarOpcion) {
  
            case 'ACTUALIZAR':
                actualizarPerfilesEmpleado();
                break;
        }
    }
}

function actualizarPerfilesEmpleado() {
    let param = getParamCompara()
    arrParamUpdate = param.split(":");
    catGen.catUtility.requestUpdatePerfilesEmpleado({ idEmp: arrParamUpdate[0], perfiles: arrParamUpdate[1], user:"yo mero"}, onQueryDataUpdatePerfilesEmpleado);
}

/*-------------------------------------QueryDATA-----------------------------------------------------------------------------------------------------------*/

function onQueryDataMpiosQueAtienden(result) {
    //02  municipios y sedes
    catGen.catUtility.fnCreateFilterMSelect(result, "msMunicipios", "Empleados", fnSelectMunicipio, fnSelectMunicipioClick)
    paramValue = "{param1:''}";
    catGen.catUtility.requestGrupoTodosMpiosYsedes(paramValue, onQueryDataGrupoTodosMpiosYsedes)
}

function onQueryDataGrupoTodosMpiosYsedes(result) {
    //03  empleados 
    paramValue = "{param1:'',param2:'yo mero'}";
    let idSelect = catGen.catUtility.getSelectOptionID("id0msMunicipios");
    catGen.catUtility.requestEmpleados(paramValue, onQueryDataEmpleados, idSelect);

    document.getElementById("idTitleMunicipio").innerHTML = "Municipio " + catGen.catUtility.getNameMunicipioAtiende(idSelect);
}

function onQueryDataEmpleados(result) {
    //04 Empleados
    catGen.catUtility.fnCreateMsEmpleados(result, "msEmpleados", "Empleados", 0, fnSelectEmpleado, fnSelectEmpleadoClick);
    catGen.catUtility.fnCreateAcoorSedesEmp(result, "idAccordionSedeEmpleado",0, fndblclickSedeEmpleado);
    document.getElementById("idInputFiltrarEmp").addEventListener("keyup", fnFiltrarEmpleado);
    document.getElementById("idInputFiltrarMpio").addEventListener("keyup", fnFiltrarMunicipio);
    
    let paramValues = { param1: "yo mero" };
    
    catGen.catUtility.requestCatPerfiles(paramValues,onQueryDataCatPerfiles);
}

function onQueryDataCatPerfiles(result) {
    //05 cat perfiles
    
    document.getElementById("perfilesConfig").innerHTML = result;
    let paramValues = { param1: "yo mero" };
    catGen.catUtility.requestEmpleadoPerfiles(paramValues, onQueryEmpleadoPerfiles)
}

function onQueryEmpleadoPerfiles(result) {
    
}

function onQueryDataUpdatePerfilesEmpleado(result) {
    let idEmpSelect = catGen.catUtility.getSelectOptionID("id0msEmpleados");
    let arrEmpleadosFiltro = catGen.catUtility.getArrEmpleados().filter(val => val.idEmp == idEmpSelect);
    let nombreEmpleado = arrEmpleadosFiltro[0].n1 + " " + arrEmpleadosFiltro[0].ap + " " + arrEmpleadosFiltro[0].am;
    catGen.catUtility.fireAlert("idAlertDetalleEmpleado", "Se realizaron cambios para el empleado " + nombreEmpleado + "!", 3000);

    let paramValues = { param1: "yo mero" };
    catGen.catUtility.requestEmpleadoPerfiles(paramValues, onQueryEmpleadoPerfiles)
    
}
