import { useState } from "react";
import { FaPencilAlt, FaPlus, FaTimes } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const ChoclateTable = () => {




  const data = useLoaderData()


  const [choocolate, setChocolate] = useState(data)





  const handleDelete = (id) => {


    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {



        fetch(`http://localhost:5000/chocolate/${id}`, {
          method: 'DELETE',


        })
          .then(res => res.json())
          .then(data => {

            console.log(data)

            if (data.deletedCount > 0) {

              const remaining = choocolate.filter(cof => cof._id !== id)

              setChocolate(remaining)


              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )


            }
          })

      }
    })




  }








  return (
    <div>

      <Link to="/add"><button className='font-bold text-lg flex items-center border p-2'> <FaPlus />

        New Choclate</button></Link>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>

              <th>Image</th>
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}





            {

              choocolate && choocolate.map(data => {


                return (

                  <>

                    <tr>

                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={data.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>

                        </div>
                      </td>

                      <td className="font-bold">
                        {data.name}
                        <br />
                      </td>
                      <td>{data.country}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">{data.type}</button>
                      </th>

                      <td className='space-x-3'>
                        <Link to={`/Update/${data._id}`}>          <button className="p-2 text-[#774320]" style={{background : 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)'}}><FaPencilAlt /></button>
                        </Link>
                        <button className="p-2 text-[#774320]" style={{background : 'linear-gradient(90.74deg, rgba(119, 67, 32, 0.15) 0.16%, rgba(232, 197, 128, 0.15) 100%)'}} onClick={() => handleDelete(data._id)}> <FaTimes></FaTimes> </button>
                      </td>

                    </tr>


                  </>


                )
              })
            }



            {/* row 2 */}

          </tbody>
        </table>
      </div>


    </div>
  );
};

export default ChoclateTable;