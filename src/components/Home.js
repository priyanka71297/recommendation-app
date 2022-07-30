const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://thumbs.dreamstime.com/b/library-flat-orthogonal-icons-public-library-flat-orthogonal-elements-collection-bookshelves-librarian-desk-reading-room-115230469.jpg")`,
                backgroundPosition: `cover`
            }}
        >
            <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
                <p className="display-4 text-dark pt-0"><b/>Book Recommendation App</p>
                <p>Lets Explore Your Collection</p>

            </div>
        </div >
    );
}

export default Home;