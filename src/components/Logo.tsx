import logo from '../assets/logos/logo-color.png';

export function Logo(): JSX.Element {
  return (
    <div className="h-9 xl:h-10 w-auto">
      <img src={logo} alt="Logo of MoverLead.com" className="h-full" />
    </div>
  );
}
