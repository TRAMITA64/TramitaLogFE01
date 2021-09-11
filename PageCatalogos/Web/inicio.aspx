<%@ Page Language="C#" AutoEventWireup="true" CodeFile="inicio.aspx.cs" Inherits="PageCatalogos_Web_inicio" %>

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
                <i class='bx bxl-c-plus-plus1'></i>
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
        
    </div>
</body>
    <script>
        let btnArchivo = document.getElementById("btnArchivo1");
        let btnFile1 = document.getElementById("file1");
        let btnFile2 = document.getElementById("btnFile2");
        let btnFileFile2 = document.getElementById("fileFile2");

        let btnEnviar = document.getElementById("idEnviar");

        btnEnviar.onclick = function () {
            var a = document.createElement('a');
            a.href = 'Dashboard.aspx';
            a.target = '_self';
            document.body.appendChild(a);
            a.click();
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
    </script>

</html>
