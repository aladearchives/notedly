import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import ButtonAsLink from './ButtonAsLink';
import { TOGGLE_FAVORITE } from '../gql/mutation';
import { GET_MMY_FAVORITES } from '../gql/query';

const FavoriteNote = props => {
    // store the note's favorite count as state
    const [count, setCount] = useState(props.favorieCount);
    // store if the user has favorited the note as state
    const [favorited, setFavorited] = useState(
        // check if the note exists in the user favorites list
        props.me.favorites.filter(note => note.id === props.noteId).length > 0
    );

    // toggleFavorite mutation hook
    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        variables: {
            id: props.noteId
        },
        // refetch the GET_MY_FAVORITES query to update the cache
        refetchQueries: [{ query: GET_MMY_FAVORITES }]
    });

    /*if the user has favorited the note, display the option to remove the
    favorite else, display the option to add as a favorite */

    return (
        <React.Fragment>
            {favorited ? (
                <ButtonAsLink
                    onClick={() => {
                        toggleFavorite();
                        setFavorited(false);
                        setCount(count - 1);
                    }}
                >Remove Favorite</ButtonAsLink>
            ) : (
                    <ButtonAsLink
                        onClick={() => {
                            toggleFavorite();
                            setFavorited(true);
                            setCount(count + 1);
                        }}
                    >Add Favorite</ButtonAsLink>
                )}
                : {count}
        </React.Fragment>
    );
};

export default FavoriteNote;