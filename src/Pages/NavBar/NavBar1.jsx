import React from 'react';
import logo from "../../assets/image/collegeLogo.png"
import mujib from "../../assets/image/mujib.png"
import { FaDownload } from 'react-icons/fa';
const NavBar1 = () => {
    return (
        <div>
            <nav className='bg-green-200'>
                <div className='mx-10 py-3 font-bold'>
                    <span className='flex gap-2 justify-end'><FaDownload /> Print Admit Card</span>
                </div>
            </nav>
            <nav className='grid grid-cols-3 gap-10 justify-items-center pt-5 pb-2 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-200 via-white to-gray-200'>
                <div></div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <img src={mujib} alt="" width={120} />
                </div>
            </nav>
        </div>
    );
};

export default NavBar1;