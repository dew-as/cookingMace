import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const checkAuth = (Component) => {
    function Wrapper(props) {
        var user = localStorage.getItem('user');
        var navigate = useNavigate();
        useEffect(() => {
            if (!user) {
                navigate('/');
            }
        }, [user]);
        return <Component {...props} />;
    }
    return Wrapper;
}