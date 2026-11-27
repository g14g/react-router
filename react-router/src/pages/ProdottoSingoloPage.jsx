import { useParams, useNavigate } from "react-router";
import NavHeader from "../components/NavHeader";
import ProdottoSingolo from "../components/ProdottoSingolo";

function ProdottoSingoloPage() {
    const { id } = useParams();
    return (
        <>
            <div id="prodotti" className="page-flex">
                <div className="container">
                    <header>
                        <h1>Prodotto con ID: {`${id}`}</h1>
                        <NavHeader />
                    </header>
                    <main>
                        <ProdottoSingolo />
                    </main>
                </div>
            </div>
        </>
    );
}

export default ProdottoSingoloPage;
