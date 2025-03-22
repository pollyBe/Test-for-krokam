import Logo from '@/assets/icons/logo-6.svg?react'

import style from './heroSection.module.scss'

export const HeroSection = () => {
    return (
        <section className={style.hero}>
            <div className={style.heroInfo}>
                <Logo className={style.logo} />
                <h1>Personal audio guides
                    and navigators for localities and surroundings</h1>
            </div>
        </section>
    )
}