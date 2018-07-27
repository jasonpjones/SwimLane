/* globals ActPipeline */

ActPipeline.AppUtils = function() {
    this.stageColors = [
        '#6BB1CF',
        '#F9D135',
        '#88B866',
        '#C53A4A',
        '#C97FAC',
        '#324272',
        '#4D8F51',
        '#B6B74B',
        '#B57445',
        '#B3323F',
        '#8C2A66'
    ];
};

ActPipeline.AppUtils.prototype = {
    getTextColor: function(stageIdx) {
        if([0, 1, 2, 7].indexOf(stageIdx) !== -1) {
            return "#000000";
        }
        else
        {
            return "#FFFFFF";
        }
    }
};
