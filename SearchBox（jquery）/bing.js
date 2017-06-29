/**
 * Created by heydo on 2017/6/29 0029.
 */
$(document).ready(function ($) {
    $('#search_input').bind('keyup',function () {
        var searchText = $('#search_input').val();
        $.get('http://api.bing.com/qsonhs.aspx?qry='+searchText,function(d){
            var d = d.AS.Results[0].Suggests;
            var html = '';
            for(var i=0;i < d.length; i++){
                html += '<li>' + d[i] +'</li>';
            }
            $('#search-result'.html(html));

            $('#search-suggest').css({
                position: 'absolute',
                top: $('#search-form').offset().top + $('#search-form').height()+25,
                left: $('#search-form').offset().left,
            }).show();
        },'json');

    });
    $(document).bind('click',function(){
        $('#search-suggest').hide();
    });

    $(document).delegate('li','click',function(){
        var keyword = $(this).text();
       location.href = 'http://cn.bing.com/search?q=' + keyword;
    });
});

