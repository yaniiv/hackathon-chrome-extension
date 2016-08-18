let topNote = {};

function DivMaker(a) {
	this.node = document.createElement('div');
	this.node.setAttribute('class', 'note');

	this.noteTitle = document.createElement('div');
	this.noteTitle.setAttribute('class', 'title');

	this.noteTitleText = document.createElement('input');
	this.noteTitleText.setAttribute('class', 'titleText');
	this.noteTitleText.setAttribute('placeholder', 'Write a title...');

	this.textarea = document.createElement('textarea');
	this.textarea.setAttribute('class', 'note-content');
	this.textarea.setAttribute('placeholder', 'Write some notes...');

	this.node.appendChild(this.textarea);


	console.log('runnign divmaker');
	
	if (a !== 1) { 
		mainDiv.insertBefore(this.node, topNote);
	} else {
		mainDiv.appendChild(this.node);
	}

	this.node.insertBefore(this.noteTitle, this.textarea);
	this.noteTitle.appendChild(this.noteTitleText);
	topNote = this.node;
}

//create main div container and append it to the <body>
let mainDiv = document.createElement('div');
mainDiv.id = 'main-div';
document.body.appendChild(mainDiv);

//create first note (and set it to top note)
let note = new DivMaker(1);
note.textarea.setAttribute('autofocus', true);
//define function that creates new Note and prepends to topNote;
function newNote() {
	console.log(topNote.textarea);
	var x = document.getElementsByClassName('note-content');
 // debugger;
	console.log(x);
	x[0].setAttribute('readonly', true);

	var y = document.getElementsByClassName('titleText');
	y[0].setAttribute('readonly', true);

	let note = new DivMaker();
	note.textarea.focus();
}

//define listener function and callback
document.onkeydown = function(e) {
	console.log('keypressdown');
	// if (e.keyCode === 13) document.onkeyup();
};

var map = []; // Or you could call it "key"
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';
    /*insert conditional here*/
    if (map[13] && map[17]) {
    	newNote();
    }
}
//function will save text value somewhere