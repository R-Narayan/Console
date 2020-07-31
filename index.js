var listOfCommands = ['help', 'clear'];
var his = document.getElementById("history");
var textInput = document.querySelector("#input");

textInput.focus()

var commandInfo = {
    'help': "lists all the commands",
    'clear': "clears the terminal<br><br>"//give 2 br at the end of last cmd
}
var historyCommands = '';
var clText = 'Hack webpage>'//this should be changed
console.log(his)
function comm(ele) {
    if (event.key === 'Enter') {
        var command = textInput.value;
        console.log(command);
        textInput.value = "";
        historyCommands += (clText + ' ' + command + '<br>');
        if (listOfCommands.includes(command)) {
            commandFunction(command);
        }
        else {
            historyCommands += "<br>'" + command + "'" + " is not a recognized command<br> type 'help' to see the list of commands<br><br>";
        }

        console.log(historyCommands)
        his.innerHTML = historyCommands;
    }
}
function commandFunction(c) {
    if (c === 'help') {
        for (var i = 0; i < listOfCommands.length; i++) {
            historyCommands += "<br>" + listOfCommands[i] + " : " + commandInfo[listOfCommands[i]];
        }
    }
    if (c === 'clear') {
        historyCommands = "";
        textInput.value = "";
    }
}
const foc = () => {
    textInput.focus()
}