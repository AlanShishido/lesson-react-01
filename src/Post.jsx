export function Post(props) {
    console.log(props)
    if (props.author != null) {
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