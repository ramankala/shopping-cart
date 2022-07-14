import '../styles/Header.css';

const Header = () => {

    return (
        <div className = 'header-ui'>
            <div>
                General Store
            </div>
            <div className = 'header-links'>
                <ul>
                    <li>
                        Home
                    </li>

                    <li>
                        Shop
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