import { useEffect } from 'react'

const images = [
  'images/card/hla_r1.png',
  'images/card/hla_b2.png',
  'images/card/hla_g3.png',
  'images/card/4.png',
  'images/card/hla_d5.png',
  'images/card/hla_p6.png',
  'images/card/hla_o7.png',
  'images/card/hla_w8.png',
  'images/card/hla_g9.png',
  'images/card/hla_p10.png',
  'images/card/TW_flag.jpg',
  'images/card/JP_flag.jpg',
  'images/card/USA_flag.jpg',
  'images/card/UK_flag.jpg',
  'images/card/CN_flag.jpg',
  'images/card/country_card_back.png',
  'images/card/country_card_front.png',
  'images/card/country_preview_frame.png',
  'images/card/dna_card_back.png',
  'images/card/dna_card_front.jpg'
]

const preloadImages = (imageUrls) => {
  return Promise.all(
    imageUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve()
      })
    })
  )
}

export default function HLAImagePreload() {
  useEffect(() => {
    preloadImages(images).then(() =>
      console.log('Images preload successfully.')
    )
  }, [])

  return <></>
}
