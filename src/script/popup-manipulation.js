function popup(popupName){
    let popup_id = document.getElementById(popupName.id)
    popup_id.style.visibility = (popup_id.style.visibility == "visible") ? "hidden" : "visible";
}