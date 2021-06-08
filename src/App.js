// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const handleUpdateImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogUrl(data.message))
  }

  return (
    <div>
      <header>Dog アプリ</header>
      <title>犬の画像</title>
      <div className="container">
        <div className="description">これは犬の画像を表示するサイトです。</div>
        <div className="image">
          <img src={dogUrl} />
          <div className="button">
            <a href="#" onClick={() => handleUpdateImage()}>
              更新
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
