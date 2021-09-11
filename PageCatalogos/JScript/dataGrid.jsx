/*---------------------Bandeja de Entrada --------------------------------------*/
/*let cols = [
    {
        key: "colFolio",
        name: "Número de Control",
        width: 180,
        editable: false,
        resizable: true
        
    },
    {
        key: 'colTramite',
        name: 'Trámite',
        width: 190,
        editable: false,
        resizable: true
        
    },
    {
        key: 'colFechaDelDocumento',
        name: 'Fecha Documento',
        width: 180,
        editable: false,
        resizable: true
        
    },
    {
        key: 'colAutoridad',
        name: 'Autoridad',
        width: 110,
        editable: false,
        resizable: true
        
    },
    {
        key: 'colTipoDeDocumento',
        name: 'Tipo',
        width: 190,
        editable: false,
        resizable: true
        
    },
    {
        key: 'colstatus',
        name: 'Estaus',
        width: 180,
        editable: false,
        resizable: true
        
    },
    {
        key: 'colDeterminante',
        name: 'Determinante',
        width: 180,
        editable: false,
        resizable: true,
    }
];


let rows = [
    {
        "colFolio": "07010102-2021-00035",
        "colTramite": "Cancelación de CSD",
        "colFechaDelDocumento": "01/08/2021",
        "colAutoridad": "Dirección de Ejecución",
        "colTipoDeDocumento": "Oficio",
        "colstatus": "PENDIENTE DE NOTIFICAR",
        "colDeterminante": "400-65-00-03-02-2021-3915"
        
    },
    {
        "colFolio": "07010102-2021-00004",
        "colTramite": "Tenecia 2021",
        "colFechaDelDocumento": "28/04/2021",
        "colAutoridad": "Gobierno del estado",
        "colTipoDeDocumento": "Carta invitación",
        "colstatus": "Notificado",
        "colDeterminante": "8790597832872391"

    },
    {
        "colFolio": "07010102-2020-00414",
        "colTramite": "Requerimiento de obligaciones",
        "colFechaDelDocumento": "19/11/2020",
        "colAutoridad": "Dirección de Ejacución",
        "colTipoDeDocumento": "Requerimiento",
        "colstatus": "Notificado",
        "colDeterminante": "1008634000251",

    },
    {
        "colFolio": "07010102-2020-00328",
        "colTramite": "Requerimiento de obligaciones",
        "colFechaDelDocumento": "19/10/2020",
        "colAutoridad": "Dirección de Ejacución",
        "colTipoDeDocumento": "Requerimiento",
        "colstatus": "Notificado",
        "colDeterminante": "1008633900401",

    },
    {
        "colFolio": "07010102-2020-00299",
        "colTramite": "Requerimiento de pago",
        "colFechaDelDocumento": "22/08/2020",
        "colAutoridad": "Dirección de Ejacución",
        "colTipoDeDocumento": "PAE",
        "colstatus": "Notificado",
        "colDeterminante": "500-55-00-03-02-2020-4592",

    }
   

];
*/

let cols = [
    {
        key: "colFolio",
        name: "Número de Control",
        width: 180,
        editable: false,
        resizable: true

    },
    {
        key: 'colTramite',
        name: 'Trámite',
        width: 190,
        editable: false,
        resizable: true

    },
    {
        key: 'colFechaDelDocumento',
        name: 'Fecha Documento',
        width: 180,
        editable: false,
        resizable: true

    },
    {
        key: 'colAutoridad',
        name: 'Autoridad',
        width: 110,
        editable: false,
        resizable: true

    },
    {
        key: 'colTipoDeDocumento',
        name: 'Tipo',
        width: 190,
        editable: false,
        resizable: true

    },
    {
        key: 'colstatus',
        name: 'Estaus',
        width: 180,
        editable: false,
        resizable: true

    },
    {
        key: 'colDeterminante',
        name: 'Determinante',
        width: 180,
        editable: false,
        resizable: true,
    }
];

let rows = [
    {
        "colFolio": "07010102-2021-00035",
        "colTramite": "Cancelación de CSD",
        "colFechaDelDocumento": "01/08/2021",
        "colAutoridad": "Dirección de Ejecución",
        "colTipoDeDocumento": "Oficio",
        "colstatus": "PENDIENTE DE NOTIFICAR",
        "colDeterminante": "400-65-00-03-02-2021-3915"

    },
    {
        "colFolio": "07010102-2021-00004",
        "colTramite": "Tenecia 2021",
        "colFechaDelDocumento": "28/04/2021",
        "colAutoridad": "Gobierno del estado",
        "colTipoDeDocumento": "Carta invitación",
        "colstatus": "Notificado",
        "colDeterminante": "8790597832872391"

    },
    {
        "colFolio": "07010102-2020-00414",
        "colTramite": "Requerimiento de obligaciones",
        "colFechaDelDocumento": "19/11/2020",
        "colAutoridad": "Dirección de Ejecución",
        "colTipoDeDocumento": "Requerimiento",
        "colstatus": "Notificado",
        "colDeterminante": "1008634000251",

    },
    {
        "colFolio": "07010102-2020-00328",
        "colTramite": "Requerimiento de obligaciones",
        "colFechaDelDocumento": "19/10/2020",
        "colAutoridad": "Dirección de Ejecución",
        "colTipoDeDocumento": "Requerimiento",
        "colstatus": "Notificado",
        "colDeterminante": "1008633900401",

    },
    {
        "colFolio": "07010102-2020-00299",
        "colTramite": "Requerimiento de pago",
        "colFechaDelDocumento": "22/08/2020",
        "colAutoridad": "Dirección de Ejecución",
        "colTipoDeDocumento": "PAE",
        "colstatus": "Notificado",
        "colDeterminante": "500-55-00-03-02-2020-4592",

    }


];

class Example extends React.Component {
    constructor() {
        super();

        this.state = { rows: rows }


    }

    componentDidMount = () => {
        const context = this;
        setTimeout(() => {
            rows[0].sapAssetNumber = 'meow'
            context.setState({ rows });
        }, 5000);
    }

   

    render() {
        return <ReactDataGrid
            columns={cols}
            rowGetter={(i) => rows[i]}
            rowsCount={10}
            
        />;
    }
}

ReactDOM.render(<Example />, document.querySelector("#root"));