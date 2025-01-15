function Display (props){
    return <div className="border-2 border-black w-[310px] p-2 sm:ml-80 ml-10 my-10">
        <img className="w-80 h-80" src={props.img} alt="" />
        <h1 className="text-3xl font-semibold">{props.title}</h1>

    </div>
}
export default Display