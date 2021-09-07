

let cols = [
    {
        key: 'colFolio',
        name: 'Folio',
        width: 180,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colTramite',
        name: 'Trámite',
        width: 90,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colFechaDelDocumento',
        name: 'Fecha\n',
        width: 200,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colAutoridad',
        name: 'Autoridad',
        width: 110,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colTipoDeDocumento',
        name: 'Tipo',
        width: 190,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colEstatus',
        name: 'Estatus',
        width: 90,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colDeterminante',
        name: 'Determinante',
        width: 130,
        editable: false,
        resizable: true,
        sortable: true
    }
];

let rows = [
    {
        "colFolio": "07010102-2021-00004",
        "colTramite": "Campaña Tenencia 2021",
        "colFechaDelDocumento": "28/03/2021",
        "colAutoridad": "Recaudación",
        "colTipoDeDocumento": "Paga tu tenencia",
        "colEstatus": "No Leído",
        "colDeterminante":"07010102202100004"
    },
    {
        "colFolio": "07010102-2021-00003",
        "colTramite": "Regularízate",
        "colFechaDelDocumento": "23/03/2021",
        "colAutoridad": "Auditoría",
        "colTipoDeDocumento": "Carta Invitación",
        "colEstatus": "Leído",
        "colDeterminante": "07010102202100004"
    },
    {
        "colFolio": "07010102-2021-00002",
        "colTramite": "Fiscalización",
        "colFechaDelDocumento": "20/02/2021",
        "colAutoridad": "Auditoría",
        "colTipoDeDocumento": "Orden de Visita",
        "colEstatus": "Pendiente de Notificar",
        "colDeterminante": "07010102202100004"
    },
    {
        "colFolio": "07010102-2021-00001",
        "colTramite": "Garantía de Interés Fiscal",
        "colFechaDelDocumento": "08/02/2021",
        "colAutoridad": "Recaudación",
        "colTipoDeDocumento": "Ofrecimiento",
        "colEstatus": "Presentado",
        "colDeterminante": "07010102202100004"
    },
    {
        "id": "kjdsaflkadjsf",
 
    },
    {
        "id": "",
 
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

    onGridSort() {
        alert("uno");
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