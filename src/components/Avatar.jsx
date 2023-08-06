import PropTypes from 'prop-types'
const Avatar = ({ imageURL, altText, size }) => {
  const sytle = {
    sm: {
      width: '50px',
      height: '50px',
    },
    md: {
      width: '120px',
      height: '120px',
    },
  }
  console.log(size)
  console.log(sytle['md'])
  if (!imageURL) return null
  return (
    <div>
      <img
        src={imageURL}
        alt={altText}
        style={{
          borderRadius: '50%',
          width: sytle[size]?.width,
          height: sytle[size]?.height,
          borderWidth: '4px',
          borderStyle: 'solid',
          borderColor: 'grey',
        }}
      />
    </div>
  )
}

export default Avatar

Avatar.propTypes = {
  imageURL: PropTypes.string,
  altText: PropTypes.string,
  size: PropTypes.string,
}
