const Header = (props) => {
    return (
        <div className={"navBar"}>
            <h1>😎 EMOJI SEARCH 😎</h1>
            <input onChange={(e) => {props.setSearchState(e.target.value)}} type="text" value={props.searchState} placeholder="Enter Emoji Keywords"></input>
        </div>
    )
};

export default Header;

