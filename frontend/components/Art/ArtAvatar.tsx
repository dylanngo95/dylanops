import Image from 'next/image'
import ART_AVATAR from "../../public/assets/art/art-avatar.jpg"

const ArtAvatar = () => <div className="art_avatar_container">
    <Image priority={true} className="art_avatar" src={ART_AVATAR} alt="art-avatar" width={150} height={150} />
</div>

export default ArtAvatar