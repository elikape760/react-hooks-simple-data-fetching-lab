import { useEffect, useState } from 'react'

function App() {
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => {
                setImage(data.message)
            })
    }, [])

    if (!image) {
        return <p>Loading Image</p>
    }
    

    return (
        <>
            
            <img src={image} alt="A Random Dog" />
        </>
    )
}
export default App;

//how to check if there is something in the image or not 
// if image empty show <p> if not show image