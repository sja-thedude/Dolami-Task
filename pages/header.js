import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

export default function Header() {
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [isAvatarSubmenuOpen, setAvatarSubmenuOpen] = useState(false);
    const [isFashionSubmenuOpen, setFashionSubmenuOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Category All");

    const handleCategorySelection = (category) => {
        setSelectedCategory(category); // Update the selected category
        setCategoryDropdownOpen(false); // Close the dropdown
    };

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <Image src="/images/logo.svg" alt="Logo" width={150} height={50} />
                        </Link>
                    </li>
                    <li className="search-bar">
                        <input
                            type="text"
                            placeholder="Keyword"
                            className="search-input"
                            value={selectedCategory}
                            readOnly
                        />
                        <div
                            className="category-dropdown-wrapper"
                            onClick={() => setCategoryDropdownOpen(!isCategoryDropdownOpen)}
                            onMouseEnter={() => setCategoryDropdownOpen(true)}  // Show dropdown when hovering
                            onMouseLeave={() => setCategoryDropdownOpen(false)} // Hide dropdown when mouse leaves
                        >
                            <div className="category-dropdown">{selectedCategory}</div>
                            {isCategoryDropdownOpen && (
                                <ul className="category-options">
                                    <li onClick={() => handleCategorySelection("Category All")}>
                                        Category All
                                    </li>
                                    <li
                                        onMouseEnter={() => setAvatarSubmenuOpen(true)}
                                        onMouseLeave={() => setAvatarSubmenuOpen(false)}
                                    >
                                        Category Avatars
                                        {isAvatarSubmenuOpen && (
                                            <ul className="submenu">
                                                <li onClick={() => handleCategorySelection("Human-like")}>
                                                    Human-like
                                                </li>
                                                <li onClick={() => handleCategorySelection("Anthro & Furry")}>
                                                    Anthro & Furry
                                                </li>
                                                <li onClick={() => handleCategorySelection("Robot & Cyborgs")}>
                                                    Robot & Cyborgs
                                                </li>
                                                <li onClick={() => handleCategorySelection("Others in Avatars")}>
                                                    Others
                                                </li>
                                                <li onClick={() => handleCategorySelection("All in Avatars")}>
                                                    All in Avatars
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    <li
                                        onMouseEnter={() => setFashionSubmenuOpen(true)}
                                        onMouseLeave={() => setFashionSubmenuOpen(false)}
                                    >
                                        Category Fashion
                                        {isFashionSubmenuOpen && (
                                            <ul className="submenu">
                                                <li onClick={() => handleCategorySelection("Clothes")}>
                                                    Clothes
                                                </li>
                                                <li onClick={() => handleCategorySelection("Accessories")}>
                                                    Accessories
                                                </li>
                                                <li onClick={() => handleCategorySelection("Others in Fashion")}>
                                                    Others
                                                </li>
                                                <li onClick={() => handleCategorySelection("All in Fashion")}>
                                                    All in Fashion
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )}
                        </div>
                        <Image src="/images/searchicon.svg" alt="Search Icon" width={50} height={50} />
                    </li>
                    <li>
                        <Image src="/images/filtersearch.svg" alt="Filter Icon" width={50} height={50} />
                    </li>
                    <li>
                        <p>List Your Creation</p>
                    </li>
                    <li className="language-dropdown" onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}>
                        <Image src="/images/lang.svg" alt="Language Icon" width={40} height={40} />
                        {isLanguageDropdownOpen && (
                            <ul className="language-select">
                                <li>English</li>
                                <li>Japanese</li>
                            </ul>
                        )}
                    </li>
                    <li className="user-dropdown" onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}>
                        <Image src="/images/usericon.svg" alt="User Icon" width={70} height={70} />
                        {isUserDropdownOpen && (
                            <ul className="user-select">
                                <li>Sign In</li>
                                <li>Sign Up</li>
                                <li>List Your Item</li>
                                <li>Message to Yuta (The Founder)</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Image src="/images/shoppingcart.svg" alt="Shopping Cart Icon" width={50} height={50} />
                    </li>
                </ul>
            </nav>
        </div>
    );
}
