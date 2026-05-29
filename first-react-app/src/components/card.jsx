function Card({ name, age }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>This is a description of the card. It contains some information about the content.</p>
            <button>Read More</button>
        </div>
    );
}

export default Card;