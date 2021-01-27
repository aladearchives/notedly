import React from 'react';
import { useQuery, useMutation } from '@apollo/client';

import NoteForm from '../components/NoteForm';
import { GET_NOTE, GET_ME } from '../gql/query';
import { EDIT_NOTE } from '../gql/mutation';


const EditNote = props => {
    // store the id found in the url as a variable
    const id = props.match.params.id;
    // define the note query
    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    // fetch the current user's data
    const { data: userdata } = useQuery(GET_ME);
    // define the mutation
    const [editNote] = useMutation(EDIT_NOTE, {
        variables: {
            id
        },
        onCompleted: () => {
            props.history.push(`/note/${id}`);
        }
    });
    // if the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // if there is an error fetching the data, display an error message
    if (error) return <p>Error! Note not found</p>;
    // if current user and the author of the note do not match
    if (userdata.me.id !== data.note.author.id) {
        return <p>You do not have access to edit this note</p>;
    }
    // if the data is successful, display the data in our UI
    return <NoteForm content={data.note.content} action={editNote} />;
};

export default EditNote;