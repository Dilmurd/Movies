import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "./Week.scss"

function Week() {
  return (
    <main>
        <section className="week">
            <div className="container">
                <div className="week__top">
                    <p className='week__title'>На неделе</p>
                    <div className='week__icon'>
                        <p>Показать все</p>
                        <IoIosArrowForward/>
                    </div>
                </div>
                <div className="week__wrapper">
                    <div className="week__card">
                        <div className="week__img"></div>
                        <div className="week__text">
                            <p className='week__titles'>Kung Fu Panda 4
                            ENGLISH</p>
                            <p className='week__inf'>Комедия, Фэнтези</p>
                        </div>
                    </div>
                    <div className="week__card">
                        <div className="week__img"></div>
                        <div className="week__text">
                            <p className='week__titles'>Kung Fu Panda 4
                            ENGLISH</p>
                            <p className='week__inf'>Комедия, Фэнтези</p>
                        </div>
                    </div>
                    <div className="week__card">
                        <div className="week__img"></div>
                        <div className="week__text">
                            <p className='week__titles'>Kung Fu Panda 4
                            ENGLISH</p>
                            <p className='week__inf'>Комедия, Фэнтези</p>
                        </div>
                    </div>
                    <div className="week__card">
                        <div className="week__img"></div>
                        <div className="week__text">
                            <p className='week__titles'>Kung Fu Panda 4
                            ENGLISH</p>
                            <p className='week__inf'>Комедия, Фэнтези</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Week