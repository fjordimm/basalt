
function whenKeyPressed(textarea, event) {

    const keycode = event.keyCode ? event.keyCode : event.charCode ? event.charCode : event.which;

    if (keycode == 9 && !event.shiftKey && !event.ctrlKey && !event.altKey) {

        const textareaTop = textarea.scrollTop;

        if (textarea.setSelectionRange) {
            const selStart = textarea.selectionStart;	
            const selEnd = textarea.selectionEnd;
            textarea.value = textarea.value.substring(0, selStart) + "\t" + textarea.value.substr(selEnd);
            textarea.setSelectionRange(selStart + 1, selStart + 1);
            textarea.focus();
        }

        else if (textarea.createTextRange) {
            document.selection.createRange().text = "\t";
            event.returnValue = false;
        }

        textarea.scrollTop = textareaTop;

        if (event.preventDefault) {
            event.preventDefault();
        }

        return false;

    }

    return true;
    
}
