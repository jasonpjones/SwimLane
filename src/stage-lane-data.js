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
        "name":"Blowout Closeout Scooter 734",
        "id":"B4F09462-DF5B-4E82-8933-1894766587EB",
        "stageId":"45C93B54-C402-424B-9496-13B397563DB8",
        "STATUSNUM":1
    },
    {"name":"Scooter Super Big 900","id":"EB964145-0BE0-4CAF-A9C2-1F4BA53B14F2","stageId":"5B9CF851-B8F5-4329-ADA4-2E0F2492E1C8","STATUSNUM":2},
    {"name":"Blowout Super Blowout 696","id":"0B4A62A1-0587-4CB8-9FD7-291DF307084D","stageId":"5B9CF851-B8F5-4329-ADA4-2E0F2492E1C8","STATUSNUM":1},
    {"name":"Big Big Closeout 136","id":"E9CDD61C-AB08-4D77-B5AB-77708999C31A","stageId":"5B9CF851-B8F5-4329-ADA4-2E0F2492E1C8","STATUSNUM":1},
    {"name":"Big Product Product 692","id":"1F4E677C-C589-4EE8-82D5-780092B01B88","stageId":"F29BE26F-E716-4CE4-ABDE-1C563C8D52BF","STATUSNUM":1},
    {"name":"Special Product Special 212","id":"F0AD73E0-1C2B-4913-BD82-7B0C48B4137D","stageId":"9A704183-7EB3-4999-A053-4BB79E1564A7","STATUSNUM":1},
    {"name":"Closeout Special Sale 722","id":"6BB63335-FA04-443B-81AD-AD1920A84DFC","stageId":"FA8DC285-526B-4022-A928-524406E175BF","STATUSNUM":0},
    {"name":"Super Super Product 686","id":"C309AD7B-37A6-455F-982D-C23E5B5D090B","stageId":"FA8DC285-526B-4022-A928-524406E175BF","STATUSNUM":2},
    {"name":"Blowout Closeout Product 771","id":"44C0B38F-853A-457D-A93F-D3DB7F4E4C47","stageId":"9A704183-7EB3-4999-A053-4BB79E1564A7","STATUSNUM":1},
    {"name":"Promotion Scooter Promotion 210","id":"745431F9-ABDC-480C-AFD8-DE7F0DE71464","stageId":"45C93B54-C402-424B-9496-13B397563DB8","STATUSNUM":0},
    {"name":"Scooter Product Promotion 469","id":"49EE3897-55AA-4B21-9A1B-DEBE8AF0A4EF","stageId":"5B9CF851-B8F5-4329-ADA4-2E0F2492E1C8","STATUSNUM":2},
    {"name":"Product Promotion Sale 42","id":"8C799999-85C3-4BA5-9CFA-E9E59C15A24B","stageId":"45C93B54-C402-424B-9496-13B397563DB8","STATUSNUM":2},
    {"name":"Scooter Blowout Blowout 436","id":"C9E43820-74D2-4009-85C8-F8F53D502A2C","stageId":"FA8DC285-526B-4022-A928-524406E175BF","STATUSNUM":2}];



