import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Sticky } from 'react-sticky';
import useMediaQuery from '../../hooks/useMediaQuery';
import menuIcon from '../../assets/menu-icon.svg'
import closeIcon from '../../assets/close-icon.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();

    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} 
        hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");


    return (
        <div className="nav-wrapper" style={{ height: '6vh' }}>
            <nav
                id="navbar"
                className={`bg-green z-40 w-full py-2 relative`} style={{ height: '6vh' }}>
                <div className="flex items-center justify-between mx-auto w-5/6" style={{ height: '4vh' }}>
                    <h4 className="font-playfair text-3xl font-bold">MGV</h4>


                    {/* DESKTOP NAV */}
                    {isAboveSmallScreens ? (
                        <div className="flex justify-between gap-16 text-sm font-semibold">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-[#f8f9fa] text-black p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <AiOutlineMenu size={20} />
                        </button>
                    )}

                    {/* MOBILE MENU POPUP */}
                    {!isAboveSmallScreens && isMenuToggled && (
                        <div className='fixed right-0 bottom-0 h-full bg-green w-[300px]'>
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-12 text-white">
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <AiOutlineClose size={25}/>
                                </button>
                            </div>

                            {/* MENU ITEMS */}
                            <div className="flex flex-col gap-10 ml-[33%] text-2xl">
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="About"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Skills"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Projects"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Contact"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        // </div>
    )
}

export default Navbar;