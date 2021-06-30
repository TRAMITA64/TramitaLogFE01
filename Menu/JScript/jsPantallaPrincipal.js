/// <reference path="../WebServices/wsMenu.asmx" />
/// <reference path="../WebServices/wsMenu.asmx" />

//Funcion inicial de la pagina
$(document).ready(function () {
    $.support.cors = true;
    try{
        var arrParam = window.location.href.split("?");
        if (arrParam.length>1)
            strParam = arrParam[1].split("Param=")[1]
        else
            strParam = "Sv5h2hmEvQFr8oXxaPEAKw==";
 //       alert(strParam);
        fnDesEncriptaParametros(strParam);
     }
    catch (err) {
        alert("Acceso no válido");
        window.location.href = "../../Login/Web/Login.aspx";
    }

    function disableBackButton() {
        window.history.forward();
    }
    setTimeout("disableBackButton()", 0);
});

function fnAbrePantalla(strAplicativo, strParametros) {
    
    var strURL;

    switch (strAplicativo) {        
        case "Catálogos":
            strURL = "";              
            break;
        case "Plantillas":
            strURL = "";
            break;
        case "Seguimiento":
            strURL = "";
            break;
    }    
    window.location.href = strURL + "?Param=" + strParametros;
    //alert(strParametros);
    //fnDesEncriptaParametros(strParametros);
}

function fnSalir() {
    
    //alert("entra a funcion");
    //parent.close();
    window.close();
}

function fnEncriptaParametros(strAplicativo) {
    
    
    $.ajax({
        type: "POST",
        url: "../WebServices/wsMenu.asmx/EncriptaTexto",
        data: "{strTexto:'" + strRFC + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            
            fnAbrePantalla(strAplicativo, result);
        },
        failure: function (response) {
           alert(response.d);
        }
    });
}

function fnDesEncriptaParametros(strParametros) {
    $.ajax({
        type: "POST",
        url: "../WebServices/wsMenu.asmx/DesEncriptaTexto",       
        data: "{strParametros:'" + strParametros + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            //fnAbrePantalla(strAplicativo, result);           
            fnObtenerUsuario(result);
        },
        failure: function (response) {
            alert(response.d);
        }
    });
}

function fnObtenerUsuario(strRFC) {
    
    $.ajax({
        type: "POST",
        url: "../WebServices/wsMenu.asmx/wsObtenerUsuario",
        data: "{strRFC:'" + strRFC + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            if (result.length > 0) {
                arrResultado = new Array();
                arrResultado = result.split("|");

                //$("#btnNombre").text(arrResultado[1]);
                $("#btnNombre").value=arrResultado[1] ;
                $("#ADR").text(arrResultado[2]);
                GetVariablesSesion();
            }
            else {
                alerta("No se encontró información de ese RFC, favor de validarlo.")
                fnSalir();
            }

        },
        failure: function (response) {
            alert(response.d);
        }
    });
}

//OBTENER LAS VARIABLES DE SESION
function GetVariablesSesion() {
    $.ajax({
        type: "POST",
        url: "MenuPrincipal.aspx/GetVariables",
        //data: "{strRFC:'" + strRFC + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            var result = response.d;
            if (result.length > 0) {
                var objRes = jQuery.parseJSON(result);
                document.getElementById("hdnRFC").value = objRes;
            }
        },
        failure: function (response) {
            alert(response.d);
        }
    });
}

//function fnAbrePantallaSecundaria(strPagina) {
//    var iframe = document.getElementById("ifrPantallaNav");
//    var strURL;
//    var strParametros = "";
//    var strAlto = "400px";
//    //var strPantalla = document.getElementById("Pantalla");
//    //var strPrueba;
//    //strParametros = document.getElementById("txtDelegacionUsuario").value + "|" + document.getElementById("txtPerfilUsuario").value;
//    switch (strPagina) {
//        case "Operacion":
//            strURL = "../../VigilanciaProfunda/Web/Operacion.aspx";
//            strAlto = "400px";
//            //strPrueba = "MENU";
//            break;
//        case "PropuestasLocales":
//            strURL = "../../VigilanciaProfunda/Web/PropuestasLocales.aspx";
//            strAlto = "400px";
//            break;
//        case "Propuestas":
//            strURL = "../../VigilanciaProfunda/Web/Propuestas.aspx";
//            strAlto = "400px";
//            break;
//        case "ActosFiscalizacion":
//            strURL = "../../VigilanciaProfunda/Web/ActosFiscalizacion.aspx";
//            strAlto = "400px";
//            break;
//        case "Fiscalizacion":
//            strURL = "../../VigilanciaProfunda/Web/Fiscalizacion.aspx";
//            strAlto = "400px";
//            break;
//        case "PropuestaFiscalizacion":
//            strURL = "../../VigilanciaProfunda/Web/PropuestaFiscalizacion.aspx";
//            strAlto = "400px";
//            break;
//        case "Manual":
//            strURL = "../../DocumentosInteres/Web/Manual.aspx";
//            strAlto = "400px";
//            break;
//        case "LineamientosDocs":
//            strURL = "../../DocumentosInteres/Web/LineamientosDocs.aspx";
//            strAlto = "400px";
//            break;
//        case "CambioDomicilio":
//            strURL = "../../VigilanciaProfunda/Web/CambioDomicilio.aspx"
//            strAlto = "400px";
//            break;
//        case "Consulta":
//            strURL = "../../VigilanciaProfunda/Web/Consulta.aspx"
//            strAlto = "400px";
//            break;
//        case "Seguimiento":
//            strURL = "../../VigilanciaProfunda/Web/Seguimiento.aspx"
//            strAlto = "400px";
//            break;
//        case "NuevaPropuesta":
//            strURL = "../../VigilanciaProfunda/Web/NuevaPropuesta.aspx"
//            strAlto = "400px";
//            break;
//        case "MenuPrincipal":
//            strURL = "../../Menu/Web/MenuPrincipal.html"
//            strAlto = "400px";
//            break;
//        case "CambiarContraseña":
//            strURL = "../../CambiarContraseña/Web/CambiarContrasena.aspx"
//            strAlto = "400px";
//            break;
//    }
//    iframe.setAttribute("src", strURL);
//    iframe.style.height = strAlto;
//    ///strPantalla.setAttribute("value", strPrueba);
//}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

