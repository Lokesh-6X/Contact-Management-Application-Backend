function LoginCard(){
    return(
        <>
            <div className="loginCard">
                <h1>Login</h1>
                {/* <input />
                <br />
                <input />
                <br /> */}
                <form action="">
                    <label htmlFor="">Enter email</label>
                    <input type="text" />
                    <br/>
                    <label htmlFor="">Enter password</label>
                    <input type="text" />
                </form>
                <button>Login</button>
            </div>
        </>
    )
}

export default LoginCard;