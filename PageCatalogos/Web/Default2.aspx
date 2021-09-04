<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="PageCatalogos_Web_Default2" %>

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
                <i class='bx bxl-c-plus-plus'></i>
                <div class="logo_name">Contribuyente</div>
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
                    <i class='bx bx-chat' ></i>
                    <span class="link_name">Menssages</span>
                </a>
                <span class="tooltip">Menssages</span>
            </li>
            
            <li>
                <a href="#">
                    <i class='bx bx-folder' ></i>
                    <span class="link_name">Manager</span>
                </a>
                <span class="tooltip">File Manager</span>
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
                                
                                <li class="mb-1">
                                    <button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#collapse0-f001" aria-expanded="false">Bandeja de entrada</button>
                                    <div>
                                        <div class="collapse" id="collapse0-f001" style="">
                                            <ul class="list-unstyled fw-normal pb-1 small ">
                                                <li><a href="#" id="tramite0-t001" class="d-inline-flex align-items-center rounded tree-mg-lf-01">Mensaje</a></li>
                                                <li><a href="#" id="tramite0-t002" class="d-inline-flex align-items-center rounded tree-mg-lf-01">Comunicados</a></li>
                                                <li><a href="#" id="tramite0-t003" class="d-inline-flex align-items-center rounded tree-mg-lf-01">Notificaciones</a></li>
                                                <li><a href="#" id="tramite0-t003" class="d-inline-flex align-items-center rounded tree-mg-lf-01">Tramites</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li class="mb-1">
                                    <button class="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#collapse0-f002" aria-expanded="false">Bandeja de salida</button>
                                    <div>
                                        <div class="collapse" id="collapse0-f002" style="">
                                                <ul class="list-unstyled fw-normal pb-1 small ">
                                                    <li><a href="#" id="tramite0-t007" class="d-inline-flex align-items-center rounded tree-mg-lf-01">Mensajes</a></li>
                                                    <li><a href="#" id="tramite0-t008" class="d-inline-flex align-items-center rounded tree-mg-lf-01">Comunicados</a></li>
                                                    <li><a href="#" id="tramite0-t008" class="d-inline-flex align-items-center rounded tree-mg-lf-01">Tramites</a></li>
                                                </ul>
                                        </div>
                                    </div>
                                    <hr />
                                </li>
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
                <div class="box-config-medios">
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary" type="button">Añadir correos electrónicos</button>
                      <button class="btn btn-primary" type="button">Añadir número de teléfono</button>
                    </div>
                </div>
            </div>
            <div class="sidebar-right">
                         derecha
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
