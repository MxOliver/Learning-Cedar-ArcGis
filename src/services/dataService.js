var withQuery = require('with-query').default;

export const dataService = {
    fetchData
}

async function fetchData() {
    const requestOptions = {
        method: "GET",
        
    }

    const response = await fetch(withQuery(`https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/WealthiestZipCodes2017/FeatureServer/0/query?where=TOTPOP_CY+%3E+100`, {
        "geometryType": "esriGeometryEnvelope",
        "spatialRel": "esriSpatialRelIntersects",
        "resultType": "none",
        "distance": 0.0,
        "units": "esriSRUnit_Meter",
        "returnGeodetic": "false",
        "outFields": "AVGHINC_CY",
        "returnGeometry": "false",
        "multipatchOptions": "xyFootprint",
        "orderByFields": "AVGHINC_CY DESC",
        "returnZ": "false",
        "returnM": "false",
        "returnExceededLimitFeatures": "true",
        "sqlFormat": "none",
        "f": "pjson"
    }), requestOptions);
    const res = handleResponse(response);
    return res;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
