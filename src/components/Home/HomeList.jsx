import { HomeDetail } from "./HomeDetail"

export const HomeList = ({imgCover}) =>{
return (
<div>
    {imgCover.map(cover => <HomeDetail img={cover} key={cover.cardId}/>) }
</div>
)
}