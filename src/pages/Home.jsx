import React from 'react'
import Slider from '../components/Slider'
import '../components/component.css'
// import Menu from '../components/Bestseal'
import Menu from '../components/Topdeal'
import Information from '../components/Information'
import Topdeal from '../components/Topdeal'
import Bestseal from '../components/Bestsale'
import Exploremenu from '../components/Exploremenu'


export default function Home() {
  return (
    <>
    <Slider/>
    <Exploremenu/>
    <Bestseal/>
    <Topdeal/>
    <Information/>
    </>
  )
}
