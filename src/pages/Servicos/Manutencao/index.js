import React, { useEffect, useState } from 'react';
import { Button, Grid, Row, Col, FlexboxGrid  } from 'rsuite';
import ImageGallery from 'react-image-gallery';

import Loader from '../../../components/Loader';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import {
	ContainerCardPorta_2,
	ContentCardPorta,
	CardPortaTitulo,
	CardPortaDescricao,
	CardPortaMultiImg,
	ImgPrincipal,
	ImgsSecundarias,
	SubImgs,
	PaginaTitulo,
	ContainerCardPorta_1,
	ContentCardContato,
	CardContatoTitulo,
	CardContatoBtns,
	CardContatoDescricao,
	BtnOrcamento,
	BtnWp
} from '../Automatica/styles';

import manutencao from '../../../assets/images/manutencao.png';
import manutencao1 from '../../../assets/images/manutencao1.png';
import manutencao2 from '../../../assets/images/manutencao2.png';
import manutencao3 from '../../../assets/images/manutencao3.png';

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
			<Header activeKey="portas" />

			<div className='parallaxPortasManutencao'>
				<h2 style={PaginaTitulo}>MANUTENÇÃO</h2>
			</div>

			<div style={ContainerCardPorta_2}>
				<div style={ContentCardPorta}>
					<div style={{width: '50%'}}>
						<div style={CardPortaTitulo}>Manutenção</div>
						<p style={CardPortaDescricao}>
							Dependendo do caso, a manutenção porta de enrolar pode ser
							simples e realizada na mesma hora.
						</p>
						<p style={CardPortaDescricao}>
							Se a sua porta estiver com muito ruído, laminas amassadas,
							movimentação lenta ou outros sinais preocupantes.
							Nossa equipe técnica vai até o local para avaliação geral da porta.
							Dependendo do problema, a manutenção porta de enrolar pode
							ser executada na mesma hora.
						</p>
						<p style={CardPortaDescricao}>
							Fique atento, caso sua porta exiba algum tipo de ação diferente do
							comum ou uma deformidade física, agende um serviço de manutenção
							porta de enrolar para um melhor funcionamento da sua porta.
						</p>
					</div>
					<div style={CardPortaMultiImg}>
						<img src={manutencao} style={ImgPrincipal}/>
						<div style={SubImgs}>
							<img src={manutencao1} style={ImgsSecundarias}/>
							<img src={manutencao2} style={ImgsSecundarias}/>
							<img src={manutencao3} style={ImgsSecundarias}/>
						</div>
					</div>
				</div>
			</div>

			<div style={ContainerCardPorta_1}>
				<div style={ContentCardContato}>
					<div style={CardContatoTitulo}>Se interessou?</div>
					<p style={CardContatoDescricao}>Aproveita e faça seu orçamento! Entre em contato.</p>

					<div style={CardContatoBtns}>
						<Button size="lg" style={BtnOrcamento}>
							Orçamento
						</Button>
						<Button size="lg" style={BtnWp}>
							Whatsapp
						</Button>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
