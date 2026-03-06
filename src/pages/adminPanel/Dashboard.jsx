import { getSaleList } from "../../api/saleApi";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css";

const Dashboard = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const salesPerPage = 15;

    const [sales, setSales] = useState([]);

    const [selectedSale, setSelectedSale] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const openDetails = (sale) => {
        setSelectedSale(sale);
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
        setSelectedSale(null);
    };

    const indexOfLastSale = currentPage * salesPerPage;
    const indexOfFirstSale = indexOfLastSale - salesPerPage;

    const currentSales = sales.slice(indexOfFirstSale, indexOfLastSale);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const data = await getSaleList();
                console.log(data);
                setSales(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSales();
    }, []);

    const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);

    const totalPages = Math.ceil(sales.length / salesPerPage);

    return (
        <div className="admin-container">

            <h1>Admin Dashboard</h1>

            {/* STATS */}

            <div className="stats">

                <div className="card">
                    <h3>Total Sales</h3>
                    <p>${totalSales.toFixed(2)}</p>
                </div>

                <div className="card">
                    <h3>Orders</h3>
                    <p>{sales.length}</p>
                </div>

            </div>

            {/* TABLE */}

            <div className="table-container">

                <table className="sales-table">

                    <thead>

                        <tr>
                            <th className="col-id">ID</th>
                            <th className="col-dni">DNI</th>
                            <th className="col-client">Client</th>
                            <th className="col-total">Total</th>
                            <th className="col-date">Date</th>
                            <th className="col-action">Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {currentSales.map((sale) => (

                            <tr key={sale.id}>

                                <td className="col-id">{sale.id}</td>

                                <td className="col-dni">{sale.dni}</td>

                                <td className="col-client">{sale.client}</td>

                                <td className="col-total">
                                    ${sale.total?.toFixed(2)}
                                </td>

                                <td className="col-date">{sale.date}</td>

                                <td className="actions">

                                    <button
                                        className="view-btn"
                                        onClick={() => openDetails(sale)}
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* PAGINATION */}

            <div className="pagination">

                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                >
                    Next
                </button>

            </div>

            {/* MODAL */}

            {openModal && selectedSale && (
                <div className="modal-overlay">

                    <div className="modal">

                        <h2>Order #{selectedSale.id}</h2>
                        <p><strong>Client:</strong> {selectedSale.client}</p>
                        <p><strong>DNI:</strong> {selectedSale.dni}</p>
                        <p><strong>Date:</strong> {selectedSale.date}</p>
                        <p><strong>Total:</strong> ${selectedSale.total.toFixed(2)}</p>

                        <h3>Products</h3>

                        <table className="details-table">

                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>

                                {selectedSale.details.map((item) => (

                                    <tr key={item.id}>

                                        <td>{item.product.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price}</td>
                                        <td>${item.subtotal}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                        <button
                            className="close-btn"
                            onClick={() => setOpenModal(false)}
                        >
                            Close
                        </button>

                    </div>

                </div>
            )}

        </div>
    );
};

export default Dashboard;