<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Consultanotificaciones.aspx.cs" Inherits="PageCatalogos_Web_Default3" %>

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
                <div class="title-action">Consulta notificaciones</div>
                <div class="box-consultas">
                    <div class="limpiar-btn">
                        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idLimpiar" onclick="onEnviarMunicipioAtiende(event)" >Aceptar</button>&nbsp;
                        <label >Limpiar criterio de búsqueda</label>
                    </div>
                   
                    <div class="consulta-controles">
                        <div class="grupo-consulta-input mb-3">
                            <label for="idRFC">RFC contribuyente</label>
                            <input type="text" class="form-control" aria-label="Sizing example input" id="idRFC1" aria-describedby="inputGroup-sizing-sm">
                            <label for="idRFC">Fecha del Docuemto</label>
                            <input type="date" class="form-control" aria-label="Sizing example input" id="idRFC2" aria-describedby="inputGroup-sizing-sm">
                            <label for="idRFC">Determinate</label>
                            <input type="text" class="form-control" aria-label="Sizing example input" id="idRFC3" aria-describedby="inputGroup-sizing-sm">
                            <label for="idRFC">RFC del Funcionario</label>
                            <input type="text" class="form-control" aria-label="Sizing example input" id="idRFC4" aria-describedby="inputGroup-sizing-sm">
                        </div>
                        <div class="grupo-consulta-select mb-3">
                            <div class="form-floating mb-3" id="fsTramites">
                                <select class="form-select" id="idfsTramites" aria-label="Trámite">
                                    <option value="0" selected="">Todos</option>
                                    <option value="13">Campaña Tenencia 2021</option>
                                    <option value="15">Regularizate</option>
                                    <option value="18">Fiscalización</option>
                                    <option value="26">Garantía de Interés Fiscal</option>
                                </select><label for="idfsMpiosQueAtienden">Buscar por Trámite</label>
                            </div>
                            <div class="form-floating mb-3" id="fsDocumento">
                                <select class="form-select" id="idfsDocumento" aria-label="Tipo de docuemto">
                                    <option value="0" selected="">Todos</option>
                                    <option value="13">Paga tu tenencia</option>
                                    <option value="15">Carta Invitación</option>
                                    <option value="18">Orden de Visita</option>
                                    <option value="26">Ofrecimiento</option>
                                </select><label for="idfsMpiosQueAtienden">Buscar por docuemto</label>
                            </div>
                            <div class="form-floating mb-3" id="fsAutoridad">
                                <select class="form-select" id="idfsAutoridad" aria-label="Autoridad que emite documento">
                                    <option value="0" selected="">Todos</option>
                                    <option value="13">Recaudación</option>
                                    <option value="15">Auditoría</option>
                                </select><label for="idfsMpiosQueAtienden">Buscar por  Autoridad que emite</label>
                            </div>
                        </div>
                    </div>
                    <div class="enviar-btn">
                        <button class="btn btn-default btn-xs  btn-primary"  type="button" id="idConsultar" onclick="onEnviarMunicipioAtiende(event)" >Consultar</button>&nbsp;
                    </div>
                    <div class="grid-img mb-3">
                        <a href="../img/acuseBuzon942021195159.pdf" target="_blank"><img id="img-grid" src="../img/FiltroTodos.png" /></a>
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
        <li><span >Catalogos</span>
          <ul>
            <li><a href="#bundle">Atencion por municipios</a></li>
            <li><a href="#separate">Grupos Atencion</a></li>
            <li><a href="#modules">Empleados</a></li>
            <li><a href="#components">Perfil Empleados</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><ul>
    <li><span >Plantillas</span>
      <ul>
        <li><a href="#html5-doctype">Crear</a></li>
        <li><a href="#responsive-meta-tag">Modificar</a></li>
      </ul>
    </li>
    </ul></li>
      <li><ul>
    <li><span >Buzón</span>
      <ul>
        <li><a href="#html5-doctype">Asignar tramites</a></li>
        <li><a href="#responsive-meta-tag">Bandeja de entrada / salida</a></li>
      </ul>
    </li>
    </ul></li>
      <li><ul>
    <li><span >Notificaciones</span>
      <ul>
        <li><a href="EnvioUno.aspx">Registro uno a uno</a></li>
        <li><a href="EnvioMasivo.aspx">Registro masivo</a></li>
          <li><a href="ConsultaNotificaciones.aspx"><strong>Consulta Notificaciones</strong></a></li>
      </ul>
    </li>
    </ul></li>

    

  </ul>
</nav>
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
        
        
        let btnConsultar = document.getElementById("idConsultar");
        let btnLimpiar = document.getElementById("idLimpiar");

        btnConsultar.onclick = function () {
            
            if(document.getElementById("idRFC1").value!="")
                document.getElementById("img-grid").src = "../img/FiltroRFC_contribuyente.png";
            if (document.getElementById("idRFC2").value != '')
                document.getElementById("img-grid").src = "../img/FiltroFecha.png";
            if (document.getElementById("idRFC4").value != "")
                document.getElementById("img-grid").src = "../img/FiltroRFC.png";
            if (document.getElementById("idfsTramites").value != 0)
                document.getElementById("img-grid").src = "../img/FiltroTramite.png";
        }

        btnLimpiar.onclick = function () {
            document.getElementById("idRFC1").value = "";
            document.getElementById("idRFC2").value = '';
            document.getElementById("idRFC3").value = "";
            document.getElementById("idRFC4").value = "";
            document.getElementById("img-grid").src = "../img/FiltroTodos.png";

            document.getElementById("idfsTramites").value = 0;
            document.getElementById("idfsDocumento").value = 0;
            document.getElementById("idfsAutoridad").value = 0;

        }
        

    </script>

</html>
