/* globals ActPipeline, Promise */

ActPipeline.StageLaneData = function() {
    this.processes = null;
    this.opportunities = null;
};
ActPipeline.StageLaneData.prototype = {

    initData: function() {
        return this.getProcesses()
            .then(this.getOpportunities.bind(this));
    },
    getProcesses: function() {
        return Promise.resolve(fakeProcesses)
            .then(function(processes) {
            this.processes = processes;
        }.bind(this));
    },
    getOpportunities: function() {
        return Promise.resolve(fakeOpportunities)
            .then(function(opportunities){
            this.opportunities = opportunities;
        }.bind(this));
    }

};

var fakeProcesses = [
    {
        id: "2380e83d-cef4-4b6d-ad15-dc9a558431ab",
        name: "Act! Sales Cycle",
        stages: [
            {
                id: "9a704183-7eb3-4999-a053-4bb79e1564a7",
                name: "Initial Communication",
                number: 1,
                probability: 10
            },
            {
                id: "45c93b54-c402-424b-9496-13b397563db8",
                name: "Needs Assessment",
                number: 2,
                probability: 25
            },
            {
                id: "5b9cf851-b8f5-4329-ada4-2e0f2492e1c8",
                name: "Presentation",
                number: 3,
                probability: 40
            },
            {
                id: "f29be26f-e716-4ce4-abde-1c563c8d52bf",
                name: "Negotiation",
                number: 4,
                probability: 65
            },
            {
                id: "fa8dc285-526b-4022-a928-524406e175bf",
                name: "Commitment to Buy",
                number: 5,
                probability: 80
            },
            {
                id: "2fc8fb09-24bb-4b24-a97c-f5ceedb7b39c",
                name: "Sales Fulfillment",
                number: 6,
                probability: 90
            }
        ]
    }

];

var fakeOpportunities = [
    {
        "id":"1A97BB3D-8296-4C17-99E7-0A5EA80220E1",
        "name":"Promotion Closeout Closeout 300 test with some extra text even more what happens",
        "stageId":"5B9CF851-B8F5-4329-ADA4-2E0F2492E1C8",
        "estCloseDate":"2018-07-05T00:00:00",
        "totalValue":52113.00,"weightedValue":43774.92
    },
    {"id":"C3187F32-61B3-4A20-95B8-0E5567C818BC","name":"Scooter Super Blowout 172","stageId":"F29BE26F-E716-4CE4-ABDE-1C563C8D52BF","estCloseDate":"2018-07-08T00:00:00","totalValue":1508.00,"weightedValue":1447.68},
    {"id":"C1CC54C4-4B5E-442F-A92E-02A3FCA8F1B9","name":"Special Closeout Big 415","stageId":"5B9CF851-B8F5-4329-ADA4-2E0F2492E1C8","estCloseDate":"2018-07-08T00:00:00","totalValue":2088.00,"weightedValue":730.80},
    {"id":"EACB5EA0-12AB-4960-B2E2-7B7DD396266D","name":"Sale Super Sale 61","stageId":"9A704183-7EB3-4999-A053-4BB79E1564A7","estCloseDate":"2018-07-10T00:00:00","totalValue":130.00,"weightedValue":115.70},
    {"id":"D4CBD978-BDF8-4B33-AB85-DAF4F55AB79A","name":"Scooter Scooter Special 943","stageId":"F29BE26F-E716-4CE4-ABDE-1C563C8D52BF","estCloseDate":"2018-07-11T00:00:00","totalValue":7960.00,"weightedValue":2706.40},
    {"id":"A7768EA7-0735-4EE1-B30D-47DEF4865EA1","name":"Big Promotion Blowout 444","stageId":"FA8DC285-526B-4022-A928-524406E175BF","estCloseDate":"2018-07-15T00:00:00","totalValue":1856.00,"weightedValue":798.08},
    {"id":"17F77B8E-ADB9-4402-AFBC-26EB36F99270","name":"Promotion Super Big 146","stageId":"F29BE26F-E716-4CE4-ABDE-1C563C8D52BF","estCloseDate":"2018-08-01T00:00:00","totalValue":17520.00,"weightedValue":10161.60},
    {"id":"0EE201B0-4256-4377-83C5-E51FC101316A","name":"Special Product Closeout 531","stageId":"F29BE26F-E716-4CE4-ABDE-1C563C8D52BF","estCloseDate":"2018-08-01T00:00:00","totalValue":3240.00,"weightedValue":2916.00}

];
