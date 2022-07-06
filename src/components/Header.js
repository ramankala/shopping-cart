import '../styles/Header.css';

const Header = () => {

    return (
        <div className = 'header-ui'>
            <div>
                <h1>ThorEats</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <h4>Home</h4>
                    </li>

                    <li>
                        <h4>Shop</h4>
                    </li>

                    <li>
                        <img src = 'https://cdn2.iconfinder.com/data/icons/shopping-139/100/shopping_bag-512.png' /> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;