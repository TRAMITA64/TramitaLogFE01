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
            #contenedor{
              background: #00f;
              padding:50px;
              border-radius:6px;
            }
            .box-pri{
              background: #00f;
              width:550px;
              margin: auto;
            }
            #text{
                font-size:22px;
            }
            #quote-author{

                text-align:end;
                padding:15px 0px 15px 0px;
            }
            #author{
                font-size:15px;
                opacity:0.7;
            }
            .btn_cls{
                padding:0.755rem 1.456rem;
                font-size:1.7rem;
                background:#fff;
                color:#0d6efd;
                
                border-radius:3px:

            }
            .contentButton{
                display:grid;
                grid-template-columns:0.16fr 0.0135fr 0.16fr 1fr 0.31fr;

            }
      </style>
  </head>
  <body>
     <div id="contenedor"> 
        <div id="quote-box" class="box-pri">
            <div id="quote-text"><span id="text">Aqui va le texto Aqui va le texto Aqui va le texto Aqui va le texto Aqui va le texto</span></div>
            
            <div id="quote-author"><span id="author">-Alberto Sahagun</span> </div>
            <div id="contentButton" class="contentButton">
                <button id="tweet-quote" class="btn btn-default btn-primary btn_cls"><i class="fa fa-twitter"></i></button>
                <div class="emptyDiv"></div>
                <button id="tumblr-quote" class="btn btn-default btn-primary btn_cls"><i class="fa fa-tumblr"></i></button>
                <div class="emptyDiv"></div>
                <button id="new-quote" class="btn btn-default btn-primary btn_cls">New Quote</button>
            </div>
        </div>
    </div>   
  </body>
</html>