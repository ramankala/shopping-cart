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
                    src = {item.imgUrl}
                    alt = {item.fruit}
                    />

                    <div>{item.price}</div>
                    <div>{item.fruit}</div>
                    


                </div>
                )
            })}
        </div>
    )
}

export default ShopUI;