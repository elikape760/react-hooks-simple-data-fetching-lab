import { useEffect, useState } from 'react'

function App() {
    const [image, setImage] = useState(true)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(resp => resp.json())
            .then(data => {
                setImage(data)
            })
    }, [])

    return (
        <>
            <p>Loading Image</p>
            <img src="" alt="A Random Dog" />
        </>
    )
}
export default App;

