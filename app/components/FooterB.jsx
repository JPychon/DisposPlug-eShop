import {AuthorizeNetSeal, Text} from '~/components';

export function FooterB() {
    return(
    <footer className="grid bg-primary dark:bg-primary text-gray-700 items-start grid-flow-row w-full inset-x-0 bottom-0">
        <div className="mx-auto w-full px-12 lg:py-2">
            <div className="md:flex md:justify-between">
                <div className="flex md:mb-0">
                    <a href="https://disposablesplug.com/">
                        <div className='flex flex-col justify-center'>
                        <img src="https://cdn.shopify.com/s/files/1/0745/8501/4570/files/logo.png?v=1681790728" className="lg:h-36 md:h-28 sm:mr-3" alt="Disposables Plug Logo" />
                        <img src="https://cdn.shopify.com/s/files/1/0745/8501/4570/files/payment-cards.png?v=1683615205" className="h-8 object-contain mb-8" alt="Accepted Payment Processors"/>
                        </div>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-6 sm:grid-cols-2 lg:mt-10 mb-2 lg:grid-cols-5 lg:justify-items-end lg:ml-24">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-clearWhite uppercase">Contact</h2>
                        <ul className="text-lightGray text-xs">
                            <li className='mb-2 font-semibold text-clearWhite'>
                                Address:
                            </li>
                            <li className='mb-2'>
                            590 E Baseline Rd, Claremont, CA, 91711, USA
                            </li>
                            <li className='mb-2 font-semibold text-clearWhite'>
                                Phone:
                            </li>
                            <li className='mb-2'>
                              +1 415-890-8174
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-clearWhite uppercase">Resources</h2>
                        <ul className="text-lightGray font-medium">
                            <li className="mb-4">
                                <a href="http://disposablesplug.com/pages/about-us" className="hover:underline">About Us</a>
                            </li>
                            <li className='mb-4'>
                                <a href="http://disposablesplug.com/pages/pact-act" className="hover:underline">PACT Act</a>
                            </li>
                            <li>
                                <a href="http://disposablesplug.com/policies" className="hover:underline">Policies</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-clearWhite uppercase mt-4 lg:mt-0">Support</h2>
                        <ul className="text-lightGray font-medium">
                            <li className="mb-4">
                                <a href="http://disposablesplug.com/pages/faq" className="hover:underline">FAQ</a>
                            </li>
                            <li className='mb-4'>
                                <a href="http://disposablesplug.com/pages/return-policy" className="hover:underline">Return Policy</a>
                            </li>
                            <li>
                                <a href="http://disposablesplug.com/pages/shipping-policy" className="hover:underline">Shipping Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-clearWhite uppercase mt-4 lg:mt-0">Legal</h2>
                        <ul className="text-lightGray font-medium">
                            <li className="mb-4">
                                <a href="http://disposablesplug.com/pages/privacy-policy" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className='mb-4'>
                                <a href="http://disposablesplug.com/pages/terms-of-service" className="hover:underline">Terms of Service</a>
                            </li>
                            <li>
                                <a href="http://disposablesplug.com/pages/fda-disclaimer" className="hover:underline">FDA Disclaimer</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col col-span-2 lg:col-span-1 justify-center content-center'>
                        <img src="https://cdn.shopify.com/s/files/1/0745/8501/4570/files/seal1.png?v=1682631773" className='object-contain h-20 lg:h-20 mt-2 lg:mt-0' alt="Authorize.NET Verified Merchant"/>
                        <img src="https://i.ibb.co/sCN6F5W/SECURE-LOGO.png" className='object-contain h-20 lg:h-20'  alt="SSL Secured Logo"/>
                        <AuthorizeNetSeal/>
                    </div>
                </div>
            </div>
            <hr className="mb-6 border-darkGray sm:mx-auto lg:mb-4" />
            <div className="sm:flex sm:items-center sm:justify-between sm:mb-4 md:mb-4">
                <span className="text-sm text-lightGray sm:text-center">
                    © 2023 <a href="https://disposablesplug.com/" className="hover:underline">DisposablesPlug</a>. 
                    All Rights Reserved.
                </span>
                <div className="flex mt-4 lg:mt-0 space-x-6 sm:justify-center sm:mt-0 mb-4">
                    <a href="https://www.facebook.com/profile.php?id=100092371444263" className="text-lightGray hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="https://www.instagram.com/disposablesplugla/" className="text-lightGray hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="https://twitter.com/disposablesplug/" className="text-lightGray hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        <span className="sr-only">Twitter page</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )   
}