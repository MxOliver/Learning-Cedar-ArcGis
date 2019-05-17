import React, { Component } from 'react';
import * as cedar from '@esri/cedar';

class Landing extends Component {

    render() {

        var datasets = [{
            "url": "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/WealthiestZipCodes2017/FeatureServer/0",
            "name": "zipcodes",
            "query": {
                "orderByFields": "AVGHINC_CY DESC",
                "groupByFieldsForStatistics": "NAME",
                "outFields": "WLTHRNK_CY, NAME",
                "resultRecordCount": "15"
            }
        }];

        var series = [{
            "category": {"field": "NAME", "label": "Area Name"},
            "value": {"field": "WLTHRNK_CY", "label": "Wealth Rank"},
            "source": "zipcodes"
        }]

        var overrides = {
            "categoryAxis": {
              "labelRotation": -45
            }
          }

        let elementId = 'chart'
        let chart = new cedar.Chart(elementId, {"type": "bar"})
            .datasets(datasets)
            .series(series)
            .overrides(overrides)

        chart.show();

        return (
            <div className="content">
            <h3 style={{paddingTop: '15px'}}>2017 Wealthiest Zipcodes in the United States</h3>
            <div id="chart" style={{height: '450px'}}></div>
            <div style={{paddingTop: '15px'}}>
                <p>
                "Wealth is a measure of the assets owned by a household. High incomes and displays of affluence do not always equate with high wealth. 
                Accumulated wealth is the product of income, savings, property, investments, equities and all other assets less debts. 
                Esri’s update of key wealth measures incorporate unique top-down and bottom-up socio-demographics methods providing robust small area estimates to better reflect the nation’s wealth differentials. 
                A unique rank is assigned to each residential ZIP Code in the United States. 
                The wealth rank ranges from 1 to 28,470, where 1 represents the wealthiest ZIP Code." </p>
                <p> -- Copyright 2017 www.esri.com/data/esri_data
                </p>
            </div>
            </div>
        )
    }
}

export default Landing;