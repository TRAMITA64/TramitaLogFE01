using System;
using System.Collections.Generic;
using System.Web.Caching;
using System.Web.Services;
using System.Data;
using System.Configuration;

/// <summary>
/// Descripción breve de CatWebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
[System.Web.Script.Services.ScriptService]
public class CatWebService : System.Web.Services.WebService
{

    public CatWebService()
    {

        //Elimine la marca de comentario de la línea siguiente si utiliza los componentes diseñados 
        //InitializeComponent(); 
    }

    

    [WebMethod(EnableSession = true)]
    public string GetMunicipiosList(string param)
    {
        
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMunicipios(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string GetMpioAtiendeList(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpioAtiende(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string getMpiosQueAtienden(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpiosQueAtienden(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string getMpiosConAtencion(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpiosConAtencion(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string getMpiosSinAtencion(string param)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = param;
            Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            objCatalogos.RFC = param;
            strResultado = objCatalogos.getMpiosSinAtencion(param);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string EnviarMunicipioAtiende(string param1, string param2)//municipio que atiende, municipios que son atendidos 
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
           // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
           // objCatalogos.RFC = param;
            strResultado = objCatalogos.insertMpioAtencion(param1,param2);
            
            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string updateMunicipioAtiende(string param1, string param2)//update lista de municipio que atiende, municipios que son atendidos 
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.updateMpioAtencion(param1, param2);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string getMpiosYsedes(string param1)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.spqGetMpiosYsedes(param1);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string insertaSede(string SedeName, string Direccion, string Name, string ApellidoP, string ApellidoM, string Correo, string Telefono,string Municipio)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.insertaSede(SedeName, Direccion, Name, ApellidoP, ApellidoM, Correo, Telefono, Municipio);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string updateSede(string SedeName, string Direccion, string Name, string ApellidoP, string ApellidoM, string Correo, string Telefono, string sede)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.updateSede(SedeName, Direccion, Name, ApellidoP, ApellidoM, Correo, Telefono, sede);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    
    [WebMethod(EnableSession = true)]
    public string deleteSede(string param1,string param2)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.deleteSede( param1, param2);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    
    [WebMethod(EnableSession = true)]
    public string EnviaGrupoDeAtencion(string param1, string param2, string param3, string param4, string param5)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.insertaGrupoDeAtencion(param1, param2, param3, param4, param5);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

    }
    [WebMethod(EnableSession = true)]
    public string NombresGruposDeAtencion(string param1)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.nombresGrupoDeAtencion(param1);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }


    [WebMethod(EnableSession = true)]
    public string GruposAtencionAll(string param1)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
         
            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
         
            strResultado = objCatalogos.GrupoDeAtencionAll(param1);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }

    [WebMethod(EnableSession = true)]
    public string borrarGrupoDeAtencion(string param1,string user)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;

            strResultado = objCatalogos.deleteGrupoDeAtencion(param1,user);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string updateGrupoDeAtencion(string param1, string param2, string param3, string param4, string param5)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.updateGrupoDeAtencion(param1, param2, param3, param4, param5);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string Empleados(string param1, string param2)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.getEmpleados(param1, param2);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string StatusEmpleados(string param1, string param2)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.getStatusEmpleados(param1, param2);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string insertaEmpleado(string idEmp, string rfc, string n1,string ap,string am, string co, string fa, string idM, string idS, string st, string us)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.insertEmpleado(idEmp, rfc, n1, ap, am, co, fa, idM, idS, st, us);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string updateEmpleado(string idEmp, string rfc, string n1, string ap, string am, string co, string fa, string idM, string idS, string st, string us)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.updateEmpleado(idEmp, rfc, n1, ap, am, co, fa, idM, idS, st, us);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string CatPerfiles(string param1)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.getCatalogoPerfiles(param1);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string empleadoPerfiles(string param1)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.getEmpleadoPerfiles(param1);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
    [WebMethod(EnableSession = true)]
    public string updateEmpleadoPerfiles(string idEmp,string perfiles,string user)
    {
        string strResultado = "Webservice";
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            // objVariables.RFC = param;
            //Session["RFC"] = param;

            ClsCatalogos objCatalogos = new ClsCatalogos();
            objCatalogos.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objCatalogos.RFC = Session["RFC"].ToString();
            // objCatalogos.RFC = param;
            strResultado = objCatalogos.updateEmpleadoPerfiles(idEmp, perfiles, user);

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }
    }
}


