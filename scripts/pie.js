// prototype on jsbin http://jsbin.com/ijolib/15/edit
$(function() {
    var styleTemplate = '<style rel="stylesheet/less" type="text/less">' +
                            '@import "styles/pieDegree";'+
                            '@fillDegree:#fillDegree#;'+
                        '</style>';
    $('.pieChart').each(function(){
        var pieChart = $(this),
            dataFill = pieChart.attr('data-fill'),
            dataFillParsed = parseInt(dataFill);
        
        
        while (dataFillParsed > 180) {
            dataFillParsed = dataFillParsed - 180;
        }
        while (dataFillParsed < 0) {
            dataFillParsed = dataFillParsed + 180;
        }
        
        dataFill = dataFillParsed + 'deg';
        pieChart.addClass('fill'+dataFill);
        
        var styleInject = styleTemplate.replace('#fillDegree#', dataFill);
        
        $('head').append(styleInject);
        
        // update % value
        // 180deg         = 100%
        // pieOneDataFill = x%
        var showValue = Math.floor((dataFillParsed * 100) / 180) + '%';
        
        pieChart.next('.pieChartLegend').find('span').text(showValue).end().show();
    });
    less.refreshStyles();
});