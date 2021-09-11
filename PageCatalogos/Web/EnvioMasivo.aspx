<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EnvioMasivo.aspx.cs" Inherits="PageCatalogos_Web_EnvioMasivo" %>

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
                <div class="logo_name">Portal Empleado</div>
                <input type="checkbox" id="clickBars" />
                <label for="clickBars" class="menu-btn">
                    <i class="fas fa-bars"></i>
                </label>    
            </div>
        </div>
        
        <ul class="nav_list">
            <li>
                <div class="search_content">
                    <i class='bx bx-search' ></i>
                    <input  type="text" placeholder="Search" />
                </div>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-grid-alt' ></i>
                    <span class="link_name">Dashboard</span>
                </a>
                <span class="tooltip">Dashboard</span>
            </li>
            <li>
                <a href="#">
                    <i class='bx bx-user' ></i>
                    <span class="link_name">Usuario</span>
                </a>
                <span class="tooltip">Usuario</span>
            </li>
            
            
            
            <li>
                <a href="#">
                    <i class='bx bx-cog' ></i>
                    <span class="link_name">Settings</span>
                </a>
                <span class="tooltip">Settings</span>
            </li>
              <li>
                <a href="#">
                    <i class='bx bx-log-out' id="log_out"></i>
                    <span class="link_name">Salir</span>
                </a>
                <span class="tooltip">Salir</span>
            </li>
        </ul>
    </nav>
    <!-- **********************************************************************************************************-->
    <div class="work_area">
            <div class="sidebar_left">
                <div class="logo_cont_left">
                    <div class="logo_left">
                        <i class='bx bx-mail-send'></i>
                        <div class="logo_name_left">Buzón tributario</div>
                    </div>
                    <i class='bx bx-menu bx-menu_left' ></i>
                </div>
                <hr /> 
                
                <div class="icon_cont">
                    <div class="buzon">
                        <input type="checkbox" id="check-icon-buzon-bar" />
                        <label for="check-icon-buzon-bar">
                            <i class='bx bx-mail-send' id="icon-buzon-bar"></i>
                         </label>
                        <hr /> 
                        <span class="tooltip">Buzón tributario</span>
                    </div>
                </div>
                
                
                <div class="icon_cont">
                    <div class="icon-edit-medios">
                        <i class='bx bx-edit-alt' id="icon-edit-medios"></i>
                        <hr /> 
                        <span class="tooltip">Editar medios de contacto</span>
                    </div>
                </div>
                
                
                    <aside class="bd-sidebar">
                        <nav class="collapse bd-links" id="bd-docs-nav" aria-label="Familas de tramites navigation">
                            <ul class="list-unstyled mb-0 py-3 pt-md-1">
                                <li>
                                    <div class="profile_content"> 
                                        <div class="profile">
                                            <div class="profile_detail">
                                                <!-- <img src="profile.jpg" alt=""> -->
                                                <div class="profile_contribuyente">
                                                    <div class="profile_name">Alberto Sahgun Arias</div>
                                                    <div class="profile_rfc">SAAA7401061V3</div>
                                                </div>
                                                
                                                <div class="profile_medios">
                                                    <div class="title"><i class='bx bx-edit-alt' id="edit_medios"></i><span>Medios de contacto</span></div>
                                                    <div class="medios">alberto.sahagun@outlook.com</div>
                                                    <span class="tooltip">Editar medios de contacto</span>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     <hr />
                                </li>
                            </ul>
                        </nav>
                    </aside>
        </div>
         <div class="home_content">
            
                <div class="content_reports">
                <div class="title-action">Registro Masivo Notificaciones</div>
                <div class="box-envio-masivo">
                    <div class="input-carga">
                      <h5>Archivo de carga</h5>
                         <div class="input-group has-validation mb-3">
                            <span class="input-group-text acceso-title-min-width">Archivo (.xls)</span>
                            <input class="form-control" type="text" placeholder="Ubicación del archivo" name="txtCarga" id="txtCarga"   readOnly ></input>
                            <button type="button" class="btn btn-primary" id="btnCarga" name="btnCarga" >Buscar</button>
                            <input  type="file" class="displayNone" accept=".xls" id="fileCarga"  />

                         </div>
                    </div>
                    
                    <div class="grid-img mb-3">
                        <a href="../img/acuseBuzon942021195159.pdf" target="_blank"><img id="img-grid" src="../img/EnvioMasivoVacio.png" /></a>
                    </div>

                    <div class="enviar-btn">
                        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idEnviar" onclick="onEnviarMunicipioAtiende(event)" >Enviar</button>&nbsp;
                    </div>
                    
                </div>
                <div class="box-envio-masivo-respuesta">
                    <div class="tittulo-folios">
                      <h5>Folios generados por documento </h5>
                    </div>
                    
                    <div class="grid-img mb-3">
                        <a href="../img/acuseBuzon942021195159.pdf" target="_blank"><img id="img-grid-folio" src="../img/EnvioMasivoVacio.png" /></a>
                    </div>

                    <div class="enviar-btn">
                        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idContinuar" onclick="onEnviarMunicipioAtiende(event)" >Continuar</button>&nbsp;
                    </div>
                    
                </div>
                <!--<div class="img-datagrid">
                    <img src="../img/DataGridEjemplo.png" />
                </div>-->
            </div>
               
            
            <div class="sidebar-right">
                        <div class="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
                            <strong class="d-block h6 my-2 pb-2 border-bottom">Contenido</strong>
                            <nav id="TableOfContents">
                                <ul>
                                    <li><a href="dashboard.aspx">Dashboard</a>
                                        <ul>
                                            <li><span>Catalogos</span>
                                                <ul>
                                                    <li><a href="#bundle">Atencion por municipios</a></li>
                                                    <li><a href="#separate">Grupos Atencion</a></li>
                                                    <li><a href="#modules">Empleados</a></li>
                                                    <li><a href="#components">Perfil Empleados</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li><span>Plantillas</span>
                                                <ul>
                                                    <li><a href="#html5-doctype">Crear</a></li>
                                                    <li><a href="#responsive-meta-tag">Modificar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li><span>Buzón</span>
                                                <ul>
                                                    <li><a href="#html5-doctype">Asignar tramites</a></li>
                                                    <li><a href="#responsive-meta-tag">Bandeja de entrada / salida</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li><span>Notificaciones</span>
                                                <ul>
                                                    <li><a href="EnvioUno.aspx">Registro uno a uno</a></li>
                                                    <li><a href="EnvioMasivo.aspx"><strong>Registro masivo</strong></a></li>
                                                    <li><a href="ConsultaNotificaciones.aspx">Consulta Notificaciones</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                </div> 
            </div>
        </div>
    </div>

      <!-- Button trigger modal -->
    <button type="button" id="idAviso" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#avisoModal" style="display:none">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="avisoModal" tabindex="-1" aria-labelledby="avisoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="avisoModalLabel">Notificacón electrónica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
             <span id="tituloModalProgress">Validacion archivo notificacón electrónica masiva</span>
              <div class="progress">
                  <div class="progress-bar" id="idProgress" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
                 
              </div>
              <div class="reporte-valida-masivo">
                  <span> Regsitros analizados  5</span>
                  <span> Regsitros validados 5</span>
                  <span> Registros sin correspondencia 0</span>
              </div>
               
          </div>
          <div class="modal-footer">
                <button type="button" id="cancelarConfirmacion" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" id="closeConfirmacion" class="btn btn-secondary" data-bs-dismiss="modal">Continuar</button>
          </div>
        </div>
      </div>
    </div>
