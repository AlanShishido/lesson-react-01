import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post (props) {
    const {author, content} = props
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/diego3g.png"/>
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>{content}</span>
                    </div>
                </div>

                <time title='11 de Maio as 8:13' dataTime="2024-05-11 08:13:38">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
            <p>
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>
            </p>

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