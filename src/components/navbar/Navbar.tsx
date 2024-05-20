const Navbar = () =>{
    return(
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button data-collapse-toggle="navbar-multi-level" type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
                    rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    aria-controls="navbar-multi-level" aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={'../../../../icons/Solevibe Logo 1.svg'} className="h-11 sm:h-14" alt="Flowbite Logo" />
                </a>
                <div className="hidden w-full lg:block lg:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 
                    lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white">
                        <li>
                            <a href="/" className="block py-2 px-3 text-black" aria-current="page">
                                Home
                            </a>
                        </li>
                        
                        <li>
                            <a href="#" className="block py-2 px-3 text-black" aria-current="page">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-black" aria-current="page">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-black" aria-current="page">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../../../../icons/shopping-bag 1.svg" className="h-8" alt="Flowbite Logo" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar