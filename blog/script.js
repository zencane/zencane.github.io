$(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click','#btn',function(){
        var moreLessButton=$(this).closest(".w3-container").find(".invisible-content").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).closest(".w3-container").find(".invisible-content").toggle();
        $(this).closest(".w3-container").find(".visible-content").toggle();
    });
})