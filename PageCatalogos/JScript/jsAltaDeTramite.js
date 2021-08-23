'use strict';


let g_arrFamilias = []; // {calve,nombre}
let g_arrSubFamilas = [];//{calve,nombre,refFam}
let g_arrTramites = [];//{calve,nombre,refSubFam}

$(document).ready(function () {
    tramitesGen.catUtility.requestFamilias(onQueryDataFamilias);
});

function transformaTitulo(text) {
    return text.toLowerCase().replace(" ", "-");
}




class ControlSelectFloating extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="form-floating mb-3" id={"fs" + this.props.typeOfControl.pos + this.props.typeOfControl.nombre}>
                <select class="form-select" id={"idfs" + this.props.typeOfControl.pos + this.props.typeOfControl.nombre} aria-label={"Selecciona la " + this.props.typeOfControl.nombre}>
                    {this.props.arrFamilias.map(familia => <option value={"familia-" + familia.clave} selected="">{familia.nombre}</option>) }
                </select>
                <label for="idfsMpiosQueAtienden">{"Selecciona la " + this.props.typeOfControl.nombre}</label>
            </div>
        );
    }
}



/**
 * Control de arbol tres niveles 
 * @param {any} param0
 */
/*----------------------------------------------------------------------------------------------------------------------------------------------------*/
const ListaDeTramites = ({ typeOfControl, arrTramites02 }) => {
    return (
        <ul className="list-unstyled fw-normal pb-1 small ">
            {arrTramites02.map(tramites => <li><a href="#" id={"tramite" + typeOfControl.pos+"-" + transformaTitulo(tramites.clave)} className="d-inline-flex align-items-center rounded tree-mg-lf-02">- {tramites.nombre}</a></li>)}
        </ul>
    );
};

const ListaDeSubFamilias = ({ typeOfControl, clavePadre, arrSubFamilas01, arrTramites01 }) => {
    return (
        <div>
        {
                arrSubFamilas01.map(subFamilia =>
                    <div className="collapse" id={"collapse" + typeOfControl.pos + "-" + transformaTitulo(clavePadre)}>
                        <button className="tree-mg-lf-01 btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={"#collapse" + typeOfControl.pos + "-" + transformaTitulo(subFamilia.clave)} aria-expanded="false">
                        {subFamilia.nombre}
                        </button>
                        <div className="collapse" id={"collapse" + typeOfControl.pos + "-" + transformaTitulo(subFamilia.clave)}>
                            <ListaDeTramites typeOfControl={typeOfControl} arrTramites02={arrTramites01.filter(val => val.refSubFam == subFamilia.clave)} />
                        </div>
                    </div>
            )
        }
        </div>);
}

class ArbolNivel3 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <aside className="bd-sidebar">
                <nav className="collapse bd-links" id="bd-docs-nav" aria-label="Familas de tramites navigation">
                    <ul className="list-unstyled mb-0 py-3 pt-md-1">
                        {this.props.arrFamilias.map(familia =>
                            <li className="mb-1">
                                <button className="btn d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target={"#collapse" + this.props.typeOfControl.pos + "-" + transformaTitulo(familia.clave)} aria-expanded="false">{familia.nombre}</button>
                                <ListaDeSubFamilias typeOfControl={this.props.typeOfControl} clavePadre={familia.clave} arrSubFamilas01={this.props.arrSubFamilias.filter(val => val.refFam == familia.clave)} arrTramites01={this.props.arrTramites} />
                            </li>
                            )
                        }
                    </ul>
                </nav>
            </aside>
        );
    }
}


/*----------------------------------------------------------------------------QueryData--------------------------------------------------------*/
/*let g_arrFamilias = []; // {calve,nombre}
let g_arrSubFamilas = [];//{calve,nombre,refFam}
let g_arrTramites = [];//{calve,nombre,refSubFam}
*/

function onQueryDataFamilias(data) {
    //Query 01
    g_arrFamilias = data
    tramitesGen.catUtility.requestSubFamilias(onQueryDataSubFamilas);
}

function onQueryDataSubFamilas(data) {
    //query 02
    g_arrSubFamilas = data;
    tramitesGen.catUtility.requestTramites(onQueryDataTramites);
}

function onQueryDataTramites(data) {
    //query 03
    g_arrTramites = data;

   
    const domContainer = document.getElementById("familas_navigation_container");
    let typeOfControl = { editable: 1, pos: 0 };
    
    ReactDOM.render(<ArbolNivel3 typeOfControl={typeOfControl} arrFamilias={g_arrFamilias} arrSubFamilias={g_arrSubFamilas} arrTramites={g_arrTramites} />, domContainer);

    const domContainer2 = document.getElementById("familas_navigation_container2");
    let typeOfControl2 = { editable: 1, pos: 1 };
    ReactDOM.render(<ArbolNivel3 typeOfControl={typeOfControl2} arrFamilias={g_arrFamilias} arrSubFamilias={g_arrSubFamilas} arrTramites={g_arrTramites} />, domContainer2);

    const domContainer3 = document.getElementById("select_floating_familias");
    let typeOfControl3 = { nombre:"famila",  pos: 0 };
    ReactDOM.render(<ControlSelectFloating typeOfControl={typeOfControl3} arrFamilias={g_arrFamilias} />, domContainer3);

    const domContainer4 = document.getElementById("select_floating_subfamilias");
    let typeOfControl4 = { nombre: "Sub-Famila", pos: 1 };
    ReactDOM.render(<ControlSelectFloating typeOfControl={typeOfControl4} arrFamilias={g_arrSubFamilas.filter(val => val.refFam == g_arrFamilias[0].clave)} />, domContainer4);
    

}