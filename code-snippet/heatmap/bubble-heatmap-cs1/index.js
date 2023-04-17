var heatmapData = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

var heatmap = new ej.heatmap.HeatMap({
    titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    },
    xAxis: {
        labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario']
    },
    yAxis: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    },
    paletteSettings: {
        palette: [
            { color: '#C06C84' },
            { color: '#6C5B7B' },
            { color: '#355C7D' }
        ],
        type: "Gradient"
    },
    cellSettings: {
        border: {
            width: 1
        },
        tileType: 'Bubble',
        bubbleType: 'Size',
        showLabel: false
    },
    dataSource: heatmapData,
    legendSettings: {
        visible: true
    }
});
heatmap.appendTo('#element');

