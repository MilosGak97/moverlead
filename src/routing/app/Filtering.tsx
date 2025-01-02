import filter_btn from "../../assets/images/FilterButton.svg"

const Filtering = () => {


    const people = [
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            department: 'Filtering',
            email: 'lindsay.walton@example.com',
            role: 'Head',
            image:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            department: 'Scrapping',
            email: 'lindsay.walton@example.com',
            role: 'Scraping',
            image:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Lindsay Walton',
            title: 'Front-end Developer',
            department: 'Head',
            email: 'lindsay.walton@example.com',
            role: 'Filtering',
            image:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]


    return(
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="sm:flex flex-row sm:items-center">
                    <div className="sm:flex-auto ">
                        <h1 className="text-base font-semibold text-gray-900">Admins</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the admins in your account including their name, email and role.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0  flex flex-row">
                            <input
                                id="search"
                                name="search"
                                type="text"
                                placeholder="Search for user"
                                aria-label="Search for users"
                                className="block  rounded-md bg-white px-3 py-2 text-sm mr-2 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-700 sm:text-sm/6"
                            />
                        <img src={filter_btn} className="mr-2 hover:cursor-pointer hover:opacity-80"
                             alt="Button to open filter drawer"/>
                        <button
                            type="button"
                            className="block rounded-md bg-[#B71C1C] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create Admin
                        </button>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                <tr>
                                <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="size-11 shrink-0">
                                                    <img alt="" src={person.image} className="size-11 rounded-full"/>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900">{person.name}</div>
                                                    <div className="mt-1 text-gray-500">{person.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span
                          className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{person.role}</td>
                                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a href="#" className="text-red-700 hover:text-red-800 mr-4">
                                                View<span className="sr-only">, {person.name}</span>
                                            </a>
                                            <a href="#" className="text-red-700 hover:text-red-800 mr-4">
                                                Edit<span className="sr-only">, {person.name}</span>
s
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filtering;