<%@ Page Language="C#" AutoEventWireup="true" CodeFile="EnvioUno.aspx.cs" Inherits="PageCatalogos_Dashboard" %>

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
                                                    <div class="profile_name">Roberto Velasco Diaz</div>
                                                    <div class="profile_rfc">VEDR721028DB3</div>
                                                </div>
                                                
                                                <div class="profile_medios">
                                                    <div class="title"><i class='bx bx-edit-alt' id="edit_medios"></i></div>
                                                    <div class="medios">roberto.velasco@outlook.com</div>
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
                <div class="title-action"><b>Registro de notificación</b></div>
                <div class="box-consultas">
                    <div class="consulta-controles">
                        <div class="grupo-consulta-input mb-3">
                            <label for="idRFC">RFC contribuyente</label>
                            <input type="text" class="form-control" aria-label="Sizing example input" id="idRFC1" aria-describedby="inputGroup-sizing-sm">
                            <label for="idRFC">Fecha del documento</label>
                            <input type="date" class="form-control" aria-label="Sizing example input" id="idRFC2" aria-describedby="inputGroup-sizing-sm">
                            <label for="idRFC">Determinante</label>
                            <input type="text" class="form-control" aria-label="Sizing example input" id="idRFC3" aria-describedby="inputGroup-sizing-sm">
                            <label for="idRFC">RFC funcionario</label>
                            <input type="text" class="form-control" aria-label="Sizing example input" id="idRFC4" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="grupo-consulta-select mb-3">
                            <div class="form-floating mb-3" id="fsTramites">
                                <select class="form-select" id="idfsTramites" aria-label="Trámite">
                                    <option value="0" selected="">Todos</option>
                                    <option value="1"="">Vigilancia de obligaciones</option>
                                    <option value="2"="">Fiscalización</option>
                                    <option value="3"="">Póliza de fianza</option>
                                    <option value="4"="">Billete de depósito</option>
                                    <option value="5"="">Embargo de bienes muebles</option>
                                    <option value="6"="">Embargo de bienes inmuebles</option>
                                    <option value="7"="">Embargo de negociación</option>
                                    <option value="8"="">Tercero solidario</option>
                                    <option value="9"="">Sustitución de garantía</option>
                                    <option value="10"="">Cancelación de garantía</option>
                                </select><label for="idfsMpiosQueAtienden">Trámite</label>
                            </div>
                            <div class="form-floating mb-3" id="fsDocumento">
                                <select class="form-select" id="idfsDocumento" aria-label="Tipo de docuemto">
                                    <option value="0" selected="">Todos</option>
                                    <option value="1"="">Orden de visita</option>
                                    <option value="2"="">Escrito libre</option>
                                    <option value="3"="">Oficio</option>
                                    <option value="4"="">Carta invitación</option>
                                    <option value="5"="">Requerimiento de información</option>
                                    <option value="6"="">Requerimiento de obligaciones</option>
                                    <option value="7"="">Requerimiento de pago</option>
                                    <option value="8"="">Hechos u omisiones</option>
                                    <option value="9"="">Multa de fondo</option>
                                </select><label for="idfsMpiosQueAtienden">Tipo de documento</label>
                            </div>
                            <div class="form-floating mb-3" id="fsAutoridad">
                                <select class="form-select" id="idfsAutoridad" aria-label="Autoridad que emite documento">
                                    <option value="0" selected="">Todos</option>
                                    <option value="2">Secretaría de Finanzas, Inversión y Administración</option>
                                    <option value="3">Dirección General Financiera</option>
                                    <option value="4">Dirección General de Ingresos</option>
                                    <option value="5">Subdirección General Jurídica</option>
                                    <option value="6">Subdirección General de Ingresos</option>
                                    <option value="7">Dirección de Recaudación</option>
                                    <option value="8">Subdirección General de Auditoría</option>
                                    <option value="9">Dirección de Ejecución</option>
                                </select><label for="idfsMpiosQueAtienden">Autoridad que emite</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="input-carga">
                      <h5>Archivo de carga</h5>
                         <div class="input-group has-validation mb-3">
                            <span class="input-group-text acceso-title-min-width">Archivo (.pdf)</span>
                            <input class="form-control" type="text" placeholder="Ubicación del archivo" name="txtCarga" id="txtCarga"  onclick="onclickCarga" readOnly ></input>
                            <button type="button" class="btn btn-primary" id="btnCarga" name="btnCarga" onclick="onclickCarga">Buscar</button>
                            <input  type="file" class="displayNone" accept=".pdf" id="fileCarga"  />
                         </div>
                        
                    </div>
                    <div class="input-group-uno" >
                        <div class="enviar-btn-vista">
                              <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idVista" onclick="onEnviarMunicipioAtiende(event)" disabled>Vista Previa</button>&nbsp;
                            <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idEnviar" onclick="onEnviarMunicipioAtiende(event)" disabled>Enviar</button>&nbsp;
                        </div>
                    </div>
                </div>
                <div class="box-envio-uno-respuesta">
                    <div class="tittulo-folios">
                      <h5>Esta notificación generó el siguiente número de control</h5>
                    </div>
                    <div class="grid-img mb-3">
                        <label><strong>07010102-2021-00035</strong> </label>
                    </div>
                    <div class="grid-img mb-3">
                        <label>SAAA740809RMA | </label>
                        <label>28/03/2021 | </label>
                        <label>07010102202100006 | </label>
                        <label>FURH860816PP3 | </label>
                        <label>Dirección de Ejecución | </label>
                        <label>Vigilancia de obligaciones | </label>
                        <label>Requerimiento de obligaciones </label>
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
                                     <li><span>Catálogos</span>
                                         <ul>
                                             <li><a href="#bundle">Atención municipios</a></li>
                                             <li><a href="#separate">Grupos atención</a></li>
                                             <li><a href="#modules">Empleados</a></li>
                                             <li><a href="#components">Perfil empleados</a></li>
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
                                             <li><a href="#html5-doctype">Asignar trámites</a></li>
                                             <li><a href="#responsive-meta-tag">Bandeja de entrada </a></li>
                                             <li><a href="#responsive-meta-tag">Bandeja de salida</a></li>
                                         </ul>
                                     </li>
                                 </ul>
                             </li>
                             <li>
                                 <ul>
                                     <li><span>Notificación</span>
                                         <ul>
                                             <li><a href="EnvioUno.aspx"><strong>Registro uno a uno</strong></a></li>
                                             <li><a href="EnvioMasivo.aspx">Registro masivo</a></li>
                                             <li><a href="ConsultaNotificaciones.aspx">Consulta notificaciones</a></li>
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
            <h5 class="modal-title" id="avisoModalLabel">Notificación electrónica</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
             Proceso de notificación electrónica 
              <div class="progress">
                  <div class="progress-bar" id="idProgress" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" id="closeConfirmacion" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

