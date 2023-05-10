import { FaArrowLeft } from 'react-icons/fa';
import { Form, Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {


    const data = useLoaderData()

    const handleUpdate = (e) => {

        e.preventDefault();


        const form = e.target;

        const name = form.name.value;

        const country = form.country.value;

        const type = form.type.value;
        const image = form.image.value;

        const chocolate = { name, country, image, type }



        console.log(name, country, type)






        fetch(`http://localhost:5000/chocolate/${data._id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(chocolate)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.modifiedCount  > 0) {


                    Swal.fire(
                        'Good job!',
                        'You item Updated Succcessfull!',
                        'success'
                      )
                 }
            })
    };
    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        console.log(selectedType);
    }


    
    return (
        <div>

<Link to="/"><button className='font-bold text-lg flex items-center border p-2'> <FaArrowLeft />

All Choclate</button></Link>

<div className="my-16 w-screen mx-auto">
<div className="text-center">

    <h1 className="text-3xl font-bold my-2">New Chocolates</h1>
    <p>Use the below form to create a new product</p>

</div>

<Form onSubmit={handleUpdate} className=" w-screen">



    <div className="space-y-5  w-full mx-auto ">


        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text font-bold">Name</span>
            </label>
            <input name="name" defaultValue={data.name} type="text" placeholder="Name" className="input input-bordered w-96 max-w-xs" />


        </div>

        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text font-bold">Country</span>
            </label>
            <input name="country" type="text" defaultValue={data.country} placeholder="Country" className="input input-bordered w-96 max-w-xs" />


        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text font-bold">Photo URL</span>
            </label>
            <input name="image" defaultValue={data.image} type="text" placeholder="URL" className="input input-bordered w-96 max-w-xs" />


        </div>

        <select name="type" defaultValue={data.type} className="select select-info w-full max-w-xs" onChange={handleTypeChange}>
            <option value="premium" >Premium</option>
            <option value="normal">Normal</option>
        </select>


    </div>
    <button className="btn w-full my-5">Save</button>



</Form>


</div>
</div>
    );
};

export default Update;