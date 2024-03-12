import React from 'react';

const Material = [
	{
		"category":"Matériel pour le son",
		"list": [
            "2 enceintes amplifiées sur pied BoomToneDJ PRO15-DSP de 1000W max et 500W RMS chacun",
            "1 ampli Kool Sound XA-600 de 2 x 450W RMS",
            "2 enceintes passives Kool Sound de 450W RMS",
            "1 contrôleur DJ DENON DJ MC7000 avec logiciel SERATO D",
            "2 micros HF BoomTone distance 100m"
        ]
	},
	{
		"category":"Du côté de l’éclairage",
		"list": [
            "1 portique de 4m de large sur pieds télescopiques",
            "1 contrôleur DMX BoomToneDJ DMX 192 mk2",
            "4 projecteurs Mac Mah FlatPAR 12X12w 6-en-1 RGBWA-UV",
            "1 Modulateur chenillard Starway CHEYEN 2",
            "4 projecteurs AmericanDJ PAR56 300W + gélatine de couleur au choix",
            "1 dispatching 10 pour lumières",
            "1 Derby EXPELEC 2 x 300W (jeu de lumières à effets)",
            "1 Mirabilis double-Flower Kool Light (jeu de lumières à effets)",
            "1 laser Laserworld EL-400RGB",
            "1 boule à facettes 25 cm + projecteur RGB",
            "1 Strobo 1500W DMX"
        ]
	},
	{
		"category":"Le petit plus",
		"list": [
            "1 stand mobile DJ VONYX DB5 PRO (habillage blanc ou noir)",
            "1 vidéoprojecteur EPSON + grand écran de 2m44 de large"
        ]
	}
]

const Modal = ({ isOpen, onClose, modalType }) => {
    if (!isOpen) return null;

    let modalContent;

    switch (modalType) {
        case 'case1':
            modalContent = (
                <>
                    {Material.map(item => (
                        <div key={item.category}>
                            <h3>{item.category}</h3>
                            <ul>
                                {item.list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            );
            break;
        case 'case2':
            modalContent = <div>Contenu pour les prestataires</div>;
            break;
        case 'case3':
            modalContent = 
                <>
                <p>e-mail : chefenski@orange.fr</p>
                <p>Tél : 06 06 06 06 06</p>
                </>;
            break;
        default:
            modalContent = <div>Contenu par défaut</div>;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close-btn" onClick={onClose}>X</button>
                {modalContent}
            </div>
        </div>
    );
};

export default Modal;
