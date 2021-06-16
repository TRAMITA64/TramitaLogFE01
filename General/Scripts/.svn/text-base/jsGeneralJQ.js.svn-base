//window.hasOwnProperty = window.hasOwnProperty || Object.prototype.hasOwnProperty;
//if (!Array.indexOf) {
//    Array.prototype.indexOf = function (obj) {
//        for (var i = 0; i < this.length; i++) {
//            if (this[i] == obj) {
//                return i;
//            }
//        }
//        return -1;
//    }
//};

$(document).ready(function () {
    $("#divMensajes").dialog({
        autoOpen: false,
        modal: true,
        width: 400,
        buttons: [
            {
                text: "Ok",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });

    $("#divMensajes").dialog({
        //blind|bounce|clip|drop|explode|fade|fold|highlight|size|scale|puff|pulsate|shake|slide|transfer
        autoOpen: false,
        show: "blind",
        hide: "clip",
        modal: true
    });

})

function fnMuestraMensajeDialog(strMensaje) {
    $("#lblMensaje").text(strMensaje);
    $("#divMensajes").dialog("open");
}

function fnMostrarEspera(strMensaje) {
    var espera;
    espera = "<div id=\"divEspera\" >" +
        "<img src=\"../../General/imagenes/carga.gif\" style=\"border:0; background:transparent;\" />" +
        "</div>";

    $.blockUI({
        overlayCSS: { backgroundColor: '#ffffff' },
        message: espera
        , css: {
            border: "none"
            , width: "350px"
            , height: "84px"
            , backgroundColor: "transparent"
            , top: ($(window).height() - 200) / 2 + $(window).scrollTop() + "px"
            , left: ($(window).width() - 400) / 2 + $(window).scrollLeft() + "px"
            , position: "absolute"
        }
    });

    //setTimeout($.unblockUI, 2000);
    return false;
}

function fnCerrarEspera() {
    $.unblockUI();
    return false;
}

function fnShowModalBlocUI(strTitulo, strURL, strAlto, strAncho) {
    var ventanaEmergente;
    ventanaEmergente = "<div id=\"divEmergente\" style=\"background-color: #1C5E55; font-weight:bold; color:white; margin: 0px 2px 0px 2px;\">" + strTitulo +
        "        <div style=\"width: 30px; height:20px; float:right\" ><button id=\"btnCancelarShow\" style=\"width:30px; height:20px; background:transparent; border:none; vertical-align:middle\" onclick=\"fnCerrarEspera()\"><img id=\"imgBotonMensajeCancelar\" src=\"../../General/imagenes/eliminar.ico\" alt=\"Cancelar\" style=\"vertical-align:middle; border:0;\"/></button></div>" +
        "        <div id=\"msjContenedor\" style=\"width: 100%; height:100%; margin: 0px auto 0px auto;\">" +
        "             <iframe id=\"ifrPaginaSecundaria\" runat=\"server\" src=\"" + strURL + "\" style=\"width:970px; height:560px\" frameborder=\"0\"></iframe>" +
        "        </div>";
    "</div>";

    $.blockUI({
        overlayCSS: { backgroundColor: '#ffffff' },
        message: ventanaEmergente
        , css: {
            border: "none"
            , width: strAncho + "px"
            , height: strAlto + "px"
            , backgroundColor: "transparent"
            , top: ($(window).height() - 400) / 2 + $(window).scrollTop() + "px"
            , left: ($(window).width() - 950) / 2 + $(window).scrollLeft() + "px"
            , position: "absolute"
        }
    });
    return false;
}

function fnMuestraMensaje(mensaje, tipo, titulo, funcionAceptar, ocultarCancelar) {
    tipo = tipo.toLowerCase();
    var elemento = "";
    elemento += "<div id=\"msjInfo\" style=\"width:448px; height:210px; cursor: default;border-radius:10px; padding-top: 2px\">";
    elemento += "    <div id=\"msjTitulo\" style=\"width: 445px; height:25px;font-family: 'Fuente-Principal';background-color: #00529B; font-weight:bold;font-size:10pt; color:white; margin: 0px 2px 0px 2px;padding-top:6px;border-radius: 5px;\">";
    elemento += titulo;
    elemento += "        <div id=\"msjContenedor\" style=\"width: 100%; height:100%; margin: 10px auto 0px auto;\">";
    elemento += "            <div id=\"msjImagen\" style=\"width: 80px; height:80px; float:left;\">";
    elemento += "                <img id=\"imgMensaje\" src=\"../../General/imagenes/" + tipo + ".png\"alt=\"\" style=\"width:50px; height:50px; padding:20px 18px 18px 18px; border:0;\"/>";
    elemento += "            </div>";
    elemento += "            <div id=\"msjContenido\" style=\"width:365px; height:140px; float:right; overflow-x: hidden; color:#515151; vertical-align:top\">";
    elemento += "                <div id=\"msjLeyenda\" style=\"font-family: 'Fuente-Principal';font-size:10pt;width:315px; height:100px; padding: 0px 20px 10px 10px; font-size:14px; font-weight:bold; text-align:justify; vertical-align:middle; display:table-cell;\">";
    elemento += mensaje
    elemento += "                </div>";
    elemento += "            </div>";
    elemento += "            <div id=\"msjBoton\" style=\"width:440px; height:50px; margin: 0 0 0 0; padding: 0 0 0 0; \">";
    elemento += "                <button id=\"btnMensajeAceptar\" onclick=\"";
    if (funcionAceptar.length > 0) {
        elemento += funcionAceptar + "; fnCerrarEspera(); ";
    }
    else {
        elemento += "fnCerrarEspera() ;";
    }
    elemento += "                    return false;\">ACEPTAR";
    elemento += "                </button>";
    elemento += "                <button id=\"btnMensajeCancelar\" style=\"font-size:8pt; width:100px; height:20px; margin:10px 2px; ";
    if (ocultarCancelar) {
        elemento += " display:none;";
    }
    elemento += "                    \" onclick=\"fnCerrarEspera();\"> CANCELAR";
    elemento += "                </button>";
    elemento += "            </div>";
    elemento += "        </div>";
    elemento += "    </div>";
    elemento += "</div>";

    $.blockUI({
        blockMsgClass: "mensajeBlockUI",
        message: elemento,
        css: {
            top: ($(window).height() - 250) / 2 + $(window).scrollTop() + "px",
            left: ($(window).width() - 450) / 2 + $(window).scrollLeft() + "px"
        }
    });
}


function fnSiguienteFoco(objSig) {
    $("#" + objSig).focus();
    return false;
}

function fnShowModalDialog(strURL, strAlto, strAncho) {

    $.showModalDialog({
        url: strURL,
        height: strAlto,
        width: strAncho,
        scrollable: false,
        onClose: function () { var returnedValue = this.returnValue; }
    });
}

function fnShowModal(strURL, strAlto, strAncho) {

    $.showModalDialog({
        url: strURL,
        height: strAlto,
        width: strAncho,
        scrollable: false
    });
}

var $dialog = null;

jQuery.showModalDialog = function (options) {

    var defaultOptns = {
        url: null,
        dialogArguments: null,
        height: 'auto',
        width: 'auto',
        //        position: 'center',
        resizable: true,
        scrollable: true,
        onClose: function () { },
        returnValue: null,
        doPostBackAfterCloseCallback: false,
        postBackElementId: null
    };

    var fns = {
        close: function () {
            opts.returnValue = $dialog.returnValue;
            //$dialog = null;
            opts.onClose();
            if (opts.doPostBackAfterCloseCallback) {
                postBackForm(opts.postBackElementId);
            }
        },
        adjustWidth: function () { $frame.css("width", "100%"); }
    };

    // build main options before element iteration

    var opts = $.extend({}, defaultOptns, options);

    var $frame = $('<iframe id="iframeDialog" />');

    if (opts.scrollable)
        $frame.css('overflow', 'auto');

    $frame.css({
        'padding': 0,
        'margin': 0,
        'padding-bottom': 10
    });

    var $dialogWindow = $frame.dialog({
        autoOpen: true,
        modal: true,
        width: opts.width,
        height: opts.height,
        resizable: opts.resizable,
        position: opts.position,
        overlay: {
            opacity: 0.5,
            background: "black"
        },
        close: fns.close,
        resizeStop: fns.adjustWidth
        //AMH //blind|bounce|clip|drop|explode|fade|fold|highlight|size|scale|puff|pulsate|shake|slide|transfer
        , top: ($(window).height() - opts.height) / 2 + $(window).scrollTop() + "px"
        , left: ($(window).width() - opts.width) / 2 + $(window).scrollLeft() + "px"
        , show: "highlight"
        , hide: "clip"
    });

    $frame.attr('src', opts.url);
    fns.adjustWidth();

    $frame.load(function () {
        try {
            if ($dialogWindow) {
                var maxTitleLength = 50;
                try {
                    var title = $(this).contents().find("title").html();
                } catch (z) { }
                try {
                    if (title.length > maxTitleLength) {
                        title = title.substring(0, maxTitleLength) + '...';
                    }
                } catch (z) { title = "AVANCE DE PROCESO"; }
                $dialogWindow.dialog('option', 'title', title);
            }
        } catch (x) { alert("4: " + x); }
    });

    $dialog = new Object();
    $dialog.dialogArguments = opts.dialogArguments;
    $dialog.dialogWindow = $dialogWindow;
    $dialog.returnValue = null;
}

//function postBackForm(targetElementId) {
//    var theform;
//    theform = document.forms[0];
//    theform.__EVENTTARGET.value = targetElementId;
//    theform.__EVENTARGUMENT.value = "";
//    theform.submit();
//}

//var prntWindow = getParentWindowWithDialog(); //$(top)[0];

var prntWindow = $(top)[0];

var $dlg = prntWindow && prntWindow.$dialog;

function getParentWindowWithDialog() {
    try {
        var p = window.parent;
        var previousParent = p;
        while (p != null) {
            if ($(p.document).find('#iframeDialog').length) return p;

            p = p.parent;

            if (previousParent == p) return null;

            // save previous parent

            previousParent = p;
        }
        return null;
    } catch (x) { alert("3: " + x); }
}

function setWindowReturnValue(value) {
    if ($dlg) $dlg.returnValue = value;
    window.returnValue = value; // in case popup is called using showModalDialog
}

function getWindowReturnValue() {
    // in case popup is called using showModalDialog

    if (!$dlg && window.returnValue != null)
        return window.returnValue;

    return $dlg && $dlg.returnValue;
}

if ($dlg) window.dialogArguments = $dlg.dialogArguments;
if ($dlg) window.close = function () { if ($dlg) $dlg.dialogWindow.dialog('close'); };

function CloseWindow() {
    if ($dlg) {
        $dlg.dialogWindow.dialog('close');
    } else {
        ForceCloseWindow();
    }
}

function ForceCloseWindow() {
    var browserName = navigator.appName;
    var browserVer = parseInt(navigator.appVersion);
    //alert(browserName + " : "+browserVer);

    //document.getElementById("flashContent").innerHTML = "<br>&nbsp;<font face='Arial' color='blue' size='2'><b> You have been logged out of the Game. Please Close Your Browser Window.</b></font>";

    if (browserName == "Microsoft Internet Explorer") {
        var ie7 = (document.all && !window.opera && window.XMLHttpRequest) ? true : false;
        if (ie7) {
            //This method is required to close a window without any prompt for IE7 & greater versions.
            window.open('', '_parent', '');
            window.close();
        }
        else {
            //This method is required to close a window without any prompt for IE6
            this.focus();
            self.opener = this;
            self.close();
        }
    } else {
        //For NON-IE Browsers except Firefox which doesnt support Auto Close
        try {
            this.focus();
            self.opener = this;
            self.close();
        }
        catch (e) {
            alert("2: " + e);
        }

        try {
            window.open('', '_self', '');
            window.close();
        }
        catch (e) {
            alert("1: " + e);
        }
    }
}

function showModalArgs(strUrl, strWidth, strHeight, strTitle, strArgsJson) {
    var page = strUrl;
    var test = "";
    var json = $.parseJSON(strArgsJson);
    var parametros = "?";
    var $dialog = $('<div></div>');
    $.each(json,
        function (key, val) {
            parametros += key + "=" + val + "&";
        });
    parametros = parametros.substring(0, parametros.length - 1);
    page += parametros;
    $dialog.html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>');
    $dialog.dialog({
        autoOpen: false,
        modal: true,
        height: strHeight,
        width: strWidth,
        title: strTitle,
        show: "scale",
        buttons: [
            {
                text: "Cerrar",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ],
        close: function () {
            if (json['activaGrid'] === "Proveedores") {
                location.reload("../../Catalogos/Web/CatProveedores.html");
            }
        }
    });
    $dialog.dialog('open');
}

function fnMostrarEsperaShow(strMensaje) {
    var espera;
    espera = "<div id=\"divEspera\" >" +
        "<img src=\"../../General/imagenes/carga.gif\" style=\"border:0; background:transparent;\" />" +
        "</div>";

    $.blockUI({
        overlayCSS: { backgroundColor: '#ffffff' },
        message: espera
        , css: {
            border: "none"
            , width: "50%"
            , height: "50%"
            , backgroundColor: "transparent"
            , float: "left"
            , top: "100px"
            , left: "150px"
            , position: "absolute"
        }
    });
    return false;
}

function fnLongLetras(caracteres) {
    cadena = "";
    for (var i = 0; i < caracteres; i++) {
        cadena = cadena + "S";
    }
    return cadena;
}
function fnLongNum(caracteres) {
    cadena = "";
    for (var i = 0; i < caracteres; i++) {
        cadena = cadena + "0";
    }
    return cadena;
}
function fnLongAlfa(caracteres) {
    cadena = "";
    for (var i = 0; i < caracteres; i++) {
        cadena = cadena + "*";
    }
    return cadena;
}

function fnLongRFC(caracteres) {
    cadena = "";
    for (var i = 0; i < caracteres; i++) {
        cadena = cadena + "R";
    }
    return cadena;
}

function fnConvMayus(cadena) {
    var x = $(cadena).val();
    x = x.toUpperCase();
    $(cadena).val(x);
}

$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};

function fnObtienefechaHoy(fecha) {
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var f = new Date();
    $(fecha).val(diasSemana[f.getDay()] + " , " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}
