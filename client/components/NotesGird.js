import React from 'react';
import Masonry from 'react-masonry-component';

import './NotesGrid.less';

import Note from './Note';
const NotesGird = React.createClass({
	render() {
		const masonryOptions = {
			itemSelector: '.Note',
			columnWidth: 250,
			gutter: 10,
			isFitWidth: true
		};

		return (
			<div>
				<Masonry
					className="NotesGird"
					options={masonryOptions}>
					{
						this.props.notes.map(note =>
							<Note
								key={note.id}
								title={note.title}
								onDelete={this.props.onNoteDelete.bind(null, note)}
								color={note.color}>
								{note.text}
							</Note>
						)
					}
				</Masonry>
			</div>
		);
	}
});

export default NotesGird;
