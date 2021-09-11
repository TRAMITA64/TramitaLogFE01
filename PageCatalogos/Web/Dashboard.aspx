<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Dashboard.aspx.cs" Inherits="PageCatalogos_Dashboard" %>

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
             <div class="content_dashboard" >
                <div class="box-card">
                    <div class="title-border-top"></div>
                    <div class="conten-card">
                        <div class="logo-card"><i class='bx bx-spreadsheet' ></i></div>
                        <div class="dec-card">Catálogos</div>
                        <div class="link-card">
                            <ul>
                                <li><a>Atención por municipio</a></li>
                                <li><a>Grupos de Atención</a></li>
                                <li><a>Empleados</a></li>
                                <li><a>Perfil empleado</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="box-card">
                   <div class="title-border-top"></div>
                    <div class="conten-card">
                        <div class="logo-card"><i class='bx bxs-news'></i></div>
                        <div class="dec-card">Plantillas</div>
                        <div class="link-card">
                            <ul>
                                <li><a>Crear</a></li>
                                <li><a>Modificar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="box-card">
                      <div class="title-border-top"></div>
                    <div class="conten-card">
                        <div class="logo-card"><i class="bx bx-mail-send"></i></div>
                        <div class="dec-card">Buzón</div>
                        <div class="link-card">
                            <ul>
                                <li><a>Asignar trámites</a></li>
                                <li><a>Bandeja de Entrada </a></li>
                                <li><a>Bandeja de Salida</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="box-card">
                    <div class="title-border-top"></div>
                    <div class="conten-card">
                        <div class="logo-card"><i class='bx bxs-bell-ring'></i></div>
                        <div class="dec-card">Notificación</div>
                        <div class="link-card">
                            <ul>
                                <li><a href="EnvioUno.aspx">Registro uno a uno</a></li>
                                <li><a href="EnvioMasivo.aspx">Registro masivo</a></li>
                                <li><a href="ConsultaNotificaciones.aspx">Consulta</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar-right">
                        <div class="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
          <strong class="d-block h6 my-2 pb-2 border-bottom">Contenido</strong>
          <nav id="TableOfContents">
  <ul>
    <li><a ><strong>Dashboard</strong></a>
      <ul>
        <li><span >Catálogos</span>
          <ul>
            <li><a href="Dashboard.aspx">Atención municipios</a></li>
            <li><a href="Dashboard.aspx">Grupos Atención</a></li>
            <li><a href="Dashboard.aspx">Empleados</a></li>
            <li><a href="Dashboard.aspx">Perfil Empleados</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><ul>
    <li><span >Plantillas</span>
      <ul>
        <li><a href="Dashboard.aspx">Crear</a></li>
        <li><a href="Dashboard.aspx">Modificar</a></li>
      </ul>
    </li>
    </ul></li>
      <li><ul>
    <li><span >Buzón</span>
      <ul>
        <li><a href="Dashboard.aspx">Asignar trámites</a></li>
        <li><a href="Dashboard.aspx">Bandeja de entrada </a></li>
          <li><a href="Dashboard.aspx">Bandeja de salida</a></li>
      </ul>
    </li>
    </ul></li>
      <li><ul>
    <li><span >Notificaciones</span>
      <ul>
        <li><a href="EnvioUno.aspx">Registro uno a uno</a></li>
        <li><a href="EnvioMasivo.aspx">Registro masivo</a></li>
        <li><a href="ConsultaNotificaciones.aspx">Consulta</a></li>
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

    </script>

</html>
