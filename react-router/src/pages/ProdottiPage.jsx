import "./ProdottiPage.css";
import NavHeader from "../components/NavHeader";
import ProdottiLista from "../components/ProdottiLista";

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
                        <ProdottiLista />
                    </main>
                </div>
            </div>
        </>
    );
}

export default ProdottiPage;
