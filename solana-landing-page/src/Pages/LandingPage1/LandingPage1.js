import React from "react";
import "./LandingPage1.css";

const LandingPage1 = () => {
    return (
        <div>
            <header
                className="pt-44 pb-20"
                style={{
                    backgroundImage: `url('https://i.ibb.co/2FrsFqj/headerbgl.png'), url('https://i.ibb.co/HnVQxqP/headerbgr.png')`,
                    backgroundSize: "37% auto, 40% auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left -30px, right -30px",
                }}
            >
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-7xl">Powerful for developers.</h1>
                        <h1 className="text-7xl">Fast for everyone.</h1>
                        <p className="text-xl w-[589px] my-10 text-center">
                            Bring blockchain to the people. Solana supports
                            experiences for power users, new consumers, and
                            everyone in between.
                        </p>
                    </div>
                    <div className="flex justify-center gap-10">
                        <button className="btn uppercase rounded-full sButton border border-black">
                            START BUILDING
                        </button>
                        <button className="btn uppercase rounded-full bg-black border-white">
                            READ DOCS
                        </button>
                    </div>
                    <div className="flex justify-center mt-24 mb-8">
                        <p className="text-[#618ADC] hover:underline">
                            Powering tools and integrations from companies all
                            around the world
                        </p>
                    </div>
                    <div className="header-logo-container">
                        <img
                            src="https://i.ibb.co/xqkXBmK/brave.png"
                            alt="brave"
                        />
                        <img
                            src="https://i.ibb.co/68Smf42/circle.png"
                            alt="circle"
                        />
                        <img
                            src="https://i.ibb.co/6NhHjhy/discord.png"
                            alt="discord"
                        />
                        <img
                            src="https://i.ibb.co/0tSDwyj/google.png"
                            alt="google"
                        />
                        <img
                            src="https://i.ibb.co/k1vhLSF/jump.png"
                            alt="jump"
                        />
                        <img
                            src="https://i.ibb.co/fqbmQff/lollapalooza.png"
                            alt="lollapalooza"
                        />
                        <img
                            src="https://i.ibb.co/nwsKNQN/magic-Eden.png"
                            alt="magic-Eden"
                        />
                    </div>
                </div>
            </header>
            <div
                style={{
                    backgroundImage: `url('https://i.ibb.co/NCTb8C0/middle-Section-Bg.png')`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <section className="flex justify-center my-28">
                    <div className="grid grid-cols-2 gap-32">
                        <div>
                            <h2 className="text-4xl mt-20">
                                Join a community <br /> of millions
                            </h2>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div>
                                <h1 className="gradient-text-1">11.5M+</h1>
                                <p className="text-[#C4C4C4] leading-7">
                                    ACTIVE ACCOUNTS
                                </p>
                            </div>
                            <div>
                                <h1 className="gradient-text-2">21.9M</h1>
                                <p className="text-[#C4C4C4] leading-7">
                                    NFTS MINTED
                                </p>
                            </div>
                            <div>
                                <h1 className="gradient-text-3">$0.00025</h1>
                                <p className="text-[#C4C4C4] leading-7">
                                    AVERAGE COST PER TRANSACTION
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center py-28">
                    <div className="grid grid-cols-3 gap-10">
                        <div>
                            <h2 className="text-4xl">
                                Made for <br /> mass adoption
                            </h2>
                            <div className="flex gap-1 mt-2">
                                <span className="inline-block relative top-1 rounded-full bg-[#1FCFF1] h-1 w-1"></span>
                                <h3>LIVE DATA</h3>
                            </div>
                        </div>
                        <div>
                            <div className="w-[340px] bg-black/30 p-7 rounded-xl">
                                <h3 className="text-[28px] border-l-2 border-[#1FCFF1] pl-2 my-2">
                                    Fast
                                </h3>
                                <p>
                                    Don't keep your users waiting. Solana has
                                    block times of 400 milliseconds — and as
                                    hardware gets faster, so will the network.
                                </p>
                                <div className="flex gap-1 mt-5">
                                    <span className="inline-block relative top-3 rounded-full bg-[#1FCFF1] h-1 w-1"></span>
                                    <h3 className="text-[28px]">3,969</h3>
                                </div>
                                <p>Transactions per second</p>
                            </div>
                            <div className="w-[340px] bg-black/30 p-7 rounded-xl">
                                <h3 className="text-[28px] border-l-2 border-[#9945FF] pl-2 my-2">
                                    Scalable
                                </h3>
                                <p>
                                    Get big, quick. Solana is made to handle
                                    thousands of transactions per second, and
                                    fees for both developers and users remain
                                    less than $0.01.
                                </p>
                                <div className="flex gap-1 mt-5">
                                    <span className="inline-block relative top-3 rounded-full bg-[#1FCFF1] h-1 w-1"></span>
                                    <h3 className="text-[28px]">
                                        163,077,581,394
                                    </h3>
                                </div>
                                <p>Total transactions</p>
                            </div>
                        </div>
                        <div className="-mt-24">
                            <div className="w-[340px] bg-black/30 p-7 rounded-xl">
                                <h3 className="text-[28px] border-l-2 border-[#FFD512] pl-2 my-2">
                                    Decentralized
                                </h3>
                                <p>
                                    The Solana network is validated by thousands
                                    of nodes that operate independently of each
                                    other, ensuring your data remains secure and
                                    censorship resistant.
                                </p>
                                <div className="flex gap-1 mt-5">
                                    <span className="inline-block relative top-3 rounded-full bg-[#1FCFF1] h-1 w-1"></span>
                                    <h3 className="text-[25px]">1,675</h3>
                                </div>
                                <p>Validator nodes</p>
                            </div>
                            <div className="w-[340px] bg-black/30 p-7 rounded-xl">
                                <h3 className="text-[28px] border-l-2 border-[#19FB9B] pl-2 my-2">
                                    Energy Efficient
                                </h3>
                                <p>
                                    Solana's proof of stake network and other
                                    innovations minimize its impact on the{" "}
                                    <span className="text-[#19FB9B] underline">
                                        environment
                                    </span>
                                    . Each Solana transaction uses about the
                                    same energy as a few Google searches.
                                </p>
                                <div className="flex gap-1 mt-5">
                                    <h3 className="text-[28px]">0%</h3>
                                </div>
                                <p>Net carbon impact</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="max-w-[1100px] mx-auto my-28">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-4xl">Build for growth.</h1>
                    </div>
                    <div className="flex gap-4">
                        <button className="btn uppercase rounded-2xl border-[#A962FF]">
                            NFTs
                        </button>
                        <button className="btn uppercase rounded-2xl">
                            DeFi
                        </button>
                        <button className="btn uppercase rounded-2xl">
                            Payments
                        </button>
                        <button className="btn uppercase rounded-2xl">
                            Gaming
                        </button>
                        <button className="btn uppercase rounded-2xl">
                            DAOs
                        </button>
                    </div>
                </div>
                <div className="rounded-xl mt-8 grid grid-cols-2">
                    <div>
                        <img
                            src="https://i.ibb.co/m43CNd8/middle-Section-Img.png"
                            alt=""
                            className="w-[550px]"
                        />
                    </div>
                    <div className="bg-[#1A1A1A] flex flex-col justify-center px-12">
                        <img
                            src="https://i.ibb.co/vD5kkg6/anybodies.png"
                            alt=""
                            className="w-[240px]"
                        />
                        <p className="text-xl my-3">
                            It's time to bridge the digital and physical.
                            Anybodies helps established brands like Toys'R'Us
                            connect real-life places and products with NFTs.
                        </p>
                        <p className="text-xl text-[#A962FF] underline">
                            Learn more about NFTs on Solana
                        </p>
                    </div>
                </div>
                <div className="flex justify-around items-center bg-[#261F26]/30 rounded-2xl py-2 my-6">
                    <img
                        src="https://i.ibb.co/xF2k4zy/middle-Section-Logo1.png"
                        alt=""
                        className="h-[30px]"
                    />
                    <img
                        src="https://i.ibb.co/vwW9zwK/middle-Section-Logo2.png"
                        alt=""
                        className="h-[46px]"
                    />
                    <img
                        src="https://i.ibb.co/DYtKVn9/middle-Section-Logo3.png"
                        alt=""
                        className="h-[46px]"
                    />
                    <img
                        src="https://i.ibb.co/WFSrZFS/middle-Section-Logo4.png"
                        alt=""
                        className="h-[30px]"
                    />
                </div>
            </section>
            <section
                style={{
                    backgroundImage: `url('https://i.ibb.co/V3dv5bX/end-Section-Bg.png')`,
                    backgroundSize: "1200px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="mt-36 pb-28"
            >
                <div>
                    <h1 className="text-4xl ml-72 mb-8">
                        Join a thriving community
                    </h1>
                </div>
                <div className="grid grid-cols-6 gap-3">
                    <div className="flex flex-col gap-3">
                        <div className="w-full h-full aspect-[3/2] bg-[#19161C] rounded-lg flex flex-col justify-center items-center p-1">
                            <h3 className="text-4xl text-[#F087FF]">11,000</h3>
                            <p className="text-sm text-[#BABABA] mt-2 text-center">
                                Solana Hacker House participants
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://i.ibb.co/QppjKSy/img1.png"
                                alt=""
                                className="w-full h-full aspect-[3/2] rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="col-span-2">
                        <img
                            src="https://i.ibb.co/yhFPpLM/img2.png"
                            alt=""
                            className="w-full h-full aspect-[7/5] rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <img
                                src="https://i.ibb.co/dkdFzL6/img3.png"
                                alt=""
                                className="w-full h-full aspect-[3/2] rounded-lg"
                            />
                        </div>
                        <div className="w-full h-full aspect-[3/2] bg-[#19161C] rounded-lg flex flex-col justify-center items-center p-1">
                            <h3 className="text-4xl text-[#19FB9B]">48,000</h3>
                            <p className="text-sm text-[#BABABA] mt-2 text-center">
                                Developers building during Solana Hackathons
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/zNXN90C/img4.png"
                            alt=""
                            className="w-full h-full aspect-[5/7] rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="w-full h-full aspect-[3/2] bg-[#19161C] rounded-lg flex flex-col justify-center items-center">
                            <h3 className="text-4xl text-[#FFEB3B]">3,800</h3>
                            <p className="text-sm text-[#BABABA] mt-2 text-center p-1">
                                Solana Breakpoint 2022 attendees
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://i.ibb.co/GPZqtMT/img5.png"
                                alt=""
                                className="w-full h-full aspect-[3/2] rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center my-24">
                    <h1 className="text-3xl 2xl:text-4xl">
                        It's time to join the thousands of creators, <br />
                        artists, and developers using Solana.
                    </h1>
                    <button className="btn uppercase rounded-full sButton border my-5">
                        START BUILDING
                    </button>
                </div>
            </section>
        </div>
    );
};

export default LandingPage1;
