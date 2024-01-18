import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post ({author, content, publishedAt}) {  
    const publishedDataFormated = format(
        publishedAt, 
        "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
        locale: ptBr
    })

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
                    console.log(element)
                    if (element.type === 'paragraph') {
                        return (
                            <p>{element.content}</p>
                        )
                    }
                    if (element.type === 'link'){
                        return (
                            <p><a href='#'>{element.content}</a></p>
                        )
                    }
                })}
            </div>
            <form className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </ article>
    )
}