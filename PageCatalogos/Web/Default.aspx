<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="PageCatalogos_Web_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title>Responsive Navigation Menu</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet"  href="../css/style.css"/>    
    
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
                    <div class="logo_name_left">Buzón</div>
                </div>
                <i class='bx bx-menu bx-menu_left' ></i>
            </div>
            <hr />
            <ul class="nav_list_left">
                <!--  <li>
                        <i class='bx bx-search bx-search-buzon' ></i>
                        <input  type="text" placeholder="Search..." />
                        <span class="tooltip_left">Search</span>
                </li>-->
                <li>
                    <a href="#">
                        <i class='bx bx-folder-plus' ></i>
                        <span class="links_name_left">Bandeja de entrada</span>
                    </a>
                    <span class="tooltip_left">Bandeja de entrada</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-folder-plus' ></i>
                        <span class="links_name_left">Bandeja de salida</span>
                    </a>
                    <span class="tooltip_left">Bandeja de salida</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-folder-plus' ></i>
                        <span class="links_name_left">Todos</span>
                    </a>
                    <span class="tooltip_left">Todos</span>
                </li>
            </ul>
            <hr />
            <div class="profile_content"> 
                <div class="profile">
                    <div class="profiel_detail">
                        <!-- <img src="profile.jpg" alt=""> -->
                        <div class="name_job">
                            <div class="profile_name">Alberto Sahgun Arias</div>
                            <div class="profile_rfc">SAAA7401061V3</div>
                            <div class="profile_name">alberto.sahagun@outlook.com</div>
                        </div>
                    </div>
                                <i class='bx bx-edit-alt' id="log_out_left"></i>
                                
                </div>
            </div>
        </div>
         <div class="home_content">
            <div class="content_reports">Home content</div>
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
        let searchLeft = document.querySelector(".bx-search-buzon");
        let home = document.querySelector(".home_content");

        sidebar_left.classList.toggle("active");
        home.classList.toggle("active");

        btnLeft.onclick = function () {
            sidebar_left.classList.toggle("active");
            home.classList.toggle("active");
        }

        searchLeft.onclick = function () {

            sidebar_left.classList.toggle("active");
            home.classList.toggle("active");
        }

    </script>

</html>
