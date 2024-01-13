export function Post(props) {
    if (props.author != '') {
        return (
            <>
                <strong>{props.author}</strong>
                <p>{props.content}</p>
            </>
        )
    }
    else {
        return (
            <>
                <p>No author props</p>
            </>
        )
    }
}