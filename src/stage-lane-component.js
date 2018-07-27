/* globals ActPipeline, _ */
var ActPipeline = ActPipeline || {};

ActPipeline.StageLaneComponent = function() {
    this.data = new ActPipeline.StageLaneData();
    this.targetDiv = null;
    this.processId = null;
    this.strings = ActPipeline.ComponentStrings.stageLaneComponent;

    this.processName = "Act! Sales Cycle";      //todo: comes from appUtils
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
            headerDiv = ($("<div>", { class: "card-header"})),
            headerTitle = ($("<span>", { class: "card-header-title", text: String.format("{0} {1}", this.processName, this.strings.opportunities) })),
            infoImgDiv = $("<div>", { class: 'info-image-div'}),
            infoImgImg = $("<img>", { src: 'images/info.png', class: 'card-header-image', title: '' });

        infoImgDiv.tooltip({
            content: this.strings.dragDropInfo
        });

        headerDiv.append(headerTitle);
        infoImgDiv.append(infoImgImg);
        headerDiv.append(infoImgDiv);
        container.append(headerDiv);
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
            var oppDiv = $("<div>", { class: 'stage-lane-opp shadow' }),
                nameLabel = $("<div>", { class: 'stage-lane-opp-name-label', text: opp.name });
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
                ui.draggable.animate({"background-color":  "#0264B6", "color": "#ffffff"}, 200)
            }
        });
    }
};










