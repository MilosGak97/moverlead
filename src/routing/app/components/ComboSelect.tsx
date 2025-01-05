'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
    { id: 1, name: 'Leslie Alexander' },
    { id: 2, name: 'Bojan Vreco' },
    // More users...
]

const ComboSelect = () => {
    const [query, setQuery] = useState('')
    const [selectedPerson, setSelectedPerson] = useState(null)

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox
            as="div"
            value={selectedPerson}
            onChange={(person) => {
                setQuery('')
                setSelectedPerson(person)
            }}
        >
            <Label className="block text-sm/6 font-medium text-gray-900">Select State</Label>
            <div className="relative mt-2">
                <ComboboxInput
                    className="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                    onChange={(event) => setQuery(event.target.value)}
                    onBlur={() => setQuery('')}
                />
                <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <ChevronUpDownIcon className="size-5 text-gray-400" aria-hidden="true" />
                </ComboboxButton>

                {filteredPeople.length > 0 && (
                    <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {filteredPeople.map((person) => (
                            <ComboboxOption
                                key={person.id}
                                value={person}
                                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white data-[focus]:outline-none"
                            >
                                <span className="block truncate group-data-[selected]:font-semibold">{person.name}</span>

                                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-blue-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                )}
            </div>
        </Combobox>
    )
}

export default ComboSelect;