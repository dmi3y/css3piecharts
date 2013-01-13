// prototype on jsbin http://jsbin.com/ijolib/15/edit
!function() {
    var lessPieText = $('#lessPie').text();
    $(function() {
        var pieOneDataFill = $('#pieOne').attr('data-fill');
        
        
        while (parseInt(pieOneDataFill) > 180) {
            pieOneDataFill = (parseInt(pieOneDataFill) - 180) + 'deg';
        }
        while (parseInt(pieOneDataFill) < 0) {
            pieOneDataFill = (parseInt(pieOneDataFill) + 180) + 'deg';
        }
        $('#lessPie').text(lessPieText.replace('#dataDegree#', pieOneDataFill));
        less.refreshStyles();

        // update % value
        // 180deg         = 100%
        // pieOneDataFill = x%

        var showValue = Math.floor((parseInt(pieOneDataFill) * 100) / 180) + '%';
        $('#pieOneLegend').find('span').text(showValue).end().show();

    });
}()