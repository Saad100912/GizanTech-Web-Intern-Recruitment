import React from "react";

const Footer = () => {
    return (
        <div className="border-t border-white/5 rounded-xl">
            <footer className="footer p-10 max-w-[1100px] mx-auto">
                <div>
                    <img
                        src="https://i.ibb.co/jf1Sm0V/footer-Logo.png"
                        alt=""
                        className="w-[30px]"
                    />
                    <p className="mt-1">Managed by Solana Foundation</p>
                    <div className="flex gap-3 mt-4 mb-6">
                        <img
                            src="https://i.ibb.co/8dv3sSN/youtube.png"
                            alt=""
                            className="w-[26px] h-4"
                        />
                        <img
                            src="https://i.ibb.co/zxTnB8b/twitter.png"
                            alt=""
                            className="w-[26px] h-4"
                        />
                        <img
                            src="https://i.ibb.co/9nCLgRY/discord.png"
                            alt=""
                            className="w-[26px] h-4"
                        />
                        <img
                            src="https://i.ibb.co/2cQYH8F/reddit.png"
                            alt=""
                            className="w-[26px] h-4"
                        />
                        <img
                            src="https://i.ibb.co/CKmXNx3/github.png"
                            alt=""
                            className="w-[26px] h-4"
                        />
                        <img
                            src="https://i.ibb.co/FJdX2QW/telegram.png"
                            alt=""
                            className="w-[26px] h-4"
                        />
                    </div>
                    <p className="text-[#848895]">
                        © 2023 Solana Foundation. All rights reserved.
                    </p>
                </div>
                <div></div>
                <div>
                    <span className="footer-title opacity-100">Solana</span>
                    <p className="link link-hover">Grants</p>
                    <p className="link link-hover">Black Solana</p>
                    <p className="link link-hover">Media Kit</p>
                    <p className="link link-hover">Disclaimer</p>
                    <p className="link link-hover">Careers</p>
                </div>
                <div>
                    <span className="footer-title opacity-100">
                        Get Connected
                    </span>
                    <p className="link link-hover">Ecosystem</p>
                    <p className="link link-hover">Blog</p>
                    <p className="link link-hover">Newsletter</p>
                </div>
                <div>
                    <span className="footer-title flex gap-1">
                        <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.8901 6.25C12.3347 2.76172 11.0246 0.3125 9.5 0.3125C7.9754 0.3125 6.66532 2.76172 6.10988 6.25H12.8901ZM5.82258 10C5.82258 10.8672 5.86855 11.6992 5.94899 12.5H13.0472C13.1276 11.6992 13.1736 10.8672 13.1736 10C13.1736 9.13281 13.1276 8.30078 13.0472 7.5H5.94899C5.86855 8.30078 5.82258 9.13281 5.82258 10ZM18.2607 6.25C17.1651 3.59766 14.9472 1.54688 12.2083 0.71875C13.1429 2.03906 13.7865 4.02734 14.1236 6.25H18.2607ZM6.7879 0.71875C4.05282 1.54688 1.83105 3.59766 0.739314 6.25H4.87641C5.20968 4.02734 5.85323 2.03906 6.7879 0.71875ZM18.6706 7.5H14.2768C14.3573 8.32031 14.4032 9.16016 14.4032 10C14.4032 10.8398 14.3573 11.6797 14.2768 12.5H18.6667C18.8774 11.6992 18.9962 10.8672 18.9962 10C18.9962 9.13281 18.8774 8.30078 18.6706 7.5ZM4.59677 10C4.59677 9.16016 4.64274 8.32031 4.72319 7.5H0.329435C0.122581 8.30078 0 9.13281 0 10C0 10.8672 0.122581 11.6992 0.329435 12.5H4.71935C4.64274 11.6797 4.59677 10.8398 4.59677 10ZM6.10988 13.75C6.66532 17.2383 7.9754 19.6875 9.5 19.6875C11.0246 19.6875 12.3347 17.2383 12.8901 13.75H6.10988ZM12.2121 19.2812C14.9472 18.4531 17.169 16.4023 18.2645 13.75H14.1274C13.7903 15.9727 13.1468 17.9609 12.2121 19.2812ZM0.739314 13.75C1.83488 16.4023 4.05282 18.4531 6.79173 19.2812C5.85706 17.9609 5.21351 15.9727 4.87641 13.75H0.739314Z"
                                fill="#848895"
                            />
                        </svg>{" "}
                        <span>EN</span>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
