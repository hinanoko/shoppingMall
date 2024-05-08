import imageSrc from '../images/confirm.jpg';
import { useNavigate } from 'react-router-dom';
import '../style/confirm.css'; // 导入样式文件

const Confirm = function () {
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 5000);

    return (
        <div className="confirm-container">
            <p>
                this is the confirm
            </p>
            <img src={imageSrc} alt="confirmation image" className="center-image" />
        </div>
    )
}

export default Confirm;
