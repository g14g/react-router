import "./ProdottiPage.css";
import NavHeader from "../components/NavHeader";
import Prodotti from "../components/Prodotti";

function ProdottiPage() {
    return (
        <>
            <div id="prodotti" className="page-flex">
                <div className="container">
                    <header>
                        <h1>Prodotti</h1>
                        <NavHeader />
                    </header>
                    <main>
                        <Prodotti />
                    </main>
                </div>
            </div>
        </>
    );
}

export default ProdottiPage;
