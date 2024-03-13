import './Box.css';
export default function Counter(player){
    // const [num, setNum] = useState(1);
    // const handleAdd = () => {
    //     const newNum = num+1;
    //     setNum(newNum);
    // }
    const {name} = player.player;
    return(
        <>
            <h3 className='box'>Player Name: {name}</h3>
            
        </>
    )
}