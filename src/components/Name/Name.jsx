import nameStyle from "./Name.module.scss"

const StrName = (props) => {
  return (
    <p className={nameStyle.strings}>{props.str}</p>
  )
}

const Name = (props) => {
  const names = props.string.split(" ").map(name => <StrName key={name} str={name} />)

  return (
    <h3 className={nameStyle.name}>{names}</h3>
  )
}

export default Name