


import { HeatMap, Adaptor, Tooltip, Legend } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Tooltip, Adaptor, Legend);

let heatmapData: any[] = [
    [0, 0, [4, 39]], [0, 1, [3, 8]], [0, 2, [1, 3]], [0, 3, [1, 10]], [0, 4, [4, 4]], [0, 5, [2, 15]],
    [1, 0, [4, 28]], [1, 1, [5, 92]], [1, 2, [5, 73]], [1, 3, [3, 1]], [1, 4, [3, 4]], [1, 5, [4, 126]],
    [2, 0, [4, 45]], [2, 1, [5, 152]], [2, 2, [0, 44]], [2, 3, [4, 54]], [2, 4, [5, 243]], [2, 5, [2, 45]]];

let heatmap: HeatMap = new HeatMap({
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
            '<div style="width:20px;height:20px;padding-left: 5px;background-color:#3498db; border: 1px solid #000000; border-radius:50%">${value}</div>',
    },
    dataSourceSettings: {
        isJsonData: false,
        adaptorType: 'Cell'
    },
    dataSource: heatmapData
});
heatmap.appendTo('#element');