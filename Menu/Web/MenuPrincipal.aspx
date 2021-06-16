<%@ Page Language="C#" AutoEventWireup="true" CodeFile="MenuPrincipal.aspx.cs" Inherits="Menu_Web_MenuPrincipal" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Principal</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../Content/css/main.css"/>
    <link rel="stylesheet" href="../../Content/css/skin.css"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="../../Content/script/index.js"></script>

    <script type="text/javascript" src="../../ScriptsJQ/JQuery/Jquery-v3.5.1.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            //$("#trJMenu").menu({ position: { my: "left top", at: "left bottom" } });           
            fnVariablesSesion();
        });

        function fnVariablesSesion() {
            $.ajax({
                type: "POST",
                url: "MenuPrincipal.aspx/GetVariables",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    var result = response.d;
                    if (result.length > 0) {
                        var objRes = jQuery.parseJSON(result);
                        strPerfil = objRes.RFC;
                        //alert(strPerfil);
                        $("#hdnRFC").val(strPerfil);
                    }
                },
                failure: function (response) {
                    alert(response.d);
                }
            });
        }
    </script>


</head>
<body>
   
    
</body>
</html>
