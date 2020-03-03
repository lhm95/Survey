$('#s01 div.form_02 ul li input:radio[name=sex]').click(function(){
    if($('#s01 div.form_02 ul li input:radio[name=sex]:checked').val()=='1'){
        $('#s01 div.form_02 ul li:nth-child(1) label.1').addClass('on');
        $('#s01 div.form_02 ul li:nth-child(1) label.2').removeClass('on');
    }else if($('#s01 div.form_02 ul li input:radio[name=sex]:checked').val()=='2'){
        $('#s01 div.form_02 ul li:nth-child(1) label.2').addClass('on');
        $('#s01 div.form_02 ul li:nth-child(1) label.1').removeClass('on');
    }
});

$('#s01 div.form_02 ul li input:radio[name=merried]').click(function(){
    if($('#s01 div.form_02 ul li input:radio[name=merried]:checked').val()=='1'){
        $('#s01 div.form_02 ul li:nth-child(2) label.1').addClass('on');
        $('#s01 div.form_02 ul li:nth-child(2) label.2').removeClass('on');
    }else if($('#s01 div.form_02 ul li input:radio[name=merried]:checked').val()=='2'){
        $('#s01 div.form_02 ul li:nth-child(2) label.2').addClass('on');
        $('#s01 div.form_02 ul li:nth-child(2) label.1').removeClass('on');
    }
});

$('.form_05 ul li input:radio[name=form_05_01]').click(function(){
    if($('.form_05 ul li input:radio[name=form_05_01]:checked').val()=='1'){
        $('.form_05 ul li label').removeClass('on');
        $('.form_05 ul li label.1').addClass('on');
    }else if($('.form_05 ul li input:radio[name=form_05_01]:checked').val()=='2'){
        $('.form_05 ul li label').removeClass('on');
        $('.form_05 ul li label.2').addClass('on');
    }else if($('.form_05 ul li input:radio[name=form_05_01]:checked').val()=='3'){
        $('.form_05 ul li label').removeClass('on');
        $('.form_05 ul li label.3').addClass('on');
    }else if($('.form_05 ul li input:radio[name=form_05_01]:checked').val()=='4'){
        $('.form_05 ul li label').removeClass('on');
        $('.form_05 ul li label.4').addClass('on');
    }else if($('.form_05 ul li input:radio[name=form_05_01]:checked').val()=='5'){
        $('.form_05 ul li label').removeClass('on');
        $('.form_05 ul li label.5').addClass('on');
    }else if($('.form_05 ul li input:radio[name=form_05_01]:checked').val()=='6'){
        $('.form_05 ul li label').removeClass('on');
        $('.form_05 ul li label.6').addClass('on');
    }
    
});