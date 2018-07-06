import css from "./style.scss"
import globalCss from "../style.scss"

const Component = props => {
  return (
    <div>
      <h1 className={[css.example, globalCss.font].join(' ')}>About</h1>
      <h1 className={`${css.example} ${globalCss.font}`}>Hallo</h1>
    </div>
  )
}

export default Component
