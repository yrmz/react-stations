// DO NOT DELETE

import * as React from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const handleUpdateImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogUrl(data.message))
  }

  return (
    <div className="container">
      <div className="description">これは犬の画像を表示するサイトです。</div>
      <div className="image-container">
        <DogImage dogUrl={dogUrl} />
        <div className="button">
          <a href="#" onClick={() => handleUpdateImage()}>
            更新
          </a>
        </div>
      </div>
    </div>
  )
}
