'use client'

import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import {BadgeBlue, BadgeGreen, BadgePink, BadgePurple, BadgeRed, BadgeYellow} from "./components/Badges.tsx";
import { FilterListings} from "./components/FilterSelection.tsx";

interface Item {
    zpid: string;
    address: string;
    owner: string;
    occupancy: string;
    value: string;
    status: string;
    realtor: string;
    brokerage: string;
    realtor_phone: string;
}


const Listings = () => {
    const checkbox = useRef<HTMLInputElement>(null)
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedListings, setSelectedListings] = useState<string[]>([]);

    const listings: Item[] = [
        { zpid: "325325325", address: "14 Schanck Road, Holmdel, NJ, 07733", owner: "MOHAMMED W MAQSOOD", occupancy: "Full", value: "252,000", status: "For Sale", realtor: "JATIN MAJMUDAR", brokerage: "Johnson Realty", realtor_phone: "(251) 565-4896" },
        { zpid: "325323825", address: "1 Bromley Ct, Lawrence Township, NJ, 08648", owner: "JACK A SOLOMON",  occupancy: "Full", value: "770,000", status: "For Sale", realtor: "JOAQUIN MONTOYA", brokerage: "M&N Realtors", realtor_phone: "(228) 655-3256" },
        { zpid: "3252324325", address: "56 Devonshire Dr, Somerset, NJ, 08873", owner: "CHANAKYA THAKUR",  occupancy: "Empty", value: "911,000", status: "Pending", realtor: "MICHELLE KENNER", brokerage: "New York Realtors", realtor_phone: "(337) 566-7789" },
    ];



    useLayoutEffect(() => {
        if (checkbox.current) {
            const isIndeterminate =
                selectedListings.length > 0 && selectedListings.length < listings.length;
            setChecked(selectedListings.length === listings.length);
            setIndeterminate(isIndeterminate);
            checkbox.current.indeterminate = isIndeterminate;  // Set indeterminate directly on the DOM element
        }
    }, [selectedListings]);

    function toggleAll() {
        if (selectedListings.length === listings.length) {
            setSelectedListings([]);  // Unselect all
        } else {
            setSelectedListings(listings.map((p) => p.zpid));  // Select all
        }
    }
    useEffect(() => {
        if (checkbox.current) {
            checkbox.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);

    function toggleIndividual(zpid: string, isChecked: boolean) {
        setSelectedListings((prevSelected) =>
            isChecked ? [...prevSelected, zpid] : prevSelected.filter((e) => e !== zpid)
        );
    }

    return (
        <>
        <div className="px-4 sm:px-6 lg:px-8">

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold text-gray-900">Listings</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all properties that are on the market in selected areas.
                    </p>
                </div>

                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-[#4379F2] px-3 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
                    >
                        Add More Leads
                    </button>
                </div>
            </div>

            <FilterListings />
            <div className="mt-2 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="relative">
                            {selectedListings.length > 0 && (
                                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Bulk edit
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                        Delete all
                                    </button>
                                </div>
                            )}
                            <table className="min-w-full table-fixed divide-y divide-gray-300">
                                <thead>
                                <tr>
                                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                        <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4"
                                            ref={checkbox}
                                            checked={checked}
                                            onChange={toggleAll}
                                        />
                                    </th>
                                    <th scope="col"
                                        className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">Address
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Owner
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Occupancy
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Property Value
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Realtor
                                    </th>

                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Brokerage
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Realtor
                                        Phone
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {listings.map((item) => (
                                    <tr key={item.zpid}
                                        className={selectedListings.includes(item.zpid) ? 'bg-gray-50' : undefined}>
                                        <td className="relative px-7 sm:w-12 sm:px-6">
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4"
                                                checked={selectedListings.includes(item.zpid)}
                                                onChange={(e) => toggleIndividual(item.zpid, e.target.checked)}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">{item.address}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.owner}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {item.occupancy === "Full" ? (
                                                <BadgeGreen value={item.occupancy}/>
                                            ) : item.occupancy === "Empty" ? (
                                                <BadgeRed value={item.occupancy}/>
                                            ) : item.occupancy === "No Photos" ? (
                                                <BadgePink value={item.occupancy}/>
                                            ) : item.occupancy}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">${item.value}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {item.status === "For Sale" ? (
                                                <BadgeYellow value={item.status}/>
                                            ) : item.status === "Pending" ? (
                                                <BadgeBlue value={item.status}/>
                                            ) : item.status === "Coming soon" ? (
                                                <BadgePurple value={item.status}/>
                                            ) : item.status}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.realtor}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.brokerage}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.realtor_phone}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}


export default Listings;