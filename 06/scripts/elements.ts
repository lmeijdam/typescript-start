import Task from './task';

module Elements {
    export var addBtn = document.getElementById("add_btn");
    export var delAllBtn = document.getElementById("del_all_btn");
    export var delComBtn = document.getElementById("del_comp_btn");
    export var taskName = <HTMLInputElement>document.getElementById("task_name");
    export var tasksTable = document.getElementById("tasks_table");
    
    function appendRowToTable(table: HTMLElement, tableRow: HTMLElement) {
        table.appendChild(tableRow);
    }
    
    function createTableColumn(name: any) : HTMLElement {
        var tableColumn = document.createElement("td");
        tableColumn.innerHTML = name;
        return tableColumn;
    }
    
    export function createAndAppendTableRow(task: Task) {
        var tableRow = document.createElement("tr");
        tableRow.id = task.name;
        tableRow.appendChild(createTableColumn(task.name));
        tableRow.appendChild(createCheckboxColumn(task));
        
        appendRowToTable(tasksTable, tableRow);
    }
    
    function createCheckboxColumn(task: Task){        
        var tableColumn = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.isCompleted;
        checkbox.onclick = () => { task.completeTask() };
        
        tableColumn.appendChild(checkbox);    
        return tableColumn;
    }   
    
    export function clearValue(param: HTMLInputElement) :void {
        param.value = "";
    }
    
    export function deleteTableRow(task:Task){
        var row = document.getElementById(task.name);
        if(row === null) return;
        
        tasksTable.removeChild(row);
    }
}

export default Elements;