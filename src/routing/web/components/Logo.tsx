import logo from "../../../assets/images/logo.png"

export function Logo(): JSX.Element {
  return (
      <div className="h-10 w-auto bg-black">
        <img src={ logo } alt="Logo of MoverLead.com" className="h-full"/>
      </div>
  )
}
