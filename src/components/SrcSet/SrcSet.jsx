const SrcSet = (props) => {
  return (
    <img
      src={props.logo}
      srcSet={`${props.mLogo} ${props.mWidth}w, ${props.dLogo} ${props.dWidth}w`}
      sizes={`(max-width: ${props.maxWidth}px) ${props.mWidth}px, ${props.dWidth}px`}
      alt={props.altText}
    />
  )
}

export default SrcSet