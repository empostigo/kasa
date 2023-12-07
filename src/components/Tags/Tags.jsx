// Style
import tagsStyle from "./Tags.module.scss"

const Tag = props => {
  return (
    <div className={tagsStyle.tag}>
      <p className={tagsStyle.text}>{props.text}</p>
    </div>
  )
}

const Tags = props => {
  const tags = props.tags.map(tag => <Tag key={tag} text={tag} />)
  return <div className={tagsStyle.tags}>{tags}</div>
}

export default Tags
