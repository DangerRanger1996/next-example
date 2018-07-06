import css from "./style.scss"
import globalCss from "../style.scss"

const Component = () => {
  return (
    <div>
      <h1 className={[css.example, globalCss.font].join(' ')}>About Page</h1>
      <p className={`${css.example} ${globalCss.font}`}>About</p>
    </div>
  )
}

export default Component
