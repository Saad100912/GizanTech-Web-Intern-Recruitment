import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const LandingPage2 = () => {
    return (
        <div className="my-28">
            <header className="max-w-[1140px] mx-auto my-28">
                <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-8xl">
                            Developer <br /> Resources
                        </h1>
                        <p className="text-xl mt-5">
                            A manual for joining the Solana <br /> ecosystem. By
                            builders for builders.
                        </p>
                        <div className="flex gap-2 mt-8">
                            <button className="btn uppercase rounded-full bg-[#14F195] text-black hover:text-white">
                                BUILD NOW
                            </button>
                            <button className="btn uppercase rounded-full bg-black border border-gray-700">
                                STACK EXCHANGE
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="relative flex justify-center">
                            <span className="absolute h-[25rem] w-[27rem] left-[35%] top-[2.5rem] bg-[#f087ff4d] blur-[150px] rounded-[100px]"></span>
                            <img
                                src="https://i.ibb.co/ZBkySjb/header-Img.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </header>
            <section className="max-w-[1140px] mx-auto my-28">
                <div>
                    <h3 className="text-[38px]">Get started</h3>
                    <p className="text-xl">
                        Use these Solana Foundation and community courses to
                        begin your journey into Solana development.
                    </p>
                </div>
                <div
                    style={{
                        backgroundImage: `url(https://i.ibb.co/rdXXGBR/bg-1.png)`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="p-20 mt-8"
                >
                    <div className="inline-block text-white text-sm bg-[#9945FF] px-2 py-1 rounded-full">
                        17 Chapters
                    </div>
                    <div>
                        <h3 className="text-[40px] mt-4 mb-8">
                            Solana Development Course
                        </h3>
                        <p className="mb-6">
                            Quickstart your Solana development starting
                            <br /> from nothing to complex programs.
                        </p>
                        <div>
                            <FaArrowRight className="border border-[#848895] rounded-full text-2xl p-1 text-[#848895]" />
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-3 gap-6 my-3">
                        <div
                            style={{
                                backgroundImage: `url(https://i.ibb.co/qsycQJz/img1.png)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[320px] rounded-2xl p-7 flex items-end"
                        >
                            <div className="w-full">
                                <div>
                                    <div className="inline-block text-white text-sm bg-[#9945FF] px-2 py-1 rounded-full">
                                        14 Chapters
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <h3 className="text-lg">Buildspace</h3>
                                    <FaArrowRight className="border border-[#848895] rounded-full text-2xl p-1 text-[#848895]" />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(https://i.ibb.co/dJQ7BYS/img2.png)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[320px] rounded-2xl p-7 flex items-end"
                        >
                            <div className="w-full">
                                <div>
                                    <div className="inline-block text-white text-sm bg-[#9945FF] px-2 py-1 rounded-full">
                                        12 Chapters
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <h3 className="text-lg">Solana Bytes</h3>
                                    <FaArrowRight className="border border-[#848895] rounded-full text-2xl p-1 text-[#848895]" />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(https://i.ibb.co/gj56YWb/img3.png)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[320px] rounded-2xl p-7 flex items-end"
                        >
                            <div className="w-full">
                                <div>
                                    <div className="inline-block text-white text-sm bg-[#9945FF] px-2 py-1 rounded-full">
                                        1 Chapter
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <h3 className="text-lg">Scaffold Series</h3>
                                    <FaArrowRight className="border border-[#848895] rounded-full text-2xl p-1 text-[#848895]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 my-3">
                        <div
                            style={{
                                backgroundImage: `url(https://i.ibb.co/YNS6kK3/img4.png)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[320px] rounded-2xl p-7 flex items-end"
                        >
                            <div className="w-full">
                                <div>
                                    <div className="inline-block text-white text-sm bg-[#9945FF] px-2 py-1 rounded-full">
                                        3 Chapters
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <h3 className="text-lg">
                                        Freecodecamp Solana <br /> Course
                                    </h3>
                                    <FaArrowRight className="border border-[#848895] rounded-full text-2xl p-1 text-[#848895]" />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(https://i.ibb.co/86s4s15/img5.png)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[320px] rounded-2xl p-7 flex items-end"
                        >
                            <div className="w-full">
                                <div>
                                    <div className="inline-block text-white text-sm bg-[#9945FF] px-2 py-1 rounded-full">
                                        167 Chapters
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <h3 className="text-lg">
                                        Solana Development <br /> by Knox
                                    </h3>
                                    <FaArrowRight className="border border-[#848895] rounded-full text-2xl p-1 text-[#848895]" />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                backgroundImage: `url(https://i.ibb.co/LZ81SSS/img6.png)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat",
                            }}
                            className="w-full h-[320px] rounded-2xl p-7 flex items-end"
                        >
                            <div className="w-full">
                                <div>
                                    <div className="inline-block text-white text-sm bg-[#9945FF] px-2 py-1 rounded-full">
                                        8 Chapters
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-3">
                                    <h3 className="text-lg">Solana Bootcamp</h3>
                                    <FaArrowRight className="border border-[#848895] rounded-full text-2xl p-1 text-[#848895]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1140px] mx-auto my-28">
                <div className="my-8">
                    <h3 className="text-[38px]">Dig deeper.</h3>
                    <p className="text-xl">
                        Learn from resources across the greater Solana
                        ecosystem.
                    </p>
                </div>
                <div>
                    <div className="grid grid-cols-3 gap-6 my-6">
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">Core Documentation</h5>
                            <p className="mt-3">
                                The official Solana documentation on developing,
                                validators, SPL tokens, wallets and more.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">Solana Cookbook</h5>
                            <p className="mt-3">
                                The Solana Cookbook is a developer resource that
                                provides the essential concepts and references
                                for building applications on Solana.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">
                                Solana Stack Exchange
                            </h5>
                            <p className="mt-3">
                                Solana Stack Exchange is a question and answer
                                site for Solana software users and developers.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 my-6">
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">Solana Playground</h5>
                            <p className="mt-3">
                                Easily build, deploy and test Solana programs
                                and smart contracts from a browser IDE.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">create-solana-app</h5>
                            <p className="mt-3">
                                Get up and running fast with Solana dApps,
                                generate a project template in seconds.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">Anchor Docs</h5>
                            <p className="mt-3">
                                Anchor is a framework for Solana's Sealevel
                                runtime providing several convenient developer
                                tools for writing smart contracts.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 my-6">
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">
                                Solana Program Library
                            </h5>
                            <p className="mt-3">
                                The Solana Program Library (SPL) is a collection
                                of on-chain programs targeting the Sealevel
                                parallel runtime.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                        <div className="w-full h-[282px] bg-[#19161C] rounded-xl p-8">
                            <p className="text-xs text-[#9945FF] pb-2">
                                TOOL / LIBRARY
                            </p>
                            <h5 className="text-[19px]">Program Examples</h5>
                            <p className="mt-3">
                                A list of curated examples for a wide range of
                                use cases implemented using on-chain programs.
                            </p>
                            <p className="mt-12 text-xs">
                                LEARN MORE{" "}
                                <HiArrowUpRight className="inline-block ml-2 text-base" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-28 bg-gradient-to-b from-[#19161C] to-[#000000] px-5 xl:px-28">
                <div className="pt-[76px]">
                    <div>
                        <h3 className="text-[38px]">Go to the source.</h3>
                        <p className="text-xl">
                            Read the documentation for Solana and popular tools.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-20">
                        <div>
                            <div className="flex justify-between mb-10">
                                <h4 className="text-[32px]">Solana Docs</h4>
                                <button className="btn uppercase rounded-full bg-transparent border-white">
                                    VIEW ALL{" "}
                                    <HiArrowUpRight className="inline-block ml-2 text-base" />
                                </button>
                            </div>
                            <div className="border-t border-[#ffffff80]">
                                <p className="text-xl pt-7">
                                    Learn how Solana works and get a high-level
                                    understanding of Solana's architecture.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-10">
                                <h4 className="text-[32px]">Metaplex Docs</h4>
                                <button className="btn uppercase rounded-full bg-transparent border-white">
                                    VIEW ALL{" "}
                                    <HiArrowUpRight className="inline-block ml-2 text-base" />
                                </button>
                            </div>
                            <div className="border-t border-[#ffffff80]">
                                <p className="text-xl pt-7">
                                    Learn what you build with Metaplex, make the
                                    process of creating and launching NFTs
                                    easier.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-20 mt-28">
                        <div>
                            <h3 className="text-[39px]">Solana Changelog</h3>
                            <p className="text-xl pt-7">
                                Some more Solana changes from Jacob & Joe.
                                Subscribe to the newsletter:
                                https://solana.us17.list-manage.com/s...
                                Proposal - Priced Compute Units: ...
                            </p>
                            <button className="btn uppercase bg-transparent border-white rounded-full mt-8">
                                LATEST EPISODES
                            </button>
                        </div>
                        <div>
                            <img
                                src="https://i.ibb.co/TBdLJpq/img1.png"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-[1140px] mx-auto my-28">
                <div className="grid grid-cols-2 gap-10">
                    <div className="bg-[#19161C] p-11 rounded-[14px]">
                        <h1 className="text-4xl pb-7">
                            Solana Developer Update
                        </h1>
                        <p className="text-lg pb-[76px]">
                            Sign up to the newsletter and learn about new
                            resources, new commits, new proposals, and more.
                        </p>
                        <form className="text-center">
                            <div class="relative inline-block">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    class="pr-12 p-7 input w-[400px] rounded-full"
                                />
                                <button
                                    type="submit"
                                    class="absolute top-1 right-1 btn uppercase rounded-full bg-[#14F195] text-black"
                                >
                                    SIGN UP
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="bg-[#19161C] p-11 rounded-[14px]">
                        <h1 className="text-4xl pb-7">Even more resources</h1>
                        <p className="text-lg pb-[76px]">
                            More videos, more episodes. Discussions between
                            industry leaders in both blockchain and technology,
                            our team, and community developers.
                        </p>

                        <div className="flex justify-center items-center gap-6">
                            <button class="btn uppercase rounded-full bg-transparent text-white border border-white px-7">
                                youtube{" "}
                                <img
                                    src="https://i.ibb.co/VjtDJ9Q/youtube.png"
                                    alt=""
                                    className="w-6 ml-2"
                                />
                            </button>
                            <button class="btn uppercase rounded-full bg-transparent text-white border border-white px-7">
                                podcast{" "}
                                <img
                                    src="https://i.ibb.co/2t04fQV/podcast.png"
                                    alt=""
                                    className="w-6 rounded-md ml-2"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage2;
