import './Card.css';

const Card = (props) => {//<div className="card expense-item">이런식으로 완성해주면 됩니다.
    const classes = "card " +props.className;
    return (
    <div className={classes}>
        {props.children}
    </div>
    )
}

export default Card;