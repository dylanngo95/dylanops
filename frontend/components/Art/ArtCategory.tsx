import ArtPiece from "./ArtPiece"
import SubHeader from "../SubHeader"


const ArtCategory = ({ category }) => {
    const year = category.year
    return (
        <div className="art_category" >
            <SubHeader label={year} />
            {category?.art?.map(art => <ArtPiece key={art.name} art={art} />)}
        </div >
    )
}

export default ArtCategory