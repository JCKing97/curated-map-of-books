import PropTypes from "prop-types";

function Book({name, author, regions = []}) {
    return (
        <div class="book">
            <h1>{name}</h1>
            Author: {author}<br/>
            Regions: {regions.join(", ")}
        </div>
    )
}

Book.propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    regions: PropTypes.string.isRequired
};

export default Book;
