const EmojiBars = (props) => {
    const handleClick = async () => {
        await props.setCopyState(props.emoji.symbol);
        console.log(props.copyState);
        navigator.clipboard.writeText(props.copyState);
    }
    return (
        <div onClick={handleClick} className={"emoji-div"}>
            <div>
                <span>{props.emoji.symbol}</span>
                <span>{props.emoji.title}</span>
            </div>
            <p>Click to copy!</p>
        </div>
    )
};

export default EmojiBars;