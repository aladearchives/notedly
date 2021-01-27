import React from 'react';
import { useQuery } from '@apollo/client';
import NoteUser from './NoteUser';
import { IS_LOGGED_IN } from '../gql/query';

import ReactMarkdown from 'react-markdown';
const Note = ({ note }) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    return (
        <StyledNote>
            <MetaData>
                <MetaInfo>
                    <img
                        src={note.author.avatar}
                        alt={`${note.author.username} avatar`}
                        height="50px"
                    />
                </MetaInfo>
                <MetaInfo>
                    <em>by</em> {note.author.username} <br />
                    {format(note.createdAt, 'MMM Do YYYY')}
                </MetaInfo>
                {data.isLoggedIn ? (
                    <UserActions>
                        <NoteUser note={note} />
                    </UserActions>
                ) : (
                        <UserActions>
                            <em>Favorites:</em> {note.favoriteCount}
                        </UserActions>
                    )}
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    );
};
export default Note;