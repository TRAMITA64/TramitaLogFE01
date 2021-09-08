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
         <div class="home_content" >
            <div class="content_reports" style="height:600px; overflow: scroll;">
                <div class="title-action">Registro de Notificación</div>
                <div class="box-config-medios">
                    <div class="d-grid gap-2">

              <table style="width:100%">
                    <tr>
                        <td style="width:50%">
                            <div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm1">RFC del Contribuyente</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm1"/>
                                </div>
                            </div>
                            <div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm2">Fecha del Documento&nbsp;</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm2"/>
                                </div>
                            </div>

                            <div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm3">Determinante&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm3"/>
                                </div>
                            </div>
                            <div>
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm4">RFC del Funcionario&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    </div>
                                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm4"/>
                                </div>
                            </div>
  	                    </td>
                        <td style="width:10%">
                        </td>
                        <td style="width:40%">
                            <div>
                                <span class="input-group-text">Trámite</span>
                            </div>
                            <div>
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Seleccione</option>
                                    <option value="1">Trámite 1</option>
                                    <option value="2">Trámite 2</option>
                                    <option value="3">Trámite 3</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <span class="input-group-text">Tipo de Documento</span>
                            </div>
                            <div>
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Seleccione</option>
                                    <option value="1">Documento 1</option>
                                    <option value="2">Documento 2</option>
                                    <option value="3">Documento 3</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <span class="input-group-text">Autoridad que emite el Documento</span>
                            </div>
                            <div>
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Seleccione</option>
                                    <option value="1">Autoridad 1</option>
                                    <option value="2">Autoridad 2</option>
                                    <option value="3">Autoridad 3</option>
                                </select>
                            </div>
                        </td>
                    </tr>
              </table>
                        
            <div class="title-action">Carga del documento a notificar</div>
            <div class="input-group mb-3">
              <input type="file" class="form-control" id="inputGroupFile02"/>
              <label class="input-group-text" for="inputGroupFile02">Buscar</label>
                <a href="../../General/pdf/acuse.pdf" class="btn btn-secondary btn-sm" role="button" target="_blank">Vista Previa</a>
            </div>

            <button type="button" class="btn btn-outline-secondary">Enviar</button>
            <br />

                    </div>
                </div>
            </div>
            <div class="sidebar-right">
                        <div class="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
          <strong class="d-block h6 my-2 pb-2 border-bottom">Contenido</strong>
          <nav id="TableOfContents">
  <ul>
    <li><a href="#quick-start">Aviso privacidad</a>
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
        <li><b><a href="#html5-doctype">Registro uno a uno</a></b></li>
        <li><a href="#responsive-meta-tag">Registro masivo</a></li>
          <li><a href="#responsive-meta-tag">Consulta</a></li>
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
