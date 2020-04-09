var editor = (function() {
    var $box = $('#box');
    var ed = 
        '<div class="notepad-editor" style="bottom: 0px;">' +
        '<textarea spellcheck="false" auto-size="none" wrap="soft" style="overflow-x: hidden; font-family: Arial; font-size: 20pt; font-weight: none;"></textarea>' +
        '</div>';
    $box.append(ed);
})