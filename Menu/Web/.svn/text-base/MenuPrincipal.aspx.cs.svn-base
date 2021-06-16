using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.Web.Script.Serialization;

public partial class Menu_Web_MenuPrincipal : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    [WebMethod]
    public static string GetVariables()
    {
        clsVariablesSesion objVariables = new clsVariablesSesion();
        objVariables.RFC = Convert.ToString(HttpContext.Current.Session["RFC"]);
        //HttpContext.Current.Session["RFCorto"] = strRFCCorto;
        //objVariables.RFCCorto = strRFCCorto;
        return objVariables.Serializar();
    }
}