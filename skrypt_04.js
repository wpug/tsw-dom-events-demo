$(document).ready(function() {
    $(document).on('click', '#lista li.spec button', function(ev) {
        var $newLi = $('<li class="spec">nowy <button>Spec</button></li>');
        $(this).parent().after($newLi);
    });
});
