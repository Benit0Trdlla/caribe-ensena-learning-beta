import styles from './VideoIframe.module.css'
export default function VideoIframe({ href }) {
    return (
        <div className={styles['responsive-iframe']}>
            <iframe width="560" height="315" src={href} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}