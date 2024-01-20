import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Author {
    name: string,
    role: string,
    avatar: string
}

interface Content {
    type: string,
    content: string
}

interface PostProps {
    author: Author,
    content: Content[],
    publishedAt: Date
}

export function Post ({author, content, publishedAt}: PostProps) {  
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

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }
    
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este campo é obrigatório')
    }

    function deleteComment(commentToDelete: string) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        // console.log(comment)
        setComments(commentWithoutDeletedOne)
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

                <time title={publishedDataFormated} dateTime={publishedAt.toISOString()}>
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