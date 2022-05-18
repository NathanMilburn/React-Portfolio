import './index.scss';
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
    <div className="App">
        <Navbar />
        <div className='page'>
            {/* Acts as header element for each page */}
            <br />
            <span className='tags top-tags'>&lt;head&gt; <br />&lt;body&gt;</span>

            <Outlet />

            <span className='tags bottom-tags'>
            &lt;body&gt;
            <br />
            {/* Acts as footer element for each page */}
            <span className='bottom-tag-html'>&lt;footer&gt; <br/> &lt;/html&gt;</span>
            </span>
        </div>
    </div>
    )
}

export default Layout;