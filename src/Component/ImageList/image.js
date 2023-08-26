import './image.css'

const ImageList = props => {
  const {eachimage, onimage} = props
  const {imageUrl, id} = eachimage

  const imageclick = () => {
    onimage(id)
  }

  return (
    <li className="image_button_container">
      <button type="button" className="picture_button" onClick={imageclick}>
        <img src={imageUrl} alt="" className="picture_image" />
      </button>
    </li>
  )
}

export default ImageList
