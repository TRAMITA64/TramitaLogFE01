

let cols = [
    {
        key: "colFolio",
        name: "Número de Control",
        width: 180,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colRFC',
        name: 'RFC Contribuyente',
        width: 180,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colFechaDelDocumento',
        name: 'Fecha Documento',
        width: 180,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colDeterminante',
        name: 'Determinante',
        width: 180,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colRFCFunc',
        name: 'RFC Funcionario',
        width: 150,
        editable: false,
        resizable: true,
        sortable: true
    },
    {
        key: 'colTramite',
        name: 'Trámite',
        width: 190,
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
    }
];

let rows = [
    {
        "colFolio": "07010102-2021-00035",
        "colRFC": "GALR901220DN0",
        "colFechaDelDocumento": "28/03/2021",
        "colDeterminante": "07010102202100006",
        "colRFCFunc": "OEOM760816PP3",
        "colAutoridad": "Recaudación",
        "colTramite": "Fiscalización",
        "colTipoDeDocumento": "Orden de Visita",
    },
    {
        "colFolio": "07010102-2021-00040",
        "colRFC": "EAMM9104192Z5",
        "colFechaDelDocumento": "28/03/2021",
        "colDeterminante": "07010102202100007",
        "colRFCFunc": "LIVC610518NV9",
        "colAutoridad": "Auditoría",
        "colTramite": "Garantía de Interés Fiscal",
        "colTipoDeDocumento": "Ofrecimiento",
    },
    {
        "colFolio": "07010102-2021-00004",
        "colRFC": "LIRJ8503054P9",
        "colFechaDelDocumento": "28/03/2021",
        "colDeterminante": "07010102202100003",
        "colRFCFunc": "SAAA7401061V3",
        "colAutoridad": "Recaudación",
        "colTramite": "Fiscalización",
        "colTipoDeDocumento": "Carta Invitación",
    },
    
    {
        "folio": "07010102-2021-00004",
        "colRFC": "",
     
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