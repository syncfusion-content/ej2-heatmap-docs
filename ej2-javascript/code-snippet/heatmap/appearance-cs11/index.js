var heatmapData = [
    [[4, 39], [3, 8], [1, 3], [1, 10], [4, 4], [2, 15]],
    [[4, 28], [5, 92], [5, 73], [3, 1], [3, 4], [4, 126]],
    [[4, 45], [5, 152], [0, 44], [4, 54], [5, 243], [2, 45]]];

var heatmap = new ej.heatmap.HeatMap({
    titleSettings: {
        text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit',
        },
    },
    xAxis: {
        labels: ['2017', '2016', '2015']
    },
    yAxis: {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
    },
    cellSettings: {
        labelTemplate:
            '<div style="width:20px;height:20px;padding-left: 5px;padding-top: 2px;background-color:#3498db; border: 1px solid #000000; border-radius:50%">${value}</div>',
    },
    dataSource: heatmapData
});
heatmap.appendTo('#element');


