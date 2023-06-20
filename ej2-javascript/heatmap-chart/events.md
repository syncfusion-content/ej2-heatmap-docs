---
layout: post
title: Events in ##Platform_Name## HeatMap chart control | Syncfusion
description: Learn here all about Events in Syncfusion ##Platform_Name## HeatMap chart control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Events 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Events in ##Platform_Name## HeatMap chart control

This section describes the HeatMap chart control event that gets triggered when corresponding operations are performed. The events should be provided to the HeatMap chart by using the [HeatMap chart events](../api/heatmap#events).

## cellClick

The `cellClick` event will be triggered when clicking on the HeatMap cell. The following properties are available in the event argument of the `cellClick` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|   cellElement        |   It represents the current cell element on which click is performed.                               |
|   event              |   It represents the pointer event for the click action.                                             |
|   x                  |   It represents the current x position of the mouse.                                                |
|   y                  |   It represents the current y position of the mouse.                                                |
|   heatmap            |   It represents the instance of the HeatMap and allows you to access its properties and methods.    |
|   name               |   It represents the name of the event.                                                              |
|   value              |   It represents the value of the currently clicked cell.                                            |
|   xLabel             |   It represents the x-axis label of the currently clicked cell.                                     |
|   xValue             |   It represents the x-axis value of the currently clicked cell.                                     |
|   yLabel             |   It represents the y-axis label of the currently clicked cell.                                     |
|   yValue             |   It represents the y-axis value of the currently clicked cell.                                     |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs1" %}
{% endif %}

## cellDoubleClick

The `cellDoubleClick` event will be triggered when clicking on the HeatMap cell. The following properties are available in the event argument of the `cellDoubleClick` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|   cellElement        |   It represents the current cell element on which click is performed.                               |
|   event              |   It represents the pointer event for the click action.                                             |
|   x                  |   It represents the current x position of the mouse.                                                |
|   y                  |   It represents the current y position of the mouse.                                                |
|   heatmap            |   It represents the instance of the HeatMap and allows you to access its properties and methods.    |
|   name               |   It represents the name of the event.                                                              |
|   value              |   It represents the value of the currently clicked cell.                                            |
|   xLabel             |   It represents the x-axis label of the currently clicked cell.                                     |
|   xValue             |   It represents the x-axis value of the currently clicked cell.                                     |
|   yLabel             |   It represents the y-axis label of the currently clicked cell.                                     |
|   yValue             |   It represents the y-axis value of the currently clicked cell.                                     |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs2" %}
{% endif %}

## cellRender

The `cellRender` event will be triggered before rendering of each HeatMap cell. The following properties are available in the event argument of the `cellRender` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|   cancel             |   The event default action should be canceled or allowed to proceed.                                |
|   cellColor          |   It represents the color of the currently rendered cell.                                           |
|   displayText        |   It represents the label of the currently rendered cell.                                           |
|   heatmap            |   It represents the instance of the HeatMap and allows you to access its properties and methods.    |
|   name               |   It represents the name of the event.                                                              |
|   value              |   It represents the value of the currently rendered cell.                                           |
|   xLabel             |   It represents the x-axis label of the currently rendered cell.                                    |
|   xValue             |   It represents the x-axis value of the currently rendered cell.                                    |
|   yLabel             |   It represents the y-axis label of the currently rendered cell.                                    |
|   yValue             |   It represents the y-axis value of the currently rendered cell.                                    |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs3" %}

## cellSelected

The `cellSelected` event is triggered when a cell is selected in the HeatMap. The following properties are available in the event argument of the `cellSelected` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|   cancel             |   The event default action should be canceled or allowed to proceed.                                |
|   data               |   It represents the details of the selected cells.                                                  |
|   heatmap            |   It represents the instance of the HeatMap and allows you to access its properties and methods.    |
|   name               |   It represents the name of the event.                                                              |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs4" %}

## created

The `created` event is triggered after HeatMap is completely rendered.

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs9" %}

## legendRender

The `legendRender` event is triggered before the legend is rendered. The following properties are available in the event argument of the `legendRender` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|   cancel             |   The event default action should be canceled or allowed to proceed.                                |
|   name               |   It represents the name of the event.                                                              |
|   text               |   It represents the legend text of the legend item that is currently rendered.                      |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs5" %}

## load

The `load` event is triggered before HeatMap gets loaded. The following properties are available in the event argument of the `load` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|   heatmap            |   It represents the instance about the HeatMap and allows you to access its properties and methods. |
|   name               |   It represents the name of the event                                                               |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs6" %}

## loaded

The `loaded` event is triggered after HeatMap is loaded. The following properties are available in the event argument of the `loaded` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|   heatmap            |   It represents the instance of the HeatMap and allows you to access its properties and methods.    |
|   name               |   It represents the name of the event.                                                              |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs7" %}

## resized

The `resized` event is triggered to notify the resize of the HeatMap when the window is resized. The following properties are available in the event argument of the `resized` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|    cancel            | The event default action should be canceled or allowed to proceed.                                  |
|    currentSize       | It represents the size of the HeatMap before it gets resized.                                       |
|    previousSize      | It represents the size of the HeatMap after it gets resized.                                        |
|    heatmap           | It represents the instance of the HeatMap and allows you to access its properties and methods.      |
|    name              | It represents the name of the event.                                                                |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs8" %}

## tooltipRender

The `tooltipRender` event is triggered before the tooltip of the HeatMap is rendered on the HeatMap cell. The following properties are available in the event argument of the `tooltipRender` event.

|   Argument Name      |   Description                                                                                       |
|----------------------| ----------------------------------------------------------------------------------------------------|
|    cancel            |  The event default action should be canceled or allowed to proceed.                                 |
|    content           |  It represents the content of the tooltip.                                                          |
|    value             |  It represents the value of the cell on which the tooltip currently rendered.                       |
|    heatmap           |  It represents the instance of the HeatMap and allows you to access its properties and methods.     |
|    name              |  It represents the name of the event.                                                               |
|    xLabel            |  It represents the x-axis label on which the tooltip currently rendered.                            |
|    xValue            |  It represents the x-axis value on which the tooltip currently rendered.                            |
|    yLabel            |  It represents the y-axis label on which the tooltip currently rendered.                            |
|    yValue            |  It represents the y-axis value on which the tooltip currently rendered.                            |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/heatmap/events-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/heatmap/events-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/heatmap/events-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/heatmap/events-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/heatmap/events-cs9" %}
{% endif %}