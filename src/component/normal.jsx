import { useRef, useState } from "react"
import Display from "./Display"


const Normal = ()=>{

    const [isOut ,setOut] = useState()

    // input

    const [title, setTitle]= useState("")
    const [image, setImage]= useState(null)

    const imageRef = useRef()

    const [post, setPost] = useState([])

    const handlePost =(e) =>{
        e.preventDefault()
        const NewPost = {title, image}

        if(title != " " && image != " "){
            setPost([...post, NewPost])
            alert("created new post")
            setTitle(" ")
              handeOut()
            imageRef.current.value = null
          
            



        }
    }

    const handeIn = ()=>{
        document.body.style.backgroundColor = "gray"
        setOut(true)
    }

    const handeOut = ()=>{
        document.body.style.backgroundColor = "white"
        setOut(false)
    }
    return <>
   
    <body >
        <div >
        <div style={{display: isOut===true ? "block": ""}} className="bg-blue-500 w-96 h-56 p-10 rounded-lg sm:ml-96 ml-6 sm:mt-40 mt-10 hidden">
        <i onClick={handeOut} className="fa-solid fa-x text-white text-3xl rounded-full w-12 h-10 text-center bg- absolute sm:left-[710px] left-80 sm:top-[250px] top-32   "></i>
            <form >
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-lg w-60 outline-none" type="text" placeholder=" Text hre" /><br />
            {/* <button className="bg-teal-600 text-white mt-6 px-5 py-2 font-bold rounded-lg">choose file</button><br /> */}
            <input onChange={(event) => setImage(event.target.files[0])} className="file:bg-yellow-300 file:h-10 file:border-none file:text-white file:rounded-xl text-white mt-4 w-44 py-2 font-bold rounded-lg" type="file" /><br />
            <button onClick={handlePost} className="bg-white mt-3 px-6 py-2 rounded-lg">Post</button>

            </form>
            
        </div>

        {
            post.map((item) =>{
                return isOut === true ? " " : <Display img={URL.createObjectURL(item.image)} title={item.title} />
            })
        }
        </div>
    </body>

    <i style={{display: isOut===true ? "" : ""}} onClick={handeIn} className="fa-solid fa-plus text-white text-2xl rounded-full w-12 h-10 text-center bg-blue-600 fixed bottom-0  right-2 " ></i>   </>
}

export default Normal