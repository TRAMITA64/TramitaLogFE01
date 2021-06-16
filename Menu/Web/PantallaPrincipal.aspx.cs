using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Web.Script.Serialization;

public partial class Menu_Web_PantallaPrincipal : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            Response.Cache.SetExpires(DateTime.UtcNow.AddMinutes(-1));
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetNoStore();

        }
        catch (Exception ex)
        {  
            ClientScriptManager csmClientScript = Page.ClientScript;
            csmClientScript.RegisterClientScriptBlock(this.GetType(), "NoService", "alert('Error al ingresar al sistema: " + ex.Message.Replace(char.Parse("'"), char.Parse("-")) + "'); parent.close();", true);
        }

    }

    [WebMethod]
    public static string SetVariables(string strRFC)
    {
        string strResult = "1";

        try
        {
            clsVariablesSesion objVariables = new clsVariablesSesion();
            objVariables.RFC = strRFC;
            HttpContext.Current.Session["RFC"] = strRFC;
        }
        catch (Exception ex)
        {
            throw new Exception(ex.Message);
        }

        return strResult;
    }
}