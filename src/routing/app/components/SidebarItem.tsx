import { NavLink } from "react-router-dom"
interface Props {
    name: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for an icon component
    current?: boolean;
}

 const SidebarItem = ({name, href, icon:Icon}: Props) => {
    return (
        <>
            <li key={name} className="mt-auto">
                <NavLink to={href}
                         className={({ isActive }) => {
                             console.log('Current path:', window.location.pathname);
                             console.log('NavLink to:', {href});
                             console.log('isActive:', isActive);
                             return isActive ? 'bg-indigo-700 text-white group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold' : 'text-indigo-200 hover:bg-indigo-700 hover:text-white group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold';
                         }}
                >

                    {/*         className={({isActive})=> (isActive ? 'bg-indigo-700 text-white': 'text-indigo-200 hover:bg-indigo-700 hover:text-white',
                             'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold')}
                >

                        className={({isActive}) => { return isActive ? 'text-white' : 'text-indigo-200 group-hover:text-white size-6 shrink-0'

                */}
                    <Icon
                        aria-hidden="true"
                        className= '  size-6 shrink-0'

                    />
                    {name}
                </NavLink>
            </li>
        </>
    )
}

export default SidebarItem;