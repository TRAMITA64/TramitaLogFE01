<%@ Page Language="C#" AutoEventWireup="true" CodeFile="InicioCont.aspx.cs" Inherits="PageCatalogos_Web_InicioCont" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>Responsive Navigation Menu</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        <!-- Referencia al bootstrap -->
    <link rel="stylesheet" href="../../Content/css/bootstrap.min.css"/>
    <script src="../../Content/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet"  href="../css/styleCatalogosform.css"/>
    <link rel="stylesheet"  href="../css/style2.css"/>
    <script src="../JScript/jsNotificaMasiva.js" type="text/javascript"></script>
    
    <script src="https://kit.fontawesome.com/d339b43b25.js" crossorigin="anonymous"></script>
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <nav class="navbar_dos">
        <div class="logo_content">
            <div class="logo">
                <img src="http://sateg.gob.mx/assets/img/logo-secretaria-finanzas-guanajuato.svg" />
                <label class="titulo_portal">Portal Contribuyente </label>
                <div class="logo_name"></div>
                <input type="checkbox" id="clickBars" />
                <label for="clickBars" class="menu-btn">
                    <i class="fas fa-bars"></i>
                </label>    
            </div>
        </div>
        
        <ul class="nav_list">
            <li>
                <div class="home-login">
                    <i class='bx bx-home'></i>
                </div>
            </li>
            
        </ul>
    </nav>
    <!-- **********************************************************************************************************-->
    <div class="work_area">
        <div class="login-area">
                    <div class="box-login">
                        <div id="idContenedorEfirma-registro" class="contenedorEfirma">
                            <h3>Acceso con firma electrónica</h3>
                            <div class="alert-acceso alert alert-danger " role="alert" id="idAlertAcceso" hidden=""></div>
                            <div>
                                <div class="input-group has-validation mb-3"><span class="input-group-text acceso-title-min-width">Certificado (.cer)</span>
                                    <input class="form-control" type="text" placeholder="Ubicación del certificado" name="txtArchivo" id="txtArchivo" readonly="" />
                                    <button type="button" class="btn btn-primary" id="btnArchivo1" name="btnArchivo1">Buscar</button>
                                    <input type="file" class="displayNone" accept=".cer" id="file1" />
                                </div>
                                <div class="input-group mb-3"><span class="input-group-text acceso-title-min-width">Clave privada (.key):</span>
                                    <input class="form-control" id="txtFile2" name="txtFile2" type="text" placeholder="Ubicación de la llave privada" readonly=""/>
                                    <button type="button" class="btn btn-primary" name="btnFile2" id="btnFile2">Buscar</button>
                                    <input type="file" class="displayNone" accept=".key" id="fileFile2"/>
                                </div>
                                <div class="input-group has-validation mb-3"><span class="input-group-text acceso-title-min-width">Contraseña de clave privada:</span>
                                    <input class="form-control" id="File2Password" type="password" name="File2Password" placeholder="Contraseña" disabled="disabled"/>
                                </div>
                                <div class="input-group has-validation mb-3"><span class="input-group-text acceso-title-min-width">RFC:</span>
                                    <input class="form-control" name="rfc" id="rfc" placeholder="RFC" type="text" disabled="disabled"/>
                                </div>
                            </div>
                            <div class="inputAcceso">
                                    <button class="btn btn-primary input-group" type="button" value="Enviar" id="idEnviar" name="Enviar" disabled="">Enviar</button>
                            </div>
                        </div>
                    </div>
                    <div class="box-login-medios">
                        <div class="contenedor-medios-contacto">
                            <div id="idContenedorEfirma-contato" class="contenedorEfirma">
                                <h3>Registro medios de contacto</h3>
                                <div class="alert-acceso alert alert-danger " role="alert" id="idAlertMedios" hidden=""></div>
                                <div></div>
                                <div>
                                    <p>Es necesario dar de alta y validar un correo electrónico como medio de contacto para poder ingresar al aplicativo</p>
                                    <div class="input-group has-validation mb-3"><span class="input-group-text acceso-title-min-width">Correo electrónico:</span><input class="form-control" id="idMedioContacto" type="email" name="email" placeholder="Medio de contacto" required=""/></div>
                                    <p>Confirmar correo electrónico</p>
                                    <div class="input-group has-validation mb-3"><span class="input-group-text acceso-title-min-width">Correo electrónico:</span><input class="form-control" id="idMedioContactoValida" type="email" name="email" placeholder="Medio de contacto" required=""/></div>
                                </div>
                                <div class="clearfix">
                                    <div class="inputAcceso">
                                        <div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="idTerminosYCondiciones" value=""><label class="form-check-label" for="idTerminosYCondiciones">Acepta términos y condiciones</label></div>
                                        </div>
                                        <div>
                                            <button class="btn btn-default btn-xs btn-primary input-group" type="button" id="idCancelar">Cancelar</button></div>
                                        <div>
                                            <button class="btn btn-primary input-group valid" type="button" value="Siguiente" id="idSiguiente" name="Siguiente" aria-invalid="false">Siguiente</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-login-confirma">
                        <div class="contenedor-medios-confirma">
                            <div id="idContenedorEfirma-confirma" class="contenedorEfirma">
                                <h3>Confirmar medio de contacto</h3>
                                <hr />
                                <div class="alert-acceso alert alert-danger " role="alert" id="idAlertConfirmar" hidden=""></div>
                                
                                <div>
                                    <p>Se acaba de enviar un correo electrónico a la cuenta <strong><span id="correo1"></span></strong> con un vínculo y un número de control para verificar su medio de contacto.</p>
                                    <h6>Favor de revisar la bandeja de entrada o los correos no deseados de su correo  <span id="correo2"></span></h6>
                                    <p>y hacer clic en el vínculo o ingresar el código proporcionado para validar su correo electrónico.</p>
                                    <input class="form-control" id="idCodigo" type="text" name="código" placeholder="Código" required=""/>
                                </div>
                                
                                <div class="enviar-de-nevo">
                                    <button class="btn btn-primary input-group valid" type="button" value="Siguiente" id="idSiguienteConfirmar" name="Siguiente" aria-invalid="false">Aceptar</button>
                                    <button class="btn btn-primary input-group valid" type="button" value="Siguiente" id="idEnviarDeNuevo" name="Siguiente" aria-invalid="false">Enviar de nuevo correo</button>
                               </div>
                                
                            </div>
                        </div>
                    </div>
        </div>
    </div>
