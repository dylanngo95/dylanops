import dynamic from "next/dynamic"
import React, { useState } from "react"
import PageLayout from "../../components/Page/PageLayout"
import Button from "../../components/Button"
import { ButtonSize } from "../../components/Button"
import Icon from "../../components/Icon"
import LinkItem from "../../components/LinkItem"

const Panaroma = dynamic(() => import("../../components/Panaroma"), { ssr: false })

const imageList = [
    {
        src: "/assets/kix/DSCN0032.jpg",
    },
    {
        src: "/assets/kix/DSCN0034.jpg",
    },
    {
        src: "/assets/kix/DSCN0035.jpg",
    },
    {
        src: "/assets/kix/DSCN0036.jpg",
    },
    {
        src: "/assets/kix/DSCN0037.jpg",
    },
    {
        src: "/assets/kix/DSCN0038.jpg",
    },
    {
        src: "/assets/kix/DSCN0039.jpg",
    },
    {
        src: "/assets/kix/DSCN0040.jpg",
    },
    {
        src: "/assets/kix/DSCN0041.jpg",
    },
]

const KIXComponent = () => {
    const [photoIdx, setPhotoIdx] = useState(0)
    const handleNext = () => {
        setPhotoIdx(oldIdx => oldIdx === imageList.length - 1 ? oldIdx : oldIdx + 1)
    }
    const handlePrev = () => {
        setPhotoIdx(oldIdx => oldIdx === 0 ? oldIdx : oldIdx - 1)
    }
    return (
        <PageLayout pageTitle="kix">


            <Panaroma imageSrc={imageList[photoIdx].src} />
            <div className="kix_nav">
                <Button size={ButtonSize.ExtraSmall} onClick={handlePrev}>
                    <Icon name="prev" size={ButtonSize.Small} />
                    <span className="kix_left_margin_label">Prev</span>
                </Button>
                <Button size={ButtonSize.ExtraSmall} onClick={handleNext}>
                    <span className="kix_right_margin_label">Next</span> <Icon name="next" size={ButtonSize.Medium} />
                </Button>
            </div>
            <div className="kix_info">
                The <strong>Knowledge Integration Exhibition (KIX)</strong> is a group project combining research, design, classroom and self-directed learning, project management, and physical build skills.
            </div>
            <div className="kix_info">
                Building the exibits are an opportunity in applied knowledge integration and a chance to explore the unique and rewarding challenge of designing a real-world, hands-on learning experience that is open to the public.
            </div>
            <div>
                <LinkItem label="Learn more about KIX" href="" icon="museum" rel="nofollow" target="_blank" iconSize={ButtonSize.Small} />
            </div>
        </PageLayout>
    )
}

export default KIXComponent