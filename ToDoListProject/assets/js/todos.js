// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})
// click on x to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + $(this).val()+" </li>");
		$(this).val("");
	}
})
$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
})