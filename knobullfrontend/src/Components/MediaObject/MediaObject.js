import "./MediaObject.css"

function MediaObject() {
    return (
        <div className="media mediaBox">
            <div className="media-body">
                <h5 className="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
            <img
                className=" ml-4 media-object"
                src="https://www.usnews.com/object/image/00000186-e171-d31a-a587-ebfd45b30000/gettyimages-200360808-002.jpg?update-time=1678820461659&size=responsive970"
                alt="Generic placeholder image"
                style={{ maxWidth: "200px" }}
            />
        </div>
    );
}

export default MediaObject;