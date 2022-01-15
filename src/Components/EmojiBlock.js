import EmojiBars from "./EmojiBars";

const EmojiBlock = (props) => {
    return (
        <div>
            {props.data.map((emoji, index) => {
                const keyWords = emoji.keywords;
                return keyWords.includes(props.searchState)? 
            <EmojiBars key={index} emoji= {emoji} copyState={props.copyState} setCopyState={props.setCopyState}/>:"";
            }).slice(0,30)}
        </div>
    )
}

export default EmojiBlock;
