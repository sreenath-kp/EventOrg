import "../assets/css/sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;