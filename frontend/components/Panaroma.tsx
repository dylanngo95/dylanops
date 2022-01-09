import React from "react"
import { Pannellum } from "@georgedrpg/pannellum-react-next"
import "@georgedrpg/pannellum-react-next/es/css/video-js.css"
import "@georgedrpg/pannellum-react-next/es/css/pannellum.css"
import "@georgedrpg/pannellum-react-next/es/css/style-textInfo.css"

const Panaroma = ({ imageSrc }: { imageSrc: string }) => {
    return (
        <div className="panararoma_container">
            <Pannellum
                width="100%"
                height="500px"
                image={imageSrc}
                pitch={10}
                yaw={180}
                hfov={140}
                autoLoad
            // onLoad={() => {
            //     console.log("panorama loaded")
            // }}
            >
            </Pannellum>
        </div>
    )
}

export default Panaroma
