const SignUp=()=>{
    return(
        <>
            <div class="bg-secondary d-flex justify-content-center align-items-center vh-100">
            <div class="bg-dark py-3 px-5 rounded">
            <div class="">
                <h1 class="text-center text-white text-xl mb-4 font-weight-bold">Login</h1>
            </div>
            <div>
                <input type="text"
                name="fname"
                class="form-control mb-4 px-5 py-2 rounded"
                placeholder="First Name"
                />
            </div>
            <div>
                <input type="text"
                name="lname"
                class="form-control mb-4 px-5 py-2 rounded"
                placeholder="Last Name"
                />
            </div>
            <div>
                <input type="email"
                name="email"
                class="form-control mb-4 px-5 py-2 rounded"
                placeholder="Email"
                />
            </div>
            <div>
                <input
                type="password"
                name="password"
                class="form-control mb-4 px-5 py-2 rounded"
                placeholder="Password"
                />
            </div>
            <div>
                <input
                type="password"
                name="cpassword"
                class="form-control mb-4 px-5 py-2 rounded"
                placeholder="Confirm Password"
                />
            </div>
            <div class="d-flex justify-content-center mb-3">
                <button
                class=" text-white btn bg-danger text-black font-weight-bold px-5 py-2 rounded w-100">
                Login
                </button>
            </div>
            <div>
                <h6 class="text-white">Don't have an account <a class="text-warning font-weight-bold" href="/Login">Login</a></h6>
            </div>
            </div>
        </div>

        </>
    )
}

export default SignUp