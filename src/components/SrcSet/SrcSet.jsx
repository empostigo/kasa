const SrcSet = (props) => {
  return (
    <img
      src={props.img}
      srcSet={`${props.mImg} ${props.mWidth}w, ${props.dImg} ${props.dWidth}w`}
      sizes={`(max-width: ${props.maxWidth}px) ${props.mWidth}px, ${props.dWidth}px`}
      alt={props.altText}
    />
  )
}

export default SrcSet