import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'



export function Post ({author, content, publishedAt}) {  
    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDataFormated = format(
        publishedAt, 
        "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
        locale: ptBr
    })

    const isNewCommentEmpty = newCommentText.length === 0

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentText(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        // console.log(comment)
        setComments(commentWithoutDeletedOne)
    }
    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatar} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDataFormated} dataTime={publishedAt.toISOString()}>
                    {publishedDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map( element => {
                    if (element.type === 'paragraph') {
                        return (
                            <p key={element.content}>{element.content}</p>
                        )
                    }
                    if (element.type === 'link'){
                        return (
                            <p key={element.content}><a href='#'>{element.content}</a></p>
                        )
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea 
                    name="comment" 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return (
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                    )
                })}
            </div>
        </ article>
    )
}