import styles from './Post.module.css';

export function Post() {
    return(
      <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/40839479?v=4" />
                <div className={styles.authorInfo}>
                    <strong>Junior Gorosh</strong>
                    <span>Developer</span>
                </div>
            </div>    

            <time title='2025-03-03' dateTime='2025-03-03'>Publicado em 03/03/2025</time>
        </header>

        <div className={styles.content}>
            <p>Teste do primeiro post.</p>
            <p>Teste do primeiro post mas segunda linha.</p>
            <p><a href=''>segunda Linha</a></p>
            <p><a href=''>#novoprojeto #react</a></p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu Feedback</strong>
            <textarea placeholder='Comente algo'></textarea>
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
            
      </article>
    );
}