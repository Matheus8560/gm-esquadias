import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import ImageGallery from 'react-image-gallery';

import Loader from '../../../components/Loader';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { ImagesManual } from '../../../components/Galeries';

import {
	ContainerCardPorta_1,
	ContainerCardPorta_2,
	ContentCardPorta,
	CardPortaTitulo,
	CardPortaDescricao,
	CardPortaImg,
	CardPortaMultiImg,
	ImgPrincipal,
	ImgsSecundarias,
	SubImgs,
	PaginaTitulo,
} from '../Automatica/styles';


import manual_vasada from '../../../assets/images/manual_vasada.png';


export default function Servicos(){
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000);
	}, []);

	if(loading){
		return <Loader />;
	}
	return (
		<>
			<Header activeKey="porta-manual" />

			<div className='parallaxPortasManuais'>
				<h2 style={PaginaTitulo}>PORTAS MANUAIS</h2>
			</div>

			<div style={ContainerCardPorta_2}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Porta manual fechada</div>
						<p style={CardPortaDescricao}>
							A porta manual, entretanto, consiste em um modelo mais simples,
							que é fechado manualmente pelo proprietário ou
							pessoas autorizadas.
						</p>
						<p style={CardPortaDescricao}>
							Então, a manutenção é ainda menos periódica, realizada apenas
							para certificar o bom funcionamento dos mecanismos e renovação
							estética, quando necessário.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<ImageGallery items={ImagesManual} showFullscreenButton={false} showPlayButton={false} />
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_1}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Porta manual vasada</div>
						<p style={CardPortaDescricao}>
							Quando o assunto é visibilidade e ventilação, essas portas são as
							mais indicadas para acomodar produtos que necessitam dessas
							qualidades.
						</p>
					</div>
					<div style={CardPortaImg}>
						<img src={manual_vasada} style={{width: '100%', maxWidth: '420px'}}/>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