</body>
    <script>
        let btnArchivo = document.getElementById("btnArchivo1");
        let btnFile1 = document.getElementById("file1");
        let btnFile2 = document.getElementById("btnFile2");
        let btnFileFile2 = document.getElementById("fileFile2");

        let btnEnviar = document.getElementById("idEnviar");

        btnEnviar.onclick = function () {
            document.querySelector(".box-login").style.display = "none";
            document.querySelector(".box-login-medios").style.display = "block";
        }

        btnFile2.onclick = function () {
            document.getElementById("fileFile2").click();
        }

        btnArchivo.onclick = function () {
            document.getElementById("file1").click();
        }

        btnFileFile2.onchange = function () {
            let arr = this.value.split("\\");
            if (arr.length > 0) {
                document.getElementById("txtFile2").value = arr[arr.length - 1];
            }
            if (document.getElementById("txtFile2").value != "" && document.getElementById("txtArchivo").value != "") {
                document.getElementById("File2Password").disabled = false;
                document.getElementById("idEnviar").disabled = false;
            }
        }
        btnFile1.onchange = function () {
            let arr = this.value.split("\\");
            if (arr.length > 0) {
                document.getElementById("txtArchivo").value = arr[arr.length - 1];
                document.getElementById("rfc").value="SAAA7401061V3";
            }
            if (document.getElementById("txtFile2").value != "" && document.getElementById("txtArchivo").value != "") {
                document.getElementById("File2Password").disabled = false;
                document.getElementById("idEnviar").disabled = false;
            }
        }
        let btnCancelar = document.getElementById("idCancelar");

        btnCancelar.onclick = function () {
            document.querySelector(".box-login").style.display = "block";
            document.querySelector(".box-login-medios").style.display = "none";

            document.getElementById("btnArchivo1").value="";
            document.getElementById("txtArchivo").value = "";
            document.getElementById("txtFile2").value = "";
            document.getElementById("fileFile2").value = "";
            document.getElementById("file1").value = "";
            document.getElementById("File2Password").value = "";
            document.getElementById("rfc").value = "";
        }

        let btnSiguiente = document.getElementById("idSiguiente");

        btnSiguiente.onclick = function () {
            if (document.getElementById("idTerminosYCondiciones").checked == true) {
                document.querySelector(".box-login").style.display = "none";
                document.querySelector(".box-login-medios").style.display = "none";
                document.querySelector(".box-login-confirma").style.display = "block";
                document.getElementById("correo1").value = document.getElementById("idMedioContacto").value;
                document.getElementById("correo2").value = document.getElementById("idMedioContacto").value;
                document.getElementById("correo1").innerHTML = document.getElementById("idMedioContacto").value;
            } else {
                fireAlert("idAlertMedios","Es necesario aceptar términos y condiciones");
            }
        }

        let btnEnviarDenuevo = document.getElementById("idEnviarDeNuevo");

        btnEnviarDenuevo.onclick = function () {
            fireAlert("idAlertConfirmar", "Se ha enviado un nuevo correo de confirmación");
        }

        let btnSiguienteConfirmar = document.getElementById("idSiguienteConfirmar");
        btnSiguienteConfirmar.onclick = function () {
            if (document.getElementById("idCodigo").value != "") {
                var a = document.createElement('a');
                a.href = 'Buzon1.aspx';
                a.target = '_self';
                document.body.appendChild(a);
                a.click();
            }
        }

         function hiddenAlert(idAlert) {
            document.getElementById(idAlert).innerText = "";
            document.getElementById(idAlert).hidden = true;
        }

         function showAlert(idAlert, strText) {
            document.getElementById(idAlert).innerText = strText;
            document.getElementById(idAlert).hidden = false;
        }

        function fireAlert(idAlert, strText, time) {
            setTimeout(function () { showAlert(idAlert, strText); }, 500);
            setTimeout(function () { hiddenAlert(idAlert); }, time);
        }

    </script>

</html>
