import React from 'react';
import gallary1 from "../../../assets/image/gallary1.jpg"
import { FaCamera, FaFacebook, FaFilePdf, FaPhotoVideo, FaViadeo } from 'react-icons/fa';
const Gallary = () => {
    return (
        <>

            <div>
                <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                    <div class="col-span-2">
                        <div className=' py-3'>
                            <h2 className='flex items-center text-l font-bold text-green-700 text-center py-2 bg-gray-200 px-4'><FaCamera className='me-2 text-2xl'></FaCamera> ফটো গ্যালারী</h2>
                            <div className='grid grid-cols-2 '>
                                <div className=' p-2'>
                                    <h2 className='text-l font-bold text-green-700 text-center py-2 bg-gray-200'>বঙ্গবন্ধু ও মুক্তিযুদ্ধ কর্নার উদ্বোধন</h2>
                                    <img className='w-96 p-2' src={gallary1} alt="" />
                                </div>
                                <div className=' p-2'>
                                    <h2 className='text-l font-bold text-green-700 text-center py-2 bg-gray-200'>এসএসসি ২০২২ এর কৃতী শিক্ষার্থী সংবর্ধনা অনুষ্ঠান।</h2>
                                    <img className='w-96 p-2' src={gallary1} alt="" />
                                </div>

                            </div>
                            {/* video gallary  */}
                            <h2 className='flex items-center text-l font-bold text-green-700 text-center py-2 bg-gray-200 px-4'><FaPhotoVideo className='me-2 text-2xl'></FaPhotoVideo> ভিডিও গ্যালারী</h2>
                            <div className='grid grid-cols-2 '>
                                <div className=' p-2'>
                                    <h2 className='text-l font-bold text-green-700 text-center py-2 bg-gray-200'>বঙ্গবন্ধু ও মুক্তিযুদ্ধ কর্নার উদ্বোধন</h2>
                                    <img className='w-96 p-2' src={gallary1} alt="" />
                                </div>
                                <div className=' p-2'>
                                    <h2 className='text-l font-bold text-green-700 text-center py-2 bg-gray-200'>এসএসসি ২০২২ এর কৃতী শিক্ষার্থী সংবর্ধনা অনুষ্ঠান।</h2>
                                    <img className='w-96 p-2' src={gallary1} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        {/* notice  */}
                        <div className='py-3 '>
                            <div className='notice'>
                                <h2 className='flex items-center text-l font-bold text-green-700 text-center py-2 bg-gray-200 px-4'>
                                    <FaFilePdf className='me-2 text-2xl'></FaFilePdf> নোটিশ বোর্ড
                                </h2>
                                <div className='grid grid-cols-1'>
                                    <div className='my-2'>
                                        <p className='flex'><FaFilePdf className='text-2xl me-1'></FaFilePdf>পবিত্র ঈদে মিলাদুন্নবি ২০২৩ উদযাপন উপলক্ষ্যে
                                            কোরআন তেলওয়াত ও হামদ/ নাত প্রতিযোগিতা অংশগ্রহণ প্রসংঙ্গে ।  </p><small>সোমবার, সেপ্টেম্বর ২৫, ২০২৩</small>
                                    </div>
                                    <div className='my-2'>
                                        <p className='flex'><FaFilePdf className='text-2xl me-1'></FaFilePdf>পবিত্র ঈদে মিলাদুন্নবি ২০২৩ উদযাপন উপলক্ষ্যে
                                            কোরআন তেলওয়াত ও হামদ/ নাত প্রতিযোগিতা অংশগ্রহণ প্রসংঙ্গে ।  </p><small>সোমবার, সেপ্টেম্বর ২৫, ২০২৩</small>
                                    </div>
                                    <div className='my-2'>
                                        <p className='flex'><FaFilePdf className='text-2xl me-1'></FaFilePdf>পবিত্র ঈদে মিলাদুন্নবি ২০২৩ উদযাপন উপলক্ষ্যে
                                            কোরআন তেলওয়াত ও হামদ/ নাত প্রতিযোগিতা অংশগ্রহণ প্রসংঙ্গে ।  </p><small>সোমবার, সেপ্টেম্বর ২৫, ২০২৩</small>
                                    </div>
                                    <div className='my-2'>
                                        <p className='flex'><FaFilePdf className='text-2xl me-1'></FaFilePdf>পবিত্র ঈদে মিলাদুন্নবি ২০২৩ উদযাপন উপলক্ষ্যে
                                            কোরআন তেলওয়াত ও হামদ/ নাত প্রতিযোগিতা অংশগ্রহণ প্রসংঙ্গে ।  </p><small>সোমবার, সেপ্টেম্বর ২৫, ২০২৩</small>
                                    </div>
                                    <div className='my-2'>
                                        <p className='flex'><FaFilePdf className='text-2xl me-1'></FaFilePdf>পবিত্র ঈদে মিলাদুন্নবি ২০২৩ উদযাপন উপলক্ষ্যে
                                            কোরআন তেলওয়াত ও হামদ/ নাত প্রতিযোগিতা অংশগ্রহণ প্রসংঙ্গে ।  </p><small>সোমবার, সেপ্টেম্বর ২৫, ২০২৩</small>
                                    </div>
                                    <div className='my-2'>
                                        <p className='flex'><FaFilePdf className='text-2xl me-1'></FaFilePdf>পবিত্র ঈদে মিলাদুন্নবি ২০২৩ উদযাপন উপলক্ষ্যে
                                            কোরআন তেলওয়াত ও হামদ/ নাত প্রতিযোগিতা অংশগ্রহণ প্রসংঙ্গে ।  </p><small>সোমবার, সেপ্টেম্বর ২৫, ২০২৩</small>
                                    </div>
                                    <div className='my-2'>
                                        <p className='flex'><FaFilePdf className='text-2xl me-1'></FaFilePdf>পবিত্র ঈদে মিলাদুন্নবি ২০২৩ উদযাপন উপলক্ষ্যে
                                            কোরআন তেলওয়াত ও হামদ/ নাত প্রতিযোগিতা অংশগ্রহণ প্রসংঙ্গে ।  </p><small>সোমবার, সেপ্টেম্বর ২৫, ২০২৩</small>
                                    </div>

                                </div>
                                <div className='facebook'>
                                    <h2 className='flex items-center text-l font-bold text-green-700 text-center py-2 bg-gray-200 px-4'>
                                        <FaFacebook className='me-2 text-2xl'></FaFacebook> ফেসবুকে আমরা
                                    </h2>
                                </div>
                                {/* add  */}
                                <div>
                                    add image
                                </div>
                                {/* live class  */}
                                <div>
                                    live class
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallary;