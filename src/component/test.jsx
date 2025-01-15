import { useState } from "react"

function Teste() {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    return <>
        <div className="bg-blue-600 flex justify-between text-white sm:px-20 px-5 py-3">
            <h1 className="text-3xl font-semibold pt-2">Small Social</h1>

          
           

        </div>

        

        
    </>

}

export default Teste