import '../styles/ShopUI.css';

const ShopUI = (props) => {
    const { items } = props;
    return (
        <div className='shopContainer'>
            {items.map((item, index) => {
                return (
                <div
                 className = 'foodCard'
                 key = {index}
                > 

                    <img 
                    src = {item.image}
                    alt = {item.name}
                    />

                    <div>200 rupees</div>
                    <div>{item.name}</div>
                    


                </div>
                )
            })}
        </div>
    )
}

export default ShopUI;