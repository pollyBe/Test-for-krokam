import YouTube from "react-youtube";
import Rect from '@/assets/images/Rectangle.png'
import Flow from '@/assets/images/Union.png'

import style from './video.module.scss'

export const VideoSection = () => {
    const videoId = "Azb6KS38RCI";

    const opts = {
        height: '605',
        width: '1123',
        playerVars: {
            autoplay: 0,
        },
    };

    const _onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <section className={style.videoSection}>
            <div className="container">
                <div className={style.videoWrap}>
                    <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
                </div>
            </div>
                <span className={style.figures}>
                    <img src={Flow} alt='Flow' className={style.flow}/>
                    <img src={Rect} alt='Rectangle'/>
                </span>

        </section>
    )
}