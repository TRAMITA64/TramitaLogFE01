var tramitesGen = tramitesGen || {};

tramitesGen.catUtility = (function (catUtility, $, undefined) {
    requestFamilias:function requestFamilias(onQueryDataFamilias) {
        let url = "http://localhost/Tramita/api/Tramites/familias/3";
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                //console.log(data);

                onQueryDataFamilias(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    requestSubFamilias:function requestSubFamilias(onQueryDataSubFamilas) {
        let url = "http://localhost/Tramita/api/Tramites/subfamilias/3";
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                onQueryDataSubFamilas(data)
            })
            .catch(err => {
                console.log(err);
            });
    }

    requestTramites:function requestTramites(onQueryDataTramites) {
        let url = "http://localhost/Tramita/api/Tramites/tramites/3";
        fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                onQueryDataTramites(data);

            })
            .catch(err => {
                console.log(err);
            });
    }

    return {
        requestFamilias: requestFamilias,
        requestSubFamilias: requestSubFamilias,
        requestTramites: requestTramites

    }
}(tramitesGen.catUtility = tramitesGen.catUtility || {}, jQuery));