</body>
    <script>

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
        let btnfileCarga = document.getElementById("fileCarga");

        btnfileCarga.onchange = function () {
            let arr = this.value.split("\\");
            if (arr.length > 0) {
                document.getElementById("txtCarga").value = arr[arr.length - 1];
                document.getElementById("idVista").disabled = false;
                validaEnviar(this);
            }
        }
        inputFileName.onclick = function () {
            document.getElementById("fileCarga").click();
        }
        btnCarga.onclick = function () {
            document.getElementById("fileCarga").click();
        }

        let btnVista = document.getElementById("idVista");
        let tid;
        btnVista.onclick = function () {
            
            var a = document.createElement('a');
            a.href = '../img/acuseBuzon942021195159.pdf';
            a.target = '_blanck';
            document.body.appendChild(a);
            a.click();
        }
        let inputOj = ["idRFC1", "idRFC2", "idRFC3", "idRFC4", "txtCarga" ];
        let btn1 = document.getElementById("idRFC1");
        let btn2 = document.getElementById("idRFC2");
        let btn3 = document.getElementById("idRFC3");
        let btn4 = document.getElementById("idRFC4");
        btn1.onchange = function () {
            validaEnviar(this);
        }
        btn2.onchange = function () {
            validaEnviar(this);
        }
        btn3.onchange = function () {
            validaEnviar(this);
        }
        btn4.onchange = function () {
            validaEnviar(this);
        }

        function validaEnviar(obj) {
            for (let iIndex = 0; inputOj.length > iIndex; iIndex++) {
                if (document.getElementById(inputOj[iIndex]).value == "") {
                    document.getElementById("idEnviar").disabled=true;
                    return true;
                }
            }
            document.getElementById("idEnviar").disabled = false;
            return false;
        }
        let btnEnviar = document.getElementById("idEnviar");

        btnEnviar.onclick = function () {
            document.getElementById("idAviso").click();
            tid = setInterval(fnAvance, 100);
            

        }
        let btnContinuar = document.getElementById("idContinuar");

        btnContinuar.onclick = function () {
            
            /*let divBox = document.querySelector(".box-consultas");
            divBox.style.display = "block";
            document.querySelector(".box-envio-uno-respuesta").style.display = "none";
            for (let iIndex = 0; inputOj.length > iIndex; iIndex++) {
                document.getElementById(inputOj[iIndex]).value = "";
            }*/
            var a = document.createElement('a');
            a.href = 'EnvioUno.aspx';
            a.target = '_self';
            document.body.appendChild(a);
            a.click();

        }
        let valueCont = 1;
        function fnAvance() {

            let progressBar = document.getElementById("idProgress");
            let valorPorc;
            switch (valueCont) {
                case 1:
                    valorPorc = "25%"
                    break;
                case 2:
                    valorPorc = "50%"
                    break;
                case 3:
                    valorPorc = "75%"
                    break;
                case 4:
                    valorPorc = "100%"
                    break;
            }

            progressBar.style.width = valorPorc;
            progressBar.innerHTML = valorPorc;

            valueCont++
            if (valueCont == 5)
                abortTimer();
        }
        function abortTimer() { // to be called when you want to stop the timer
            clearInterval(tid);
            valueCont = 0;
        }
        btnCloseConfirma = document.getElementById("closeConfirmacion");

        btnCloseConfirma.onclick = function () {
            let divBox = document.querySelector(".box-consultas");
            divBox.style.display = "none";
            document.querySelector(".box-envio-uno-respuesta").style.display = "block";

           /* var a = document.createElement('a');
            a.href = 'DetalleNotificacion.html';
            a.target = '_self';
            document.body.appendChild(a);
            a.click();*/
        }
    </script>
    
</html>
