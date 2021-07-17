<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Sedes.aspx.cs" Inherits="PageCatalogos_Web_sedes" %>

<!DOCTYPE html  html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1">
    <title>Tramit@</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8" />


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>

  
    <link rel="stylesheet" href="../../Content/css/main.css"/>
    <link rel="stylesheet" href="../../Content/css/skin.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" >
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" ></script>

    
    
    
    


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
    <script src="../../Content/script/index.js"></script>

    <!--JQuery-->
    <script type="text/javascript" src="../../ScriptsJQ/JQuery/Jquery-v3.5.1.js"></script>


   
    <!-- Script de Pagina-->
    <script src="../JScript/JSsedes.js" type="text/javascript"></script>

     <style>
        .box-title {
            font-size: 13px;
            background: #00f;
            color: #fff;
            font-weight: bold;
            font-family: 'Fuente-Principal' !important;
            height:3rem;
            text-align:center;
            padding-bottom:3px;
        }
    </style>
<script>
    

    

</script>
  

</head>

<body id="wrapper">

<section id="top-header">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-sm-7 col-md-7 top-header-links">
                    <ul class="contact_links">
                        <li><i class="fa fa-phone"></i><a href="#">+52 461 160 7260</a></li>
                        <li><i class="fa fa-envelope"></i><a href="#">rvelascod@hotmail.com</a></li>
                    </ul>
                </div>
                <div class="col-md-5 col-sm-5 col-md-5 social">
                    <ul class="social_links">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
    
    
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="row">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
                        <a class="navbar-brand" href="#">
                            <h1>Tramit@</h1><span>Software Solutions</span></a>
                    </div>
                   
                </div>
            </div>
        </nav>
    </header>




<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Municipios</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Plantillas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Seguimiento</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Ayuda</a>
  </li>
  

  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Salir</a>
  </li>
  
    
</ul>
    <div class="container-fluid">
        <div class="row-cols-auto">
            <div class="col">
                <div  class="col-md-4  well">
                    <h4>&nbsp;</h4>
                    <span id="idMunicipiosQueAtienden"></span>
                </div>
                <div  class="col-md-4  well">
                    
                        <h4>Alta de Sedes</h4>
                         <div class="d-grid gap-2">
                          <div class="box-title"  ondrop="dropSede(event)" ondragover="allowDrop(event)" > <p id="idMunicipioName">Arrastra aqui</p></div>
                        </div>
                        <br />
                        <div class="input-group mb-3">
                           <span class="input-group-text" id="inputSedeName">Nombre Sede</span>
                           <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputSedeName" required/>
                           <input id="idSedeInserta" type="hidden" />
                       </div>
                    
                       <div class="input-group mb-3">
                          <span class="input-group-text" id="inputDireccion">Direccion</span>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputDireccion"  required/>
                       </div>


                        <div class="input-group mb-3">
                          <span class="input-group-text" id="inputResponsable">Responsable</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputName" />
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoP" />
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" id="idInputApellidoM" />
                        </div>
                        <div class="input-group mb-3">
                          <span class="input-group-text" id="inputCorreo">Correo electronico</span>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputCorreo" />
                        </div>
                        <div class="input-group mb-3">  
                          <span class="input-group-text" id="inputTelefono">Telefono</span>
                          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="idInputTelefono" /> 
                       </div>

                         <div>
                            <br />
                            <button class="btn btn-default btn-xs  btn-primary"  type="submit" id="idEnviar" onclick="onEnviarSede(event)" >Enviar</button>&nbsp;
                             <button class="btn btn-default btn-xs  btn-primary" type="submit" id="idBorrar" onclick="onBorrarSede(event)" >Borrar</button>&nbsp;
                            <button class="btn btn-default btn-xs btn-primary" id="idCancelar" onclick="onLimpiarSede(event)" >Limpiar</button>
                        </div>
                        <br />
                        <div class="acoordion " id="idAccordionMpioSedes"></div>
                    
                </div>
                <div  class="col-md-4  well">
                    <h4>&nbsp;</h4>
                    <div class="acoordion " id="idAccordionTodosMpioSedes"></div>
                    
                </div>
            </div>
        </div>
    </div>
         
</body>
</html>

