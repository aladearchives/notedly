import React from 'react';
import ReactMarkdown from 'react-markdown';
// import the format utility from `date-fns`
import { format } from 'date-fns';
import styled from 'styled-components';

// Keep notes from extending wider than 800px
const StyledNote = styled.article`
    max-width: 800px;
    margin: 0 auto;
`;
// Style the note metadata
const MetaData = styled.div`
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
`;

// add some space between the avatar and meta info
const MetaInfo = styled.div`
    padding-right: 1em;
`;

// align 'UserActions' to the right on large screens
const UserActions = styled.div`
    margin-left: auto;
`;

// update the date markup to format it as Month, Day, and Year
{ format(note.createdAt, 'MMM Do YYYY') } Favorites: { ' ' }

const Note = ({ note }) => {
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
                <UserActions>
                    <em>Favorites:</em> {note.favoriteCount}
                </UserActions>
            </MetaData>
            <ReactMarkdown source={note.content} />
        </StyledNote>
    );
};
export default Note;