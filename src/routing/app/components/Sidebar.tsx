
import {
    Cog6ToothIcon, HomeIcon, EqualsIcon, EyeIcon, ShoppingCartIcon, CreditCardIcon,

} from '@heroicons/react/24/outline'
import SidebarItem from "./SidebarItem.tsx";
import logo from "../../../assets/images/logo.png"
import {NavLink} from "react-router-dom";

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: EqualsIcon, current: true },
    { name: 'Listings', href: '/listings', icon: HomeIcon, current: false },
    { name: 'Filtering', href: '/filtering', icon: EyeIcon, current: false },
    { name: 'Subscription', href: '/subscription', icon: ShoppingCartIcon, current: false },
    { name: 'Billing', href: '/billing', icon: CreditCardIcon, current: false },

]


const Sidebar = () => {
    return (
        <>
            <div className="flex grow flex-col gap-y-4 overflow-y-auto bg-indigo-600 px-6 pb-4">
                {/* Logo */}
                <div className="flex h-16 shrink-0 items-center ">
                    <NavLink to="dashboard">

                    <img
                        alt="Your Company"
                        src={logo}
                        className="h-10 w-auto"
                    />
                    </NavLink>
                </div>

                {/* Rest of sidebar */}

                <nav className="flex flex-1 flex-col  ">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                {navigation.map((item) => (

                                    <SidebarItem key={item.name} name={item.name} href={item.href} icon={item.icon}  current={item.current} />
                                ))}


                                {/* <SidebarItem key={"Settings"} name={"Settings"} href={"/settings"} icon={Cog6ToothIcon} current={false} /> */}
                            </ul>
                        </li>

                        <SidebarItem key="Settings" name="Settings" href="/settings" icon={Cog6ToothIcon} />
                    </ul>

                </nav>

            </div>
        </>
    )
}

export default Sidebar;