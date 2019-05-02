import React,{Component} from 'react';

class Nosotros extends Component{
    render(){
        return(<div className="container">
            <div className="row ">
                <div className="col text-center ">
                    <h2 className="text-warning">Sobre Nosotros</h2>
                    <img className="p-3" src='/img/hero.jpg' alt='Sobre Nosotros'/>
                    <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante arcu, suscipit eget orci et, eleifend rutrum mauris. Donec vitae diam nec tortor dictum tempus. Suspendisse ac felis in velit lacinia tincidunt sit amet a lacus. Morbi justo justo, feugiat auctor ex egestas, aliquam iaculis nibh. Phasellus ut hendrerit est. Phasellus vehicula ipsum quis fringilla laoreet. Vivamus maximus ullamcorper sapien ac viverra. Fusce tempor commodo velit non scelerisque. In a tincidunt ligula. Fusce quis imperdiet magna, non cursus arcu. Integer interdum dolor nec massa pulvinar aliquam.
                    </p>
                </div>
            </div>
        </div>);
    }
}

export default Nosotros;