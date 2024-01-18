import Platinum from '../assets/icons/PlatinumMine.png';
import Gold from '../assets/icons/GoldMine.png';
import Silver from '../assets/icons/SilverMine.png';
import Bronze from '../assets/icons/BronzeMine.png';

function getMembershipInfo(id) {
    switch (parseInt(id)) {
        case 76:
            return (
                <>
                    <img src={Platinum} alt=""/>
                    <h3>Platinum</h3>
                </>
            );
        case 77:
            return (
                <>
                    <img src={Gold} alt=""/>
                    <h3>Gold</h3>
                </>
            );
        case 79:
            return (
                <>
                    <img src={Silver} alt=""/>
                    <h3>Silver</h3>
                </>
            );
        case 80:
            return (
                <>
                    <img src={Bronze} alt=""/>
                    <h3>Bronze</h3>
                </>
            );
        default:
            return 1
    }
}

export default getMembershipInfo;
