import '../styles/ShopUI.css';

const ShopUI = (props) => {
    const { items } = props;

    return (
        <div className='shopContainer'>
            {items.map((item, index) => {
                return (
                    <div
                        className = 'weaponCard'
                        key = {index}
                    > 
    
                        <img 
                        src = {item.image}
                        alt = {item.name}
                        />
    
                        <h4>{item.id} Rupees</h4>
                        <h1>{item.name}</h1>
                        
                    </div>
                    )
            })}
        </div>
    )
}

export default ShopUI;