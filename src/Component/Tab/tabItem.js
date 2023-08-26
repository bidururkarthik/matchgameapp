import './tabItem.css'

const Tab = props => {
  const {tabdetail, tabchange} = props
  const {displayText, tabId} = tabdetail

  const buttontab = () => {
    tabchange(tabId)
  }
  return (
    <li className="button_container">
      <button type="button" className="tab_button" onClick={buttontab}>
        {displayText}
      </button>
    </li>
  )
}

export default Tab
