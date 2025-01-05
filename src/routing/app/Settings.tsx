import {  UserCircleIcon} from "@heroicons/react/24/solid";
import Tabs from "./components/Tabs.tsx";

const tabData = [
    { name: 'Company', href: '#company', current: true },
    { name: 'Login Information', href: '#login', current: false },
    { name: 'Billing', href: '#billing', current: false },
];

const Settings = () => {
    return (
        <>
            <div className="px-8">
                <Tabs tabs={tabData}/>
                <form>
                <div className="space-y-12 mt-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                        <div>
                            <h2 className="text-base/7 font-semibold text-gray-900">Company</h2>
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
                                <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
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

            </div>

        </>
    )
}

export default Settings;