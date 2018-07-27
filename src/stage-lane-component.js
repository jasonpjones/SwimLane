/* globals ActPipeline, _ */
var ActPipeline = ActPipeline || {};

ActPipeline.StageLaneComponent = function() {
    this.data = new ActPipeline.StageLaneData();
    this.targetDiv = null;
    this.processId = null;
};
ActPipeline.StageLaneComponent.prototype = {
    construct: function(targetDiv, processId) {
        this.targetDiv = targetDiv;
        this.processId = processId;
        return this.data.initData()
            .then(this.buildHtml.bind(this));
    },
    buildHtml: function() {
        var shell = this.buildShell(),
            lanes = this.buildLanes();

        shell.append(lanes);
        this.targetDiv.html(shell);
        this.fillLanes();
        this.setUpDragDrop();
    },
    buildShell: function() {
        var container = $("<div>", { class: 'stage-lane-container' }),
            header = $("<span>", { class: 'stage-lane-header', text:  'Act! Sales Cycle Opportunties'}),
            subHeader = $("<span>", { class: 'stage-lane-sub-header', text:  "Drag an opportunity to another lane to update its stage."});
        container.append(header, subHeader);
        return container;
    },
    buildLanes: function() {
        var process = _.find(this.data.processes, { 'id': this.processId }),
            stages = process.stages,
            laneContainer = $('<div>', { class: 'stage-lane-lanes'});

        stages.forEach(function(stage) {
            var lane = $('<div>', { class: 'stage-lane-lane' }),
                header = $('<span>', { class: 'lane-header', text: stage.name }),
                oppBlock = $('<div>', { class: 'stage-lane-opp-block', 'data-stage-id': stage.id });
            lane.append(header, oppBlock);
            laneContainer.append(lane);
        });
        return laneContainer;
    },
    fillLanes: function() {
        var opps = this.data.opportunities;
        opps.forEach(function(opp) {
            var oppDiv = $("<div>", { class: 'stage-lane-opp shadow'}),
                nameLabel = $("<span>", { class: 'stage-lane-opp-name-label', text: opp.name });
            oppDiv.append(nameLabel);
            $(".stage-lane-opp-block[data-stage-id='" + opp.stageId.toLowerCase() + "']").append(oppDiv);
        });
    },
    setUpDragDrop: function() {
        $(".stage-lane-opp").draggable({
            appendTo: "body",
            cursor: "move",
            helper: 'clone',
            revert: "invalid"
        });

        $(".stage-lane-opp-block").droppable({
            tolerance: "intersect",
            accept: ".stage-lane-opp",
            /* activeClass: "ui-state-default",
             hoverClass: "ui-state-hover", */
            drop: function(event, ui) {
                //$(this).append($(ui.draggable));
                $(this).append(ui.draggable);
                //ui.draggable.css('background-color', "#0264B6");
                ui.draggable.animate({"background-color":  "#0264B6", "color": "#ffffff"}, 1000)
            }
        });
    }
};










