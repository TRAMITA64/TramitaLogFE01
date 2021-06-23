using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Configuration;

/// <summary>
/// Descripción breve de wsMenu
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
 [System.Web.Script.Services.ScriptService]
public class wsMenu : System.Web.Services.WebService
{

    public wsMenu()
    {

        //Elimine la marca de comentario de la línea siguiente si utiliza los componentes diseñados 
        //InitializeComponent(); 
    }

    [WebMethod(EnableSession = true)]
    public string EncriptaTexto(string strTexto)
    {
        string strCadena = string.Empty;
        string strResultado = string.Empty;
        try
        {
            //strCadena = Session["RFC"].ToString();
            //strTexto = "NATS880813MU7";
            clsEncriptacionSim objEncriptacion = new clsEncriptacionSim();
            strResultado = objEncriptacion.Cifrado(strTexto);

            if(Session["RFCifrado"] != null)
                strResultado = Session["RFCifrado"].ToString();

            return strResultado;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

    }


    [WebMethod(EnableSession = true)]
    public string DesEncriptaTexto(string strParametros)
    {
        string strResultado = string.Empty;
        try
        {
            //Metodo simetrico
            //string strCadena = Session["RFC"].ToString();
            clsEncriptacionSim objEncriptacion = new clsEncriptacionSim();
            strResultado = objEncriptacion.Descifrado(strParametros);

            HttpContext.Current.Session["RFCifrado"] = strParametros;


            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

    }


    [WebMethod(EnableSession = true)]
    public string wsObtenerUsuario(string strRFC)
    {
        string strResultado = string.Empty;
        DataSet dtsDatos = new DataSet();
        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = strRFC;
            Session["RFC"] = strRFC;

            clsUsuarios objUsuario = new clsUsuarios();
            objUsuario.Conexion = ConfigurationManager.ConnectionStrings["conStringTramita"].ConnectionString;
            //objUsuario.RFC = Session["RFC"].ToString();
            objUsuario.RFC = strRFC;
            strResultado = objUsuario.clsObtenerUsuario();

            return strResultado;

        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

    }

}
