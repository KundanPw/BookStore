import React from "react";
function Contact() {
    return(
        <>
            <h1 className="mt-28 flex justify-center">Contact Us</h1> <br/>
            <div className=" flex justify-center ">
                <form className="">
                    <label className="input input-bordered flex items-center mt-2 gap-4">
                        Name
                        <input type="text" className="grow" placeholder="Enter your name" />
                    </label>
                    <label className="input input-bordered flex items-center mt-2 gap-4">
                        Email
                        <input type="text" className="grow" placeholder="Enter your email" />
                    </label> <br/>
                    <label>
                        Message me
                        <textarea placeholder="Type your message" 
                        className="textarea textarea-bordered textarea-xs p-10 w-full max-w-xs mt-2 text-center" >        
                        </textarea>
                    </label> <br/>
                    <button className="btn btn-primary h-2 w-18 ">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;