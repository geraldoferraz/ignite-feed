import Styles from './Post.module.css'
import PropTypes from 'prop-types';
import { Comment } from './Comment'
import { Avatar } from './Avatar';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react';

interface Author{
    name: string;
    role: string;
    avatar_url: string;
}

interface Content {
    type: string;
    content: string;
    URL?: string | undefined;
    src?: string | undefined; 
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({ author, publishedAt, content }: PostProps){
    const [comments, setComments] = useState([
       'Post muito bacana, hein!',
    ])

    const [newCommentText, setNewCommentText] = useState('');
 
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){ 
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleInvalidSubmit(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string){
    const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete; 
    })

        setComments(commentsWithoutDeletedOne);
    }

    return(
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <Avatar hasBorder src={author.avatar_url} />
                    <div className={Styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={Styles.content}>
                {content.map(line => {
                    if(line.type === "paragraph"){
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === "link") {
                        return <p key={line.content}>{line.content}<a href={line.src}>{' '}{line.URL}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={Styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleInvalidSubmit}
                    required
                />
                
                <footer>
                    <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
                </footer>
            </form>


            <div className={Styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}

Post.propTypes = {
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(['paragraph', 'link']).isRequired,
        content: PropTypes.string.isRequired,
        URL: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
    ).isRequired,
    publishedAt: PropTypes.instanceOf(Date).isRequired,
  };

  export default Post;