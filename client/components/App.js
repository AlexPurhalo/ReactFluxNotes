import React from 'react';

import NotesStore from '../stores/NotesStore';
import NotesActions from '../actions/NotesActions';

import './App.less';

import NoteEditor from './NoteEditor'
import NotesGird from './NotesGird'

function getStateFromFlux() {
	return {
		isLoading: NotesStore.isLoading(),
		notes: NotesStore.getNotes()
	};
}

const App = React.createClass({
	getInitialState() {
		return getStateFromFlux();
	},

	componentWillMount() {
		NotesActions.loadNotes();
	},

	componentDidMount() {
		NotesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount() {
		NotesStore.removeChangeListener(this._onChange);
	},

	handleNoteAdd(data) {
		NotesActions.createNote(data);
	},

	handleNoteDelete(note) {
		NotesActions.deleteNote(note.id)
	},

	render() {
		return (
			<div className="App">
				<h2 className="App__header">NotesApp</h2>
				<NoteEditor onNoteAdd={this.handleNoteAdd} />
				<NotesGird
					notes={this.state.notes}
					onNoteDelete={this.handleNoteDelete} />
			</div>
		);
	},

	_onChange() {
		this.setState(getStateFromFlux());
	}
});

export default App;
