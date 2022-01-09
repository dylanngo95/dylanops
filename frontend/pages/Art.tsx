import ArtAvatar from "../components/Art/ArtAvatar"
import ArtCategory from "../components/Art/ArtCategory"
import ArtHeaderContainer from "../components/Art/ArtHeaderContainer"
import PageLayout from "../components/Page/PageLayout"

import epilogue from "../public/assets/art/2020/epilogue.jpg"
import howLong from "../public/assets/art/2019/how-long.jpg"
import pastAsCapes from "../public/assets/art/2018/the-past-as-capes.jpg"
import maskOff from "../public/assets/art/2018/mask-off.jpg"
import lifeIsStrange from "../public/assets/art/2018/life-is-strange.jpg"
import hope from "../public/assets/art/2017/hope.jpg"
import hero from "../public/assets/art/2017/hero.jpg"
import logan from "../public/assets/art/2017/logan.jpg"

const artInfo =
    [
        {
            year: "2020",
            art: [{
                name: "Epilogue: I was floating for so long I don't know when I learnt to fly",
                src: epilogue,
            }]
        },
        {
            year: "2019",
            art: [{
                name: "how long have i been floating here?",
                src: howLong
            },]
        },
        {
            year: "2018",
            art: [{
                name: "the past worn as capes, memory as armor",
                src: pastAsCapes
            },
            {
                name: "mask off",
                src: maskOff
            },
            {
                name: "Don’t sink, just swim towards the storm, and once again you’ll be reborn",
                src: lifeIsStrange
            },]
        },
        {
            year: "2017",
            art: [{
                name: "i’ll become everything i’m meant to be",
                src: hope
            },
            {
                name: "On some days, you have to be your own superhero",
                src: hero
            },
            {
                name: "Logan, you still have time",
                src: logan
            },]
        },
    ]

const ArtDescription = () => <p className="art_description">
    This is some art work I created over the last few years. Some of this art was created for the purpose of self-exploration and expression. The rest was created for fun. I enjoy the storytelling aspect of art much more than the actual drawing and painting. Each artwork tells a story; some about me, some about others. All of the artwork was done using an <em>iPad + Procreate App</em> and <em>Clip Studio Paint</em>.
</p>


export default function Art() {
    return <PageLayout pageTitle={"art"}>
        <ArtHeaderContainer>
            <ArtAvatar />
            <ArtDescription />
        </ArtHeaderContainer>
        <div className="art_pieces">
            {artInfo.map(artCategory => <ArtCategory key={artCategory.year} category={artCategory} />)}
        </div>
    </PageLayout>
}
