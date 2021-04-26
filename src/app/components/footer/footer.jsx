import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span style={{fontSize:'calc(2px + 2vmin)'}}>Copyright &copy; Retymee School 2021</span>
                    </div>
                </div>
        </footer>
    )
}
export default Footer;