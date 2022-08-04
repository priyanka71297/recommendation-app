import "./Home.css";

const Home = () => {

    const fontStyles = ["normal", "italic"];

    return (
        <div
            style={{
                backgroundImage: `url(https://www.pratilipi.com/images/home-main.webp)`,backgroundRepeat:"no-repeat", backgroundSize:"contain",
                backgroundPosition: 'center center'
            }}
        >
            <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
                <p class="appname"><b/>Book Recommendation App</p>               
                <p class="typewriter"><h1>Lets Explore Your Collection...</h1></p>
            </div>
        </div >
    );
}

export default Home;




















// const Home = () => {

//     return (
//         <div
//             style={{
//                 backgroundImage: `url(https://www.pratilipi.com/images/home-main.webp)`,backgroundRepeat:"no-repeat", backgroundSize:"contain",
//                 backgroundPosition: 'center center'
//             }}
//         >
//             <div style={{ minHeight: "100vh", textShadow: '2px 2px #f2f2f2' }} className="container">
//                 <h1 className="display-4 text-dark pt-0"><b/>Book Recommendation App</h1>
//                 <h1>Lets Explore Your Collection</h1>

//             </div>
//         </div >
        
//     );
// }

// export default Home;