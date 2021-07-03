<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Municipios.aspx.cs" Inherits="PageMunicipios" %>

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
    <script src="../JScript/Municipios.js" type="text/javascript"></script>

     <style>
#div1 {
  width: 180px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
#div2 {
  width: 180px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
        .list-group-atiende{
            min-height : 9rem;
            background : white;
        }
         .list-group-atendidos {
             min-height : 20rem;
             background : white;
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
                   <h4>Municipios sin atencion <span id="idNumSinAtMunicipios"></span></h4>
                   
                   <span id="idMpiosSinAtt" class="list-group">
                        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">Municipios sin atencion</button>
                   </span> 
               </div>
               <div  class="col-md-4 well">
                   <h4>Alta municipios que atienden</h4><span id="idNumQueAtMunicipios"></span>
                    <div id="idAtiende" class="list-group list-group-atiende" ondrop="dropAtiende(event)" ondragover="allowDrop(event)">
                         <button type="button" class="list-group-item list-group-item-action active" aria-current="true" disabled>
                        Municipio que Atiende
                      </button>
                        <button type="button" class="list-group-item list-group-item-action">Arrastra aqui</button>
                    </div>
                    <br />
                    <div id="idAtendidos" class="list-group list-group-atendidos" ondrop="dropAtendidos(event)" ondragover="allowDrop(event)">
                         <button type="button" class="list-group-item list-group-item-action active" aria-current="true" disabled>
                        Municipios atendidos
                      </button>
                        <button type="button" class="list-group-item list-group-item-action">Arrastra aqui</button>
    
                    </div>
                    <div>
                        <br />
                        <button class="btn btn-default  btn-primary" id="idEnviar" onclick="onEnviarMunicipioAtiende(event)" >Enviar</button>&nbsp;
                        <button class="btn btn-default  btn-primary" id="idCancelar" onclick="onCancelarMunicipioAtiende(event)" >Cancelar</button>
                    </div>
                   
               </div>
               <div class="col-md-4  well">
                    <h4>Municipios con atencion <span id="idNumConAtMunicipios" ></span> </h4>
                    <div class="acoordion " id="accordionExample"></div>
               </div>
        </div>
        </div>
    </div>
</body>
</html>

