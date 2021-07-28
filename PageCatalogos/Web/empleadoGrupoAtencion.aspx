<%@ Page Language="C#" AutoEventWireup="true" CodeFile="empleadoGrupoAtencion.aspx.cs" Inherits="PageCatalogos_Web_empleadoGrupoAtencion" %>

<!DOCTYPE html>
<html>
  <head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
       <!-- Referencia al bootstrap -->
    <link rel="stylesheet" href="../../Content/css/bootstrap.min.css"/>
    <script src="../../Content/js/bootstrap.bundle.min.js"></script>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>

   
    <script src="../../Content/script/index.js"></script>


    <!--JQuery-->
    <script type="text/javascript" src="../../ScriptsJQ/JQuery/Jquery-v3.5.1.js"></script>
   
    <!-- Script de Pagina-->
    <script src="../JScript/jsAltaEmpleados.js" type="text/javascript"></script>

    <title>Máquina de cotizaciones al azar</title>
      <style>
          *{
              margin:0;
              padding:0;
            }
            html,body{
              background: #eff;
              font-size:50%;
              color:white;
              font-family:Helvetica;
              display:flex;
              align-items:center;
              justify-content:center;
              height:100%;
            }
            .box-pri{
              background: #000;
              width:100px;
              height:100px; 
            }
      </style>
  </head>
  <body>
          <div id="quote-box" class="box-pri">box
              <div id="text"></div>
              <div id="author"></div>
          </div>
  </body>
</html>