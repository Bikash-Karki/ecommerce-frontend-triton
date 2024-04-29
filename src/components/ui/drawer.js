const Drawer = () =>{
    return(
        <div style={{
            position:'relative',
            zIndex:'10'
        }}> 
        <div style={{
            position:'absolute',
            height:"100vh",
            width:"100px",
            backgroundColor:'green'
        }}>
        </div>
            <button style={{position:'relative', float:"right"}}>Open</button>
        </div>
    )
}
export default Drawer