import React from 'react'
import Hero from '../../components/Hero/Hero'
import Week from '../../components/Week/Week'
import Language from '../../components/Language/Language'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
    <Hero />
    <Week/>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default Home