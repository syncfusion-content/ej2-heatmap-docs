


import { HeatMap, Legend, Tooltip, BubbleTooltipData, ITooltipEventArgs } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);

let heatmapData: any [] = [
    [[4,39], [3,8], [1,3], [1,10], [4,4], [2,15]],
    [[4,28], [5,92], [5,73], [3,1], [3,4], [4,126]],
    [[4,45], [5,152], [0,44], [4,54], [5,243], [2,45]]
    ];

let heatmap: HeatMap = new HeatMap({
    titleSettings: {
            text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['2017', '2016', '2015']
        },
        yAxis: {
            labels:  ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
        },
        paletteSettings: {
                palette: [
                { color: '#C06C84'},
                { color: '#6C5B7B'},
                { color: '#355C7D'}
            ],
            type: "Gradient"
        },
        cellSettings: {
            border: {
                width: 1
            },
            tileType: 'Bubble',
            bubbleType: 'SizeAndColor'
        },
        dataSource: heatmapData,
        legendSettings: {
            visible: true,
        },
        tooltipRender: (args: ITooltipEventArgs) => {
        args.content = ['Year ' + ' : ' + args.xLabel + '<br/>' + 'Months ' + ' : ' + args.yLabel + '<br/>'
                + 'Accidents ' + ' : ' + (args.value as BubbleTooltipData[])[0].bubbleData + '<br/>' + 'Fatalities ' + ' : '
                + (args.value as BubbleTooltipData[])[1].bubbleData];
    }
});
heatmap.appendTo('#element');


