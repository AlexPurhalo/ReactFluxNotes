import React from 'react';

import './App.less';

import NoteEditor from './NoteEditor'
import NotesGird from './NotesGird'
import Note from './Note'

const App = React.createClass({
	handleNoteAdd(data) {
		console.log(data);
	},

	render() {
		return (
			<div className="App">
				<h2 className="App__header">NotesApp</h2>
				<NoteEditor onNoteAdd={this.handleNoteAdd} />
				<NotesGird />
				<Note />
			</div>
		);
	}
});

export default App;
