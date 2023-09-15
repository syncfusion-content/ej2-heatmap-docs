var heatmapData = [
    [73, 39, 89, 39, 94, 55],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 0, 66, 90],
    [14, 46, 97, 69, 69, 3],
    [7, 16, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 13, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 100, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]];

var heatmap = new ej.heatmap.HeatMap({
    titleSettings: {
        text: 'Sales Revenue per Employee (in 1000 US$)',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'inherit',
        },
    },
    xAxis: {
        labels: [
            'Nancy',
            'Andrew',
            'Janet',
            'Margaret',
            'Steven',
            'Michael',
            'Robert',
            'Laura',
            'Anne',
            'Paul',
            'Karin',
            'Mario',
        ]
    },
    yAxis: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    cellSettings: {
        labelTemplate:
            '<div style="width:20px;height:20px;padding: 2px;background-color:#3498db; border: 1px solid #000000; border-radius:50%">${value}<div>',
    },
    dataSource: heatmapData
});
heatmap.appendTo('#element');


