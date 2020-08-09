let results = $('.results');

init();

function init(){
    let totalScore = localStorage.getItem('totalScore');
    if(totalScore){
        $.each(results, function(i, result){
            if(totalScore >= $(this).data('lower') && totalScore < $(this).data('upper')){
                $(this).show();
            }
        });
    }else{
        window.location.href = "/quiz";
    }
}
