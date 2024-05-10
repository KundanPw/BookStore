import React from "react";  
import Cards from "../component/Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
    return(
        <>
            <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
                <div className="mt-28 item-center text-center">
                    <h1 className="text-2xl font-semibold md:text-4xl">
                        We're delighted to have you <span className="text-pink-500">Here!:)</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sed dicta beatae fugiat voluptas corrupti, repellat dolorem 
                        maxime, dolore praesentium, laboriosam officiis temporibus magnam qui iusto? Tenetur itaque est natus sint iusto recusandae
                        delectus ex rem, odit nesciunt tempore ipsa, aperiam ab quis similique eius velit tempora. Praesentium minus ex, repellat,
                        delectus quas quia deserunt aliquam magni dignissimos ut, eum voluptatum earum quos sit odio nam iste eos dolorem a?
                        Nostrum soluta voluptatum perferendis libero nihil molestias eos impedit animi.
                    </p>
                    <Link to="/">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        list.map((item)=>(
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Course;