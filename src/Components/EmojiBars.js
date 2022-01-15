const EmojiBars = (props) => {
    const handleClick = async () => {
        navigator.clipboard.writeText(props.emoji.symbol);
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