</body>
    <script>
        let envioMasivo = 0;
        let btn = document.querySelector("#clickBars");
        let navbar = document.querySelector(".navbar_dos");

        btn.onclick = function () {

            navbar.classList.toggle("active");
        }


        let btnLeft = document.querySelector(".bx-menu_left");
        let sidebar_left = document.querySelector(".sidebar_left");
        let home = document.querySelector(".home_content");
        
        sidebar_left.classList.toggle("active");
        home.classList.toggle("active");

        btnLeft.onclick = function () {
            sidebar_left.classList.toggle("active");
            home.classList.toggle("active");
        }

        let iconBuzon = document.getElementById("check-icon-buzon-bar");
        
        iconBuzon.onclick = function () {
            sidebar_left.classList.toggle("active");
            home.classList.toggle("active");
        }
        
        let btnCarga = document.getElementById("btnCarga");
        let inputFileName = document.getElementById("txtCarga");

        inputFileName.onclick = function () {
            document.getElementById("fileCarga").click();
        }

        btnCarga.onclick = function () {
            document.getElementById("fileCarga").click();
        }

        let inputCarga = document.getElementById("fileCarga");
        let tid;
        inputCarga.onchange = function () {
            document.getElementById("idAviso").click();
            tid = setInterval(fnAvance, 100);
            let arr = this.value.split("\\");
            if (arr.length > 0) {
                document.getElementById("txtCarga").value = arr[arr.length - 1];
            }
        }

        let btnEnviar = document.getElementById("idEnviar");
        btnEnviar.onclick = function () {
            if (document.getElementById("txtCarga").value != "") {
                document.querySelector(".reporte-valida-masivo").style.display = "none";
                document.getElementById("idAviso").click();
                tid = setInterval(fnAvance, 100);
                envioMasivo = 1;
                document.getElementById("tituloModalProgress").innerHTML = "Envio notificación masiva";
                document.getElementById("cancelarConfirmacion").style.display = "none";
            }
          
        }
        let btnContinuar = document.getElementById("idContinuar");
        btnContinuar.onclick = function () {
            if (envioMasivo == 0) {
                document.querySelector(".box-envio-masivo-respuesta").style.display = "none";
                document.querySelector(".box-envio-masivo").style.display = "block";
                document.getElementById("img-grid").src = "../img/EnvioMasivoVacio.png";
                document.getElementById("txtCarga").value = "";
                document.getElementById("fileCarga").value = "";
            } else {
                 var a = document.createElement('a');
                a.href = 'EnvioMasivo.aspx';
                a.target = '_self';
                document.body.appendChild(a);
                a.click();
            }
        }

        let valueCont = 1;
        function fnAvance() {

            let progressBar = document.getElementById("idProgress");
            let valorPorcNum = valueCont * 10;
            let valorPorc = valorPorcNum.toString() + "%";
            progressBar.style.width = valorPorc;
            progressBar.innerHTML = valorPorc;

            valueCont++;
            if (valueCont == 11)
                abortTimer();
        }
        function abortTimer() { // to be called when you want to stop the timer
            clearInterval(tid);
            valueCont = 0;
            if (envioMasivo==0)
                document.querySelector(".reporte-valida-masivo").style.display = "grid";
            

           // document.getElementById("closeConfirmacion").click();
        }
        btnCloseConfirma = document.getElementById("closeConfirmacion");

        btnCloseConfirma.onclick = function () {

            if (envioMasivo == 1) {
                if (document.getElementById("fileCarga").value != "") {
                    document.querySelector(".box-envio-masivo").style.display = "none";
                    document.querySelector(".box-envio-masivo-respuesta").style.display = "block";
                    document.getElementById("img-grid-folio").src = "../img/FolioMasivo.png";
                }
            } else {
                document.getElementById("img-grid").src = "../img/EnvioMasivoLLeno.png";
            }
           
        }

    </script>

</html>
