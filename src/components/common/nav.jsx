import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <div>
                <Link to="/lamps">
                    <h3>Lamps</h3>
                </Link>
                <Link to="/lamps/floor">
                    <h3>Floor</h3>
                </Link>
                <Link to={"/lamps/ceiling"}>
                    <h3>Ceiling</h3>
                </Link>
                <Link to={"/lamps/table"}>
                    <h3>Table</h3>
                </Link>
                <Link to="/candles">
                    <h3>Candles</h3>
                </Link>
                <Link to={"/candles/decorative"}>
                    <h3>Decorative</h3>
                </Link>
                <Link to={"/candles/flameless"}>
                    <h3>Flameless</h3>
                </Link>
                <Link to={"/candles/celebratory"}>
                    <h3>Celebratory</h3>
                </Link>
            </div>
        </nav>
    );
}
