let ulTasks= $('#ulTasks')
let inpNewTask= $('#inpNewTask')
let btnClear= $('#btnClear')
let btnAdd= $('#btnAdd')
let btnSort= $('#btnSort')
let btnCleanup=$('#btnCleanup')

function addItem() {
    listItem = $('<li>', {
        'class': 'list-group-item',
        text : inpNewTask.val()
    })
    listItem.click((event) =>{
        $(event.target).toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
    toggleInputButtons()
}
function clearDone() {
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

function toggleInputButtons() {
    btnClear.prop('disabled',inpNewTask.val()=='' )
    btnAdd.prop('disabled', inpNewTask.val()=='')
    btnSort.prop('disabled', ulTasks.children().length<1 )
    btnCleanup.prop('disabled', ulTasks.children().length<1 )
}
inpNewTask.on('input', toggleInputButtons)
inpNewTask.keypress((e)=>{
    if(e.which==13) addItem()
})
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
    // toggleInputButtons()
}
btnAdd.click(addItem)
btnCleanup.click(clearDone)
btnSort.click(sortTasks)
btnClear.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
})
