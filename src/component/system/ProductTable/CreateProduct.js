import { react, useCallback, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function CreateProduct({ functionAddProduct }) {
    const [input, setInput] = useState({
        name: "",
        category: "",
        active: true,
        price: 0
    });
    let navigate = useNavigate();

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setInput((item) => ({ ...item, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(input).length !== 0) {
            functionAddProduct(input);
            alert("Create successfully");
            navigate('/product');

        } else {
            console.log("Chưa có ");
        }
    }

    return (
        <div className="card" style={{ width: "600px", margin: "50px auto" }}>
            <div className="card-header">
                <h4 className="text-center">Create Product</h4>
            </div>
            <div className="card-body">

                <form onSubmit={handleSubmit} className="form">
                    <label className="w-100">Enter category:
                        <input className="form-control w-100" required type="text" name="category" onChange={handleChange} value={input.category || ""} />
                    </label>
                    <label className="w-100">Enter name:
                        <input className="form-control w-100" required type="text" name="name" onChange={handleChange} value={input.name || ""} />
                    </label>
                    <label className="w-100">Enter price:
                        <input className="form-control w-100" required type="number" name="price" onChange={handleChange} value={input.price || ''} />
                    </label>
                    <button type="submit" className="mt-2 btn btn-success"> Add </button>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;