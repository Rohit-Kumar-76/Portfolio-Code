import Image from 'next/image';
import React from 'react'

const Logo = () => {
    return (
        <div>
            {/* Logo */}
            <div className="flex items-center gap-2 ">

                <a href="/">
                    <div className="flex flex-col leading-tight font-[Poppins] w-auto">


                        <div className="flex items-center gap-2 ">


                            <Image
                                width={40}
                                height={40}
                                src="/logo-rm.png"
                                alt="TrioScript logo"
                                className=" h-8 h-auto w-auto"
                            />


                            <h1 className="text-white text-xl font-semibold tracking-wide">
                                Trio<span className="text-cyan-400">Script</span>
                            </h1>

                        </div>
                        <p className="text-[8px] tracking-[3px] text-white mt-1 flex items-center gap-2">
                            <span>DESIGN</span>

                            <span className="w-1 h-1 bg-white rounded-full inline-block"></span>

                            <span>DEVELOP</span>

                            <span className="w-1 h-1 bg-white rounded-full inline-block"></span>

                            <span>DELIVER</span>
                        </p>

                    </div>
                </a>
            </div>
        </div>
    )
}
export default Logo;