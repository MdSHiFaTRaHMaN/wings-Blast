import Slider from 'react-slick';
import Bannar from '../assets/images/Desktop_Banner_1440_x_106.jpg';
import SpecialsImg from '../assets/images/spacial menu.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BiSolidError } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './FoodMenu.css'
import { useEffect, useRef, useState } from 'react';
import FoodImg from '../assets/images/Screenshot 2024-10-23 155612.png'
import DetailsAbout from './foodDetails/DetailsAbout';


const FoodMenu = () => {
    const [activeTab, setActiveTab] = useState('specials');
    const sectionsRef = useRef({});
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,  // Default for large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 786,  // For screens < 1024px (lg)
                settings: {
                    slidesToShow: 2,  // Show 2 slides for medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,  // For screens < 768px (md)
                settings: {
                    slidesToShow: 1,  // Show 1 slide for small screens
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveTab(sectionId); // Set active tab based on clicked section
        }
    };
    useEffect(() => {
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.5 // trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id); // Set the active tab based on the visible section
                }
            });
        }, options);

        // Observe each section
        const sections = Object.values(sectionsRef.current);
        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            if (sections) {
                sections.forEach((section) => observer.unobserve(section));
            }
        };
    }, []);

    return (
        <div className=''>
            <h1 className="text-4xl ml-32 font-semibold">MENU</h1>
            {/* tab menu section  */}
            <div role="tablist" className="tabs overflow-x-auto lg:-mt-0  tabs-bordered w-full fixed top-0 z-50 px-[0px] lg:px-[120px] bg-red-600 shadow-md font-semibold">
                <a
                    role="tab"
                    className={`tab ${activeTab === 'specials' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('specials')}
                >
                    Specials
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'chicken-sandwich' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('chicken-sandwich')}
                >
                    Chicken Sandwich
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'wing-group-packs' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('wing-group-packs')}
                >
                    Wing Group Packs
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'wings-by-piece' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('wings-by-piece')}
                >
                    Wings By the Piece
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'wingstop-tenders' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('wingstop-tenders')}
                >
                    Wingstop Tenders
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'sides' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('sides')}
                >
                    Sides
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'dips-flavors' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('dips-flavors')}
                >
                    Dips & Flavors
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'drinks' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('drinks')}
                >
                    Drinks
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === 'desserts' ? 'tab-active text-green-600' : ''}`}
                    onClick={() => handleScrollToSection('desserts')}
                >
                    Desserts
                </a>
            </div>
            {/* bannar section  */}
            <div className='mt-1 hidden md:block lg:block'>
                <img src={Bannar} alt="" />
            </div>
            {/* Our recommendations section */}
            <div className="slider-container px-4 sm:px-6 md:px-8 lg:px-12">
                <Slider ref={sliderRef} {...settings} className="mx-auto">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="px-2 md:px-4">
                            <Link to="/details">
                                <div className="card w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                                    <figure className="aspect-w-16 aspect-h-9">
                                        <img
                                            src={FoodImg}
                                            alt="Boneless Meal Deal"
                                            className="w-full h-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body p-4">
                                        <h2 className="card-title text-lg font-semibold">
                                            BONELESS MEAL DEAL
                                            <div className="badge badge-info ml-2 text-xs px-2 py-1">NEW</div>
                                        </h2>
                                        <p className="text-gray-600">$18.69</p>
                                        <div className="card-actions mt-2">
                                            <p className="text-sm text-gray-500">
                                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors, regular fries, or veggie sticks
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Specials Menu section  */}
            <section id="specials"
                ref={(el) => (sectionsRef.current['specials'] = el)}
            >
                <div className="container px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-3xl sm:text-5xl font-bold mb-5'>Special Menu</h1>
                    <div className="flex flex-wrap -m-4">
                        {/* Card 1 */}
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink
                            </p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $12.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $18.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $24.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink
                            </p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $12.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $18.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $24.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink
                            </p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $12.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $18.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between'>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $24.69 <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>
                                        830 - 1820 cal <BiSolidError />
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chicken Sandwich Menu section  */}
            <section id="chicken-sandwich"
                ref={(el) => (sectionsRef.current['chicken-sandwich'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Chicken Sandwich</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Wing Group Packs Menu section  */}
            <section id="wing-group-packs"
                ref={(el) => (sectionsRef.current['wing-group-packs'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Wing Group Packs</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Wings By the Piece Menu section  */}
            <section id="wings-by-piece"
                ref={(el) => (sectionsRef.current['wings-by-piece'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Wings By the Piece</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Wingstop Tenders Menu section  */}
            <section id="wingstop-tenders"
                ref={(el) => (sectionsRef.current['wingstop-tenders'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Wingstop Tenders</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sides Menu section  */}
            <section id="sides"
                ref={(el) => (sectionsRef.current['sides'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Sides</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Dips & Flavors Menu section  */}
            <section id="dips-flavors"
                ref={(el) => (sectionsRef.current['dips-flavors'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Dips & Flavors</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Drinks Menu section  */}
            <section id="drinks"
                ref={(el) => (sectionsRef.current['drinks'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Drinks</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Desserts Menu section  */}
            <section id="desserts"
                ref={(el) => (sectionsRef.current['desserts'] = el)}
            >
                <div className="container  px-3 lg:px-5 py-2 w-full lg:w-10/12 mx-auto">
                    <h1 className='text-5xl font-bold mb-5'>Desserts</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                        <div className="p-4 w-full sm:w-1/2 lg:w-1/3 mb-6">
                            <div className="rounded-lg h-64 overflow-hidden cursor-pointer">
                                <img
                                    alt="content"
                                    onClick={() => document.getElementById('select_cal').showModal()}
                                    className="object-cover object-center h-full w-full"
                                    src={SpecialsImg} />
                            </div>
                            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">6 pc Wing Combo</h2>
                            <p className="text-sm leading-relaxed mt-2">
                                6 Boneless or Classic (Bone-In) wings with up to 2 flavors,
                                regular fries or veggie sticks, 1 dip and a 20oz drink</p>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>BONELESS</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 12.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 18.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                            <Link to='/details'>
                                <div className='my-1'>
                                    <div className='flex justify-between '>
                                        <h3 className='font-semibold'>Mix & Match</h3>
                                        <span className='flex items-center text-lg'>
                                            $ 24.69
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                    </div>
                                    <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <DetailsAbout />

            {/* PopUp model  */}
            <dialog id="select_cal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-2xl">Choose An Option</h3>
                    <p className="py-1">6 pc Wing Combo</p>
                    <Link to='/details'>
                        <div className='my-1'>
                            <div className='flex justify-between '>
                                <h3 className='font-semibold'>BONELESS</h3>
                                <span className='flex items-center text-lg'>
                                    $ 12.69
                                    <MdOutlineKeyboardArrowRight />
                                </span>
                            </div>
                            <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                        </div>
                    </Link>
                    <Link to='/details'>
                        <div className='my-1'>
                            <div className='flex justify-between '>
                                <h3 className='font-semibold'>Classic (Bone-In)</h3>
                                <span className='flex items-center text-lg'>
                                    $ 18.69
                                    <MdOutlineKeyboardArrowRight />
                                </span>
                            </div>
                            <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                        </div>
                    </Link>
                    <Link to='/details'>
                        <div className='my-1'>
                            <div className='flex justify-between '>
                                <h3 className='font-semibold'>Mix & Match</h3>
                                <span className='flex items-center text-lg'>
                                    $ 24.69
                                    <MdOutlineKeyboardArrowRight />
                                </span>
                            </div>
                            <h4 className='flex items-center gap-2 text-sm'>830 - 1820 cal <BiSolidError /></h4>
                        </div>
                    </Link>
                </div>
            </dialog>
        </div>
    );
};

export default FoodMenu;