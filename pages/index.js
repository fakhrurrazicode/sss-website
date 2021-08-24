import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiOutlineTwitter, AiOutlineMenu } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Home() {
    return (
        <>
            <Head>
                <script src="vendors/jquery/dist/jquery.min.js"></script>
                <script src="js/index.js"></script>
            </Head>

            <div className="fixed w-full top-0 z-50 bg-gray-900 bg-opacity-70">
                <label
                    htmlFor="toggle-menu"
                    className="px-8 block md:hidden py-6"
                >
                    <AiOutlineMenu size={28} color="#fff" />
                </label>
                <input
                    type="checkbox"
                    name="toggle-menu"
                    id="toggle-menu"
                    className="toggle-menu hidden"
                />
                <div className="dropdown-menu hidden md:block">
                    <ul className=" md:flex justify-center">
                        <li className="mb-2 md:mb-0">
                            <a
                                className="px-8 py-0 md:py-6 lg:py-6 block md:inline-block font-semibold text-white text-lg"
                                href="#section-home"
                            >
                                Home
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0">
                            <a
                                className="px-8 py-0 md:py-6 lg:py-6 block md:inline-block font-semibold text-white text-lg"
                                href="#section-about"
                            >
                                About
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0">
                            <a
                                className="px-8 py-0 md:py-6 lg:py-6 block md:inline-block font-semibold text-white text-lg"
                                href="#section-roadmap"
                            >
                                Roadmap
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0">
                            <a
                                className="px-8 py-0 md:py-6 lg:py-6 block md:inline-block font-semibold text-white text-lg"
                                href="#section-team"
                            >
                                Team
                            </a>
                        </li>
                        <li className="mb-2 md:mb-0">
                            <a
                                className="px-8 py-0 md:py-6 lg:py-6 block md:inline-block font-semibold text-white text-lg"
                                href="#section-faq"
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full pt-16 relative min-h-screen">
                <div
                    className="absolute top-0 bottom-0 left-0 right-0"
                    style={{
                        background: "url('images/banner-bg.gif')",
                    }}
                ></div>
                <div
                    className=" bg-blue-900 bg-opacity-90 absolute top-0 bottom-0 left-0 right-0"
                    // style={{ background: "rgba(30, 58, 138, 0.5)" }}
                ></div>
                <div className="absolute min-h-screen left-0 right-0 flex flex-col items-center justify-center">
                    <img
                        src="/images/sss-logo.png"
                        alt=""
                        className="w-1/8 mx-auto mb-12"
                    />

                    <button className="bg-orange-600 text-white px-4 py-2 text-2xl font-semibold rounded-lg mb-12">
                        Join The Society
                    </button>

                    <div className="text-4xl text-white font-semibold mb-16">
                        0.079 Ξ
                    </div>

                    <div className="w-1/12 mx-auto mb-16">
                        <div className="flex justify-center">
                            <button className="bg-white px-3 py-2 text-orange-600 font-bold rounded-l-lg">
                                +
                            </button>
                            <input
                                type="text"
                                className="bg-gray-200 text-orange-600 font-bold text-center flex-1"
                                // value="20"
                            />
                            <button className="bg-white px-3 py-2 text-orange-600 font-bold rounded-r-lg">
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                id="section-about"
                className="bg-blue-900"
                style={{ background: "url('images/section-1-bg.png')" }}
            >
                <div className="container mx-auto md:flex md:items-center py-24 ">
                    <div className="md:w-1/2 px-8 lg:px-16 mb-16 md:mb-0">
                        <img src="images/section-1.png" alt="" />
                    </div>
                    <div className="md:w-1/2 px-8 lg:px-16 mb-16 md:mb-0">
                        <h2 className="text-orange-500 text-3xl lg:text-5xl font-bold mb-8 text-center md:text-left">
                            WELCOME TO SUPERLATIVE SECRET SOCIETY
                        </h2>
                        <p className="mb-8 text-white md:text-left">
                            Superlative Secret Society is a collection of
                            community-driven, programmatically, randomly
                            generated NFTs using Ethereum blockchain technology.
                            this idea comes from an established established
                            secret society/medieval guild who give benefit and
                            access to other members.{" "}
                        </p>
                        <p className="mb-8 text-white md:text-left">
                            The SSS consists of 11,111 randomly assembled
                            abstract artwork. SSS NFT constructed from various
                            personality traits, we use super extraterrestrial
                            being as a reference for the SSS artwork. We hope
                            the artwork of SSS will make a huge positive impact
                            for the community.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-orange-400">
                <div className="container mx-auto py-24 ">
                    <h2 className="text-blue-900 font-bold text-3xl lg:text-5xl text-center block mb-12">
                        SUPERLATIVE PREVIEW
                    </h2>

                    <div className="container max-auto">
                        <ul className="flex flex-wrap items-start px-4 md:px-0">
                            <li className="px-4 py-4 w-1/2 md:w-1/4">
                                <img
                                    src="images/section-2-thumbnail-1.png"
                                    alt=""
                                />
                            </li>
                            <li className="px-4 py-4 w-1/2 md:w-1/4">
                                <img
                                    src="images/section-2-thumbnail-2.png"
                                    alt=""
                                />
                            </li>
                            <li className="px-4 py-4 w-1/2 md:w-1/4">
                                <img
                                    src="images/section-2-thumbnail-3.png"
                                    alt=""
                                />
                            </li>
                            <li className="px-4 py-4 w-1/2 md:w-1/4">
                                <img
                                    src="images/section-2-thumbnail-4.png"
                                    alt=""
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-purple-900">
                <div className="container mx-auto py-24 ">
                    <h2 className="text-orange-400 font-semibold text-3xl lg:text-5xl text-center block mb-12">
                        WHY YOU “COLLECT” SSS
                    </h2>

                    <div className="flex justify-center mb-8">
                        <p className="text-center w-5/6 text-white text-lg">
                            This is a community-driven project. Being a member
                            of Secret Superlative Society is much more than just
                            having an NFT avatar with amazing unique artwork
                            different than others in the nft space. We believe
                            all SSS NFT is special so all SSS NFT holders will
                            be getting:
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center mb-16">
                        <div className="w-full md:w-1/2 lg:w-1/3 text-center px-8 lg:px-16 py-8">
                            <img
                                src="images/section-3-thumbnail-1.png"
                                alt=""
                                className="w-1/2 mx-auto"
                            />
                            <h3 className="text-orange-400 font-semibold text-2xl mb-4">
                                Commercial Rights
                            </h3>
                            <p className="text-white">
                                All holders of the SSS NFT will be given their
                                commercial rights over the NFT artworks that
                                they have owned.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 text-center px-8 lg:px-16 py-8">
                            <img
                                src="images/section-3-thumbnail-2.png"
                                alt=""
                                className="w-1/2 mx-auto"
                            />
                            <h3 className="text-orange-400 font-semibold text-2xl mb-4">
                                Commercial Rights
                            </h3>
                            <p className="text-white">
                                All holders of the SSS NFT will be given their
                                commercial rights over the NFT artworks that
                                they have owned.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 text-center px-8 lg:px-16 py-8">
                            <img
                                src="images/section-3-thumbnail-1.png"
                                alt=""
                                className="w-1/2 mx-auto"
                            />
                            <h3 className="text-orange-400 font-semibold text-2xl mb-4">
                                Commercial Rights
                            </h3>
                            <p className="text-white">
                                All holders of the SSS NFT will be given their
                                commercial rights over the NFT artworks that
                                they have owned.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 text-center px-8 lg:px-16 py-8">
                            <img
                                src="images/section-3-thumbnail-1.png"
                                alt=""
                                className="w-1/2 mx-auto"
                            />
                            <h3 className="text-orange-400 font-semibold text-2xl mb-4">
                                Commercial Rights
                            </h3>
                            <p className="text-white">
                                All holders of the SSS NFT will be given their
                                commercial rights over the NFT artworks that
                                they have owned.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 text-center px-8 lg:px-16 py-8">
                            <img
                                src="images/section-3-thumbnail-1.png"
                                alt=""
                                className="w-1/2 mx-auto"
                            />
                            <h3 className="text-orange-400 font-semibold text-2xl mb-4">
                                Commercial Rights
                            </h3>
                            <p className="text-white">
                                All holders of the SSS NFT will be given their
                                commercial rights over the NFT artworks that
                                they have owned.
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 text-center px-8 lg:px-16 py-8">
                            <img
                                src="images/section-3-thumbnail-1.png"
                                alt=""
                                className="w-1/2 mx-auto"
                            />
                            <h3 className="text-orange-400 font-semibold text-2xl mb-4">
                                Commercial Rights
                            </h3>
                            <p className="text-white">
                                All holders of the SSS NFT will be given their
                                commercial rights over the NFT artworks that
                                they have owned.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-orange-400 font-semibold px-8 lg:px-16 text-2xl md:text-4xl text-center block mb-4">
                        Displayed Your Artwork Permanently
                    </h2>

                    <p className="text-center px-8 lg:px-16  text-white text-lg">
                        We will be doing a community exclusive raffle to get the
                        10 holders artworks to be displayed on the gallery
                        permanently.
                    </p>
                </div>
            </div>

            <div style={{ background: "url('images/section-4-bg.png')" }}>
                <div className="container mx-auto md:flex md:items-center py-24 ">
                    <div className="md:w-1/2 px-8 lg:px-16 mb-16 md:mb-0">
                        <img src="images/section-4-illustration.png" alt="" />
                    </div>
                    <div className="md:w-1/2 px-8 lg:px-16 mb-16 md:mb-0">
                        <h2 className="text-yellow-500 text-3xl lg:text-5xl font-bold mb-8 text-center md:text-left">
                            THE FUTURE OF SUPERLATIVE SECRET SOCIETY
                        </h2>
                        <p className="mb-8 text-white">
                            SSS foundation will be DAO in the future, all profit
                            from flipping other artist/project artwork and 30%
                            profit from superlative physical gallery will be
                            divided equally to all of the holders each month and
                            we will continue to develop our post-sale roadmap
                            for the benefit of the community.
                        </p>
                    </div>
                </div>
            </div>

            <div id="section-roadmap" className="bg-white pt-24">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="w-11/12 px-8 lg:px-16">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center md:text-left">
                            THE ROADMAP
                        </h2>
                    </div>

                    <div className="w-11/12 px-8 lg:px-16">
                        <VerticalTimeline className="vertical-timeline-1">
                            <VerticalTimelineElement
                                position="right"
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                contentStyle={{
                                    background: "transparent",
                                    boxShadow: "0px 5px 0 #fe346e !important",
                                }}
                                iconStyle={{
                                    background: "#fe346e",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            10%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        Discord Upgraded to Discord NITRO Boost
                                        T3.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                position="left"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "transparent",
                                    boxShadow: "0px 5px 0 #fe346e !important",
                                }}
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                iconStyle={{
                                    background: "#fe346e",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            20%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        SSS be doing a community exclusive
                                        raffle to win ETH.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                position="right"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "transparent",
                                    boxShadow: "0px 5px 0 #fe346e !important",
                                }}
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                iconStyle={{
                                    background: "#fe346e",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            30%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        $30.000 will be donated via share the
                                        meal (a crowdfunding platform to fight
                                        global hunger through the United Nations
                                        World Food Programme)
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                position="left"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "transparent",
                                    boxShadow: "0px 5px 0 #fe346e !important",
                                }}
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                iconStyle={{
                                    background: "#fe346e",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            40%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        Secret Superlative Society Foundation
                                        unlocked, together, we’ll collecting
                                        some dope artworks! 5 ETH to be
                                        allocated to the SSS Foundation
                                        (Community Wallet).
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                position="right"
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "transparent",
                                    boxShadow: "0px 5px 0 #fe346e !important",
                                }}
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                iconStyle={{
                                    background: "#fe346e",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            50%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        SSS will acquire land in the Somnium
                                        Space for SSS Foundation Metaverse
                                        Gallery.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>

            <div
                className="bg-pink pb-24"
                style={{ background: 'url("images/section-5-bg.png")' }}
            >
                <div className="container mx-auto flex flex-col items-center">
                    <div className="w-11/12 px-8 lg:px-16">
                        <VerticalTimeline className="vertical-timeline-2">
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                contentStyle={{
                                    background: "transparent",
                                    color: "white",
                                    boxShadow: "0px 5px 0 #fff !important",
                                }}
                                iconStyle={{
                                    background: "#fff",
                                    color: "#fe346e",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            60%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        15 ETH to be allocated to Secret
                                        Superlative Society Foundation.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                contentStyle={{
                                    background: "transparent",
                                    color: "white",
                                    boxShadow: "0px 5px 0 #fff !important",
                                }}
                                iconStyle={{
                                    background: "#fff",
                                    color: "#fe346e",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            70%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        Physical art with signature for 111 SSS
                                        holders will be shipped.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                contentStyle={{
                                    background: "transparent",
                                    color: "white",
                                    boxShadow: "0px 5px 0 #fff !important",
                                }}
                                iconStyle={{
                                    background: "#fff",
                                    color: "#fe346e",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            80%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        An Exclusive SSS Merch Store gets
                                        unlocked.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                contentStyle={{
                                    background: "transparent",
                                    color: "white",
                                    boxShadow: "0px 5px 0 #fff !important",
                                }}
                                iconStyle={{
                                    background: "#fff",
                                    color: "#fe346e",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            90%
                                        </h1>
                                    </div>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        20 ETH to be allocated to SSS
                                        Foundation.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentArrowStyle={{
                                    borderRight: "none",
                                }}
                                contentStyle={{
                                    background: "transparent",
                                    color: "white",
                                    boxShadow: "0px 5px 0 #fff !important",
                                }}
                                iconStyle={{
                                    background: "rgba(30, 58, 138, 1)",
                                    color: "#fb923c",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow:
                                        "0 0 0 4px #1e3a8a, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
                                }}
                                icon={
                                    <div style={{ position: "relative" }}>
                                        <h1 className="font-bold text-xl">
                                            100%
                                        </h1>
                                    </div>
                                }
                                dateClassName="py-0"
                                date={
                                    <h4 className="text-3xl lg:text-5xl font-bold mb-8 text-center md:text-left text-blue-900">
                                        OUR GOALS
                                    </h4>
                                }
                            >
                                <div className="vertical-timeline-element-content-inner">
                                    <p>
                                        SSS will acquire an property for Art
                                        gallery in the physical world located in
                                        Bali. Exclusive-Member of SSS will have
                                        a private access and private room to
                                        hangout in the physical world with other
                                        Exclusive-Member. We will be doing a
                                        community exclusive raffle to get the 10
                                        holders artwork displayed on the gallery
                                        permanently.
                                    </p>

                                    <p>
                                        Once a month the holders will be able to
                                        voting to show their NFT artworks or
                                        other NFT artworks outside the exclusive
                                        community to be displayed in the SSS
                                        physical art gallery.
                                    </p>
                                </div>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>

            <div style={{ background: "url('images/section-6-bg.png')" }}>
                <div className="container mx-auto md:flex flex-col-reverse md:flex-row py-24 items-center">
                    <div className="md:w-1/2 px-8 lg:px-16 mb-16 md:mb-0">
                        <h2 className="text-yellow-100 text-3xl lg:text-5xl font-bold mb-8 text-center md:text-left">
                            SUPERLATIVE SPECS
                        </h2>

                        <p className="mb-8 text-white">
                            Each SSS NFT is made up of 8 traits types: galaxy
                            glitter, background, foreground, head, body,
                            muffler, necklace, and orb. There are over 200
                            traits of varying rarities.
                        </p>

                        <p className="mb-8 text-white">
                            Each SSS NFT is a verifiably unique ERC-721 token.
                            There will never be more than 11,111.
                        </p>

                        <p className="mb-8 text-white">
                            Ownership and commercial usage rights are granted in
                            full to the martian holder over their SSS NFT.
                        </p>
                    </div>

                    <div className="md:w-1/2 px-8 lg:px-16 mb-16 md:mb-0">
                        <img src="images/section-6-illustration.png" alt="" />
                    </div>
                </div>
            </div>

            <div id="section-team" className="bg-gray-200">
                <div className="container mx-auto md:flex py-24 items-center">
                    <div className="md:w-1/2 mb-16 md:mb-0 px-8 lg:px-16">
                        <div className="flex flex-wrap">
                            <img
                                className="w-1/2"
                                src="images/team-1.png"
                                alt=""
                            />
                            <img
                                className="w-1/2"
                                src="images/team-2.png"
                                alt=""
                            />
                            <img
                                className="w-1/2"
                                src="images/team-3.png"
                                alt=""
                            />
                            <img
                                className="w-1/2"
                                src="images/team-4.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2 mb-16 md:mb-0 px-8 lg:px-16">
                        <h2 className="text-blue-900 text-3xl lg:text-5xl font-bold mb-8">
                            SUPERLATIVE TEAM
                        </h2>
                        <p className="mb-8">
                            We’re a team of 4 geeks who are passionate about
                            art, blockchain and making unique stuff. what we do
                            is our way of life this is how we live and always
                            bring our passion and creativity on the table, not
                            forgetting a little bit of fun.
                        </p>

                        <p className="mb-8">
                            We are coming from a grassroots startup and vee
                            friends inspired us to make this project. Because of
                            that we will bring the NFT to the real world usage,
                            we are pushing to integrate NFTs and real-world
                            assets, The SSS wil be become NFTs as access tokens.
                        </p>

                        <p className="mb-8">
                            <span className="text-blue-900 font-bold">
                                The Initiator
                            </span>{" "}
                            - Prasdiman is responsible for creative direction
                            and project management.
                        </p>

                        <p className="mb-8">
                            <span className="text-blue-900 font-bold">
                                The Artist
                            </span>{" "}
                            - Arief Witjaksana is responsible for the creation
                            of all unique SSS characters illustration.
                        </p>

                        <p className="mb-8">
                            <span className="text-blue-900 font-bold">
                                The Technician
                            </span>{" "}
                            - The_Bot is responsible for of all backend
                            technical side from smart contracts to servers.
                        </p>

                        <p className="mb-8">
                            <span className="text-blue-900 font-bold">
                                The Speaker
                            </span>{" "}
                            - Goddamnft is responsible for the marketing and
                            managing the community.
                        </p>
                    </div>
                </div>
            </div>

            <div id="section-faq" className="bg-white">
                <div className="container mx-auto  py-24 px-8 lg:px-16 ">
                    <h2 className="text-4xl font-bold text-blue-900 mb-8">
                        FREQUENTLY ASKED QUESTIONS
                    </h2>
                    <div className="sss-accordion">
                        {[
                            {
                                title: "What’s an NFT?",
                                body: `NFT stands for "Non-fungible token," which means that it's a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT's fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, access to the place, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a "members-only" card. SSS works like this.`,
                                collapse: false,
                            },
                            {
                                title: "How do I NFT?",
                                body: (
                                    <>
                                        <p className="mb-4">
                                            New to NFTs? No worries, here are
                                            some steps on what you need to do to
                                            get your SSS NFT.
                                        </p>
                                        <ul className="list-item">
                                            <li className="mb-4">
                                                Download the metamask.io
                                                extension for the Chrome/Brave
                                                browser or app on mobile. This
                                                will allow you to make purchases
                                                with Ethereum and can be found
                                                in the extensions tab. If you
                                                are on mobile, you must use the
                                                Metamask App Browser
                                            </li>
                                            <li className="mb-4">
                                                You can purchase Ethereum
                                                through the Metamask Wallet
                                                using Wyre or Send Ethereum from
                                                an exchange like Coinbase.
                                            </li>
                                            <li className="mb-4">
                                                Click on Connect at the top of
                                                the page and connect your
                                                Metamask. Once joined, you will
                                                be able to purchase the NFTs in
                                                the mint section. You will be
                                                prompted to sign your
                                                transaction. There will be a fee
                                                associated with every
                                                transaction related to gas
                                                prices.
                                            </li>
                                            <li className="mb-4">
                                                Once you have made your
                                                purchase, your SSS NFTs will be
                                                viewable in your wallet and on
                                                OpenSea.
                                            </li>
                                        </ul>
                                    </>
                                ),
                                collapse: false,
                            },
                            {
                                title: "What is real world utility?",
                                body: (
                                    <>
                                        <p>
                                            SSS offer you not just an amazing
                                            artwork but tobe use in the real
                                            world. SSS team will buy the
                                            property located in Bali to build an
                                            art gallery & hangout place
                                            especially for SSS holders. The
                                            holders of SSS will have rights to
                                            access the chill room on the gallery
                                            and voting or recommendation rights
                                            on the holders or the artists or the
                                            projects artworks to be displayed at
                                            Superlative Gallery located in Bali
                                            (up to 20 artworks/month tobe
                                            displayed on the gallery).
                                        </p>
                                    </>
                                ),
                                collapse: false,
                            },
                            {
                                title: "Why Physical Art Gallery?",
                                body: (
                                    <>
                                        <p>
                                            SSS offer you not just an amazing
                                            artwork but tobe use in the real
                                            world. SSS team will buy the
                                            property located in Bali to build an
                                            art gallery & hangout place
                                            especially for SSS holders. The
                                            holders of SSS will have rights to
                                            access the chill room on the gallery
                                            and voting or recommendation rights
                                            on the holders or the artists or the
                                            projects artworks to be displayed at
                                            Superlative Gallery located in Bali
                                            (up to 20 artworks/month tobe
                                            displayed on the gallery).
                                        </p>
                                    </>
                                ),
                                collapse: false,
                            },
                            {
                                title: "Why Bali?",
                                body: (
                                    <>
                                        <p>
                                            SSS offer you not just an amazing
                                            artwork but tobe use in the real
                                            world. SSS team will buy the
                                            property located in Bali to build an
                                            art gallery & hangout place
                                            especially for SSS holders. The
                                            holders of SSS will have rights to
                                            access the chill room on the gallery
                                            and voting or recommendation rights
                                            on the holders or the artists or the
                                            projects artworks to be displayed at
                                            Superlative Gallery located in Bali
                                            (up to 20 artworks/month tobe
                                            displayed on the gallery).
                                        </p>
                                    </>
                                ),
                                collapse: false,
                            },
                            {
                                title: "What benefit do I get from collect an SSS NFT?",
                                body: (
                                    <>
                                        <p>
                                            SSS offer you not just an amazing
                                            artwork but tobe use in the real
                                            world. SSS team will buy the
                                            property located in Bali to build an
                                            art gallery & hangout place
                                            especially for SSS holders. The
                                            holders of SSS will have rights to
                                            access the chill room on the gallery
                                            and voting or recommendation rights
                                            on the holders or the artists or the
                                            projects artworks to be displayed at
                                            Superlative Gallery located in Bali
                                            (up to 20 artworks/month tobe
                                            displayed on the gallery).
                                        </p>
                                    </>
                                ),
                                collapse: false,
                            },
                            {
                                title: "What is SSS Foundation?",
                                body: (
                                    <>
                                        <p>
                                            SSS offer you not just an amazing
                                            artwork but tobe use in the real
                                            world. SSS team will buy the
                                            property located in Bali to build an
                                            art gallery & hangout place
                                            especially for SSS holders. The
                                            holders of SSS will have rights to
                                            access the chill room on the gallery
                                            and voting or recommendation rights
                                            on the holders or the artists or the
                                            projects artworks to be displayed at
                                            Superlative Gallery located in Bali
                                            (up to 20 artworks/month tobe
                                            displayed on the gallery).
                                        </p>
                                    </>
                                ),
                                collapse: false,
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="sss-accordion-item bg-gray-100 px-8 py-4 mb-4"
                                data-collapse={item.collapse}
                            >
                                <div className="sss-accordion-header py-4">
                                    <label
                                        htmlFor="faq-1"
                                        className="flex justify-between items-start cursor-pointer"
                                    >
                                        <div className="sss-accordion-title text-blue-900 font-semibold text-lg">
                                            {item.title}
                                        </div>
                                        <div className="sss-accordion-control"></div>
                                    </label>
                                </div>

                                <div className="sss-accordion-body">
                                    {item.body}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-gray-800">
                <div className="container mx-auto flex flex-col py-16 items-center justify-center">
                    <div className="w-1/12 mb-8">
                        <img src="images/sss-logo.png" alt="" />
                    </div>
                    <div className="w-full mb-8">
                        <ul className="flex justify-center">
                            <li className="inline-block">
                                <a
                                    className="inline-block px-4 text-white"
                                    href="#section-home"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="inline-block">
                                <a
                                    className="inline-block px-4 text-white"
                                    href="#section-about"
                                >
                                    About
                                </a>
                            </li>
                            <li className="inline-block">
                                <a
                                    className="inline-block px-4 text-white"
                                    href="#section-roadmap"
                                >
                                    Roadmap
                                </a>
                            </li>
                            <li className="inline-block">
                                <a
                                    className="inline-block px-4 text-white"
                                    href="#section-team"
                                >
                                    Team
                                </a>
                            </li>
                            <li className="inline-block">
                                <a
                                    className="inline-block px-4 text-white"
                                    href="#section-faq"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full mb-8">
                        <ul className="flex justify-center">
                            <li className="inline-block">
                                <a
                                    className="inline-block px-4 text-white"
                                    href="#"
                                >
                                    <AiOutlineTwitter size={36} />
                                </a>
                            </li>
                            <li className="inline-block">
                                <a
                                    className="inline-block px-4 text-white"
                                    href="#"
                                >
                                    <SiDiscord size={36} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full mb-8">
                        <p className="text-center text-white">
                            Copyright© Superlative Secret Society 2021. All
                            rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
