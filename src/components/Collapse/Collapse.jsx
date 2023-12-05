import collapse from "./Collapse.module.scss"

const BasicCollapse = props => {
  return (
    <details className={collapse.details}>
      <summary className={collapse.summary}>{props.title}</summary>
      {props.children}
    </details>
  )
}

const DescriptionCollapse = props => {
  return (
    <BasicCollapse title={props.title}>
      <p className={collapse.description}>{props.description}</p>
    </BasicCollapse>
  )
}

const LiTag = props => {
  return <li className={collapse.list}>{props.item}</li>
}

const HousingCollapse = props => {
  const liTags = props.list.map(equipment => (
    <LiTag key={equipment} item={equipment} />
  ))
  return (
    <BasicCollapse title={props.title}>
      <ul className={collapse.ul}>{liTags}</ul>
    </BasicCollapse>
  )
}

const Collapse = props => {
  if (props.type === "description")
    return (
      <DescriptionCollapse
        title={props.title}
        description={props.description}
      />
    )

  if (props.type === "list")
    return <HousingCollapse title={props.title} list={props.list} />
}

export default Collapse
