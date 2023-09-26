import React from 'react';

const NavBar = () => {

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {/* {navoptions} */}
                            <li tabIndex={0}>
                                <details>
                                    <summary>আমাদের কথা </summary>
                                    <ul className="p-2 ">
                                        <li><a>মাননীয় যুব ও ক্রীড়া প্রতিমন্ত্রীর বাণী</a></li>
                                        <li><a>সভাপতির বাণী</a></li>
                                        <li><a>অধ্যক্ষের বাণী</a></li>
                                        <li><a>মুখবন্ধ</a></li>
                                        <li><a>শিক্ষা দর্শন</a></li>
                                        <li><a>লক্ষ্য ও উদ্দেশ্য</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>গভর্নিং বডি </a></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>শিক্ষক/শিক্ষিকা/কর্মচারীবৃন্দ </summary>
                                    <ul className="p-2">
                                        <li><a>প্রভাষক (কলেজ শাখা, প্রভাতি)</a></li>
                                        <li><a>প্রভাষক (কলেজ শাখা, দিবা)</a></li>
                                        <li><a>শিক্ষক/ শিক্ষিকা (স্কুল শাখা, প্রভাতি)</a></li>
                                        <li><a>কর্মচারীবৃন্দ</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>একাডেমিক </summary>
                                    <ul className="p-2">
                                        <li><a>বেতন ও পরীক্ষা ফি</a></li>
                                        <li><a>এক নজরে সাফল্য</a></li>
                                        <li><a>শিফট পরিচিতি ও ক্লাস সময়সূচি</a></li>
                                        <li><a>পোশাক পরিচিতি</a></li>
                                        <li><a>ডাউনলোড এডমিট কার্ড</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>তথ্য </summary>
                                    <ul className="p-2">
                                        <li><a>নোটিশ বোর্ড</a></li>
                                        <li><a>শর্তাবলী</a></li>
                                        <li><a>গোপনীয়তা নীতি</a></li>
                                        <li><a>রিটার্ন এবং রিফান্ড নীতি</a></li>
                                        <li><a>আমাদের সম্পর্কে</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>ভর্তি কার্যক্রম </summary>
                                    <ul className="p-2">
                                        <li><a>অনলাইন ভর্তি</a></li>
                                        <li><a>ভর্তির নিয়মাবলি</a></li>
                                        <li><a>ছাড়পত্র</a></li>
                                        <li><a>ভর্তির সম্ভাব্য বয়সসীমা</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>গ্যালারি</summary>
                                    <ul className="p-2">
                                        <li><a>ফটোগ্যালারি</a></li>
                                        <li><a>ভিডিও গ্যালারি</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>স্বাধীনতার সুবর্ণজয়ন্তী </a></li>
                            <li><a>যোগাযোগ </a></li>

                            <li tabIndex={0}>
                                <details>
                                    <summary>লগ-ইন</summary>
                                    <ul className="p-2">
                                    লগ-ইন
                                    </ul>
                                </details>
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li className='dropdown dropdown-bottom dropdown-hover '>
                            <label tabIndex={0} className=" m-1">আমাদের কথা</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>মাননীয় যুব ও ক্রীড়া প্রতিমন্ত্রীর বাণী</a></li>
                                <li><a>সভাপতির বাণী</a></li>
                                <li><a>অধ্যক্ষের বাণী</a></li>
                                <li><a>মুখবন্ধ</a></li>
                                <li><a>শিক্ষা দর্শন</a></li>
                                <li><a>লক্ষ্য ও উদ্দেশ্য</a></li>
                            </ul>
                        </li>
                        <li className='dropdown dropdown-bottom dropdown-hover'>
                            <label tabIndex={0} className=" m-1">গভর্নিং বডি </label>
                        </li>

                        <li className='dropdown dropdown-bottom dropdown-hover' >
                            <label tabIndex={0} className=" m-1">শিক্ষক/শিক্ষিকা/কর্মচারীবৃন্দ</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>প্রভাষক (কলেজ শাখা, প্রভাতি)</a></li>
                                <li><a>প্রভাষক (কলেজ শাখা, দিবা)</a></li>
                                <li><a>শিক্ষক/ শিক্ষিকা (স্কুল শাখা, প্রভাতি)</a></li>
                                <li><a>কর্মচারীবৃন্দ</a></li>
                            </ul>
                        </li>
                        <li className='dropdown dropdown-bottom dropdown-hover'>
                            <label tabIndex={0} className=" m-1">একাডেমিক</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>বেতন ও পরীক্ষা ফি</a></li>
                                <li><a>এক নজরে সাফল্য</a></li>
                                <li><a>শিফট পরিচিতি ও ক্লাস সময়সূচি</a></li>
                                <li><a>পোশাক পরিচিতি</a></li>
                                <li><a>ডাউনলোড এডমিট কার্ড</a></li>
                            </ul>
                        </li>
                        <li className='dropdown dropdown-bottom dropdown-hover'>
                            <label tabIndex={0} className=" m-1">তথ্য</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>নোটিশ বোর্ড</a></li>
                                <li><a>শর্তাবলী</a></li>
                                <li><a>গোপনীয়তা নীতি</a></li>
                                <li><a>রিটার্ন এবং রিফান্ড নীতি</a></li>
                                <li><a>আমাদের সম্পর্কে</a></li>
                            </ul>
                        </li>
                        <li className='dropdown dropdown-bottom dropdown-hover'>
                            <label tabIndex={0} className=" m-1">ভর্তি কার্যক্রম</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>অনলাইন ভর্তি</a></li>
                                <li><a>ভর্তির নিয়মাবলি</a></li>
                                <li><a>ছাড়পত্র</a></li>
                                <li><a>ভর্তির সম্ভাব্য বয়সসীমা</a></li>
                            </ul>
                        </li>
                        <li className='dropdown dropdown-bottom dropdown-hover'>
                            <label tabIndex={0} className=" m-1">গ্যালারি</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>ফটোগ্যালারি</a></li>
                                <li><a>ভিডিও গ্যালারি</a></li>
                            </ul>
                        </li>
                        <li className='dropdown dropdown-bottom dropdown-hover'>
                            <label tabIndex={0} className=" m-1">স্বাধীনতার সুবর্ণজয়ন্তী </label>

                        </li>
                        <li className='dropdown dropdown-bottom dropdown-hover'>
                            <label tabIndex={0} className=" m-1">যোগাযোগ  </label>

                        </li>

                        <li className='dropdown dropdown-bottom dropdown-end dropdown-hover'>
                            <label tabIndex={0} className=" m-1">লগ-ইন</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>শিক্ষার্থী লগ-ইন</a></li>
                                <li><a>শিক্ষক/ এডমিন লগ-ইন</a></li>
                            </ul>
                        </li>

                    
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"></a>
                </div>
            </div>
        </>
    );
};

export default NavBar;