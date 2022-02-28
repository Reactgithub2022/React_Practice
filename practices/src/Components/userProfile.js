
const userProfile = props =>{

    const {userDetails, deleteUser} = props
    const {id,name,role} = userDetails
    const onDelete =()=>{
        deleteUser(id)
    }

return (
    <li>
        <div>
            <h1>{name}</h1>
            <p>{role}</p>
        </div>
        <button onClick={onDelete}></button>
    </li>
)

}

export default userProfile

