import Image from 'next/image'

const ArtPiece = ({ art }) =>
    <div className="art_piece_container">
        <div className="art_piece">
            <Image src={art.src} placeholder="blur" alt="Picture of the author" width="100%" height="100%" layout="responsive" objectFit="contain" />

        </div>
        <p className="art_piece_name">{art.name}</p>
    </div>

export default ArtPiece