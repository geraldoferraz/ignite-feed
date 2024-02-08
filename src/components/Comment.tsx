import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';
import PropTypes from 'prop-types';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps){

const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment(){
    onDeleteComment(content);
}

function handleLikeComment(){
    setLikeCount(likeCount + 1);
}

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/diego3g.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndtime}>
                            <strong>Diego Feranandes</strong>
                            <time dateTime='2024-02-01 22:00:15'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string),
    content: PropTypes.string.isRequired,
    onDeleteComment: PropTypes.string,
  };