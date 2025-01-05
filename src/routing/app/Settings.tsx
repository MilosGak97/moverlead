import {  UserCircleIcon} from "@heroicons/react/24/solid";
import Tabs from "./components/Tabs.tsx";
import {useState} from "react";


const Settings = () => {

    const [tabs, setTabs] = useState([
        { name: 'Company Information', href: '#company-information', current: true },
        { name: 'Update Password', href: '#update-password', current: false },
        { name: 'Payment Methods', href: '#payment-methods', current: false },
    ]);

    const handleTabClick = (name: string) => {
        setTabs((prevTabs) =>
            prevTabs.map((tab) => ({ ...tab, current: tab.name === name }))
        );
        const targetSection = document.querySelector(name.toLowerCase());
        targetSection?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>
            <div className="px-8">
                <Tabs tabs={tabs} onTabClick={handleTabClick}/>
                <form id="company-information" className={`${tabs[0].current ? '' : 'hidden'}`}>
                    <div className="space-y-12 mt-8">
                        <div
                            className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                            <div>
                                <h2 className="text-base/7 font-semibold text-gray-900">Basic Information</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                </p>
                            </div>

                            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        Company name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="name"
                                            autoComplete="name"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                        Logo
                                    </label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300"/>
                                        <button
                                            type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address"
                                           className="block text-sm/6 font-medium text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="region"
                                            name="region"
                                            type="text"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Website
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#4379F2]">

                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder=""
                                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-4">
                                    <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <div
                                            className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-[#4379F2]">

                                            <input
                                                id="phone_number"
                                                name="phone_number"
                                                type="text"
                                                placeholder=""
                                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2]"
                        >
                            Save
                        </button>
                    </div>
                </form>
                <form id="update-password" className={`${tabs[1].current ? '' : 'hidden'}`}>
                    <div className="space-y-12 mt-8">
                        <div
                            className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                            <div>
                                <h2 className="text-base/7 font-semibold text-gray-900">Update Password</h2>
                                <p className="mt-1 text-sm/6 text-gray-600">
                                    Update your password associated with your account.
                                </p>
                            </div>
                            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Current Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="current_password"
                                            name="current_password"
                                            type="password"
                                            autoComplete="password"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        New Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="new_password"
                                            name="new_password"
                                            type="password"
                                            autoComplete="password"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        Repeat Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="repeat_password"
                                            name="repeat_password"
                                            type="password"
                                            autoComplete="password"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2]"
                        >
                            Save
                        </button>
                    </div>
                </form>
                <div id="payment-methods" className={`${tabs[2].current ? '' : 'hidden'}`}>
                    <div className="bg-white shadow sm:rounded-lg  mx-auto max-w-[600px] mt-4">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="sm:flex sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">Add Payment Method</h3>
                                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                                        <p>
                                            Add your payment method to easily manage transactions and enjoy a seamless
                                            experience with your subscription. </p>
                                    </div>
                                </div>
                                <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:shrink-0 sm:items-center">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2]"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow sm:rounded-lg mx-auto max-w-[600px] mt-4">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-base font-semibold text-gray-900">Payment method</h3>
                            <div className="mt-5">
                                <div
                                    className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                                    <h4 className="sr-only">Visa</h4>
                                    <div className="sm:flex sm:items-start">
                                        <svg viewBox="0 0 36 24" aria-hidden="true"
                                             className="h-8 w-auto sm:h-6 sm:shrink-0">
                                            <rect rx={4} fill="#224DBA" width={36} height={24}/>
                                            <path
                                                d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                                                fill="#fff"
                                            />
                                        </svg>
                                        <div className="mt-3 sm:ml-4 sm:mt-0">
                                            <div className="text-sm font-medium text-gray-900">Ending with 4242</div>
                                            <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                                                <div>Expires 12/20</div>
                                                <span aria-hidden="true" className="hidden sm:mx-2 sm:inline">
                    &middot;
                  </span>
                                                <div className="mt-1 sm:mt-0">Last updated on 22 Aug 2017</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:ml-6 sm:mt-0 sm:shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Settings;