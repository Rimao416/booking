import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Epargnez</h1>
      <span className="mailDesc">Enregistrez vous et ne manquez plus aucune informatino</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>S'aboner</button>
      </div>
    </div>
  )
}

export default MailList