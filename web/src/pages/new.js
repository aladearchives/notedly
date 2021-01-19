import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import NoteForm from '../components/NoteForm';
import { GET_NOTES, GET_MY_NOTES } from '../gql/query';

const NEW_NOTE = gql`
    mutation newNote($content: String!) {
        newNote(content: $content) {
            id
            content
            createdAt
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }
`;

const NewNote = props => {
    useEffect(() => {
        document.title = 'New Note - Notedly';
    });

    const [data, { loading, error }] = useMutation(NEW_NOTE, {
        // refetch the GET_NOTES query to update the cache
        refetchQueries: [{ query: GET_MY_NOTES }, {query: GET_NOTES}],
        onCompleted: data => {
            props.history.push(`note/${data.NewNote.id}`);
        }
    });

    return (
        <React.Fragment>
            {loading && <p>Loading...</p>}
            {error && <p>Error saving the note</p>}
            <NoteForm action={data} />
        </React.Fragment>
    );
};

export default NewNote;