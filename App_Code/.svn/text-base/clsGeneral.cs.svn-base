using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

/// <summary>
/// Descripción breve de clsGeneral
/// </summary>
public class clsGeneral
{
    public clsGeneral()
    {
        //
        // TODO: Agregar aquí la lógica del constructor
        //
    }

}

public class clsVariablesSesion
{
    public string RFC { get; set; }
    public string RFCCorto { get; set; }

    JavaScriptSerializer serializador;

    public clsVariablesSesion()
    {
        RFC = string.Empty;
        RFCCorto = string.Empty;
    }

    

    public string Serializar()
    {
        serializador = new JavaScriptSerializer();
        return serializador.Serialize(this);
    }
}